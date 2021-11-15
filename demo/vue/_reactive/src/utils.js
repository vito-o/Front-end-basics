export function def(obj, key, value, enumerable) {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable,
    writable: true,
    value
  })
}