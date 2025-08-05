import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Modal,
  Form,
} from "react-bootstrap";
import {
  BsCheckCircle,
  BsBarChartFill,
  BsPeopleFill,
  BsBullseye,
  BsGraphUp,
  BsGlobe2,
  BsHeartFill,
  BsPersonCheckFill,
  BsShareFill,
  BsEyeFill,
  BsCashStack,
  BsMegaphoneFill,
  BsXCircle,
} from "react-icons/bs";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function SocialMediaMarketing() {
  const [showForm, setShowForm] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3 });

  const handleShow = () => setShowForm(true);
  const handleClose = () => setShowForm(false);

  const stats = [
    {
      icon: <BsBarChartFill size={36} color="#0d6efd" />,
      label: "Engagements",
      end: 5000000,
      suffix: "+",
    },
    {
      icon: <BsPeopleFill size={36} color="#6610f2" />,
      label: "New Followers",
      end: 50000,
      suffix: "+",
    },
    {
      icon: <BsBullseye size={36} color="#dc3545" />,
      label: "ROI Multiplier",
      end: 3,
      suffix: "X",
    },
    {
      icon: <BsGraphUp size={36} color="#198754" />,
      label: "Traffic Increase",
      end: 120,
      suffix: "%",
    },
    {
      icon: <BsGlobe2 size={36} color="#0dcaf0" />,
      label: "Global Reach",
      end: 30,
      suffix: "+",
    },
    {
      icon: <BsHeartFill size={36} color="#d63384" />,
      label: "Posts Liked",
      end: 800000,
      suffix: "+",
    },
    {
      icon: <BsPersonCheckFill size={36} color="#fd7e14" />,
      label: "Influencers Engaged",
      end: 250,
      suffix: "+",
    },
    {
      icon: <BsShareFill size={36} color="#20c997" />,
      label: "Shares",
      end: 150000,
      suffix: "+",
    },
    {
      icon: <BsEyeFill size={36} color="#6f42c1" />,
      label: "Ad Impressions",
      end: 20000000,
      suffix: "+",
    },
    {
      icon: <BsCashStack size={36} color="#ffc107" />,
      label: "Revenue Generated",
      end: 500000,
      prefix: "$",
      suffix: "+",
    },
    {
      icon: <BsMegaphoneFill size={36} color="#f03e3e" />,
      label: "Campaigns Run",
      end: 120,
      suffix: "+",
    },
    {
      icon: <BsGraphUp size={36} color="#198754" />,
      label: "Conversions",
      end: 45000,
      suffix: "+",
    },
  ];

  return (
    <div className="bg-dark text-light">
      {/* Hero Section */}
      <Container fluid className="py-5 text-center">
        <h1 className="display-4 fw-bold">Social Media Marketing</h1>
        <p className="lead mt-3 px-2">
          Connect, engage, and grow your audience with impactful social media strategies.
        </p>
        <Button variant="warning" size="lg" className="mt-3" onClick={handleShow}>
          Start Growing Today
        </Button>
      </Container>

      {/* Delivered Results */}
      <Container className="py-4" ref={ref}>
        <h2 className="text-center mb-3">Delivered Results</h2>
        <p className="text-center mb-4 px-md-5">
          Real numbers that showcase our impact across platforms and industries.
        </p>
        <Row className="g-3 text-center">
          {stats.map((stat, idx) => (
            <Col key={idx} xs={12} sm={6} md={3}>
              <Card className="h-100 bg-dark text-light border border-secondary d-flex flex-column justify-content-center align-items-center py-3">
                {stat.icon}
                <h3 className="my-2">
                  {inView ? (
                    <CountUp
                      end={stat.end}
                      duration={2.5}
                      prefix={stat.prefix || ""}
                      suffix={stat.suffix}
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </h3>
                <p className="mb-0">{stat.label}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* What We Offer */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Our Social Media Services</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Body>
                <Card.Title>Content Creation</Card.Title>
                <Card.Text>
                  High-quality visuals and engaging copy tailored for each platform.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Body>
                <Card.Title>Community Management</Card.Title>
                <Card.Text>
                  Engage with your followers and build loyal brand advocates.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Body>
                <Card.Title>Paid Advertising</Card.Title>
                <Card.Text>
                  Targeted ad campaigns to drive awareness and conversions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Why Choose Us */}
      <Container fluid className="py-5 bg-dark">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={6}>
              <Card className="bg-dark text-light p-4 border border-secondary h-100">
                <Card.Body>
                  <Card.Title as="h2" className="mb-4">
                    Why Choose Our Social Media Marketing?
                  </Card.Title>
                  <Card.Text className="mb-3">
                    We combine strategy, creativity, and analytics to deliver real results. Here’s what sets us apart:
                  </Card.Text>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <BsCheckCircle className="me-2 text-warning" />
                      Proven success with diverse brands.
                    </li>
                    <li className="mb-3">
                      <BsCheckCircle className="me-2 text-warning" />
                      Platform-specific strategies for each channel.
                    </li>
                    <li className="mb-3">
                      <BsCheckCircle className="me-2 text-warning" />
                      Creative team producing high-impact content.
                    </li>
                    <li className="mb-3">
                      <BsCheckCircle className="me-2 text-warning" />
                      Real-time analytics & transparent reporting.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <img
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Social Media Marketing"
                className="img-fluid rounded shadow h-100 w-100"
                style={{ objectFit: "cover", height: "100%" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Call to Action */}
      <Container className="text-center py-5">
        <h2 className="mb-3">Ready to Amplify Your Brand?</h2>
        <Button variant="warning" size="lg" onClick={handleShow}>
          Get Started Now
        </Button>
      </Container>

      {/* Modal */}
      <Modal
        show={showForm}
        onHide={handleClose}
        centered
        contentClassName="bg-dark text-light"
      >
        <Modal.Header className="border-0">
          <Modal.Title>Start Growing with Us</Modal.Title>
          <Button variant="link" onClick={handleClose} className="text-light fs-3">
            <BsXCircle />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Tell us about your goals</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Share your vision..."
              />
            </Form.Group>
            <Button variant="warning" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SocialMediaMarketing;
