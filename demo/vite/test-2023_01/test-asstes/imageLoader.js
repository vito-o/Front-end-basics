// 加载静态资源
import imgUrl from '../assets/xy.png'

const img = document.createElement('img')
img.src = imgUrl

document.body.appendChild(img)


import aaJson from '../assets/aa.json'

const div1 = document.createElement('div');
div1.innerHTML = JSON.stringify(aaJson)

document.body.appendChild(
  div1
)