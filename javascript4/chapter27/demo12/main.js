const factorialWorker = new Worker('./demo12/factorialWorker.js')

factorialWorker.onmessage = ({data}) => console.log(data)

factorialWorker.postMessage(5)

factorialWorker.postMessage(7)

factorialWorker.postMessage(9)
  

