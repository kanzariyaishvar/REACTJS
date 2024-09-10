import React from 'react'
import '../App.css'

function Footer() {
  return (
    <>
    <footer>
        <div className="footer row">
            <div className="footer-box col-sm-12 col-md-6 col-lg-3">
                <h3>About Us</h3>
                <p>Lorem ipsum dolor  elit. Nostrum illum consequuntur et consectetur, dolor enim modi atque.</p>
            </div>
            <div className="footer-box col-sm-12 col-md-6 col-lg-3">
                <h3>Newsletter</h3>
                <p>Stay Update with our latest</p>
                <input type="text" placeholder='Enter Email..'/><i class="bi bi-search"></i>
            </div>
            <div className="footer-box col-sm-12 col-md-6 col-lg-3">
                <h3>instagram feed</h3>
                <div className='feedpost row'>
                    <div className="feed col-lg-3 p-1"><img src="i1.jpg" alt="" /></div>
                    <div className="feed col-lg-3 p-1"><img src="i2.jpg" alt="" /></div>
                    <div className="feed col-lg-3 p-1"><img src="i3.jpg" alt="" /></div>
                    <div className="feed col-lg-3 p-1"><img src="i4.jpg" alt="" /></div>
                    <div className="feed col-lg-3 p-1"><img src="i5.jpg" alt="" /></div>
                    <div className="feed col-lg-3 p-1"><img src="i6.jpg" alt="" /></div>
                    <div className="feed col-lg-3 p-1"><img src="i7.jpg" alt="" /></div>
                    <div className="feed col-lg-3 p-1"><img src="i8.jpg" alt="" /></div>
                </div>
            </div>
            <div className="footer-box col-sm-12 col-md-6 col-lg-3">
                <h3>Follow us</h3>
                <p>let us be social</p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer