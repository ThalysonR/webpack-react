const merge = require('webpack-merge');
const DashboardPlugin = require('webpack-dashboard/plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: '/',
  },
  devServer: {
    port: 8080,
    host: '127.0.0.1',
    contentBase: './public',
    historyApiFallback: true,
    overlay: true,
  },
  plugins: [
    new DashboardPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
});
