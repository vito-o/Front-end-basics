// 加载静态资源
/* 
import imgUrl from '../assets/home.svg?url'
console.log(imgUrl)

const img = document.createElement('img')
img.src = imgUrl

document.body.appendChild(img) 
*/


import imgUrl from '../assets/home.svg?raw'

const dom = document.createElement('div')
dom.innerHTML = imgUrl

document.body.appendChild(dom) 

setTimeout(() => {
  let svgDom = document.getElementsByTagName('svg')[0]
  svgDom.onmouseenter = () => {
    svgDom.style.fill = 'red'
  }

},200)