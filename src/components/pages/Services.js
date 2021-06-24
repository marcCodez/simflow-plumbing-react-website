import React from 'react'

import {Button, Card, Container, Row, Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Services() {
    return (
        <Container fluid className="py-5">
             <h1 className="text-center">Our Services</h1>
            <div className="underline-b"></div>
            <Container className="services" >

        
            <Row className="card-services">
     
                <Col xs={6} md={4} lg={3} className="service-card" >
                <NavLink exact to="/contact">
                    <Card className="service">
                        <Card.Img className="card-img" variant="top"  src="/images/work/p19.jpeg
                        " alt=""/>
                        <Card.Body> 
                    <Card.Text className="text-center service-text">
                        Same Day Services
                    </Card.Text>
                    </Card.Body>
                    <div className="service-overlay color-overlay">
                            <div className="book-now">TAP TO BOOK NOW</div>
                        </div>
                    </Card>
                    </NavLink>
       
                </Col>
     
                <Col xs={6} md={4} lg={3} className="service-card" >
                <NavLink exact to="/contact">
                         <Card className="service">
                        <Card.Img className="card-img" variant="top"  src="/images/work/p21.jpeg
                        " alt="" />
                        <Card.Body> 
                    <Card.Text className="text-center service-text">
                        Leaking Pipes
                    </Card.Text>
                    </Card.Body>
                    <div className="service-overlay color-overlay">
                            <div className="book-now">TAP TO BOOK NOW</div>
                        </div>
         
                    </Card>
                    </NavLink>
                </Col>
                <Col xs={6} md={4} lg={3} className="service-card">
                <NavLink exact to="/contact">
                <Card className="service">
                        <Card.Img className="card-img" variant="top"  src="/images/work/p12.jpeg
                        " alt="" />
                        <Card.Body> 
                    <Card.Text className="text-center service-text">
                       All Gas Works
                    </Card.Text>
                    </Card.Body>
                    <div className="service-overlay color-overlay">
                            <div className="book-now">TAP TO BOOK NOW</div>
                        </div>
                
                    </Card>
                    </NavLink>
                </Col>
                <Col xs={6} md={4} lg={3} className="service-card">
                <NavLink exact to="/contact">
                <Card className="service">
                        <Card.Img className="card-img" variant="top"  src="/images/work/p5.jpg
                        " alt="" />
                        <Card.Body> 
                    <Card.Text className="text-center service-text">
                        Burst Pipes
                    </Card.Text>
                    </Card.Body>
                    <div className="service-overlay color-overlay">
                            <div className="book-now">TAP TO BOOK NOW</div>
                        </div>
     
                    </Card>
                    </NavLink>
                </Col>

                <Col xs={6} md={4} lg={3} className="service-card">
                <NavLink exact to="/contact">
                <Card className="service">
                        <Card.Img className="card-img" variant="top"  src="/images/work/p18.jpg
                        " alt="" />
                        <Card.Body> 
                    <Card.Text className="text-center service-text">
                       Blocked Drains
                    </Card.Text>
                    </Card.Body>
                    <div className="service-overlay color-overlay">
                            <div className="book-now">TAP TO BOOK NOW</div>
                        </div>
                    </Card>
                
                    </NavLink>
                </Col>
               
               
     
          
                <Col xs={6} md={4} lg={3} className="service-card">
                <NavLink exact to="/contact">
                <Card className="service">
                        <Card.Img className="card-img" variant="top" src="/images/work/p17.jpeg
                        " alt="" />
                        <Card.Body> 
                    <Card.Text className="text-center service-text">
                        Roof Leaks
                    
                    </Card.Text>
                    </Card.Body> 
                    <div className="service-overlay color-overlay">
                            <div className="book-now">TAP TO BOOK NOW</div>
                        </div>
                </Card>
                </NavLink>
                    </Col>
                <Col xs={6} md={4} lg={3} className="service-card">
                <NavLink exact to="/contact">
                <Card className="service">
                        <Card.Img className="card-img" variant="top" src="/images/work/p8.jpg
                        " alt="" />
                        <Card.Body> 
                    <Card.Text className="text-center service-text">
                      Free Quotes
                    
                    </Card.Text>
                    </Card.Body> 
                    <div className="service-overlay color-overlay">
                            <div className="book-now">TAP TO BOOK NOW</div>
                        </div>
            
                </Card>
                </NavLink>
                </Col>
                <Col xs={6} md={4} lg={3} className="service-card">
                <NavLink exact to="/contact">
                <Card className="service">
                        <Card.Img className="card-img" variant="top" src="/images/work/p13.jpeg
                        " alt="" />
                        <Card.Body> 
                    <Card.Text className="text-center service-text">
                       $0 Call Out Fee
                    
                    </Card.Text>
                    </Card.Body> 
                    <div className="service-overlay color-overlay">
                            <div className="book-now">TAP TO BOOK NOW</div>
                        </div>
                </Card>
                </NavLink>
            
                </Col>
                <Col xs={6} md={4} lg={3} className="service-card">
                <NavLink exact to="/contact">
                <Card className="service">
                        <Card.Img className="card-img" variant="top" src="/images/work/p15.jpeg
                        " alt="" />
                        <Card.Body> 
                    <Card.Text className="text-center service-text">
                       Leaking Taps
                    
                    </Card.Text>
                    </Card.Body> 
                    <div className="service-overlay color-overlay">
                            <div className="book-now">TAP TO BOOK NOW</div>
                        </div>
                </Card>
                </NavLink>

                </Col>
         
 
                <Col xs={6} md={4} lg={3} className="service-card">
                <NavLink exact to="/contact">
                <Card className="service">
                        <Card.Img className="card-img" variant="top" src="/images/work/p10.jpg
                        " alt="" />
                        <Card.Body> 
                    <Card.Text className="text-center service-text">
                       Leaking Toilets
                    
                    </Card.Text>
                    </Card.Body> 
                    <div className="service-overlay color-overlay">
                            <div className="book-now">TAP TO BOOK NOW</div>
                        </div>
                </Card>
                
                </NavLink>
                </Col>
                <Col xs={6} md={4} lg={3} className="service-card">
                <NavLink exact to="/contact">
                    <Card className="service">
                        <Card.Img className="card-img" variant="top" src="/images/work/p11.jpeg
                        " alt="" />
                        <Card.Body> 
                    <Card.Text className="text-center service-text">
                        Leaking Showers
                    
                    </Card.Text>
                    </Card.Body> 
                    <div className="service-overlay color-overlay">
                            <div className="book-now">TAP TO BOOK NOW</div>
                        </div>
                </Card>
                </NavLink>

                </Col>
                <Col xs={6} md={4} lg={3} className="service-card">
                <NavLink exact to="/contact">
                <Card className="service">
                    
                        <Card.Img className="card-img" variant="top" src="/images/services/cctv.jpg
                        " alt="" />
                        <Card.Body> 
                    <Card.Text className="text-center service-text">
                        CCTV Camera Inspections
                    
                    </Card.Text>
                    </Card.Body> 
                    <div className="service-overlay color-overlay">
                            <div className="book-now">TAP TO BOOK NOW</div>
                        </div>
                </Card>
                 
                </NavLink>
                </Col>
                <Col xs={6} md={4} lg={3} className="service-card">
                <NavLink exact to="/contact">
                <Card className="service">
                        <Card.Img className="card-img" variant="top" src="/images/work/p7.jpg
                        " alt="" />
                        <Card.Body> 
                    <Card.Text className="text-center service-text">
                    Hot Water System Repairs and Replacements 
                    </Card.Text>
                    </Card.Body> 
                    <div className="service-overlay color-overlay">
                            <div className="book-now">TAP TO BOOK NOW</div>
                        </div>
  
                </Card>
           
                </NavLink>
                </Col>
                 
                <Col xs={6} md={4} lg={3} className="service-card">
                <NavLink exact to="/contact">
                <Card className="service">
                        <Card.Img className="card-img" variant="top" src="/images/work/horiz3.jpeg
                        " alt="" />
                        <Card.Body> 
                    <Card.Text className="text-center service-text">
                        Bathroom and Kitchen Renovations
                    
                    </Card.Text>
                    </Card.Body> 
                    <div className="service-overlay color-overlay">
                            <div className="book-now">TAP TO BOOK NOW</div>
                        </div>
                </Card>
                  
                </NavLink>
                </Col>
            </Row>
              
            </Container>







           


        </Container>
    )
}

export default Services
