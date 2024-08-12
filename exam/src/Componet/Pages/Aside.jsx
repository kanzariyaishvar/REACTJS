import React from 'react'
import { Link } from 'react-router-dom'

function Aside() {
  return (
    <>
    <aside className="sidebar">
            <div className="logo">
                <img src="assets//images/logos/favicon.png" alt="Modernize Logo" />
                <h2>Modernize</h2>
            </div>
                <nav>
                <Link className='link' to="/"><i class="bi bi-house-door-fill"></i> DashBord</Link> <br />
                <Link className='link' to="/AddProduct"> <i class="bi bi-box2-fill"></i> Add Product</Link> <br />
                <Link className='link' to="/ViewProduct"><i class="bi bi-eye-fill"></i> ViewProduct</Link> <br />
                </nav>
        </aside>
    </>
  )
}

export default Aside