const path = require('path');
const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const CopyWebpackPlugin = require('copy-webpack-plugin');

const {
    WebpackBundleSizeAnalyzerPlugin,
} = require('webpack-bundle-size-analyzer')

const {ANALYZE} = process.env
const isProduction = process.env.NODE_ENV === 'production';

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

        if (isProduction) {
            config.plugins.push(
                new CopyWebpackPlugin(
                    {
                        patterns: [
                            {
                                from: path.join(__dirname, 'docs'),
                                to: path.join(__dirname, 'public/docs'),
                            },
                        ],
                    },
                ),
            );
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
