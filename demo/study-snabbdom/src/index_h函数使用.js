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

//创建虚拟节点
const myVnode = h('a', { props: {href: 'http://www.atguigu.com' } }, '尚硅谷');
console.log(myVnode)

const container = document.getElementById('container')
patch(container, myVnode);