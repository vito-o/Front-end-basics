export function sum(...args) {
    return args.reduce(function(prev, curr) {
        return prev + curr;
    }, 0)
}