
const { getOptions } = require('loader-utils')
const { validate } = require('schema-utils')

const schema = require('./schema.json')

module.exports = function(content, map, meta) {
  
  let options = getOptions(this);
  console.log(3333, options)

  validate(schema, options, {
    name: 'loader3'
  })

  return content;
}

module.exports.pitch = function() {
  console.log('pitch 333')
}