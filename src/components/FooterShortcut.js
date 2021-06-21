import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button} from 'react-bootstrap';

function FooterShortcut() {
    return (
        <>
<section className="footershortcut-container py-5">
        <Container fluid >
            <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                {/* Logo and short description */}
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="logo-class">
                <img src="/images/logo-black.png" className="logo-black img-fluid"/>
                </div>
              
            <p className="footer-about text-center">Simflow Plumbing provides a fully licensed and insured 24/7 plumbing service for the Greater Sydney region. We offer a variety of indoor and outdoor home plumbing services evolving around maintenance, renovations, house extensions and more! 

We have over 10 years of experience in the plumbing & gas industry. We guarantee a friendly and reliable service and are always sure to consider the best interest of you, the customer, in our honest up front pricing. 
</p> 

                </div>
               
                </Col>
                <Col xs={12} sm={12} md={3} lg={3}>
                {/* Quick Links */}
                    <h4 className="footer-heading text-center">Useful Links</h4>
                    <div className="useful-links d-flex flex-column justify-content-center align-items-center">
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Services</Link>
                    <Link>Promotions</Link>
                    <Link>Contact</Link>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={3} lg={3}>
                {/* Contact and socials */}
                    <h4 className="footer-heading text-center">Get In Touch</h4>
                <div className="footer-contact d-flex flex-column justify-content-center align-items-center mb-4">
                            <p>Nicholas Simler | Founder</p>
                    <p> <span> <i className='fa fa-phone'/> </span> 0406 300 310</p>
                            
                            <Button className="enquire-button">Book Now</Button>
                </div>

                <div className="socials d-flex flex-column justify-content-center align-items-center">
                <h4 className="footer-heading text-center">Social Media</h4>
                <a 
                        className='socials-link'
                        href='https://www.facebook.com/Simflowplumbing0'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                        >
                        <i className='fa fa-facebook-square'/>
                    </a>
                </div>
                </Col>
            </Row>
           
        </Container>
          
        </section>


            
          
         

        </>
    )
}

export default FooterShortcut
