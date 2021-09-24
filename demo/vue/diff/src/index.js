import {init} from 'snabbdom/build/init.js'
import {h} from 'snabbdom/build/h.js'

// 1.导入模块
import {styleModule} from "snabbdom/build/modules/style";
import {eventListenersModule} from "snabbdom/build/modules/eventListeners";

// 2.注册模块
const patch = init([
  styleModule,
  eventListenersModule
])


// 3.使用h()函数的第二个参数传入模块中使用的数据(对象)
let vnode = h('div', [
  h('h1', {style: {backgroundColor: 'red'}}, 'Hello world'),
  h('p', {on: {click: eventHandler}}, 'Hello P')
])

function eventHandler() {
  alert('疼,别摸我')
}

const app = document.querySelector('#app')

patch(app,vnode)