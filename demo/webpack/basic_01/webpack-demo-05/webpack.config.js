const path = require('path')

module.exports = {
  mode: 'development',
  devtool: false,
  /* 
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared'
    },
    another: {
      import: './src/another-module.js',
      dependOn: 'shared'
    },
    shared: 'lodash'
  },
  optimization: {
    runtimeChunk: 'single'
  }, */
  /* entry: {
    index: './src/index.js',
    another: './src/another-module.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }, */
  entry: {
    index: './src/dynamicIndex.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // clean: true
  },
}