const loaderUtils = require('loader-utils')

module.exports = function(content) {
    //根据文件内容生成带hash的文件名
    const interpolatedName = loaderUtils.interpolateName(this, "[hash].[ext][query]", {
        content
    })

    //将文件输出出去
    this.emitFile(interpolatedName, content)

    //返回：module.exports = '文件路径（文件名）'
    return `module.exports = "${interpolatedName}"`
}

module.exports.raw = true;