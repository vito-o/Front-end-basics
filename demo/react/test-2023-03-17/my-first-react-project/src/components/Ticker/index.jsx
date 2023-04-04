import { useCallback, useRef, useState } from "react"

// let timer = null;

export default function Ticker() {
  let timer = useRef(null)

  const [ticker, setTicker] = useState(60);

  const handlerStartClick = useCallback(() => {
    timer.current = setInterval(() => setTicker(prev => prev - 1), 1000)
  }, [])

  const handlerStopClick = useCallback(() => {
    if(timer.current) clearInterval(timer.current);
  }, [])

  return (
    <>
      <span>{ticker}</span>
      <button onClick={handlerStartClick}>start</button>
      <button onClick={handlerStopClick}>stop</button>
    </>
  )
} 