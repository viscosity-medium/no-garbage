const { i18n, react } = require('./next-i18next.config')

module.exports = {
    webpack(config, { dev }) {
        if (dev) {
            const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
            config.plugins.push(new ForkTsCheckerWebpackPlugin());
        }
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