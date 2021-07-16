//创建要执行的js代码字符串
const workerScript = `
    self.onmessage = ({data}) => console.log(data)
`
console.log(workerScript, 'workerScript')

//基于脚本字符串生成Blob对象
const workerScriptBlob = new Blob([workerScript])
console.log(workerScriptBlob, 'workerScriptBlob')

//基于Blob实例创建对象URL
const workerScriptBlobUrl = URL.createObjectURL(workerScriptBlob)
console.log(workerScriptBlobUrl, 'workerScriptBlobUrl')

//基于对象URL创建工作者线程
const worker = new Worker(workerScriptBlobUrl)
console.log(worker, 'worker')

worker.postMessage('blob worker script')