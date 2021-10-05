console.log('index.js 文件被调用了！')

document.addEventListener('click', function(e){

  /**
   * 懒加载：当文件需要使用时才加载
   * 预加载：perfetch会在使用之前提前加载js文件
   * 正常加载可以认为时并行加载（同一时间加载多个文件）
   * 预加载：等其他资源加载完毕，浏览器空闲了，再偷偷加载资源
   */
  import(/* webpackChunkName: 'comm', webpackPrefetch:true */ './comm')
    .then(({add}) => {
      console.log(add(3, 6))
    })
    .catch((e) => {
      console.log('文件加载失败!', e)
    })
})


