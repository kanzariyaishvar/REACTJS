import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import Page from '../Pages/Page'
import Shop from '../Pages/Shop'
import Blog from '../Pages/Blog'
import Sing from '../Pages/Sing'
import Contact from '../Pages/Conatct'
import About from '../Pages/About'
import PrivateRoute from '../Pages/PrivateRoute'

function MainRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Sing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path='/Home' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Blog' element={<PrivateRoute><Blog /></PrivateRoute>} />
                    <Route path='/Shop' element={ <Shop />} />
                    <Route path='/Contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default MainRoutes