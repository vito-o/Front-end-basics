const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');
module.exports = {
    entry: {
        app: path.resolve(__dirname, './src/app.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash:10].js',
        chunkFilename: '[name].[contenthash:10].js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        }),
        new PreloadWebpackPlugin({
            rel: 'preload',
            as: 'script'
        })
    ],
    // mode: 'development',
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: {
            name: entrypoint => `runtime-${entrypoint.name}.js`
        }
    }
}