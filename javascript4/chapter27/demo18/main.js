const worker = new Worker('./demo18/worker.js')

//创建32位缓冲区
const arrayBuffer = new ArrayBuffer(32)

console.log(`page's buffer size: ${arrayBuffer.byteLength}`)

worker.postMessage({foo: { bar: arrayBuffer }}, [arrayBuffer])

console.log(`page's buffer size: ${arrayBuffer.byteLength}`)