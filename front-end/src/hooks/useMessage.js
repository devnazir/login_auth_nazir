import { createContext, useContext, useState } from 'react'

const messageContext = createContext("")

export function useMessageProvider() {
  const [message, setMessage] = useState("")

  const addMessage = (message) => {
      setMessage(message)
  }

  return {
    message,
    addMessage,
  }
}


export function ProviderMessage({ children }) {
  const state = useMessageProvider()
  return (
    <messageContext.Provider value={state}>
      {children}
    </messageContext.Provider>
  )
}

export const useMessage = () => useContext(messageContext)