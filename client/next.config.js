const { i18n, react } = require('./next-i18next.config')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
    webpack(config, { dev }) {
        if (dev) {
            const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
            config.plugins.push(new ForkTsCheckerWebpackPlugin());
        }
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    },
    env: {
        BASE_URL: process.env.BASE_URL,
    },
    i18n,
    compiler: {
        styledComponents: true
    },
    images: {
        domains: [
            "media.istockphoto.com",
            "img.freepik.com",
            "media.istockphoto.com",
            "images.unsplash.com",
            "s3.eu-west-2.amazonaws.com",
            "storage.yandexcloud.net"
        ],
    },
}

module.exports = withBundleAnalyzer(nextConfig);
