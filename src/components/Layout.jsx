import React, { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import { Outlet, NavLink } from 'react-router-dom'

const Layout = () => {
  const { user, authenticateUser, removeToken } = useContext(AuthContext)

  function handleClick() {
    removeToken()
    authenticateUser()
  }

  return (
    <div>
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/profile"}>Profile</NavLink>
                    </li>
                    {
                        !user ? (
                            <>
                            <li>
                                <NavLink to={"/login"}>Log in</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/signup"}>Sign up</NavLink>
                            </li>
                            </>
                        
                        )
                        : (
                            <button onClick={handleClick}>Log out</button>
                        )
                    }
                    
                    <li>
                        <NavLink to={"/festivals"}>Festivals</NavLink>
                    </li>
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