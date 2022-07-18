class CleanWebpackPlugin {
    apply(compiler) {
        //获取打包输出目录
        const outputPath = compiler.options.output.path;
        const fs = compiler.outputFileSystem;

        compiler.hooks.emit.tap('CleanWebpackPlugin', compilation => {
            this.removeFiles(fs, outputPath)
        })
    }

    removeFiles(fs, filePath) {
        //读取当前目录下的所有资源
        const files = fs.readdirSync(filePath)
        //console.log(files)  ['images', 'index.html', 'js']
        //遍历删除
        files.forEach(file => {
            //遍历是文件还是文件夹
            const path = `${filePath}/${file}`
            const fileStat = fs.statSync(path);
            if(fileStat.isDirectory()) {
                this.removeFiles(fs, path)
            } else {
                //删除
                fs.unlinkSync(path)
            }
        })
    }
}

module.exports = CleanWebpackPlugin;