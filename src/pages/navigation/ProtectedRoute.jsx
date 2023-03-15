import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute() {

    const { user } = useContext(AuthContext)

    if (user.userType !== "admin") {
        return <Navigate to="/" />
    }
    return <Outlet />
}

export default ProtectedRoute