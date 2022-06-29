const { urlToRequest } = require('loader-utils')
const { validate } = require('schema-utils')

const schema = {
  type: 'object',
  properties: {
    test: {
      type: 'string'
    }
  }
}


module.exports = function(source) {

  const options = this.getOptions();

  console.log(options)

  validate(schema, options, {
    name: 'Example Loader',
    baseDataPath: 'options',
  })

  console.log('The request path', urlToRequest(this.resourcePath));
  console.log(JSON.stringify(source),'JSON.stringify(source)')
  return source;
}

module.exports.pitch = function() {
  console.log('pitch 111')
}