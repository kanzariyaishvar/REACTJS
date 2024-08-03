import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Header from "../Pages/Header"

export const MainRouter = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Header" element={<Header/>}/>
            </Routes>
        </BrowserRouter>
    )

}