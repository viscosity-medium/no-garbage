module.exports = {
    apps: [{
        name: "no-garbage",
        script: "node_modules/next/dist/bin/next",
        args: "start -p 4141",
        instances: 1,
        ignore_watch: ["node_modules"],
        watch: false
    }]
}