import React from 'react'
import Login from './Login'

function PrivateRoute({ children }) {
    let isLogin = false
    return (
        isLogin ? children : <Login/>
    )
}

export default PrivateRoute