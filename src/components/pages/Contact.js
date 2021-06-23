import React from 'react'
import { Container, Card, Row, Col, Form, Button} from 'react-bootstrap';

function Contact() {
    return (
        <>
        <section id="contact">
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
                            <Form 
                                className="p-3"
                                name="contact" 
                                method="post" 
                                data-netlify="true" 
                                onSubmit="submit"
                                data-netlify-honeypot='bot-field'
                                >
                                    <Form.Control type="hidden" name="form-name" value="contact"/>
                                    <div hidden>
                            <input name="bot-field"/>
                        </div>
                            <p className="text-center font-weight-bold">Alternatively call Nicholas on 0406 300 310</p>
                            <Form.Row className="my-5">
                                <Col lg={6}>
                                <Form.Control required name="full-name" className="effect-1" type="text" placeholder="Full name*" />
                                <span className="focus-border"></span>
                                </Col>
                                <Col lg={6}>
                                <Form.Control required name="phone-number" className="effect-1" type="tel" placeholder="Phone Number*" />
                                <span className="focus-border"></span>
                                </Col>
                                </Form.Row>
                                <Form.Row className="pb-4">
                                <Col lg={6}>
                                <Form.Control required name="email" className="effect-1" type="email" placeholder="Email Address*" />
                                <span className="focus-border"></span>
                                </Col>
                                <Col lg={6}>
                                <Form.Control required name="suburb" className="effect-1" type="text" placeholder="Suburb*" />
                                <span className="focus-border"></span>
                                </Col>
                                </Form.Row>
                                <Form.Row className="pt-5">
                                    <Col lg={12}>
                                    <Form.Control name="message" className="effect-1" as="textarea" rows={3} placeholder="Type Your Message"/>
                                    <span className="focus-border"></span>
                                    </Col>
                                </Form.Row>

                                <Form.Row className="pt-4">
                                    <Col lg={12} className="d-flex justify-content-end">
                                    <div data-netlify-recaptcha='true'></div>
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
