const worker = new Worker('./demo5/' + 'terminateWorker.js')

setTimeout(() => {
  worker.postMessage('foo');
  worker.terminate();
  worker.postMessage('bar')
  setTimeout(() => worker.postMessage('baz'), 0)
})