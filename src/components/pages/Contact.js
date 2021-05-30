import React from 'react'
import { Container, Card, Row, Col, Form, Button} from 'react-bootstrap';

function Contact() {
    return (
        <>
        <section class="contact">
            <Container fluid>
                <Container className="py-5">
                <Row>
                    <Col lg={6} className="mx-auto">
                    <Card >
                        <Card.Body>
                            <Row>
                                <Col lg={12}>
                                    <div className="head text-center text-white py-3">
                                        <h3>Contact Us</h3>
                                    </div>
                                </Col>
                            </Row>
                            <Form className="p-3">
                            <Form.Row className="my-5">
                                <Col lg={6}>
                                <Form.Control className="effect-1" type="text" placeholder="First name" />
                                <span className="focus-border"></span>
                                </Col>
                                <Col lg={6}>
                                <Form.Control className="effect-1" placeholder="Last name" />
                                <span className="focus-border"></span>
                                </Col>
                                </Form.Row>
                                <Form.Row className="pb-4">
                                    <Col lg={12}>
                                    <Form.Control className="effect-1" type="email" placeholder="Email Address" />
                                    <span className="focus-border"></span>
                                    </Col>
                                </Form.Row>
                                <Form.Row className="pt-5">
                                    <Col lg={12}>
                                    <Form.Control className="effect-1" type="email" placeholder="Your Message" />
                                    <span className="focus-border"></span>
                                    </Col>
                                </Form.Row>

                                <Form.Row className="pt-4">
                                    <Col lg={12} className="d-flex justify-content-end">
                                    <Button className="form-btn" type="submit">
                                         Submit
                                     </Button>
                                    </Col>
                                </Form.Row>
                            </Form>
                            
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>


            </Container>
            </Container>

        </section>
            
        </>
    )
}

export default Contact
