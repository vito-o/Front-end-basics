import cA from './componentA.module.css'
console.log(cA)
let dom = document.createElement('div')

dom.className = cA.footer

document.body.appendChild(dom)