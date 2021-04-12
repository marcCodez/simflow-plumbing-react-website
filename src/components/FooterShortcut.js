import React from 'react'
import { Link } from 'react-router-dom';

function FooterShortcut() {
    return (
        <>
          
        <div className="footershortcut-container">
      
            <img src="/images/logo-black.png" className="logo-black"/>
            <p className="footer-about">Simflow Plumbing provides a fully licensed and insured 24/7 plumbing service for the Greater Sydney region. We offer a variety of indoor and outdoor home plumbing services evolving around maintenance, renovations, house extensions and more! 

We have over 10 years of experience in the plumbing & gas industry. We guarantee a friendly and reliable service and are always sure to consider the best interest of you, the customer, in our honest up front pricing.

</p>

            <h4 className="links-header">Useful Links</h4>
            <div className="useful-links">
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Services</Link>
            <Link>Promotions</Link>
            <Link>Contact</Link>
            </div>
            
          
            <h4 className="contact-header">Get In Touch</h4>
            <div className="footer-contact">
            <p>Nicholas Simler | Founder</p>
       <p> <span> <i className='fa fa-phone'/> </span> 0406 300 310</p>
            <button className="book-now">Book Now</button>
            </div>

            <div className="socials">
            <h4 className="">Social Media</h4>
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
         
        </div>
        </>
    )
}

export default FooterShortcut
