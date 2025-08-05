import React, { useState } from "react";
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
  BsSpeedometer2,
  BsPaletteFill,
  BsPhoneFill,
  BsXCircle,
} from "react-icons/bs";

function WebDesign() {
  const [showForm, setShowForm] = useState(false);

  const handleShow = () => setShowForm(true);
  const handleClose = () => setShowForm(false);

  return (
    <div className="bg-dark text-light">
      {/* Hero Section */}
      <Container fluid className="py-5 text-center">
        <h1 className="display-4 fw-bold">Web Design</h1>
        <p className="lead mt-3 px-2">
          Stunning, responsive websites that engage your audience, elevate your
          brand, and drive real results.
        </p>
        <Button variant="warning" size="lg" className="mt-3" onClick={handleShow}>
          Request a Consultation
        </Button>
      </Container>

      {/* {Delivered Works} */}
      <Container className="py-5" >
        <h2 className="text-center mb-4">Our Delivered Works</h2>
        <Row className="g-4 ">
          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Img
                variant="top"
                src="https://miro.medium.com/v2/resize:fit:2000/1*VgUlJHPF9CBlvoIIKkq_1g.png"
                alt="Project 1"
              />
              <Card.Body>
                <Card.Title>Modern Portfolio</Card.Title>
                <Card.Text>
                  A sleek portfolio website for a creative agency. View live on Behance.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Img
                variant="top"
                src="https://cdn.dribbble.com/userupload/5627677/file/original-5241db683f27640d0b0348df04e80e52.png?resize=400x0"
                alt="Project 2"
              />
              <Card.Body>
                <Card.Title>Startup Landing</Card.Title>
                <Card.Text>
                  Conversion-focused landing page for a tech startup.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Img
                variant="top"
                src="https://cdn.dribbble.com/userupload/36113545/file/original-4ee86c2683fb3ba2051235c42c9705c2.png?resize=400x0"
                alt="Project 3"
              />
              <Card.Body>
                <Card.Title>eCommerce Store</Card.Title>
                <Card.Text>
                  A robust online store with seamless checkout experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="g-4 mt-2">
          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Img
                variant="top"
                src="https://cdn.dribbble.com/userupload/18346900/file/original-8954cddcc7a0da8944d9aaf2bda9dc5e.jpg?resize=400x0"
                alt="Project 1"
              />
              <Card.Body>
                <Card.Title>Modern Portfolio</Card.Title>
                <Card.Text>
                  A sleek portfolio website for a creative agency. View live on Behance.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Img
                variant="top"
                src="https://cdn.dribbble.com/userupload/34646459/file/original-d8a231b05fecef131f402fef9cf9ed8a.png?format=webp&resize=400x300&vertical=center"
                alt="Project 2"
              />
              <Card.Body>
                <Card.Title>Startup Landing</Card.Title>
                <Card.Text>
                  Conversion-focused landing page for a tech startup.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Img
                variant="top"
                src="https://cdn.prod.website-files.com/63320477b12dc5147514e6d2/64dddf5d9a064f7034a7181e_Pride%20Mobile.webp"
                alt="Project 3"
              />
              <Card.Body>
                <Card.Title>eCommerce Store</Card.Title>
                <Card.Text>
                  A robust online store with seamless checkout experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


            
      {/* Our Web Design Services */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Our Web Design Services</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Body>
                <Card.Title>Responsive Design</Card.Title>
                <Card.Text>
                  Mobile-first designs that adapt perfectly to every screen size.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Body>
                <Card.Title>UX/UI Optimization</Card.Title>
                <Card.Text>
                  Intuitive interfaces and user flows that convert visitors to customers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Body>
                <Card.Title>Custom Development</Card.Title>
                <Card.Text>
                  Bespoke solutions tailored to your brand’s exact needs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* NEW 3 Columns */}
          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Body>
                <Card.Title>E-commerce Design</Card.Title>
                <Card.Text>
                  Beautiful, conversion-focused online store designs that boost sales.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Body>
                <Card.Title>Landing Page Design</Card.Title>
                <Card.Text>
                  High-converting landing pages crafted to drive leads & sign-ups.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Body>
                <Card.Title>Website Redesign</Card.Title>
                <Card.Text>
                  Revamp outdated sites with fresh, modern looks and improved UX.
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
              <Card className="bg-dark text-light p-4 border border-secondary">
                <Card.Body>
                  <Card.Title as="h2" className="mb-4">
                    Why Choose Our Web Design Services?
                  </Card.Title>
                  <Card.Text className="mb-3">
                    Your website is your first impression. We blend creativity,
                    functionality, and performance to deliver stunning websites
                    that build trust and boost business.
                  </Card.Text>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <BsPaletteFill className="me-2 text-warning" />
                      Creative, award-winning designers.
                    </li>
                    <li className="mb-3">
                      <BsPhoneFill className="me-2 text-warning" />
                      100% responsive, mobile-first builds.
                    </li>
                    <li className="mb-3">
                      <BsSpeedometer2 className="me-2 text-warning" />
                      Fast loading, SEO-friendly websites.
                    </li>
                    <li className="mb-3">
                      <BsCheckCircle className="me-2 text-warning" />
                      Fully customized for your brand.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=800&q=80"
                alt="Web Design"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </Container>



      {/* Call to Action */}
      <Container className="text-center py-5">
        <h2 className="mb-3">Let's Create Something Amazing Together</h2>
        <Button variant="warning" size="lg" onClick={handleShow}>
          Start Your Project
        </Button>
      </Container>

      {/* Consultation Form Modal */}
      <Modal
        show={showForm}
        onHide={handleClose}
        centered
        contentClassName="bg-dark text-light"
      >
        <Modal.Header className="border-0">
          <Modal.Title>Request a Consultation</Modal.Title>
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
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Your Project Details</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Tell us about your project..." />
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

export default WebDesign;
