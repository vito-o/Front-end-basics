console.log('hellow ')

// import { sum } from './math'

document.getElementById('btn').onclick = function() {
    import(/* webpackChunkName: "math" */'./math').then(({sum}) => {
        console.log(sum(11,12, 13, 14, 9, 5 ,6,7 ))
    })
}