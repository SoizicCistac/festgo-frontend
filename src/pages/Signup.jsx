import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import myApi from '../service/service'

const Signup = () => {
  const [ username, setUsername ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const navigate = useNavigate()

  const handleSignUp = async (event) => {
    event.preventDefault()

    const UserToCreate = {
      username,
      email,
      password
    }
  
    const res = await myApi.signUp(UserToCreate)
  
    navigate("/login")
  }
   

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="username">Username</label>
          <input value={username} type="text" name="username" id="username" onChange={(event) => setUsername(event.target.value)}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input value={email} type="text" name="email" id="email" onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input value={password} type="password" name="password" id="password" onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <button>Sign up</button>
        <p>Already have an account? <Link to='/login'>Log in</Link></p>
      </form>
    </div>
  )
}

export default Signup