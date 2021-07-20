try{
  const worker = new Worker('./demo10/worker.js')
  console.log('no error')
} catch(e) {
  console.log('caught error')
}


