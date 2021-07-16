const worker = new Worker('./demo3/' + 'initializingWorker.js')

worker.postMessage('foo')
worker.postMessage('bar')
worker.postMessage('baz')
