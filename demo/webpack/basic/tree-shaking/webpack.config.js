const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  'postcss-loader'
]

/**
 * 
 * tree shaking 树摇 取出无用的代码
 * 前提：1.必须使用es6模块化 2.开启production环境
 * 
 */

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: 'js/built.[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        //以下loader只会匹配一个
        //不能有两项配置处理同一个文件
        oneOf: [
          {
            test: /\.css$/,
            use: [...commonCssLoader]
          },
          {
            test: /\.less$/,
            use: [
              ...commonCssLoader,
              'less-loader',
            ]
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    "useBuiltIns": "usage",
                    corejs: { version: 3 },
                    targets: {
                      edge: "17",
                      firefox: "60",
                      chrome: "67",
                      safari: "11.1",
                    }
                  }
                ]
              ],
              //第二次构建时，会读取之前的缓存
              cacheDirectory: true
            }
          },
          {
            test: /\.(jpg|png|gif)$/,
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[hash:10].[ext]',
              outputPath: 'imgs',
              esModule:false
            },
            type: 'javascript/auto'
          },
          {
            test: /\.html$/,
            loader: 'html-loader'
          },
          {
            exclude: /\.(js|css|less|html|jpg|png|gif)$/,
            loader: 'file-loader',
            options: {
              outputPath: 'media'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/built.[contenthash:10].css'
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      }
    })
  ],
  mode: 'production',
}