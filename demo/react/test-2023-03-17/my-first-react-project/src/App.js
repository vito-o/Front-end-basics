/* const obj = {
  a: 1
}

obj[Symbol.iterator] = function*() {
  for(let prop in obj) {
    yield [prop, obj[prop]]
  }
}

function App() {
  return obj;
}

export default App;
 */
import { useState } from 'react'

import Counter from './components/Counter';
import ShouKun from './components/ShouKun';
import ForceUpdateTest from './components/ForceUpdateTest';

import Test01 from './components/useCallback/test_01'

export default function App() {

  const [countValue, setCountValue] = useState(10)

  const handleClick = () => {
    setCountValue(prev => prev + 1)
  }

  return (
    <div>
      <Counter defaultValue={countValue}/>
      <hr />
      <button onClick={ handleClick }>click</button>
      {countValue}
      <ShouKun />
      <hr/>
      <ForceUpdateTest />

      <hr/>
      <Test01 />


    </div>
  )
}
