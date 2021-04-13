import React from 'react'

function Coupon(props) {
    return (
        <section className="coupon">
            <img src={props.image} />
            <div className="container">
                <h2>{props.discount}</h2>
            </div>
        </section>
    )
}

export default Coupon
