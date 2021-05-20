import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';

function HeaderContent() {
    return (
        <header id="header-container">
           
            <Carousel id="header-carousel"  interval="3000">

                <Carousel.Item style={{'height':"900px"}}>
                    <img className="d-block w-100" src="/images/work/p1.jpg" 
                    alt="Image one" style={{height: "100%"}}
                    />
                    
                </Carousel.Item>
                <Carousel.Item style={{'height':"900px"}}>
                    <img className="d-block w-100" src="/images/work/p2.jpg" 
                    alt="Image one" style={{height: "100%"}}
                    />
                </Carousel.Item>
                <Carousel.Item style={{'height':"900px"}}>
                    <img className="d-block w-100" src="/images/work/p3.jpg" 
                    alt="Image two" style={{height: "100%"}}
                    />
                </Carousel.Item>
                <Carousel.Item style={{'height':"900px"}}>
                    <img className="d-block w-100" src="/images/work/p4.jpg" 
                    alt="Image three" style={{height: "100%"}}
                    />
                </Carousel.Item>
             
            
            </Carousel>

        <Link to="/contact" style={{ textDecoration: 'none' }}>
            <a className="quote-button">
                <span className="quote-text">Get Quote</span>
                <div className="liquid"></div>
                </a>
                </Link>
          
      
        </header>
    )
}

export default HeaderContent