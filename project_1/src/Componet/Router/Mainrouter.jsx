import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from'../pages/Shop'
import Blog from '../pages/Blog'


function Mainrouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Shop' element={<Shop/>}/>
                <Route path='/Blog' element={<Blog/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Mainrouter