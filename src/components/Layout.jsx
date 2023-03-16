import React, { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'

const Layout = () => {
  const { user, authenticateUser, removeToken } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleClick() {
    removeToken()
    authenticateUser()
    navigate('/login')
  }

  return (
    <div>
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/festivals"}>Home</NavLink>
                    </li>
                    {/* If a user is connected, Log out appears, if not, log in and sign up appear */}
                    {
                        !user ? (
                            <>
                            <li>
                                <NavLink to={"/login"}>Log in</NavLink>
                            </li>
                            <p>/</p>
                            <li>
                                <NavLink to={"/signup"}>Sign up</NavLink>
                            </li>
                            </>
                        )
                        : (
                            <a id="logout" onClick={handleClick}>Log out</a>
                        )
                    }
                    
                </ul>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout