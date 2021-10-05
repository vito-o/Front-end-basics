// import $ from 'jquery'

document.addEventListener('click', function(e){
  console.log(e)
})

/**
 * 通过js代码，让某个文件被单独打包成一个chunk
 * import动态导入语法：能将某个文件单独打包
 */
import(/* webpackChunkName: 'comm' */ './comm')
  .then(result => {
    console.log(result)
  })
  .catch(() => {
    console.log('文件加载失败')
  })
