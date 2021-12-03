import parseTemplateToTokens from './parseTemplateToTokens'
import renderTemplate from './renderTemplate'


window.SSG_TemplateEngine = {
    render(templateStr, data) {
        let tokens = parseTemplateToTokens(templateStr);
        
        let str = renderTemplate(tokens, data)
        console.log(str)
    }
}