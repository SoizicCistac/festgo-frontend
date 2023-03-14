import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

import myApi from '../service/service'

const Login = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const navigate = useNavigate()

  const { user, authenticateUser, removeToken } = useContext(AuthContext)

  const handleLogIn = async (event) => {
    event.preventDefault()

    const UserToLogIn = {
      email,
      password
    }
  
    const res = await myApi.logIn(UserToLogIn)
    localStorage.setItem('token', res.data.token)
    await authenticateUser()
  console.log(res)
    navigate('/festivals')

  }
  return (
    <div>      
      <h1>Log in</h1>
      <form onSubmit={handleLogIn}>
        <div>
          <label htmlFor="email">Email</label>
          <input value={email} type="text" name="email" id="email" onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input value={password} type="password" name="password" id="password" onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <button>Log in</button>
        <p>Don't have an account yet? <Link to='/signup'>Sign up</Link></p>
      </form>
    </div>
  )
}

export default Login