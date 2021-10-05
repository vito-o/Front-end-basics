
/* module.exports = function(content, map, meta) {

  console.log(2222)

  return content;
} */
//异步loader
module.exports = function(content, map, meta) {
  console.log(2222)
  const callback = this.async()

  setTimeout(() => {
    callback(null, content)
  }, 2000)
  

  return content;
}

module.exports.pitch = function() {
  console.log('pitch 222')
}