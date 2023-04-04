
import Demo1Child from './child'
import { useRef } from 'react'

export default function Demo1Parent() {

  const childRef = useRef(null)

  const getChildCount = () => {
    console.log(childRef, 'childRef')
  }

  return (
    <div>
      <button onClick={getChildCount}>get Child Info</button>
      <Demo1Child ref={childRef}/>
    </div>
  )
}