const schema = require('./schema.json')

module.exports = function(content) {

    const options = this.getOptions(schema);
    // console.log(options)
    const prefix = `
    /*
     * Author: ${options.author}
     */
    `
    return prefix + content;
}


//additionalProperties   是否可以添加额外参数