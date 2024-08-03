import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

function Home() {
  return (
    <>
      <Header />


      <div id='HomeHeader'>
        <div id="HomeIner">
          <div className="HomeIner1">
            <h1>Select Your New Perfact Style</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quisquam, mollitia earum quae ut fugiat molestias ipsa..</p>
            <button className='btn'> Shop Now</button>
          </div>
          <div className="HomeIner2">
            <img src="Colorlib/watch.png" alt="" />
          </div>
        </div>
      </div>


      <div id='HomeSection1'>
        <div className="HomeChild">
          <div className="HomeChild1">
            <span>New Arrivals</span>
          </div>
          <div className="HomeChild2">
            <div className="HomeChild2A text-start">
              <img src="Colorlib//new_product1.png" alt="" />
              <h3>Thermo Ball Etip Gloves</h3>
              <p className='text-danger'>$ 45,743</p>
            </div>
            <div className="HomeChild2A text-start">
              <img src="Colorlib//new_product2.png" alt="" />
              <h3>Thermo Ball Etip Gloves</h3>
              <p className='text-danger'>$ 45,743</p>
            </div>
            <div className="HomeChild2A text-start">
              <img src="Colorlib//new_product3.png" alt="" />
              <h3>Thermo Ball Etip Gloves</h3>
              <p className='text-danger'>$ 45,743</p>
            </div>
          </div>
        </div>
      </div>

      <div id="HomeSection2">
        <div className="HomeChild4 p-2"><img src="Colorlib//gallery1.png" alt="" /></div>
        <div className="HomeChild4">
          <div className="HomeChild4A p-2">
            <img src="Colorlib//gallery2.png" alt="" />
          </div>
          <div className="HomeChild4A">
            <div className="HomeChild4Aa"><img src="Colorlib//gallery3.png" alt="" /></div>
            <div className="HomeChild4Aa"><img src="Colorlib//gallery4.png" alt="" /></div>
          </div>
        </div>
      </div>

      <div id='HomeSection1'>
        <div className="HomeChild">
          <div className="HomeChild1 text-center h-auto">
            <h1 className='h1 mb-3'>Popular item</h1> <br />
            <p className='font mb-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nostrum odit, deserunt consequatur error <br /> earum obcaecati incidunt quibusdam ex aperiam? Consectetur, delectus dignissimos?</p>
          </div>

          <div className="HomeChild2">
            <div className="HomeChild2A text-start">
              <img src="Colorlib//popular1.png" alt="" />
              <h3 className='text-center'>Thermo Ball Etip Gloves</h3>
              <p className='text-danger text-center'>$ 45,743</p>
            </div>

            <div className="HomeChild2A text-start">
              <img src="Colorlib//popular2.png" alt="" />
              <h3 className='text-center'>Thermo Ball Etip Gloves</h3>
              <p className='text-danger text-center'>$ 45,743</p>
            </div>

            <div className="HomeChild2A text-start">
              <img src="Colorlib//popular3.png" alt="" />
              <h3 className='text-ceter'>Thermo Ball Etip Gloves</h3>
              <p className='text-danger text-center'>$ 45,743</p>
            </div>
          </div>

        </div>
      </div>


      <div id='HomeSection1'>
        <div className="HomeChild">
          <div className="HomeChild2">
            <div className="HomeChild2A text-start">
              <img src="Colorlib//popular4.png" alt="" />
              <h3 className='text-center'>Thermo Ball Etip Gloves</h3>
              <p className='text-danger text-center'>$ 45,743</p>
            </div>

            <div className="HomeChild2A text-start">
              <img src="Colorlib//popular5.png" alt="" />
              <h3 className='text-center'>Thermo Ball Etip Gloves</h3>
              <p className='text-danger text-center'>$ 45,743</p>
            </div>

            <div className="HomeChild2A text-start">
              <img src="Colorlib//popular6.png" alt="" />
              <h3 className='text-ceter'>Thermo Ball Etip Gloves</h3>
              <p className='text-danger text-center'>$ 45,743</p>
            </div>
          </div>
        </div>
      </div>


      <div id='HomeSection3'>
        <div className="HomeChild5 text-start">
          <h1>Watch Of Choice</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, <br /> non ea? Ad, laborum possimus cumque eius dolores alias minima <br /> et quibusdam autem, nisi inventore..</p>
          <button className='bg-danger text-light btn'> SHOW WATHES</button>
        </div>
        <div className="HomeChild6 p-0">
          <img src="Colorlib//choce_watch1.png" alt=""/>
        </div>
      </div>


      <div id='HomeSection3'>
        <div className="HomeChild6 p-0">
          <img src="Colorlib//choce_watch2.png" alt=""/>
        </div>
        <div className="HomeChild5 text-start">
          <h1>Watch Of Choice</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, <br /> non ea? Ad, laborum possimus cumque eius dolores alias minima <br /> et quibusdam autem, nisi inventore..</p>
          <button className='bg-danger text-light btn'> SHOW WATHES</button>
        </div>
      </div>

      <div id="HomeSection4">
        <div className="HomeChild7 text-light">
          <div className="HomeChild7A text-start">
          <i className="bi bi-box-seam"></i>
            <h2>Free Shipinh Method </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur maxime, rem, enim </p>
          </div>
          <div className="HomeChild7A text-start">
          <i className="bi bi-lock"></i>
            <h2>Secure Payment System</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur maxime, rem, enim </p>
          </div>
          <div className="HomeChild7A text-start">
          <i className="bi bi-recycle"></i>
            <h2>Secure Payment System</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur maxime, rem, enim </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home