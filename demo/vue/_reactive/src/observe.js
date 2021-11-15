import Observer from "./Observer";

export function observe(value) {
  //如果value不是对象，什么也不做
  if(typeof value !== 'object') return;

  var ob;
  if(typeof value.__ob__ !== 'undefined') {
    ob = value.__ob__;
  } else {
    ob = new Observer(value)
  }
  return ob;
}