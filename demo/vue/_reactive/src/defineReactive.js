import { observe } from "./observe";
import Dep from "./Dep";

export default function defineReactive(obj, key, val) {
  const dep = new Dep();

  if(arguments.length == 2) {
    val = obj[key];
  }

  let childOb = observe(val);

  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    get(){
      console.log(`${key}被试图访问`)
      //如果现在处于依赖收集阶段
      if(Dep.target){
        dep.depend()
        if(childOb){
          childOb.dep.depend()
        }
      }
      return val;
    },
    set(newValue) {
      console.log(`${key}被试图修改`)
      if(val === newValue) {
        return; 
      }
      val = newValue;
      childOb = observe(newValue)

      dep.notify();
    }
  })
}