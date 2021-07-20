navigator.serviceWorker.register('./demo23/work1er.js')

.then(console.log, console.error)

//register()方法返回一个期约，该期约解决为ServiceWorkerRegistration对象，或者在注册失败时拒绝。

