navigator.serviceWorker.register('./demo24/serviceWorker.js')
.then(registrationA => {
    console.log(registrationA)

    navigator.serviceWorker.register('./demo24/serviceWorker2.js')
    .then(registrationB => {
        console.log(registrationA === registrationB)
    })
})