import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { add, sub } from 'import-npm'
console.log(add, 'aaa')
console.log(sub, 'aaa')

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
