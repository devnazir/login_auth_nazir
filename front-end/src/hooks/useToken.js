import { useState, createContext, useContext } from "react"

const tokenContext = createContext("")

function Token() {
  const getToken = () => {
    return localStorage.getItem("token")
  }

  const saveToken = (token) => {
    setToken(localStorage.setItem("token", token))
  }

  const removeToken = () => {
    return localStorage.removeItem('token')
  }

  const [token, setToken] = useState(getToken() ? getToken() : "")

  return {
    token,
    saveToken,
    getToken,
    removeToken
  }
}

export function ProviderToken({ children }) {
  const state = Token()
  return (
    <tokenContext.Provider value={state}>
      {children}
    </tokenContext.Provider>
  )
}

export const useToken = () => useContext(tokenContext)