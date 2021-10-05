const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const workboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
    //comm: './src/comm.js'
  },
  output: {
    filename: 'js/[name].[hash:10].js',
    path: resolve(__dirname, 'build')
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      }
    }),
    new workboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ],


  mode: 'production',
}