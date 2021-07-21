navigator.serviceWorker.register('/demo25/worker.js', {scope: './demo25/'})
.then(serviceWorkerRegistration => {
    console.log(serviceWorkerRegistration.scope)
})