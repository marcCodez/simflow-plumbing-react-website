import React from 'react'
import Button from 'react-bootstrap/Button';

function Coupon(props) {
    return (
        <figure className="coupon">
            <img src={props.image} />
            <div className="coupon-container">
                <h2>{props.discount}</h2>
                <Button className="enquire-button">Enquire Now</Button>
            </div>
        </figure>
    )
}

export default Coupon
