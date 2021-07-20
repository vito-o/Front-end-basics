const worker = new Worker('./demo11/worker.js')
  
worker.onerror = console.log;

