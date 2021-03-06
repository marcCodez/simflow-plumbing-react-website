import React, {useEffect} from 'react';
import { Container, Card, Row, Col} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 3000});
}, [])
    return (
        <Container fluid className="testimonials">
            <Container>
            <h1 data-aos="fade-left" className="heading">Testimonials</h1>
            <div data-aos="fade-left" className="underline"></div>

            <Row>
            <Col xs={12} md={4}>
            <Card data-aos="fade-right">
  <Card.Body>
    <Card.Title aria-label="first testimonial name" className="name">Sandra</Card.Title>
    <div className="stars" role="presentation">
                <i className="fa fa-star" alt="star"></i>
                <i className="fa fa-star" alt="star"></i>
                <i className="fa fa-star" alt="star"></i>
                <i className="fa fa-star" alt="star"></i>
                <i className="fa fa-star" alt="star"></i>
              </div>
    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
    <Card.Text>
    Nick from Simflow plumbing was great to work with, i needed emergency work done at my home and he made me feel comfortable was fast, efficient and the job was well done. I highly recommend Simflow plumbing for any of your plumbing needs
    </Card.Text>
  </Card.Body>
</Card>
          </Col>

          <Col xs={12} md={4} className="card2">
          <Card data-aos="fade-right">
  <Card.Body>
    <Card.Title className="name" aria-label="second testimonial name">Daniel</Card.Title>
    <div className="stars" role="presentation">
                <i className="fa fa-star" alt="star"></i>
                <i className="fa fa-star" alt="star"></i>
                <i className="fa fa-star" alt="star"></i>
                <i className="fa fa-star" alt="star"></i>
                <i className="fa fa-star" alt="star"></i>
              </div>
    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
    <Card.Text>
    Needed a job done urgently. Nick gave me by far the best quote and completed the job the same day. Will definitely be coming back in the future. Extremely satisfied with the work done.
    </Card.Text>
  </Card.Body>
</Card>
          </Col>

          <Col xs={12} md={4} className="card3">
            <Card data-aos="fade-right">
  <Card.Body>
    <Card.Title className="name" aria-label="third testimonial name">Anthony</Card.Title>
    <div className="stars" role="presentation">
                <i className="fa fa-star" alt="star"></i>
                <i className="fa fa-star" alt="star"></i>
                <i className="fa fa-star" alt="star"></i>
                <i className="fa fa-star" alt="star"></i>
                <i className="fa fa-star" alt="star"></i>
              </div>
    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
    <Card.Text>
    Nick was a delight to work with as he delivers on his promises and is always punctual. Would highly recommend.
    </Card.Text>
  </Card.Body>
</Card>
          </Col>
            </Row>
            </Container>
        </Container>
    )
}

export default Testimonials
