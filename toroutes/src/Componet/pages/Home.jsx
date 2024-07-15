import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Home.css'



function Home() {
    return (
        <div id="main">
            <header>
                <div id="nav">
                    <Navbar expand="lg" className="bg-body-tertiary">
                        <Container className="navbar">
                            <Navbar.Brand href="#home" className="logo"><p>Car Decor</p><img src="image.png" alt="" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto h-100">
                                    <Nav.Link href="#home" className="link">Home</Nav.Link>
                                    <Nav.Link href="#link" className="link">About</Nav.Link>
                                    <Nav.Link href="#link" className="link">Service</Nav.Link>
                                    <Nav.Link href="#link" className="link">Vehicle</Nav.Link>
                                    <Nav.Link href="#link" className="link">FAQ</Nav.Link>
                                    <Nav.Link href="#link" className="link">+91 789 456 123</Nav.Link>
                                    <Nav.Link href="#link" className="link"><button>Sign In</button></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div id="bigHeader">
                    <div className="header_part_1">
                        <div id="box">
                            <div id="man"><img src="man.png" alt="" /></div>
                            <div id="img"><img src="i1.png" alt="" /></div>
                        </div>
                    </div>
                    <div className="header_part_2">
                        <b>About Us</b>
                        <h1>OUR COMMITMENT TO YOUR  COMFORT AND SATISFACTION</h1>
                        <p>Lorem ipsum dolor sit  . Neque culpa rerum et aperiam  maxime. Eligendi,
                            magnam  aperiam dolores a adipisci voluptatibus fugit.</p>
                        <br />

                        <span>24/7 Online Booking</span><br />
                        <span>Diverse Vehicle Selection</span><br />
                        <span>Flexible Pick_up And Drop_off Location</span>
                    </div>
                </div>
            </header>

            <div id="second_nav">
                <ul>
                    <li><a href=""><img src="logo (1).jpg" alt="" /> Mahindra</a></li>
                    <li><a href=""><img src="logo (3).png" alt="" /> Suzuki</a></li>
                    <li><a href=""><img src="new (1).png" alt="" /> BMW</a></li>
                    <li><a href=""><img src="logo (2).png" alt="" /> mercedes</a></li>
                    <li><a href=""><img src="new (2).png" alt="" />Jguar</a></li>
                    <li><a href=""><img src="new (3).png" alt="" />Honda</a></li>
                </ul>
            </div>

            <div id="section_1">
                <div id="parent_1">
                    <div id="child_1">
                        <b>Our Vehicle</b>
                        <h2>WXPLORE OUR TOP DEAL</h2>
                        <button>See More Vehicle</button>
                    </div>

                    <div id="child_2">

                        <div className="child_in">
                            <div className="child_in_in">
                                <img src="car (1).png" alt="" />
                                <h3>Lamborgono</h3>
                                <p>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                </p>


                                <div className="item">
                                    <span><i class="bi bi-person-circle"></i></span>
                                    <span><i class="bi bi-fuel-pump"></i></span>
                                    <span><i class="bi bi-speedometer"></i></span>
                                    <span><i class="bi bi-credit-card-2-back"></i></span>
                                </div>

                                <div className="item_1">
                                    <p>Seat</p>
                                    <p>Diesel</p>
                                    <p>15k</p>
                                    <p>AC</p>
                                </div>
                                <button>Rent Now</button>
                            </div>
                            <div className="child_in_in">
                                <img src="car (2).png" alt="" />
                                <h3>Mercedes</h3>
                                <p><i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i></p>

                                <div className="item">
                                    <span><i class="bi bi-person-circle"></i></span>
                                    <span><i class="bi bi-fuel-pump"></i></span>
                                    <span><i class="bi bi-speedometer"></i></span>
                                    <span><i class="bi bi-credit-card-2-back"></i></span>
                                </div>

                                <div className="item_1">
                                    <p>Seat</p>
                                    <p>Diesel</p>
                                    <p>15k</p>
                                    <p>AC</p>
                                </div>
                                <button>Rent Now</button>
                            </div>
                            <div className="child_in_in">
                                <img src="car (3).png" alt="" />
                                <h3>Volvo</h3>
                                <p><i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i></p>

                                <div className="item_1">
                                    <span><i class="bi bi-person-circle"></i></span>
                                    <span><i class="bi bi-fuel-pump"></i></span>
                                    <span><i class="bi bi-speedometer"></i></span>
                                    <span><i class="bi bi-credit-card-2-back"></i></span>
                                </div>

                                <div className="item_1">
                                    <p>Seat</p>
                                    <p>Diesel</p>
                                    <p>15k</p>
                                    <p>AC</p>
                                </div>
                                <button>Rent Now</button>
                            </div>
                        </div>
                        <div className="child_in">
                            <div className="child_in_in">
                                <img src="car (4).png" alt="" />
                                <h3>Lamborgini</h3>
                                <p><i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i></p>

                                <div className="item_1">
                                    <span><i class="bi bi-person-circle"></i></span>
                                    <span><i class="bi bi-fuel-pump"></i></span>
                                    <span><i class="bi bi-speedometer"></i></span>
                                    <span><i class="bi bi-credit-card-2-back"></i></span>
                                </div>
                                <div className="item_1">
                                    <p>Seat</p>
                                    <p>Diesel</p>
                                    <p>15k</p>
                                    <p>AC</p>
                                </div>
                                <button>Rent Now</button>
                            </div>
                            <div className="child_in_in">
                                <img src="car (5).png" alt="" />
                                <h3>Farari</h3>
                                <p><i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i></p>

                                <div className="item_1">
                                    <span><i class="bi bi-person-circle"></i></span>
                                    <span><i class="bi bi-fuel-pump"></i></span>
                                    <span><i class="bi bi-speedometer"></i></span>
                                    <span><i class="bi bi-credit-card-2-back"></i></span>
                                </div>
                                <div className="item_1">
                                    <p>Seat</p>
                                    <p>Diesel</p>
                                    <p>15k</p>
                                    <p>AC</p>
                                </div>
                                <button>Rent Now</button>
                            </div>
                            <div className="child_in_in">
                                <img src="car (6).png" alt="" />
                                <h3>Toyota Supra</h3>
                                <p>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                </p>

                                <div className="item_1">
                                    <span><i class="bi bi-person-circle"></i></span>
                                    <span><i class="bi bi-fuel-pump"></i></span>
                                    <span><i class="bi bi-speedometer"></i></span>
                                    <span><i class="bi bi-credit-card-2-back"></i></span>
                                </div>
                                <div className="item_1">
                                    <p>Seat</p>
                                    <p>Diesel</p>
                                    <p>15k</p>
                                    <p>AC</p>
                                </div>
                                <button>Rent Now</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div id="section_2">
                <div id="parent_2">
                    <div id="child_3">
                        <img src="online.jpg" alt="" />
                    </div>
                    <div id="child_4">
                        <b>Our App</b>
                        <h1>ONE APP MILLIONS <br /> OF USERS</h1>
                        <p>Lorem ipsum dolor sit  . Neque culpa rerum et aperiam  maxime. Eligendi,
                            magnam  aperiam dolores Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit mollitia commodi temporibus quas a adipisci voluptatibus fugit.</p>
                        <br />
                            
                            <button>Lern More</button>
                    </div>
                </div>
            </div>

            <footer>
                <div id="in_foot">
                <div id="parent_footer">
                    <div id="F_in">
                        <h1>Car Decor</h1>
                        <p>Lorem elit. Culpa, quisquam obcaecati  voluptatem consequuntur </p>
                        <i class="bi bi-facebook"></i><i class="bi bi-instagram"></i><i class="bi bi-telegram"></i><i class="bi bi-whatsapp"></i>

                    </div>
                    <div id="F_in">
                        <h3>Accout</h3>
                        <li><a href="">Profile</a></li>
                        <li><a href="">Seting</a></li>
                        <li><a href="">Biling</a></li>
                        <li><a href="">Notification</a></li>
                    </div>
                    <div id="F_in">
                        <h3>About</h3>
                        <li><a href="">Carrear</a></li>
                        <li><a href="">Service</a></li>
                        <li><a href="">Princing</a></li>
                        <li><a href="">Contact</a></li>
                    </div>
                    <div id="F_in">
                        <h3>Company</h3>
                        <li><a href="">Community</a></li>
                        <li><a href="">Help Center</a></li>
                        <li><a href="">Biling</a></li>
                        <li><a href="">Support</a></li>
                    </div>
                </div>
                </div>
            </footer>

        </div>

    )
}
export default Home