import vnode from "./vnode";
/**
 * 形态1：h('div', {}, '文字')
 * 形态2：h('div', {}, [])
 * 形态3：h('div', {}, h())
 */
export default function h(sel, data, c) {
  if(arguments.length != 3) {
    throw new Error('h函数必须传入3个参数！')
  }

  if(typeof c == 'string' || typeof c == 'number') {
    //形态1
    return vnode(sel, data, undefined, c, undefined, undefined)
  } else if(Array.isArray(c)) {
    //形态2
    let children = [];
    for(let i = 0; i < c.length; i++) {
      if(typeof c[i] == 'object' && c[i].hasOwnProperty('sel'))
        children.push(c[i])
      else 
        throw new Error('子项中h函数传入3个参数类型错误！')  
    }
    return vnode(sel, data, children, undefined, undefined, undefined)
  } else if(typeof c == 'object' && c.hasOwnProperty('sel')) {
    //形态3
    return vnode(sel, data, [c], undefined, undefined, undefined)
  } else {
    throw new Error('h函数传入3个参数类型错误！')   
  }
}