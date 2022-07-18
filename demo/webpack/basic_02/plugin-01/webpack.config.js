const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const TestPlugin = require('./plugins/test-plugin')
const BannerWebpackPlugin = require('./plugins/banner-webpack-plugin')
const CleanWebpackPlugin = require('./plugins/clean-webpack-plugin')
const AnalyzeWebpackPlugin = require('./plugins/analyze-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js',
        // clean: true
    },
    module: {
        rules: [
           
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html')
        }),
        // new TestPlugin()
        new BannerWebpackPlugin(), 
        new CleanWebpackPlugin(),
        new AnalyzeWebpackPlugin()
    ],
    mode: 'production',

}