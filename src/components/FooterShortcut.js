import React from 'react'
import { Link } from 'react-router-dom';

function FooterShortcut() {
    return (
        <div className="footershortcut-container">
            <img src="/images/logo-black.png" className="logo-black"/>
            <p className="footer-about">Simflow Plumbing provides a fully licensed and insured 24/7 plumbing service for the greater Sydney region. With over 10 years of experience within the plumbing & gas industry we offer a variety of plumbing services along with friendly and reliable service and honest up front pricing.
            We strive to deliver constant and impressive results for our clients, this is through continued training and growth of our workers. We are dedicated to continue our knowledge and skills with the often changes to the plumbing industries technology, rules
            and codes of practice.</p>

            <h3 className="links-header">Useful Links</h3>
            <div className="useful-links">
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Services</Link>
            <Link>Promotions</Link>
            <Link>Contact</Link>
            </div>
            
          
            <h3 className="contact-header">Get In Touch</h3>
            <div className="footer-contact">
            <p>Nicholas Simler | Founder</p>
       <p> <span> <i className='fa fa-phone'/> </span> 0406 300 310</p>
            <button>Book Now</button>
            </div>

            <div className="socials">
            <h3>Social Media</h3>
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
    )
}

export default FooterShortcut
