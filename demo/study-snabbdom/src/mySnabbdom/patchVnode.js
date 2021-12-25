import createElement from "./createElement";
import updateChildren from './updateChildren'

export default function patchVnode(oldNode, newNode) {
  if(oldNode === newNode) return;

  //判断新节点有没有text属性
  if(newNode.text && !(newNode.children && newNode.children.length)) {
    if(oldNode.text != newNode.text) {
      oldNode.elm.innerHTML = newNode.text;
    }
  } else {
    //新node没有text而是children
    if(oldNode.children && oldNode.children.length) {
      updateChildren(oldNode.elm, oldNode.children, newNode.children);
      //parentElm, oldCh, newCh
    } else {
      //老节点没有children属性
      oldNode.elm.innerHTML = '';
      for(let i = 0; i < newNode.children.length; i++) {
        let child = createElement(newNode.children[i])
        oldNode.elm.appendChild(child)
      }
    }
  }
}