import React from 'react'

function FooterShortcut() {
    return (
        <div className="footershortcut-container">
            <img src="/images/logo-black.png" />
            <p>Simflow Plumbing provides a fully licensed and insured 24/7 plumbing service for the greater Sydney region. With over 10 years of experience within the plumbing & gas industry we offer a variety of plumbing services along with friendly and reliable service and honest up front pricing.
            We strive to deliver constant and impressive results for our clients, this is through continued training and growth of our workers. We are dedicated to continue our knowledge and skills with the often changes to the plumbing industries technology, rules
            and codes of practice.</p>

            <h1>Useful Links</h1>


            <h1>Get In Touch</h1>
            <p>Nicholas Simler | Founder</p>
            <i className='fa fa-phone'/> <p>0406 300 310</p>
            <button>Book Now</button>

            <h1>Social Media</h1>
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
    )
}

export default FooterShortcut
