import React from 'react';
import FooterShortcut from './FooterShortcut';

function Footer() {
    return (
        <>
        <FooterShortcut/>
        <footer className="footer-container">
            <p>© Copyright 2021 | All Rights Reserved</p>
            {/* <a 
            src="https://www.facebook.com/Simflowplumbing0/">
                <i className='fa fa-facebook-square'/>
             </a> */}
            <p className="abn">ABN 71 236 584 323</p>
            
        </footer>
        </>
    )
}

export default Footer
