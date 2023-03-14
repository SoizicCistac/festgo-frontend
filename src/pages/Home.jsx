import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    console.log("Home")
  return (
    <div>
      <h1>Fest Go!</h1>
      <Link to={"/login"}>Log in</Link>
      <Link to={"/signup"}>Sign up</Link>
    </div>
  )
}

export default Home
