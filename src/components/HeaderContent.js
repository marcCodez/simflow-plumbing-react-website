import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

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


            <a>
                <span>Get A Quote</span>
                <div className="liquid"></div>
                </a>
          
      
        </header>
    )
}

export default HeaderContent
