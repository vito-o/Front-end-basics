console.log('index.js 文件被调用了！')

document.addEventListener('click', function(e){
  import(/* webpackChunkName: 'comm', webpackPrefetch:true */ './comm')
    .then(({add}) => {
      console.log(add(3, 6))
    })
    .catch((e) => {
      console.log('文件加载失败!', e)
    })
})

if('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => {
        console.log('ws注册成功')
      })
      .catch(() => {
        console.log('ws注册失败')
      })
  })
}

