import React from 'react';
import { NavLink } from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';



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
                <Navbar.Brand> <NavLink exact to="/"  exact={true}><img src="/images/logo.png" className="logo" /></NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                  <Nav className="">
                  <NavLink exact to="/" className="nav-links" activeClassName="is-active" exact={true}>Home</NavLink>
                    <NavLink exact to="/about" className="nav-links" activeClassName="is-active">About</NavLink>
                    <NavLink exact to="/services" className="nav-links" activeClassName="is-active">Services</NavLink>
                    <NavLink exact to="/contact" className="nav-links" activeClassName="is-active">Contact</NavLink>
                
                  </Nav>
                </Navbar.Collapse>
                
              </Navbar>

    )
}

export default NavigationBar
