import React from 'react'

function About() {
    return (
        <section id="about" className="text-center py-5">
            <div className="container">
                <div className="about-info">
                    <div className="heading">
                        <h1>About Us</h1>
                        <div className="underline-b"></div>
                    </div>
                    <p className="about-description">Simflow Plumbing provides a fully licensed and insured 24/7 plumbing service for the Greater Sydney region. We offer a variety of indoor and outdoor home plumbing services evolving around maintenance, renovations, house extensions and more! </p>

                    <p className="about-description-2">We have over 10 years of experience in the plumbing & gas industry. We guarantee a friendly and reliable service and are always sure to consider the best interest of you, the customer, in our honest up front pricing.</p>

                    <p className="about-description-3">At Simflow, we are always striving to  learn and improve through continued training and growth of our workers. We are dedicated to the continuous development of our people skills and plumbing knowledge to ensure we make our mark in the ever changing and developing plumbing industry. </p>
                <img src="/images/work/p7.jpg" className="about-image" />
                <img src="/images/work/p9.jpg" className="about-image-2" />
                </div>
            </div>
            
        </section>
    )
}

export default About
