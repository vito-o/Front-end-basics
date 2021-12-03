import vnode from "./vnode";
import createElement from "./createElement";

export default function patch(oldNode, newNode) {
  //如果是dom对象，则将dom对象转为虚拟dom
  if(oldNode.sel == '' || oldNode.sel == undefined) {
    oldNode = vnode(oldNode.tagName.toLowerCase(), {}, [], undefined, oldNode)
  }

  //判断新旧node是否相同
  if(oldNode.key == newNode.key && oldNode.sel == newNode.sel) {
    console.log('是同一个节点')
  } else {
    let node = createElement(newNode)
    oldNode.elm.parentNode.insertBefore(node, oldNode.elm)
    oldNode.elm.remove();
  }

}