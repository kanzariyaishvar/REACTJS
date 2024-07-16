// import React ,{children} from 'react'
// import Login from './Login'

// function PrivateRoute({ children }) {
//     let isLogin = false
//     return (
//         localStorage.getItem("isLogin"),
//         isLogin ? children : <Login/>
//     )
// }
// export default PrivateRoute




import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isLogin = localStorage.getItem("isLogin") === "true";
    return isLogin ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

