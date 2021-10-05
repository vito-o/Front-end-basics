const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


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
    })
  ],
  /**
   * 可以将node_modules中代码单独打包成一个chunk最终输出
   * 自动分析多入口chunk中，有没有公共文件，如果有会打包成单独一个chunk文件
   */
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  mode: 'production',
}