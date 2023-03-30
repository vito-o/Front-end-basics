// 受控组件和不受控组件是对表单来说的
// 非受控只能通过defaultvALUEQU 去设置初始值，然后通过绑定对应的事件去监听值
// 受控组件，input 设置了value=""后，组件的值就只能通过value去设置  受控标签属性value
// 当你给input设置了vlaue得值以后，input框里面出现什么文字 不再由用户输入说了算，而是由你得这个value值决定
// 为啥没变化，因为我作为开发者没有让他变化，她是受控制的 我就是她的最高领导 或者说开发者是这个组件的实际控制者

// 正常情况下，我们确实可以都用非受控组件搞定 但是有一些特殊情况，比如说一键初始化所有输入 清空输入【只要涉及到value值需要被外部控制的清空 我们都得用受控组件】

import { useState } from "react"

export default function ShouKun() {

  const [inputVal, setInputVal] = useState('')
  const [ checkboxVal, setCheckBoxVal] = useState(false)

  const handleInputChange = (e) => {
    console.log('e.value', e.target.value)
  }

  const handleControlledInputChange = (e) => {
    console.log('handleControlled e.value', e.target.value)
    setInputVal(e.target.value)
  }

  const handleControlledCheckboxChange = (e) => {
    setCheckBoxVal(e.target.checked)
  }

  return (
    <div>
      非受控<input type="text" onChange={handleInputChange} defaultValue="default"/>

      受控<input value={inputVal} onChange={handleControlledInputChange}/>

      非受控<input type="checkbox"/>
      受控<input type="checkbox" checked={checkboxVal} onChange={handleControlledCheckboxChange}/>
    </div>
  )

}