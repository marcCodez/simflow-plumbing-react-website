import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';


// IMPLEMENT BOOTSTRAP RESPONSIVENESS
function NavigationBar() {
    return (
                // <nav id="nav-bar">
                //      <img src="/images/logo.png" className="logo" />
                //         <ul className="nav-menu">
                //             <li><NavLink 
                //             exact to="/"
                //             className="nav-links"
                //              >Home</NavLink></li>
                //             <li><NavLink exact to="about" className="nav-links">About</NavLink></li>
                //             <li><NavLink exact to="services" className="nav-links" >Services</NavLink></li>
                //             <li><NavLink exact to="/contact" className="nav-links">Contact</NavLink></li>
                //         </ul>
                // </nav>
                <Navbar id="nav-bar" expand="lg">
                <Navbar.Brand href="#home"> <img src="/images/logo.png" className="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="d-lg-flex justify-content-end">
                  <Nav className="mr-auto">
                    <Nav.Link href="#home" className="nav-links">Home</Nav.Link>
                    <Nav.Link href="#link" className="nav-links">About</Nav.Link>
                    <Nav.Link href="#link" className="nav-links">Services</Nav.Link>
                    <Nav.Link href="#link" className="nav-links">Contact</Nav.Link>
                
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
    )
}

export default NavigationBar
