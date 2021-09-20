import React, { useEffect } from 'react';
import Coupon from './Coupon';
import { Container, Row, Col} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Promotions() {
    useEffect(() => {
        AOS.init({ 
            duration: 5000,
            once: false,
            mirror: false
        });
    }, [])
    return (
        // <div className="promotions text-center py-3" >
        //     <div className="container">
        // <h1 className="heading">Promotions</h1>
        // <div className="underline-b"></div>

        // <div className="coupons">
        // <Coupon image="/images/plumb1.jpg" discount="20% Off  - Pensioners Discount - 20% Off"/>
        // <Coupon image="/images/plumb2.jpg" discount="Free garden tap replacement on any job over $250 Ts & Cs apply"/>
        // </div>
        // </div>
        // </div>

        <Container fluid className="promotions">
     
        <Container>
        <h1 data-aos="fade-left" className="heading">Promotions</h1>
        <div data-aos="fade-left" className="underline-b"></div>

            <Row >
                <Col data-aos="fade-right"  className="d-flex justify-content-center" xs={12} md={6}>
                <Coupon image="/images/plumb1.jpg" discount="20% Off Pensioners Discount" alt="first discount picture, fixing pipes"/>
                </Col>
                <Col data-aos="fade-right" className="d-flex justify-content-center" xs={12} md={6}>
                <Coupon image="/images/plumb3.jpeg" discount="Unblock drains from $99" alt="second discount picture, water drain"/>
                </Col>
            </Row>
            </Container>

        </Container>
        
    )
}

export default Promotions
