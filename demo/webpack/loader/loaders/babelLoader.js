const { getOptions } = require('loader-utils')
const { validate } = require('schema-utils')
const babel = require('@babel/core')
const util = require('util')

const babelSchema = require('./babelSchema.json')
const transform = util.promisify(babel.transform);

module.exports = function(content, map, meta) {

  let options = getOptions(this);

  validate(babelSchema, options, {
    name: 'babel Loader'
  })

  const callback = this.async()

  transform(content, options)
    .then(({code, map}) => {
      callback(null, code, map)
    })
    .catch((e) => {
      callback(e)
    })

}