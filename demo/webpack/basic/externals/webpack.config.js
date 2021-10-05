const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: {
    main: './src/index.js',
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
    })
  ],
  externals: {
    //拒绝jquery被打包进来
    jquery: 'jQuery'   //值为npm 包名
  },
  mode: 'production',
}