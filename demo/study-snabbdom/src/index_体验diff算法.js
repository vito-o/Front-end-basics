import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

//创建patch函数
const patch = init([classModule, propsModule, styleModule, eventListenersModule])

const myVnode = h('ul', {}, [
  h('li', {key: 'a1'}, 'a1'),
  h('li', {key: 'a2'}, 'a2'),
  h('li', {key: 'a3'}, 'a3'),
  h('li', {key: 'a4'}, 'a4'),
])

const container = document.getElementById('container')
patch(container, myVnode);



const btn = document.getElementById('btn')
btn.onclick = function() {
  const myVnode2 = h('ul', {}, h('div', {}, [
    h('li', {key: 'a1'}, 'a5'),
    h('li', {key: 'a1'}, 'a1'),
    h('li', {key: 'a2'}, 'a2'),
    h('li', {key: 'a3'}, 'a3'),
    h('li', {key: 'a4'}, 'a4'),
  ]))
  patch(myVnode, myVnode2)
}