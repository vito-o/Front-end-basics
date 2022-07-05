const { validate } = require('schema-utils') 

const schema = {
  type: 'object',
  properties: {
    test: {
      type: 'string'
    }
  }
}

class HelloWorldPlugin {

  constructor(options = {}) {
    validate(schema, options, {
      name: 'Hello World Plugin',
      baseDataPath: 'options',
    })
  }

  apply(compiler) {
    compiler.hooks.done.tap(
      "hello world plugin",
      stats => {
        console.log('Hello world!')
      }
    )
  }
}

module.exports = HelloWorldPlugin;