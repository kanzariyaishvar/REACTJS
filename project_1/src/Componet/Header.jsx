import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

function MainHeader() {
  return (
    <>
      <div className="Main-container">
        <div className="container">
          <div className="logo">
            <img src="weblog.png" alt="" /></div>
          <div className="navbar">
            <NavLink to="/" className='Link' >Home</NavLink>
            <NavLink to="Shop" className='Link' >Shop</NavLink>
            <NavLink to="/Blog" className='Link' >Blog</NavLink>
            <NavLink to="/Blog" className='Link' >Pages</NavLink>
            <NavLink to="/Blog" className='Link' >Contact</NavLink>
            <i class="bi bi-suitcase2 fs-4"></i>
            <i class="bi bi-search-heart fs-4"></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainHeader