//在监听器中存储全局messagePort
let messagePort = null;

function factorial(n) {
  let result = 1;

  while(n) {
    result *= n--;
  }
  return result;
}

//在全局对象上添加消息处理程序
self.onmessage = ({ports}) => {
  if(!messagePort) {
    //初始化消息发送端口
    //给变量赋值并重置监听器
    messagePort = ports[0]
    self.onmessage = null;

    //在全局对象上设置消息处理程序
    messagePort.onmessage = ({data}) => {
      messagePort.postMessage(`${data}! = ${factorial(data)}`)
    }

  }
}