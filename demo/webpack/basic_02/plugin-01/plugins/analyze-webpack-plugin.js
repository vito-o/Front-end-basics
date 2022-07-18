class AnalyzeWebpackPlugin {
    apply(compiler) {
        compiler.hooks.emit.tap('AnalyzeWebpackPlugin', compilation => {
            const assets = Object.entries(compilation.assets)

            /**
             * md表格语法
             * | 资源名称 | 资源大小 |
             * | --- | --- |
             * | xxx.js | 10kb |
             */

            let content = `| 资源名称 | 资源大小 |
| --- | --- |`;
            assets.forEach(([filename, file]) => {
                content += `\n| ${filename} | ${file.size()} |`
            })

            compilation.assets['analyze.md'] = {
                source() {
                    return content;
                },
                size() {
                    return content.length;
                }
            }
        })
    }
}

module.exports = AnalyzeWebpackPlugin;