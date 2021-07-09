import React from 'react'
import Button from 'react-bootstrap/Button';
import  Link  from 'react-router-dom/Link';

function Coupon(props) {
    return (
        <figure className="coupon">
            <img src={props.image} alt={props.alt} />
            <div className="coupon-container">
                <h2>{props.discount}</h2>
               <Link to="/contact"><Button className="enquire-button">Enquire Now</Button></Link> 
            </div>
        </figure>
    )
}

export default Coupon
