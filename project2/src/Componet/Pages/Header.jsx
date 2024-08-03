import React from 'react'
import "../Pages/Style.css"
import { NavLink } from 'react-router-dom'

function Header() {
    return (

        <>
            <div className='myheader'>
                <div className='header'>
                    <div className="headerNav">
                        <div className="logo"><img src="attachment_75805705.png" alt="" /></div>
                        <div className="navbar">
                            <NavLink to="/Home" className='Link' activeClassName='active'>Home</NavLink>
                            <NavLink to="/Home" className='Link' activeClassName='active'>About</NavLink>
                            <NavLink to="/Home" className='Link' activeClassName='active'>Service</NavLink>
                            <NavLink to="/Home" className='Link' activeClassName='active'>UNIQUE FEATURE</NavLink>
                            <NavLink to="/Home" className='Link' activeClassName='active'>REVIEW</NavLink>
                            <NavLink to="/Home" className='Link' activeClassName='active'>FAQ</NavLink>
                            <NavLink to="/Home" className='Link' activeClassName='active'>PAGES</NavLink>
                        </div>
                    </div>
                    <div className="headerbody">

                    </div>
                </div>
            </div>

        </>
    )
}

export default Header