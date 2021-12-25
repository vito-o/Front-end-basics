const { name } = require('./package');
const path = require('path')

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';

    return config;
  },

  devServer: (_) => {
    const config = _;

    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.hot = false;
    //config.watchContentBase = false;
    //config.static.directory = path.join(__dirname, 'dist')
    config.liveReload = false;
    config.port = 8882

    return config;
  },
};