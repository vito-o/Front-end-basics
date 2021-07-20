const channel = new MessageChannel()

const factorialWorker = new Worker('./demo13/worker.js')

//把messagePort发送到工作者线程
//工作者线程负责初始化信道
factorialWorker.postMessage(null, [channel.port1])

//工作者线程通过信道响应
channel.port2.onmessage = ({data}) => console.log(data);

//通过信道实际发送数据
channel.port2.postMessage(5)
