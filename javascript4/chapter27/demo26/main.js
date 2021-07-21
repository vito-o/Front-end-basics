if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw-test/worker.js', {scope: './'})
        .then(serviceWorkerRegistration => {
            console.log(serviceWorkerRegistration.scope)
        
        
            /* fetch('/foo.js').then(res => {
                console.log(res, '....')
            }) */
        })
    })
}
