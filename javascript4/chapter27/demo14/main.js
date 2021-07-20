const channel = new MessageChannel()

const workerA = new Worker('./demo14/workerA.js')
const workerB = new Worker('./demo14/workerB.js')

//把messagePort发送到工作者线程
//工作者线程负责初始化信道
workerA.postMessage('workerA', [channel.port1])
workerB.postMessage('workerB', [channel.port2])

workerA.onmessage = ({data}) => console.log(data)
workerB.onmessage = ({data}) => console.log(data)

workerA.postMessage(['page'])
//workerB.postMessage(['page'])