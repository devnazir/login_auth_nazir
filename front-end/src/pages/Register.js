import { useMessage } from '../hooks/useMessage'
import { useInput } from '../hooks/useInput'
import { useEmptyInput } from '../hooks/useEmptyInput'
import { register } from '../service/registerService'
import ErrorField from '../components/ErrorField'
import { H1 } from '../components/Heading'
import { Fragment, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

function Register() {
  const { addMessage, message } = useMessage()
  const { setEmpty, empty, messageEmpty } = useEmptyInput()
  const { state, handleChangeInput } = useInput()
  const history = useHistory()

  useEffect(() => {
    addMessage("")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClickRegister = async (e) => {
    e.preventDefault()
    const { username, password } = state

    if (username && password) {
      return await register(username, password, addMessage, history)
    }

    setEmpty(true)
  }

  return (
    <Fragment>
      <H1>Register</H1>
      <div className='register'>
        <form className='register__form'>
          <div className='register__input_wrapper'>
            <label className='register__input_wrapper__label' htmlFor="username">Username</label>
            <input onChange={handleChangeInput} name='username' type="text" className='register__input_wrapper__input' maxLength={20} />
            {empty && <ErrorField>{messageEmpty}</ErrorField>}
          </div>

          <div className='register__input_wrapper'>
            <label className='register__input_wrapper__label' htmlFor="password">Password</label>
            <input onChange={handleChangeInput} name='password' type="password" className='register__input_wrapper__input' maxLength={20} />
            {empty && <ErrorField>{messageEmpty}</ErrorField>}
          </div>
          {message && <span className='status'>{message}</span>}

          <button className='register__btn' onClick={handleClickRegister}>Register</button>
        </form>

        <Link to='/'>
          <button className='register__btn btn--login'>I have an Account</button>
        </Link>
      </div>
    </Fragment>
  )
}

export default Register