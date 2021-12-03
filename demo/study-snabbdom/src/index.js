import h from './mySnabbdom/h'
import patch from './mySnabbdom/patch'

const container = document.getElementById('container')

const vNode = h('ul', {}, [
  h('li', {}, 'h1'),
  h('li', {}, 'h2'),
  h('li', {}, [
    h('div', {}, 'div1'),
    h('div', {}, 'div2'),
    h('div', {}, 'div3'),
  ]),
  h('li', {}, 'h4'),
])

patch(container, vNode)


const btn = document.getElementById('btn')
btn.onclick = function() {
  let vNode1 = h('ul', {}, 'haha')
  patch(vNode, vNode1)
}