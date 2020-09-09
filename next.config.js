const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const nextConfig = {
    // Target must be serverless
    target: 'serverless'
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
