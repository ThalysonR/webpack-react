const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        port: 8080,
        contentBase: './public',
        hot: true
    },
});