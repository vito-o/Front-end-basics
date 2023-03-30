import { useState } from "react"


export default function useForceUpdate() {
  const [_, setValue] = useState({})

  const forceUpdate = () => {
    setValue({})
  }

  return forceUpdate;
}