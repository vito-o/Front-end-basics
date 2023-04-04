import { forwardRef, useCallback, useEffect, useRef } from "react"

function TestInput1(props, parentRef) {
  return (
    <div>
      <input ref={parentRef} /> 
    </div>
  )
}

export default forwardRef(TestInput1)