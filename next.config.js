const path = require('path');
const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const {
    WebpackBundleSizeAnalyzerPlugin,
} = require('webpack-bundle-size-analyzer')
const {ANALYZE} = process.env

const nextConfig = {
    // Target must be serverless
    target: 'serverless',
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
        // Note: we provide webpack above so you should not `require` it

        const aliases = config.resolve.alias || {};
        config.resolve.alias = {
            ...aliases,
            'private-next-pages': path.resolve(__dirname, 'src/pages'),
            '@': path.resolve(__dirname, 'src'),
        };

        if (isServer) {
            require('./scripts/generate-sitemap')
        }

        if (ANALYZE) {
            config.plugins.push(new WebpackBundleSizeAnalyzerPlugin('stats.txt'))
        }

        // Important: return the modified config
        return config;
    },
};

module.exports = withPlugins([
    // add plugins here..
    [
        withPWA,
        {
            pwa: {
                dest: 'public',
                runtimeCaching,
            },
        },
    ],
], nextConfig);
