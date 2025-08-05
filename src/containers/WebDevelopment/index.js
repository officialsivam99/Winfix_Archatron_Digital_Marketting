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
  BsCodeSlash,
  BsLockFill,
  BsCpuFill,
  BsXCircle,
} from "react-icons/bs";

// Add this import at the top:
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiSpringboot,
  SiBootstrap,
  SiTailwindcss,
  SiMongodb,
  SiMysql
} from "react-icons/si";



function WebDevelopment() {
  const [showForm, setShowForm] = useState(false);

  const handleShow = () => setShowForm(true);
  const handleClose = () => setShowForm(false);

  return (
    <div className="bg-dark text-light">
      {/* Hero Section */}
      <Container fluid className="py-5 text-center">
        <h1 className="display-4 fw-bold">Web Development</h1>
        <p className="lead mt-3 px-2">
          Powerful, scalable websites and web applications built with modern technologies to grow your business.
        </p>
        <Button variant="warning" size="lg" className="mt-3" onClick={handleShow}>
          Get a Free Quote
        </Button>
      </Container>

      {/* Delivered Works */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Our Delivered Works</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Img
                variant="top"
                src="https://cdn.prod.website-files.com/63320477b12dc5147514e6d2/64dddf5d9a064f7034a7181e_Pride%20Mobile.webp"
                alt="Project 1"
              />
              <Card.Body>
                <Card.Title>Custom CRM</Card.Title>
                <Card.Text>
                  Fully custom CRM platform for a growing SaaS business — built for scale.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Img
                variant="top"
                src="https://cdn.dribbble.com/userupload/35617362/file/original-26367e454ac5e27f5c0c99f25f8787d4.png?format=webp&resize=400x300&vertical=center"
                alt="Project 2"
              />
              <Card.Body>
                <Card.Title>E-commerce Marketplace</Card.Title>
                <Card.Text>
                  A multi-vendor marketplace with secure payments and robust admin dashboard.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Img
                variant="top"
                src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/383283190/original/3a4ebd6c0a88a74cfc9774c05d4761f5ed50228b/do-ui-ux-design-for-mobile-app-website-ui-ux-design.png"
                alt="Project 3"
              />
              <Card.Body>
                <Card.Title>PWA for Delivery Service</Card.Title>
                <Card.Text>
                  Progressive Web App for on-demand delivery — fast, offline-ready, and installable.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container >
        
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Img
                variant="top"
                src="https://cdn.prod.website-files.com/63320477b12dc5147514e6d2/64dddf5d9a064f7034a7181e_Pride%20Mobile.webp"
                alt="Project 1"
              />
              <Card.Body>
                <Card.Title>Custom CRM</Card.Title>
                <Card.Text>
                  Fully custom CRM platform for a growing SaaS business — built for scale.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Img
                variant="top"
                src="https://cdn.dribbble.com/userupload/35617362/file/original-26367e454ac5e27f5c0c99f25f8787d4.png?format=webp&resize=400x300&vertical=center"
                alt="Project 2"
              />
              <Card.Body>
                <Card.Title>E-commerce Marketplace</Card.Title>
                <Card.Text>
                  A multi-vendor marketplace with secure payments and robust admin dashboard.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Img
                variant="top"
                src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/383283190/original/3a4ebd6c0a88a74cfc9774c05d4761f5ed50228b/do-ui-ux-design-for-mobile-app-website-ui-ux-design.png"
                alt="Project 3"
              />
              <Card.Body>
                <Card.Title>PWA for Delivery Service</Card.Title>
                <Card.Text>
                  Progressive Web App for on-demand delivery — fast, offline-ready, and installable.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Our Web Development Services */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Our Web Development Services</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Body>
                <Card.Title>Custom Development</Card.Title>
                <Card.Text>
                  Bespoke websites and apps crafted to your unique business goals.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Body>
                <Card.Title>E-commerce Solutions</Card.Title>
                <Card.Text>
                  Secure, scalable online stores with advanced payment and inventory features.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Body>
                <Card.Title>API Integration</Card.Title>
                <Card.Text>
                  Connect your site with external services, third-party APIs, and automation.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* New Additional Services */}
          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Body>
                <Card.Title>CMS Development</Card.Title>
                <Card.Text>
                  Build and manage content easily with custom WordPress or headless CMS setups.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Body>
                <Card.Title>Progressive Web Apps</Card.Title>
                <Card.Text>
                  Next-gen web apps that feel like native mobile apps — fast, reliable, and installable.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Body>
                <Card.Title>Maintenance & Support</Card.Title>
                <Card.Text>
                  Keep your site secure, updated, and running smoothly with dedicated support.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Why Choose Us */}
      <Container fluid className="py-5 bg-dark">
  <Container>
    <Row className="g-4 align-items-stretch">
      <Col md={6} className="d-flex">
        <Card className="bg-dark text-light p-4 border border-secondary w-100">
          <Card.Body className="d-flex flex-column">
            <Card.Title as="h2" className="mb-4">
              Why Choose Our Web Development Services?
            </Card.Title>
            <Card.Text className="mb-3">
              From small business sites to complex web applications, our team delivers robust, scalable solutions using modern frameworks and best practices.
            </Card.Text>
            <ul className="list-unstyled mt-auto">
              <li className="mb-3">
                <BsCodeSlash className="me-2 text-warning" />
                Skilled developers with cutting-edge tech stacks.
              </li>
              <li className="mb-3">
                <BsLockFill className="me-2 text-warning" />
                Security-first approach for safe and reliable sites.
              </li>
              <li className="mb-3">
                <BsCpuFill className="me-2 text-warning" />
                High-performance, scalable architecture.
              </li>
              <li className="mb-3">
                <BsCheckCircle className="me-2 text-warning" />
                Dedicated support & long-term partnerships.
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} className="d-flex">
        <img
          src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Web Development"
          className="img-fluid rounded shadow w-100 object-fit-cover"
          style={{ objectFit: 'cover' }}
        />
      </Col>
    </Row>
  </Container>
