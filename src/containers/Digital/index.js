import React from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import {
  BsCheckCircle,
  BsGraphUp,
  BsPeopleFill,
  BsBarChartLine,
} from "react-icons/bs";


function DigitalMarketing() {
  return (
    <div className="bg-dark text-light">
      {/* Hero Section */}
      <Container fluid className="py-5 text-center">
        <h1 className="display-4 fw-bold">Digital Marketing</h1>
        <p className="lead mt-3 px-2">
          Grow your business with our proven digital marketing strategies. Reach your audience, increase conversions, and drive real results.
        </p>
        <Button variant="warning" size="lg" className="mt-3">
          Get Started
        </Button>
      </Container>

      {/* What We Offer */}
      <Container className="py-5">
        <h2 className="text-center mb-4">What We Offer</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 bg-dark text-light shadow-sm border border-secondary">
              <Card.Body>
                <Card.Title>SEO Optimization</Card.Title>
                <Card.Text>
                  Improve your search engine rankings and attract organic traffic with our comprehensive SEO solutions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 bg-dark text-light shadow-sm border border-secondary">
              <Card.Body>
                <Card.Title>Social Media Marketing</Card.Title>
                <Card.Text>
                  Engage your audience and build your brand on Facebook, Instagram, and LinkedIn with creative, consistent campaigns.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 bg-dark text-light shadow-sm border border-secondary">
              <Card.Body>
                <Card.Title>PPC Advertising</Card.Title>
                <Card.Text>
                  Drive instant, targeted traffic to your site with well-managed pay-per-click campaigns that convert visitors into customers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Additional Services */}
          <Col md={4}>
            <Card className="h-100 bg-dark text-light shadow-sm border border-secondary">
              <Card.Body>
                <Card.Title>Email Marketing</Card.Title>
                <Card.Text>
                  Reach your customers directly with compelling email campaigns that increase engagement and repeat business.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 bg-dark text-light shadow-sm border border-secondary">
              <Card.Body>
                <Card.Title>Web Design</Card.Title>
                <Card.Text>
                  Stand out with stunning, user-friendly designs that capture your brand and provide a smooth experience on any device.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 bg-dark text-light shadow-sm border border-secondary">
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  Build fast, secure, and scalable websites with our expert development team — from landing pages to e-commerce solutions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Why Choose Us + Query Form */}
      <Container fluid className="py-5 bg-dark">
        <Container>
          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 bg-dark text-light p-4 border border-secondary">
                <Card.Body>
                  <Card.Title as="h2" className="mb-4">
                    Why Choose Our Digital Marketing Services?
                  </Card.Title>
                  <Card.Text className="mb-4">
                    We’re not just another agency — we’re your growth partner. Our experienced marketers, designers, and strategists craft
                    personalized campaigns that deliver measurable ROI. From the first click to loyal repeat customers, we help you dominate
                    your market with confidence.
                  </Card.Text>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <BsCheckCircle className="me-2 text-warning" />
                      Decades of combined marketing expertise.
                    </li>
                    <li className="mb-3">
                      <BsGraphUp className="me-2 text-warning" />
                      ROI-focused campaigns backed by data.
                    </li>
                    <li className="mb-3">
                      <BsPeopleFill className="me-2 text-warning" />
                      Dedicated support with clear communication.
                    </li>
                    <li className="mb-3">
                      <BsBarChartLine className="me-2 text-warning" />
                      Detailed performance reports you can trust.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 bg-dark text-light p-4 border border-secondary d-flex flex-column justify-content-between">
                <Card.Body>
                  <Card.Title as="h4" className="mb-3">Request a Free Quote</Card.Title>
                  <Form className="flex-grow-1 d-flex flex-column">
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-4 flex-grow-1" controlId="formMessage">
                      <Form.Label>Your Query</Form.Label>
                      <Form.Control as="textarea" rows={5} placeholder="Tell us about your project..." className="flex-grow-1"/>
                    </Form.Group>
                    <Button variant="warning" type="submit" className="align-self-start">
                      Submit Query
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Call to Action */}
      <Container className="text-center py-5">
        <h2 className="mb-3">Ready to Elevate Your Online Presence?</h2>
        <Button variant="warning" size="lg">
          Contact Us Today
        </Button>
      </Container>
    </div>
  );
}

export default DigitalMarketing;
