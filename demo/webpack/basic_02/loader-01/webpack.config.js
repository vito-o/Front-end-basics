const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // loader: './loaders/demo/test-3.js'
                /* use:  [
                    './loaders/demo/test-4',
                    './loaders/demo/test-5',
                    './loaders/demo/test-6',
                ] */
                // loader: './loaders/clean-log-loader.js',
                /* loader: './loaders/banner-loader',
                options: {
                    author: 'zhansan'
                } */
                loader: './loaders/babel-loader',
                options: {
                    presets: ["@babel/preset-env"]
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: './loaders/file-loader',
                type: 'javascript/auto'
            },
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader']
                use: ['./loaders/style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html')
        })
    ],
    mode: 'development',

}