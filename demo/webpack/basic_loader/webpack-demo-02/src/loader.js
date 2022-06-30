module.exports = function loader(source) {

    const options = this.getOptions();
    
    source = source.replace(/\[name\]/g, options.name)

    return `module.exports = ${JSON.stringify(source)}`;
}