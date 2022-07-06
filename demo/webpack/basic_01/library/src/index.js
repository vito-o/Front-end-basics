// import _ from 'lodash'

function component() {
  let dom = document.createElement('div')
  dom.innerHTML = ['hell', 'a', 'cc'].join('~') 
  return dom;  
}

document.body.appendChild(component())


export function add(a, b) {
  return a + b;
}

console.log(add(10, 13))