import { useEffect, useState, Fragment } from 'react'
import { useToken } from '../hooks/useToken'
import Login from './Login'
import { listUsers, giveAccess, checkUser } from '../service/userService'

function ListUsers() {
  const { getToken, removeToken } = useToken()
  const [users, setUsers] = useState([])
  const [admin, setAdmin] = useState(false)

  const checkCurrentUser = async (token) => {
    const result = await checkUser(token)
    setAdmin(result.info.admin)
  }

  const showUsers = async () => {
    const result = await listUsers(getToken())
    setUsers(result?.users)
  }

  useEffect(() => {
    if (getToken()) {
      showUsers()
      checkCurrentUser(getToken())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getToken])

  if (!getToken()) {
    return <Login />
  }

  const handleClickGiveAccess = async (username) => {
    const result = await giveAccess(username, getToken())
    if (result.success) {
      window.location.reload()
    }
  }

  const handleClickLogout = () => {
    removeToken()
    window.location.reload()
  }

  return (
    <Fragment>
      <div className='users' >
        <h1>Users List</h1>
        <button className='logout' onClick={handleClickLogout}>Logout</button>
        {admin ? (
          <table className="users__table" cellSpacing={0} border={1}>
            <thead className='users__table__head'>
              <tr className='users__table__head__tr'>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='users__table__body'>
              {users?.map((user, id) => {
                return (
                  <tr className='users__table__body__tr' key={id}>
                    <td>{user.username}</td>
                    <td className='users__table__body__action'>
                      <button className={`${user.admin && 'admin'}`} disabled={user.admin} onClick={() => handleClickGiveAccess(user.username)}>{user.admin ? 'User has became admin' : 'Give access as Admin'}</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        ): "You have not access"}
      </div>
    </Fragment>
  )
}

export default ListUsers