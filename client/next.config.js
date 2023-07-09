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
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        GOOGLE_APPLICATION_CREDENTIALS: process.env.GOOGLE_APPLICATION_CREDENTIALS
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