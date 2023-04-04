import { useCallback, useEffect, useRef } from "react"

export default function TestInput() {

  const inputRef = useRef(null)

  //useEffect是在真实dom重新生成以后执行
  /* useEffect(() => {
    console.log('~~')
    inputRef.current = document.getElementById('input')
  }, [inputRef]) */

  const handlerClick = useCallback(() => {
    inputRef.current.focus();
  }, [])

  return (
    <div>
      <input ref={inputRef} id="input"/> 
      <button onClick={handlerClick}>click</button>
    </div>
  )
}