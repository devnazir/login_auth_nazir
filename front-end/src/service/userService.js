import { CONSTANT } from '../constants'

const { BASE_URL } = CONSTANT

async function checkUser(token) {
  const check = await fetch(`${BASE_URL}/api/auth/check?token=${token}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })

  return await check.json()
}

async function listUsers(token) {
  return await (await fetch(`${BASE_URL}/api/user/list?token=${token}`)).json()
}

async function giveAccess(username, token) {
  return await (await fetch(`${BASE_URL}/api/user/assign-admin/${username}?token=${token}`, { method: "POST" })).json()
}

export { checkUser, listUsers, giveAccess }