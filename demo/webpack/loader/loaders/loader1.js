//同步loader
/* module.exports = function(content, map, meta) {

  console.log(content)

  return content;
} */

module.exports = function(content, map, meta) {
  console.log(content)
  this.callback(null, content, map, meta)
}

module.exports.pitch = function() {
  console.log('pitch 111')
}