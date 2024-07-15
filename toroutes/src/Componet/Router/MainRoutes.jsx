import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Product from '../pages/Product'


function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Product' element={<Product/>} />
        </Routes>
    )
}

export default MainRoutes