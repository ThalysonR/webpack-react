const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'prod';

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
        hot: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.css'
        }),
    ],
    module: {
        rules: [
            {
                test: /.js?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [['react-css-modules', {
                                "filetypes": {
                                    ".scss": {
                                        "syntax": "postcss-scss"
                                    }
                                }
                            }]],
                            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow']
                        },
                    }
                ]
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
            }
        ]
    }
};