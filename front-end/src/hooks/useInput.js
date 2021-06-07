import { useState } from "react";

function useInput() {
  const [state, setState] = useState({
    username: "",
    password: ""
  })

  const handleChangeInput = (input) => {
    const targetInput = input.target.name
    const value = input.target.value

    setState(prev => ({
      ...prev,
      [targetInput]: value
    }))

    // if (value === "") {
    //   return input.target.nextElementSibling.style.display = 'block'
    // }

    // if (input.target.nextElementSibling) {
    //   input.target.nextElementSibling.style.display = 'none'
    // }
  }

  return {
    state,
    setState,
    handleChangeInput,
  }
}

export { useInput }