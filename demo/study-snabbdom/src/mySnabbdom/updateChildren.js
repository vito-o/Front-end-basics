import patchVnode from './patchVnode'
import createElement from'./createElement'

function checkSameVnode(a, b) {
  return a.sel == b.sel && a.key == b.key;
}

export default function updateChildren(parentElm, oldCh, newCh) {
  console.log(oldCh, newCh)

  //旧前
  let oldStartIdx = 0;
  //旧后
  let oldEndIdx = oldCh.length - 1;
  //新前
  let newStartIdx = 0;
  //新后
  let newEndIdx = newCh.length - 1;

  //旧前节点
  let oldStartVnode = oldCh[oldStartIdx];
  //旧后节点
  let oldEndVnode = oldCh[oldEndIdx];
  //新前节点
  let newStartVnode = newCh[newStartIdx];
  //新后节点
  let newEndVnode = newCh[newEndIdx];

  console.log(oldStartIdx, newEndIdx)

  while(oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if(checkSameVnode(newStartVnode, oldStartVnode)) {
      //新前与旧前
      patchVnode(oldStartVnode, newStartVnode);
      newStartVnode = newCh[++newStartIdx];
      oldStartVnode = oldCh[++oldStartIdx];
    } else if(checkSameVnode(newEndVnode, oldEndVnode)) {
      //新后与旧后
      patchVnode(oldEndVnode, newEndVnode);
      newEndVnode = newCh[--newEndIdx];
      oldEndVnode = oldCh[--oldEndIdx];
    } else if(checkSameVnode(newEndVnode, oldStartVnode)) {
      //新后与旧前
      patchVnode(oldStartVnode, newEndVnode);
      //要移动节点，移动新后（旧前）指向的这个节点到老节点的旧后的后面
      parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling)

      newEndVnode = newCh[--newEndIdx];
      oldStartVnode = oldCh[++oldStartIdx];

    } else if(checkSameVnode(newStartVnode, oldEndVnode)) {
      //新前与旧后
      patchVnode(oldEndVnode, newStartVnode);
      //要移动节点，移动新前（旧后）指向的这个节点到老节点的旧前的前面
      parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm);
      newStartVnode = newCh[++newStartIdx];
      oldEndVnode = oldCh[--oldEndIdx];
    }
  }

  //继续看看有没有剩余的。循环结束了start还是比old小
  if(newStartIdx <= newEndIdx) {
    //new还有剩余节点没有处理
    //const before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
    for(let i = newStartIdx; i <= newEndIdx; i++) {
      parentElm.insertBefore(createElement(newCh[i]), oldCh[oldStartIdx].elm);
    }
  } else if(oldStartIdx <= oldEndIdx) {
    //新节点已经处理完了，但旧节点还有剩余没有处理完，则将剩余的节点删除
    for(let i = oldStartIdx; i <= oldEndIdx; i++) {
      parentElm.removeChild(oldCh[i].elm)
    }
  }

}