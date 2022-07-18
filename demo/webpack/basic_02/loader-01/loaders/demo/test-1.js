//同步loader

module.exports = function(content) {
    return content;
}

module.exports = function(content, map, meta) {
    /**
     * 第一参数：err表示是否有错误
     * 二参数：处理后的内容
     * 三参数：source-map继续传递source-map
     * 四参数：给下一个loader传递参数
     */
    this.callback(null, content, map, meta)
}