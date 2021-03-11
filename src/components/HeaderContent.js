import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function HeaderContent() {
    return (
        <div>
            <Carousel fade="true" interval="3000">
                <Carousel.Item>
                    <img className="d-block w-100" src="/images/work/p1.jpg" 
                    alt="Image one" style={{height: "100vh"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/images/work/p2.jpg" 
                    alt="Image one" style={{height: "100vh"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/images/work/p3.jpg" 
                    alt="Image two" style={{height: "100vh"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/images/work/p4.jpg" 
                    alt="Image three" style={{height: "100vh"}}
                    />
                </Carousel.Item>

            </Carousel>
            
        </div>
    )
}

export default HeaderContent
