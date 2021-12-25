import h from './mySnabbdom/h'
import patch from './mySnabbdom/patch'

const container = document.getElementById('container')

const vNode = h('ul', {}, [
  h('li', {key:'h1'}, 'h1'),
  h('li', {key:'h2'}, 'h2'),
  h('li', {key:'h3'}, 'h3'),
])
// const vNode = h('ul', {}, 'haha')

patch(container, vNode)


const btn = document.getElementById('btn')
btn.onclick = function() {
  //let vNode1 = h('ul', {}, 'haha')
  let vNode1 = h('ul', {}, [
    h('li', {key:'h0'}, 'h000'),
    h('li', {key:'h1'}, 'h112'),
    h('li', {key:'h2'}, 'h2'),
    h('li', {key:'h3'}, 'h3'),
    // h('li', {key:'h4'}, 'h4'),
  ])
  patch(vNode, vNode1)
}