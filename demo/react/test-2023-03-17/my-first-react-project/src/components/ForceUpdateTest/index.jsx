import { useState } from "react"

import useForceUpdate from '../../hooks/useForceUpdate'
import useWindowScrollWatch from '../../hooks/useWindowScrollWatch'

export default function ForceUpdateTest() {
 
  console.log('组件进行了渲染')

  // const [_, setValue] = useState({})

  const forceUpdate = useForceUpdate();
  useWindowScrollWatch(() => {
    console.log('listen scroll....')
  });



  return (
    <div style={{height: '100px'}}>

      <button onClick={forceUpdate}>force update</button>
    </div>
  )
}