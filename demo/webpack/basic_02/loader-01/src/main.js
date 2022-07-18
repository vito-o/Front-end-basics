import './assets/css/index.css'

function add() {
    return '123'
};

console.log('hello ere');


let m = "123";


function sum(...args) {
    args.reduce((prev, curr) => {
        return prev + curr;
    }, 0);
}