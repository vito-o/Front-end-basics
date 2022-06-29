const path = require('path')
const fs = require('fs')

module.exports = function(source) {
  let callback = this.async();
  let headerPath = path.resolve(__dirname, '../src/header.js')

  fs.readFile(headerPath, 'utf-8', function(err, header) {
    if(err) return callback(err);
    callback(null, header + '\n' + source);
  })
}