import React from 'react'
import Footer from '../Footer'
import MainHeader from '../Header'

function Home() {
    return (
        <div>
            <MainHeader />

            <header>
                <div className="bigHeader">
                    <div className="HomeHeaderBox1 p-2">
                        <h1>Nike New <br /> Collection !</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi esse vitae dignissimos expedita ipsa neque voluptatum dolore ducimus dolor at! Maiores tenetur hic voluptas iure nobis ipsum sit expedita dolor!</p>
                        <button>+</button><span>ADD TO BAG</span>
                    </div>
                    <div className="HomeHeaderBox2">
                        <img src="banner-img.png" alt="" />
                    </div>
                </div>
            </header>

            <div className="HomeParent">
                <div className="HomeContainer">
                    <div className="HomeChild">
                        <i class="bi bi-truck"></i>
                        <h2>Freee delivery</h2>
                        <p>Free Shiping on all order</p>
                    </div>
                    <div className="HomeChild">
                        <i class="bi bi-arrow-clockwise"></i>
                        <h2>Return Policy</h2>
                        <p>Free Shiping on all order</p>
                    </div>
                    <div className="HomeChild">
                        <i class="bi bi-headset"></i>
                        <h2>24/7 Support</h2>
                        <p>Free Shiping on all order</p>
                    </div>
                    <div className="HomeChild">
                        <i class="bi bi-database-fill"></i>
                        <h2>Secure Payment</h2>
                        <p>Free Shiping on all order</p>
                    </div>
                </div>
            </div>


            <div className="HomeSection">
                <div className='HomeParent_1'>
                    <div className="HomeChild1">
                        <div className="HomeChildInner1">
                            <div className='row_1 row'>
                                <div className="HomeChildBox w-75 p-2"><img src="c1.jpg" alt="" /></div>
                                <div className="HomeChildBox w-25 p-2"><img src="c2.jpg" alt="" /></div>
                            </div>
                            <div className='row_2 row'>
                                <div className="HomeChildBox w-25 p-2"><img src="c3.jpg" alt="" /></div>
                                <div className="HomeChildBox w-75 p-2"><img src="c4.jpg" alt="" /></div>
                            </div>
                        </div>
                        <div className="HomeChildInner2">
                            <img src="c5.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="HomeSection1">
                <div className="HomeSlider">
                    {/* <div classNameName="HomeSlider">
                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <div className="carousel-caption">
                                    <h1><i class="bi bi-boxes text-dark fs-2"></i></h1>
                                        <h5>LATEST PRODUCT</h5>
                                        <p>Lorem ipsum dolor sit amet .  corrupti ratione minima adipisci iure delectus quisquam consequatur accusamus odio a, doloribus eum ea nam neque?</p>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <div className="carousel-caption">
                                    <h1><i class="bi bi-boxes text-dark fs-2"></i></h1>
                                        <h5>COMMING PRODUCT</h5>
                                        <p>Lorem ipsum dolor sit amet .  corrupti ratione minima adipisci iure delectus quisquam consequatur accusamus odio a, doloribus eum ea nam neque?</p>
                                    </div>
                                </div>
                               
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> 
                            </div>
                        </div>
                    </div> */}
                    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active d-none" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" className='d-none'></button>
                            {/* <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3 display-none"></button> */}
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <div class="carousel-caption d-none d-md-block">
                                    <h1><i class="bi bi-boxes text-dark fs-2"></i></h1>
                                    <h5>LATEST PRODUCT</h5>
                                    <p>Lorem ipsum dolor sit amet .  corrupti ratione minima delectus quisquam consequatur accusamus odio a, doloribus eum ea nam neque?</p>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="carousel-caption d-none d-md-block">
                                    <h1><i class="bi bi-boxes text-dark fs-2"></i></h1>
                                    <h5>COMMING PRODUCT</h5>
                                    <p>Lorem ipsum dolor sit amet .  corrupti ratione minima  delectus quisquam consequatur accusamus odio a, doloribus eum ea nam neque?</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span class="text-dark" aria-hidden="true">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span class="text-dark" aria-hidden="true">Next</span>
                        </button>
                    </div>
                </div>
            </div>




            <div className="HomeSection2">
                <div className="HomeParent2">
                    <div className="product-container">
                        <div className="Home-product-card">
                            <img src="p1.jpg" alt="Product 1" />
                            <h3>ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON</h3>
                            <p className="price">$150.00 <span class="old-price">$210.00</span></p>
                            <div className="icons">
                                <i className="bi bi-bag-check-fill"></i>
                                <i className="bi bi-heart"></i>
                                <i className="bi bi-arrow-repeat"></i>
                                <i className="bi bi-arrows-move"></i>
                            </div>
                        </div>
                        <div className="Home-product-card">
                            <img src="p2.jpg" alt="Product 2" />
                            <h3>ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON</h3>
                            <p className="price">$150.00 <span class="old-price">$210.00</span></p>
                            <div className="icons">
                                <i className="bi bi-bag-check-fill"></i>
                                <i className="bi bi-heart"></i>
                                <i className="bi bi-arrow-repeat"></i>
                                <i className="bi bi-arrows-move"></i>
                            </div>
                        </div>
                        <div className="Home-product-card">
                            <img src="p3.jpg" alt="Product 3" />
                            <h3>ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON</h3>
                            <p className="price">$150.00 <span class="old-price">$210.00</span></p>
                            <div className="icons">
                                <i className="bi bi-bag-check-fill"></i>
                                <i className="bi bi-heart"></i>
                                <i className="bi bi-arrow-repeat"></i>
                                <i className="bi bi-arrows-move"></i>
                            </div>
                        </div>
                        <div className="Home-product-card">
                            <img src="p4.jpg" alt="Product 4" />
                            <h3>ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON</h3>
                            <p className="price">$150.00 <span class="old-price">$210.00</span></p>
                            <div className="icons">
                                <i className="bi bi-bag-check-fill"></i>
                                <i className="bi bi-heart"></i>
                                <i className="bi bi-arrow-repeat"></i>
                                <i className="bi bi-arrows-move"></i>
                            </div>
                        </div>
                    </div>

                    <div className="product-container">
                        <div className="Home-product-card">
                            <img src="p5.jpg" alt="Product 1" />
                            <h3>ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON</h3>
                            <p className="price">$150.00 <span class="old-price">$210.00</span></p>
                            <div className="icons">
                                <i className="bi bi-bag-check-fill"></i>
                                <i className="bi bi-heart"></i>
                                <i className="bi bi-arrow-repeat"></i>
                                <i className="bi bi-arrows-move"></i>
                            </div>
                        </div>
                        <div className="Home-product-card">
                            <img src="p6.jpg" alt="Product 2" />
                            <h3>ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON</h3>
                            <p className="price">$150.00 <span class="old-price">$210.00</span></p>
                            <div className="icons">
                                <i className="bi bi-bag-check-fill"></i>
                                <i className="bi bi-heart"></i>
                                <i className="bi bi-arrow-repeat"></i>
                                <i className="bi bi-arrows-move"></i>
                            </div>
                        </div>
                        <div className="Home-product-card">
                            <img src="p7.jpg" alt="Product 3" />
                            <h3>ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON</h3>
                            <p className="price">$150.00 <span class="old-price">$210.00</span></p>
                            <div className="icons">
                                <i className="bi bi-bag-check-fill"></i>
                                <i className="bi bi-heart"></i>
                                <i className="bi bi-arrow-repeat"></i>
                                <i className="bi bi-arrows-move"></i>
                            </div>
                        </div>
                        <div className="Home-product-card">
                            <img src="p8.jpg" alt="Product 4" />
                            <h3>ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON</h3>
                            <p className="price">$150.00 <span class="old-price">$210.00</span></p>
                            <div className="icons">
                                <i className="bi bi-bag-check-fill"></i>
                                <i className="bi bi-heart"></i>
                                <i className="bi bi-arrow-repeat"></i>
                                <i className="bi bi-arrows-move"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="HomeSection3">
                <div className="HomeParent3">
                    <div className="HomeChild3">
                        <img src="bn.jpg" alt="" />
                        <div className='filter'>
                            <div className="HomeTextBox">
                                <h1>Exclusive Hot Deal Ends Soon!</h1>
                                <p>Who are in extremely love with eco friendly system.</p>
                            </div>
                        </div>
                    </div>
                    <div className="HomeChild3"></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home