import React from 'react';
import Coupon from './Coupon';
import { Container, Row, Col} from 'react-bootstrap';

function Promotions() {
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
        <h1 className="heading">Promotions</h1>
        <div className="underline-b"></div>

            <Row >
                <Col className="d-flex justify-content-center" xs={12} md={6}>
                <Coupon image="/images/plumb1.jpg" discount="20% Off  - Pensioners Discount - 20% Off"/>
                </Col>
                <Col className="d-flex justify-content-center" xs={12} md={6}>
                <Coupon image="/images/plumb2.jpg" discount="Free garden tap replacement on any job over $250 Ts & Cs apply"/>
                </Col>
            </Row>
            </Container>

        </Container>
        
    )
}

export default Promotions
