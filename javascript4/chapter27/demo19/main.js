const worker = new Worker('./demo19/worker.js')

//创建1字节缓冲区
const sharedArrayBuffer = new SharedArrayBuffer(1)

//创建1字节缓冲区的视图
const view = new Uint8Array(sharedArrayBuffer)

//父上下文赋值1
view[0] = 1;

worker.onmessage = () => {
  console.log(`buffer value after worker modification : ${view[0]}`)
}

//发送对sharedArrayBuffer的引用
worker.postMessage(sharedArrayBuffer)