import "../Componet/Mycomponet.css"
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Componete() {
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
                    <li><a href="">BitMAX</a></li>
                    <li><a href="">BlockPort</a></li>
                    <li><a href="">LBANK</a></li>
                    <li><a href="">KOMODO</a></li>
                    <li><a href="">SATSHOT</a></li>
                    <li><a href="">BINANCE</a></li>
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
                                <h3>car Name</h3>
                                <p>Car Rent</p>


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
                                <h3>car Name</h3>
                                <p>Car Rent</p>

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
                                <h3>car Name</h3>
                                <p>Car Rent</p>

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
                                <h3>car Name</h3>
                                <p>Car Rent</p>

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
                                <h3>car Name</h3>
                                <p>Car Rent</p>

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
                                <h3>car Name</h3>
                                <p>Car Rent</p>

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
        </div>

    )
}
export default Componete