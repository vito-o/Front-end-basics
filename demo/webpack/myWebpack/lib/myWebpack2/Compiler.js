const { getAst, getDeps, getCode } = require('./parser')

class Compiler {
  constructor(options = {}) {
    this.options = options;
  }

  run() {
    //读取入口文件内容
    const filePath = this.options.entry;
    //将文件解析成ast
    const ast = getAst(filePath);
    //获取ast中所有的依赖
    const deps = getDeps(filePath, ast);
    //将ast解析成code
    const code = getCode(ast);
  }
}


module.exports = Compiler;