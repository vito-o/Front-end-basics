module.exports = function(content, map, meta) {
    const callback = this.async();


    setTimeout(() => {
        console.log('hhh')
        callback(null, content, map, meta)
    }, 1000)
}