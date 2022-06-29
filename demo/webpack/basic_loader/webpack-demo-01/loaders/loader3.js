const runtime = require('../src/loader-runtime.js')

module.exports = function(source) {
  return `${runtime({
    source,
    y: Math.random()
  })}`
}