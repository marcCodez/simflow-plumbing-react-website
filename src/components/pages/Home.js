import React from 'react'
import HeaderContent from '../HeaderContent';
import Testimonials from '../Testimonials';
import Promotions from '../Promotions';

function Home() {
    return (
        <>
            <HeaderContent/>
            <div className="coupons">
            <Promotions image="/images/plumb1.jpg" discount="20% Off Pensioners Discount"/>
            <Promotions image="/images/plumb2.jpg" discount="Free garden tap replacement on any job over $250 ts and cs apply"/>
            </div>
            <Testimonials />
        </>
    )
}

export default Home
