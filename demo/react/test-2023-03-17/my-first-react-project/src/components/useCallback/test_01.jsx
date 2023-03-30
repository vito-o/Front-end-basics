import { useCallback, useState } from "react";


export default function Test() {

  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(prev => prev + 1)
  }

  // 由于没有给getCountValue做任何性能处理，每次组件的重新渲染都毫无意外的采用了引用的重新构建
  const getCountValue = useCallback(() => {
    console.log("最新的countValue", count)
  }, [count])

  return (
    <div>
      <span>{count}</span>
      <button onClick={ addCount }>add Count</button>
      <button onClick={ getCountValue }>get Count Value</button>
    </div>
  )

}