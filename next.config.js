const path = require('path');
const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

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
