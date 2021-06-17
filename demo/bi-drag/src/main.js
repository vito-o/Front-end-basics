import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import '@/assets/index.less';

import '@/custom-component' // 注册自定义组件

const app = createApp(App)
app
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
