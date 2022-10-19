import { createApp } from 'vue'
import App from './App.vue'
import components from 'vue-components'
console.log(components)


const app = createApp(App)
app.use(components)
app.mount('#app')


