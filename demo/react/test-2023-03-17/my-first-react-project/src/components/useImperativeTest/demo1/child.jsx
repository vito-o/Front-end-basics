import { useState, useRef, forwardRef, useImperativeHandle } from "react";
import useForceUpdate from '../../../hooks/useForceUpdate'

function Demo1Child(props, ref) {
  const [count, setCount] = useState(0)

  const handlClick = () => {
    setCount(prev => prev + 1)
  }

  const forceUpdate = useForceUpdate();

  // ref.current = count + Math.random();

  //第一个参数是ref：意味着它在底层回去改你这个ref的current属性
  //第二个参数是一个函数：这个函数的返回值最终会被丢到这个ref.current属性上去
  //第三个参数是依赖项：重头戏 意味着依赖项不变的话 ref的current值不会被重新赋值
  useImperativeHandle(ref, () => {
    return count + Math.random();
  }, [count])

  return (
    <div style={{border:'1px solid'}}>
      {count}
      <button onClick={ handlClick }>add</button>
      <button onClick={ forceUpdate }>forceupdate</button>
    </div>
  )
}

export default forwardRef(Demo1Child)