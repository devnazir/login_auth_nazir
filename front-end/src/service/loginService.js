import { CONSTANT } from '../constants'

const { BASE_URL } = CONSTANT

async function login(username, password, addMessage, saveToken, history) {
  const dataLogin = { username, password }
  try {
    const postData = await (await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataLogin)
    })).json()

    const { message } = postData

    if (message === "login failed") {
      return addMessage(message)
    }

    saveToken(postData.token)
    history.push('/users')

  } catch (err) {
    console.log(err)
  }
}

export { login }