
export default function createElement(vnode) {
  let domNode = document.createElement(vnode.sel);

  if(vnode.text != '' && (vnode.children == undefined || vnode.children.length == 0)) {
    domNode.innerText = vnode.text;
  } else if(Array.isArray(vnode.children) && vnode.children.length) {
    for(let i = 0; i < vnode.children.length; i++) {
      let childDom = createElement(vnode.children[i]);
      domNode.appendChild(childDom)
    }
  }
  vnode.elm = domNode;
  return vnode.elm
}