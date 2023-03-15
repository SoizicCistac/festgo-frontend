import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className='homepage'>
      <h1 className='homeTitle'>Fest Go!</h1>
      <div className="buttonHomepage">
        <Link className="button" to={"/login"}>Log in</Link>
        <Link className="button" to={"/signup"}>Sign up</Link>
      </div>
    </div>
  )
}

export default Home
