import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
                <nav id="nav-bar">
                     <img src="/images/logo.png" className="logo" />
                        <ul className="nav-menu">
                            <li><NavLink 
                            exact to="/"
                            className="nav-links"
                             >Home</NavLink></li>
                            <li><NavLink exact to="about" className="nav-links">About</NavLink></li>
                            <li><NavLink exact to="services" className="nav-links" >Services</NavLink></li>
                            <li><NavLink exact to="/contact" className="nav-links">Contact</NavLink></li>
                        </ul>
                </nav>
    )
}

export default Navbar
