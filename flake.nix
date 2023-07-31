{
  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  inputs.nix-npm-buildpackage.url = "github:serokell/nix-npm-buildpackage";
  outputs = { self, nixpkgs, nix-npm-buildpackage }:
    let pkgs = nixpkgs.legacyPackages.x86_64-linux;
    in {
      packages.x86_64-linux = let

        pnpmDepsFor = name: src: lockHash: hash:
          let
            deps = pkgs.stdenv.mkDerivation {
              name = "${name}-pnpm-deps";
              inherit src;
              buildInputs = [ pkgs.nodePackages.pnpm ];
              nativeBuildInputs = with pkgs; [ jq moreutils ];
              outputHashAlgo = "sha256";
              outputHashMode = "recursive";
              outputHash =
                "sha256-IqG0eRtOmTd+PD/gumvLK1KGFkPS3vjhU2XZs9H1VrU=";
              buildCommand = ''
                cp -R --no-preserve=mode,owner $src ./${name}
                cd ${name}
                export HOME=$(mktemp -d)
                pnpm config set store-dir $out
                # use --ignore-script and --no-optional to avoid downloading binaries
                # use --frozen-lockfile to avoid checking git deps
                pnpm install --frozen-lockfile --ignore-script

                # Remove timestamp and sort the json files
                rm -rf $out/v3/tmp
                for f in $(find $out -name "*.json"); do
                  sed -i -E -e 's/"checkedAt":[0-9]+,//g' $f
                  jq --sort-keys . $f | sponge $f
                done
              '';
            };
            expectedLockHash =
              builtins.hashFile "sha256" ./server/pnpm-lock.yaml;
          in if expectedLockHash == lockHash then
            deps
          else
            throw
            "You've updated pnpm-lock.yaml; update flake.nix too (hash: ${expectedLockHash})!";
      in {
        server = let
          src = ./server;
          pnpm-deps = pnpmDepsFor "server" src
            "41971baebb2167ee14b532704cebb9f6e04d793a683225b7a4fed540863bc62e"
            "sha256-U0kq2O5q47O1kWwuY9vOX72h4gU8MCHGKfoEeEnRoZA=";
          package = pkgs.stdenv.mkDerivation {
            pname = "nogarbage-server";
            version = "dev";
            inherit src;
            nativeBuildInputs = with pkgs; [
              nodePackages.pnpm

              pkgconfig

              nodePackages.node-gyp
              python3
              binutils
              makeWrapper
            ];
            buildInputs = [ pkgs.vips ];
            buildPhase = with pkgs.nodePackages; ''
              export HOME=$(mktemp -d)
              # Get pnpm-deps from FOD
              pnpm config set store-dir ${pnpm-deps}

              # set nodedir to prevent node-gyp from downloading headers
              # taken from https://nixos.org/manual/nixpkgs/stable/#javascript-tool-specific
              mkdir -p $HOME/.node-gyp/${nodejs.version}
              echo 9 > $HOME/.node-gyp/${nodejs.version}/installVersion
              ln -sfv ${nodejs}/include $HOME/.node-gyp/${nodejs.version}
              export NODE_VER="v${nodejs.version}"
              pnpm config set nodedir ${nodejs}

              pnpm install --offline --frozen-lockfile --no-color --reporter append-only
              chmod -R +w node_modules
              pnpm rebuild
            '';
            installPhase = ''
              cp -r . $out
              mkdir -p $out/bin
              makeWrapper ${pkgs.nodePackages.pnpm}/bin/pnpm "$out/bin/$pname" \
                --add-flags "-C $out run server:prod" \
                --prefix PATH "${pkgs.lib.makeBinPath [ pkgs.nodejs ]}"
            '';
          };
        in package // { inherit pnpm-deps; };
        client = let

          src = ./client;
          pkgs' = pkgs.extend nix-npm-buildpackage.overlays.default;
          package = pkgs'.buildNpmPackage {
            pname = "nogarbage-client";
            version = "dev";
            inherit src;
            extraNodeModulesArgs = {
              buildInputs = [ pkgs.vips ];
              extraEnvVars = {
                nativeBuildInputs = with pkgs; [
                  pkgconfig
                  nodePackages.node-gyp
                  python3
                  binutils
                ];
              };
            };
            npmBuild = ''
              npm exec -- next build --build-mode=experimental-compile
            '';
            installPhase = ''
              cp -r . $out
              mkdir -p $out/bin
              makeWrapper ${pkgs.nodePackages.npm}/bin/npm "$out/bin/$pname" \
                --add-flags "exec -- next start" \
                --chdir "$out" \
                --prefix PATH "${pkgs.lib.makeBinPath [ pkgs.nodejs ]}"
            '';
            NEXT_BUILD_ID = builtins.hashString "sha256" "${src}";
            NEXT_TELEMETRY_DISABLED = "1";
          };
        in package;
      };
    };
}
