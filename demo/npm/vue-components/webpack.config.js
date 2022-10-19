const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: 'vue-components.js',
    path: path.resolve(__dirname, 'dist'),
    library: "vue-components",
    libraryTarget: "umd",
    umdNamedDefine: true,
    clean: true,
  },
  mode: 'production',
  // mode: 'development',
  // devtool: 'eval-cheap-module-source-map',
  resolve: {
    extensions: [".vue", ".js", ".json"]
  },
  externals: {
    vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },

      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },

  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]

}