
/**
 * source 文件内容
 * map SourceMap
 * meta 别的loader传递的数据 
 *
 */
module.exports = function(source, map, meta) {
    console.log(source)
    return source;
}