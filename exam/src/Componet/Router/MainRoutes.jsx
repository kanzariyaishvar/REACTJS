import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashbord from '../Pages/Dashbord'
import AddProduct from '../Pages/AddProduct'
import Viewproduct from '../Pages/Viewproduct'

function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashbord/>}>DASHBORD</Route>
                <Route path='/Addproduct' element={<AddProduct/>}>ADDPRODUCT</Route>
                <Route path='/Viewproduct' element={<Viewproduct/>}>VIEWPRODUCT</Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes