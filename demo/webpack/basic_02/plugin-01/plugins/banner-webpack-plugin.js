class BannerWebpackPlugin {

    apply(compiler) {
        compiler.hooks.emit.tap('BannerWebpackPlugin', (compilation) => {
            const extensions = ['css', 'js']

            const assets = Object.keys(compilation.assets).filter(assetPath => {
                const splited = assetPath.split('.')
                const extension = splited[splited.length - 1]
                return extensions.includes(extension)
            })

            const profix = `/*
* author: zhangsan
*/
            `;

            assets.forEach(asset => {
                const source = compilation.assets[asset].source();

                const content = profix + source;

                compilation.assets[asset] = {
                    source() {
                        return content;
                    },
                    size() {
                        return content.length;
                    }
                }
            })
        })
    }
}

module.exports = BannerWebpackPlugin;