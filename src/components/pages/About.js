import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';

function About() {
    return (
        <Container fluid id="about" className="text-center py-5">
            <Container>
                <Row >
                    <Col xs={12} md={6}>
                    <div className="heading">
                        <h1>About Us</h1>
                        <div className="underline-b"></div>
                    </div>
                    <div className="d-flex flex-column align-content-center mt-5">
                    <p >Simflow Plumbing provides a fully licensed and insured 24/7 plumbing service for the Greater Sydney region. We offer a variety of indoor and outdoor home plumbing services evolving around maintenance, renovations, house extensions and more! </p>

<p >We have over 10 years of experience in the plumbing & gas industry. We guarantee a friendly and reliable service and are always sure to consider the best interest of you, the customer, in our honest up front pricing.</p>

<p >At Simflow, we are always striving to  learn and improve through continued training and growth of our workers. We are dedicated to the continuous development of our people skills and plumbing knowledge to ensure we make our mark in the ever changing and developing plumbing industry. </p>
</div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex flex-column align-items-center">
                    
                <img src="/images/work/p7.jpg" className="about-image" alt="simflow work of a hot water system"/>
                <img src="/images/work/p9.jpg" className="about-image-2" alt="simflow work of water tank"/>
                    </Col>
                </Row>
  
                  
                   

          
            </Container>
            
        </Container>
    )
}

export default About
