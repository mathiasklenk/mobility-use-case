const webpack = require('webpack')
const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const path = require('path');

const nextConfig = {
    webpack: (config, { dev }) => {
        
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['static'] = path.join(__dirname, 'static')

        return config;
    },
};

module.exports = withPlugins([
    [optimizedImages, {
        handleImages: ['jpeg', 'png', 'svg'],
    }],
    withCSS
    ],
    nextConfig
);