</Container>


      




      {/* Tech Stack Section */}
<Container className="py-5">
  <h2 className="text-center mb-4">Our Tech Stack</h2>
  <p className="text-center mb-5 px-md-5">
    We build modern, high-performance websites and applications using a powerful mix of cutting-edge technologies. Here’s what we use to deliver robust, scalable solutions for your business.
  </p>

  <Row className="text-center justify-content-center">
    {/* Example with 4 columns per row */}
    <Col xs={6} md={3} className="border-end border-bottom border-secondary-subtle py-4 d-flex flex-column align-items-center">
      <SiHtml5 size={48} color="#E34F26" />
      <h5 className="mt-2">HTML5</h5>
    </Col>

    <Col xs={6} md={3} className="border-end border-bottom border-secondary-subtle py-4 d-flex flex-column align-items-center">
      <SiCss3 size={48} color="#1572B6" />
      <h5 className="mt-2">CSS3</h5>
    </Col>

    <Col xs={6} md={3} className="border-end border-bottom border-secondary-subtle py-4 d-flex flex-column align-items-center">
      <SiJavascript size={48} color="#F7DF1E" />
      <h5 className="mt-2">JavaScript</h5>
    </Col>

    <Col xs={6} md={3} className="border-bottom border-secondary-subtle py-4 d-flex flex-column align-items-center">
      <SiReact size={48} color="#61DAFB" />
      <h5 className="mt-2">React</h5>
    </Col>

    <Col xs={6} md={3} className="border-end border-bottom border-secondary-subtle py-4 d-flex flex-column align-items-center">
      <SiNodedotjs size={48} color="#339933" />
      <h5 className="mt-2">Node.js</h5>
    </Col>

    <Col xs={6} md={3} className="border-end border-bottom border-secondary-subtle py-4 d-flex flex-column align-items-center">
      <SiPython size={48} color="#3776AB" />
      <h5 className="mt-2">Python</h5>
    </Col>

    <Col xs={6} md={3} className="border-end border-bottom border-secondary-subtle py-4 d-flex flex-column align-items-center">
      <SiDjango size={48} color="#FFFFFF" />
      <h5 className="mt-2">Django</h5>
    </Col>

    <Col xs={6} md={3} className="border-bottom border-secondary-subtle py-4 d-flex flex-column align-items-center">
      <SiSpringboot size={48} color="#6DB33F" />
      <h5 className="mt-2">Spring Boot</h5>
    </Col>

    <Col xs={6} md={3} className="border-end py-4 border-secondary-subtle d-flex flex-column align-items-center">
      <SiBootstrap size={48} color="#7952B3" />
      <h5 className="mt-2">Bootstrap</h5>
    </Col>

    <Col xs={6} md={3} className="border-end py-4 border-secondary-subtle d-flex flex-column align-items-center">
      <SiTailwindcss size={48} color="#06B6D4" />
      <h5 className="mt-2">Tailwind CSS</h5>
    </Col>

    <Col xs={6} md={3} className="border-end py-4 border-secondary-subtle d-flex flex-column align-items-center">
      <SiMongodb size={48} color="#47A248" />
      <h5 className="mt-2">MongoDB</h5>
    </Col>

    <Col xs={6} md={3} className="py-4 d-flex flex-column align-items-center">
      <SiMysql size={48} color="#4479A1" />
      <h5 className="mt-2">MySQL</h5>
    </Col>
  </Row>
</Container>





      {/* Call to Action */}
      <Container className="text-center py-5">
        <h2 className="mb-3">Ready to Build Your Next Big Project?</h2>
        <Button variant="warning" size="lg" onClick={handleShow}>
          Contact Our Team
        </Button>
      </Container>

      {/* Quote Form Modal */}
      <Modal
        show={showForm}
        onHide={handleClose}
        centered
        contentClassName="bg-dark text-light"
      >
        <Modal.Header className="border-0">
          <Modal.Title>Get a Free Quote</Modal.Title>
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
              <Form.Label>Project Details</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Describe your project..." />
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

export default WebDevelopment;
