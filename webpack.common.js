const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const CleanWebpackPlugin =require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: ['@babel/polyfill', './app/index.jsx'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js',
        chunkFilename: "[name].bundle.js"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.css'
        }),
        new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
            title: 'Webpack',
            template: './template.html',
            name: "index.html"
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
                        }
                    },
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
                loader: 'file'
            }
        ]
    }
};