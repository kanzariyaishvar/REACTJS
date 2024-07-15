import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div id='logo'>
                <img src="/Colorlib//logo2_footer.png" alt="" />
            </div>
            <nav>
                <ul>
                    <Link  to="/Home" className='Link'>Home</Link>
                    <Link  to="/Shop" className='Link'>Product</Link>
                    <Link  to="/About" className='Link'>About</Link>
                    <Link  to="/Blog" className='Link'>Blog</Link>
                    <Link  to="/Contact" className='Link'>Contact</Link>
                </ul>
            </nav>
            <div id='Hicon'>
            <i className="bi bi-search"></i>
            <i className="bi bi-person-fill"></i>
            <i className="bi bi-cart-check-fill"></i>
            </div>
        </header>
    )
}

export default Header

