const path = require('path')

module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
    library: {
      name: 'webpackNumbers',
      type: 'umd'
    }
  },
  /* externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  } */
  externals: [
    'lodash',
    'schema-utils/dist/util/hints',
    'schema-utils/dist/util/Range',
    /^schema-utils\/.+$/,
  ]
}