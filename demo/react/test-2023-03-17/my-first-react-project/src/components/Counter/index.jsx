import { useState } from 'react'

export default function Counter(props) {

  let [count, setCount] = useState(props.defaultValue || 0);

  // console.log('组件渲染。')
  // console.log(props, 'props')

  const increase = () => {
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }
  const decrease = () => {
    setCount(prev => prev - 1)
  }

  return (
    <div>
      <button onClick={increase}>+</button>
      { count }
      <button onClick={decrease}>-</button>
      <div>{props.defaultValue}</div>
      <hr/>

    </div>
  )

}