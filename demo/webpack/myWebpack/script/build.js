const myWebpack = require('../lib/myWebpack')
const webpackConfig = require('../config/webpack.config.js')

const compiler = myWebpack(webpackConfig);

compiler.run();