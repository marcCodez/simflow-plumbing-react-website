import React from 'react';
import Coupon from './Coupon';

function Promotions() {
    return (
        <div className="promotions">
            <div className="inner">
        <h1 className="heading">Promotions</h1>
        <div className="underline-b"></div>

        <div className="coupons">
        <Coupon image="/images/plumb1.jpg" discount="20% Off  - Pensioners Discount - 20% Off"/>
        <Coupon image="/images/plumb2.jpg" discount="Free garden tap replacement on any job over $250 Ts & Cs apply"/>
        </div>
        </div>
        </div>
        
    )
}

export default Promotions
