import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

function EmailMarketing() {
  return (
    <div>
      {/* Hero Section */}
      <Container fluid className="bg-light py-5 text-center">
        <h1 className="display-4 fw-bold">Email Marketing</h1>
        <p className="lead mt-3">
          Build relationships, nurture leads, and drive conversions with effective email campaigns.
        </p>
        <Button variant="primary" size="lg" className="mt-3">
          Start Your Campaign
        </Button>
      </Container>

      {/* What We Offer */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Our Email Marketing Services</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Email Campaign Strategy</Card.Title>
                <Card.Text>
                  Customized strategies to target the right audience with the right message.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Template Design</Card.Title>
                <Card.Text>
                  Beautiful, mobile-responsive email templates that showcase your brand.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Automation & Segmentation</Card.Title>
                <Card.Text>
                  Automated workflows and list segmentation to deliver timely, relevant content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Why Choose Us */}
      <Container fluid className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2>Why Choose Our Email Marketing?</h2>
              <ul className="mt-3">
                <li>✅ Proven strategies that boost engagement and conversions</li>
                <li>✅ Transparent reporting and analytics</li>
                <li>✅ Dedicated email marketing specialists</li>
                <li>✅ Compliance with data protection regulations</li>
              </ul>
            </Col>
            <Col md={6}>
              <img
                src="https://images.unsplash.com/photo-1581091870627-3f97f0f9e3b4?fit=crop&w=800&q=80"
                alt="Email Marketing"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Call to Action */}
      <Container className="text-center py-5">
        <h2 className="mb-3">Ready to Grow Your Business with Email Marketing?</h2>
        <Button variant="primary" size="lg">
          Get Started Today
        </Button>
      </Container>
    </div>
  );
}

export default EmailMarketing;
