
module.exports = function(content) {
    /* const script = `
    let el = document.createElement('style')
    el.innerHTML = ${JSON.stringify(content)}
    document.head.appendChild(el)
    `
    
    return script; */
}

module.exports.pitch = function(remainingRequest) {
    //1. 将remainingRequest中的绝对路径改成相对路径（后面只能用相对路径操作）
    const relativePath = remainingRequest
        .split('|')
        .map(absolutePath => {
            return this.utils.contextify(this.context, absolutePath)
        })
        .join('|');
    //../../../node_modules/css-loader/dist/cjs.js!./index.css

    //2.引入css-loader处理后的资源
    //3.创建style，将内容插入页面中生效
    const script = `
        import style from "!!${relativePath}"
        let el = document.createElement('style');
        el.innerHTML = style;
        document.head.appendChild(el);
    `;
    //中止后面的loader执行
    return script;
}