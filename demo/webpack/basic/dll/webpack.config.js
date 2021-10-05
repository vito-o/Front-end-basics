const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')


module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    //告诉webpack哪些库不参与打包，同时使用时的名称也要变
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname, 'dll/manifest.json'),
    }),
    new AddAssetHtmlWebpackPlugin({
      outputPath: 'auto',
      filepath: resolve(__dirname, 'dll/jquery.js')
    })
  ],
  mode: 'production',
}