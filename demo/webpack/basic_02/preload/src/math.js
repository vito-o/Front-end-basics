export function sum(...args) {
    return args.reduce(function(prev, curr) {
        return prev + curr;
    }, 0)
}

/* export function module(a, b) {
    return a * b;
} */