import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashbord from '../pages/Dashbord'
import AddProduct from '../pages/AddProduct'
import ViewProduct from'../pages/ViewProduct'

function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Dashbord/>} />
        <Route path='/AddProduct' element={<AddProduct/>}/>
        <Route path='/ViewProduct' element={<ViewProduct/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router