import { useEffect, useState } from "react";
import { CONSTANT } from '../constants'

function useEmptyInput() {
  const [empty, setEmpty] = useState(false)
  const [messageEmpty, setMessage] = useState()

  useEffect(() => {
    if (empty) {
      setMessage(CONSTANT.REQUIRED)
    }

  }, [empty])

  
  return {
    empty,
    messageEmpty,
    setEmpty,
  }
}

export { useEmptyInput }