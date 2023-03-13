exports.createHtmlPlugin = (ops = {}) => ({
  transformIndexHtml: {
    enforce: 'pre',
    transform(html){
      return html.replace(/hhh/, 'lalala');
    }
  }
})