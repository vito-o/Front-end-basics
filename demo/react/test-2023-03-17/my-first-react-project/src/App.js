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
import { useState, useCallback, useRef, useContext } from 'react'

// import Counter from './components/Counter';
// import ShouKun from './components/ShouKun';
// import ForceUpdateTest from './components/ForceUpdateTest';

// import Test01 from './components/useCallback/test_01'
// import UserMemoTest from './components/useMemo';
// import Ticker from './components/Ticker'
// import UseRefTest from './components/TestInput';
// import ForwardRefTest from './components/ForwardRefTest'

// import Demo1Parent from './components/useImperativeTest/demo1/parent'
// import UseContextTest from './components/useContextTest/useContextTest'
// import ThemeContext from './components/useContextTest/themeContext'

import TabView from './components/useTransitionTest/TabView'

export default function App() {

  /* const [countValue, setCountValue] = useState(10)

  const handleClick = () => {
    setCountValue(prev => prev + 1)
  }


  const inputRef = useRef(null)

  const handlerClick = useCallback(() => {
    inputRef.current.focus();
  }, []) */
  // const theme = useContext(themeContext)

  /* const [themeContext, setThemeContext] = useState('dark')

  const changeTheme = () => {
    if(themeContext == 'light') setThemeContext('dark')
    else setThemeContext('light')
  } */

  return (
    // <ThemeContext.Provider value={{themeContext}}>
    <div>
      {/* <Counter defaultValue={countValue}/>
      <hr />
      <button onClick={ handleClick }>click</button>
      {countValue}
      <ShouKun />
      <hr/>
      <ForceUpdateTest />

      <hr/>
      <Test01 />

      <hr/>
      <UserMemoTest/>
      
      <hr/>
      <Ticker/>
      <Ticker/>

      <hr/>
      <UseRefTest/>

      <hr/>
      <ForwardRefTest ref={inputRef}/>
      <button onClick={handlerClick}>focus</button> */}

      {/* <Demo1Parent />

      <hr/>
      <UseContextTest/>
      <button onClick={changeTheme}>change theme</button> */}

      <TabView />
    </div>
    // </ThemeContext.Provider>
  )
}
