import React, { useState, useEffect, createContext } from 'react'
import myApi from '../service/service'
export const AuthContext = createContext()

function AuthProviderWrapper(props) {
    const [ isLoading, setIsLoading ] = useState(true)
    const [ user, setUser ] = useState(null)
    const [ token, setToken ] = useState(null)

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
        const currentToken = getToken()
        setToken(currentToken)
        try {
            const res = await myApi.get('/api/auth/profile', {
                headers: {
                    Authorization: `Bearer ${currentToken}`
                }
            })
            if(res.status === 200) {
                setUser(res.data)
                setIsLoading(false)
            } else {
                setUser(null)
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error.response.data)
            setUser(null)
            setIsLoading(false)
        }
    }

    useEffect(() => {
      authenticateUser()
    }, [])


return (
    <AuthContext.Provider value={{ isLoading, user, authenticateUser, storeToken }}>
        {props.children}
    </AuthContext.Provider>
)}

export default AuthProviderWrapper