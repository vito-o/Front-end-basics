
const path = require('path')
const resolve = p => path.resolve(__dirname, p);

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js'
  },
  cache: {
    type: 'memory'
  },
  resolve: {
    extensions: ['.vue', '.js', 'json'],
  },
  /* output: {
    path: resolve('./dist'),
    filename: "[name].js",
    chunkFilename: "[name].js"
  }, */
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 8006,
    //配置允许跨域
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Method": "GET,POST,PUT,OPTIONS"
    }
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new VueLoaderPlugin(),
    // 模块联邦
    new ModuleFederationPlugin({
      //提供为其他服务加载的文件
      // filename: 'remoteEntry.js',
      //唯一ID，用于标记当前服务
      name: 'main',
      //需要依赖的远程模块，用于引入外部其他模块
      remotes: {
        comm: "comm@http://localhost:8005/remoteEntry.js"
      }
      // shared: ['vue']
    })
  ]
}