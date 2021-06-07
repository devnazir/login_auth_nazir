import { useMessage } from '../hooks/useMessage'
import { useInput } from '../hooks/useInput'
import { useEmptyInput } from '../hooks/useEmptyInput'
import ErrorField from '../components/ErrorField'
import { login } from '../service/loginService'
import { useToken } from '../hooks/useToken'
import { H1 } from '../components/Heading'
import { Fragment } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'

function Login() {
  const { addMessage, message } = useMessage()
  const { setEmpty, empty, messageEmpty } = useEmptyInput()
  const { state, handleChangeInput } = useInput()
  const { saveToken, token } = useToken()
  const history = useHistory()

  const handleClickLogin = async (e) => {
    e.preventDefault()
    const { username, password } = state

    if (username && password) {
      return await login(username, password, addMessage, saveToken, history)
    }

    setEmpty(true)
  }

  if (token) {
    return <Redirect to='/users'/>
  }

  return (
    <Fragment>
      <H1>Login</H1>
      <div className='login'>
        <form className='login__form'>
          <div className='login__input_wrapper'>
            <label className='login__input_wrapper__label' htmlFor="username">Username</label>
            <input onChange={handleChangeInput} name="username" type="text" className='login__input_wrapper__input' maxLength={20} />
            {empty && <ErrorField>{messageEmpty}</ErrorField>}
          </div>

          <div className='login__input_wrapper'>
            <label className='login__input_wrapper__label' htmlFor="password">Password</label>
            <input onChange={handleChangeInput} name="password" type="text" className='login__input_wrapper__input' maxLength={20} />
            {empty && <ErrorField>{messageEmpty}</ErrorField>}
          </div>
          {message && <span className='status'>{message}</span>}

          <button className='login__btn' onClick={handleClickLogin}>Login</button>
        </form>

        <Link to="/register" >
          <button className='login__btn btn--register'>I have'nt an Account</button>
        </Link>
      </div>
    </Fragment>
  )
}

export default Login