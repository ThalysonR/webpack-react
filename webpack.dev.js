const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        publicPath: "/"
    },
    devServer: {
        port: 8080,
        contentBase: './public',
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules|api/,
                use: ['babel-loader', 'eslint-loader']
            },
        ]
    }
});