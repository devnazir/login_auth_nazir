import { CONSTANT } from '../constants'

const { BASE_URL } = CONSTANT

async function register(username, password, addMessage, history) {
  const dataRegister = { username, password }
  try {
    const postData = await (await fetch(`${BASE_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataRegister)
    })).json()

    const { message } = postData
    
    if(message === "username exists") {
      return addMessage(message)
    }

    addMessage(message)
    history.push("/")

  } catch (err) {
    console.log(err)
  }
}

export { register }