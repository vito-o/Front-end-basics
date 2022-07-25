export default {
    install: (app, options) => {
        // console.log(app, options)
        app.config.globalProperties.$translate = key => {
            return key.split('.').reduce((o, i) => {
                if(o) return o[i]
            }, options)
        }

        app.provide('i18n', options)

        app.directive('my-directive', {
            mounted(el, binding, vnode, oldVnode) {
                // console.log('my-directive')
            },
        })

        app.mixin({
            created() {
                // console.log('I am a mixin created')
            }
        })
    }
}