const worker = new Worker('./demo4/' + 'closeWorker.js')

worker.onmessage = ({data}) => console.log(data);