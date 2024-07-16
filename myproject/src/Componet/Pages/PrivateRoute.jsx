// import React ,{children} from 'react'
// import Login from './Login'

// function PrivateRoute({ children }) {
//     let isLogin = false
//     return (
//         isLogin ? children : <Login/>
//     )
// }
// export default PrivateRoute




import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isLogin = false
    console.log(isLogin);

    localStorage.getItem("isLogin"); // Ensure the key matches your login logic
    return isLogin ? children : <Navigate to="login" />;
};

export default PrivateRoute;

