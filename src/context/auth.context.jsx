import React, { useState, useEffect, createContext } from 'react'
import myApi from '../service/service'
export const AuthContext = createContext()

function AuthProviderWrapper(props) {
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)

    function storeToken(receivedToken) {
        localStorage.setItem('token', receivedToken)
        setToken(receivedToken)
    }

    function getToken() {
        return localStorage.getItem('token')
    }

    function removeToken() {
        return localStorage.removeItem('token')
    }

    async function authenticateUser() {
        try {
            const currentToken = getToken()
            setToken(currentToken)
            if (!currentToken) {
                setUser(null)
                setIsLoading(false)
                return
            }
            const res = await myApi.get('/api/auth/verify', {
                headers: {
                    Authorization: `Bearer ${currentToken}`
                }
            })

            setUser(res.data)
            setIsLoading(false)

        } catch (error) {
            setUser(null)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        authenticateUser()
    }, [])


    return (
        <AuthContext.Provider value={{ isLoading, user, authenticateUser, removeToken, storeToken }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProviderWrapper