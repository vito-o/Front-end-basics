const channel = new BroadcastChannel('worker_channel')

const worker = new Worker('./demo15/worker.js')

channel.onmessage = ({data}) => {
  console.log(`head ${data} on page`)
}

setTimeout(() => channel.postMessage('foo'), 1000)