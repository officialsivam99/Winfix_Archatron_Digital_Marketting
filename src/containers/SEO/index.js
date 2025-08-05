import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Modal, Form } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsStarFill } from "react-icons/bs";

import {
  BsCheckCircle,
  BsBarChartFill,
  BsGraphUp,
  BsGlobe2,
  BsLink45Deg,
  BsPeopleFill,
  BsClipboardData,
  BsEyeFill,
  BsSearch,
  BsRocketTakeoff,
  BsBugFill,
  BsXCircle
} from "react-icons/bs";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function SEO() {
  const [showForm, setShowForm] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3 });

  const handleShow = () => setShowForm(true);
  const handleClose = () => setShowForm(false);

  const stats = [
    { icon: <BsSearch size={36} color="#0d6efd" />, label: "Keywords Ranked", end: 1200, suffix: "+" },
    { icon: <BsBarChartFill size={36} color="#6610f2" />, label: "Organic Traffic Increase", end: 350, suffix: "%" },
    { icon: <BsGraphUp size={36} color="#198754" />, label: "Monthly Leads", end: 5000, suffix: "+" },
    { icon: <BsGlobe2 size={36} color="#0dcaf0" />, label: "Global Reach", end: 45, suffix: " Countries" },
    { icon: <BsLink45Deg size={36} color="#fd7e14" />, label: "Backlinks Built", end: 15000, suffix: "+" },
    { icon: <BsPeopleFill size={36} color="#20c997" />, label: "Happy Clients", end: 300, suffix: "+" },
    { icon: <BsClipboardData size={36} color="#ffc107" />, label: "Audits Delivered", end: 800, suffix: "+" },
    { icon: <BsEyeFill size={36} color="#d63384" />, label: "Page Views", end: 2000000, suffix: "+" },
  ];

  return (
    <div className="bg-dark text-light">
      {/* Hero Section */}
      <Container fluid className="py-5 text-center">
        <h1 className="display-4 fw-bold">Search Engine Optimization (SEO)</h1>
        <p className="lead mt-3 px-2">
          Drive more organic traffic and grow your visibility on search engines.
        </p>
        <Button variant="warning" size="lg" className="mt-3" onClick={handleShow}>
          Request SEO Audit
        </Button>
      </Container>

      {/* Delivered Results */}
      <Container className="py-4" ref={ref}>
        <h2 className="text-center mb-3">Delivered Results</h2>
        <p className="text-center mb-4 px-md-5">
          See the real impact we create for businesses across industries.
        </p>
        <Row className="g-3 text-center">
          {stats.map((stat, idx) => (
            <Col key={idx} xs={12} sm={6} md={3}>
              <Card className="h-100 bg-dark text-light border border-secondary d-flex flex-column justify-content-center align-items-center py-3">
                {stat.icon}
                <h3 className="my-2">
                  {inView ? (
                    <CountUp end={stat.end} duration={2.5} suffix={stat.suffix} />
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
        <h2 className="text-center mb-4">Our SEO Services</h2>
        {/* First Row */}
        <Row className="g-4 mb-4">
          <Col md={3}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Body>
                <Card.Title>On-Page Optimization</Card.Title>
                <Card.Text>
                  Improve your site's structure, content, and technical setup for better rankings.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Body>
                <Card.Title>Keyword Research</Card.Title>
                <Card.Text>
                  Discover and target the right keywords to attract qualified visitors.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Body>
                <Card.Title>Link Building</Card.Title>
                <Card.Text>
                  Build high-quality backlinks to increase your site's authority and credibility.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Body>
                <Card.Title>Technical SEO Audit</Card.Title>
                <Card.Text>
                  Identify and fix technical issues to boost site performance and search rankings.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Second Row */}
        <Row className="g-4">
          <Col md={3}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Body>
                <Card.Title>Content Strategy</Card.Title>
                <Card.Text>
                  Develop and optimize content that attracts backlinks and drives engagement.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Body>
                <Card.Title>Penalty Recovery</Card.Title>
                <Card.Text>
                  Recover rankings and traffic lost due to algorithm updates or penalties.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Body>
                <Card.Title>Local SEO</Card.Title>
                <Card.Text>
                  Optimize your online presence to rank higher in local search results and maps.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100 bg-dark text-light border border-secondary">
              <Card.Body>
                <Card.Title>E-Commerce SEO</Card.Title>
                <Card.Text>
                  Boost your product pages and category rankings to drive more sales online.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Why Choose Us */}
      <Container fluid className="py-5 bg-dark">
        <Container>
          <Row className="align-items-stretch g-4">
            <Col md={6}>
              <Card className="bg-dark text-light p-4 border border-secondary h-100">
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Title as="h2" className="mb-4">
                    Why Choose Our SEO Services?
                  </Card.Title>
                  <Card.Text className="mb-3">
                    We blend proven strategies, technical expertise, and transparent reporting to deliver real results.
                  </Card.Text>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <BsCheckCircle className="me-2 text-warning" />
                      White-hat SEO practices only.
                    </li>
                    <li className="mb-3">
                      <BsCheckCircle className="me-2 text-warning" />
                      Detailed monthly performance reports.
                    </li>
                    <li className="mb-3">
                      <BsCheckCircle className="me-2 text-warning" />
                      Dedicated SEO managers for your business.
                    </li>
                    <li className="mb-3">
                      <BsCheckCircle className="me-2 text-warning" />
                      Long-term, sustainable ranking strategies.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?fit=crop&w=1000&q=80"
                alt="SEO"
                className="img-fluid rounded shadow h-100 w-100"
                style={{ objectFit: "cover" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Testimonials Section */}
{/* Testimonials Section */}
{/* Testimonials Section */}
<Container fluid className="py-5 bg-dark text-light">
  <Container>
    <h2 className="text-center mb-4">What Our Clients Say</h2>
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay
      autoPlaySpeed={1000}
      centerMode={false}
      containerClass="container-with-dots"
      draggable
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderDotsOutside={false}
      responsive={{
        superLargeDesktop: { breakpoint: { max: 4000, min: 1400 }, items: 6 },
        desktop: { breakpoint: { max: 1400, min: 1024 }, items: 4 },
        tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
        mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
      }}
      showDots={true}
      slidesToSlide={1}
      swipeable
    >
      {[
        {
          name: "Alice Johnson",
          photo: "https://randomuser.me/api/portraits/women/1.jpg",
          feedback:
            "The SEO team completely transformed our website's visibility. Within months, we were ranking for keywords we could never reach before. The reports are clear and their strategy is transparent.",
          rating: 5,
        },
        {
          name: "Bob Smith",
          photo: "https://randomuser.me/api/portraits/men/2.jpg",
          feedback:
            "We saw a massive increase in organic traffic and our leads have doubled thanks to their dedicated SEO plan. The team's communication is excellent and they always deliver on time.",
          rating: 5,
        },
        {
          name: "Catherine Lee",
          photo: "https://randomuser.me/api/portraits/women/3.jpg",
          feedback:
            "Partnering with them was the best marketing decision we've made. They helped us recover from penalties and now we rank higher than ever before. Weekly updates keep us informed every step of the way.",
          rating: 5,
        },
        {
          name: "David Brown",
          photo: "https://randomuser.me/api/portraits/men/4.jpg",
          feedback:
            "Their expert keyword research and link-building campaigns boosted our authority dramatically. We have seen consistent growth month after month and we couldn’t be happier.",
          rating: 5,
        },
        {
          name: "Emma Davis",
          photo: "https://randomuser.me/api/portraits/women/5.jpg",
          feedback:
            "I highly recommend this SEO team! They turned our local business into a regional brand with targeted strategies that really work. Their support and responsiveness are top-notch.",
          rating: 5,
        },
        {
          name: "Frank Miller",
          photo: "https://randomuser.me/api/portraits/men/6.jpg",
          feedback:
            "We struggled with technical SEO issues for years until we found these experts. They audited our site, fixed major issues, and now our traffic has never been stronger.",
          rating: 5,
        },
        {
          name: "Grace Wilson",
          photo: "https://randomuser.me/api/portraits/women/7.jpg",
          feedback:
            "We needed a reliable SEO partner and we got more than that — we got results. Their strategies are always up to date with Google’s algorithms and our growth proves it.",
          rating: 5,
        },
        {
          name: "Henry Moore",
          photo: "https://randomuser.me/api/portraits/men/8.jpg",
          feedback:
            "The detailed reports, the proactive advice, and the ROI make their SEO services stand out. Our business is thriving in a competitive market thanks to their support.",
          rating: 5,
        },
        {
          name: "Isabella Taylor",
          photo: "https://randomuser.me/api/portraits/women/9.jpg",
          feedback:
            "Content marketing and SEO combined have skyrocketed our rankings. We see clear, measurable improvements every month. We couldn’t ask for a better team.",
          rating: 5,
        },
        {
          name: "Jack Anderson",
          photo: "https://randomuser.me/api/portraits/men/10.jpg",
          feedback:
            "Excellent results and fantastic people to work with. They helped us target competitive keywords and win page one spots. Highly recommended for anyone serious about growth.",
          rating: 5,
        },
        {
          name: "Karen Thomas",
          photo: "https://randomuser.me/api/portraits/women/11.jpg",
          feedback:
            "Trustworthy, professional, and result-oriented. Their strategies align perfectly with our long-term goals and we feel confident about the future.",
          rating: 5,
        },
        {
          name: "Liam White",
          photo: "https://randomuser.me/api/portraits/men/12.jpg",
          feedback:
            "If you’re looking for SEO experts who actually deliver, look no further. They take care of everything and keep you updated every step of the way.",
          rating: 5,
        },
      ].map((testimonial, idx) => (
        <Card
          key={idx}
          className="bg-dark text-light border border-white mx-3 p-3 d-flex flex-column justify-content-center align-items-center"
          style={{ minWidth: "200px", minHeight: "380px" }}
        >
          <div className="text-center mb-3">
            <img
              src={testimonial.photo}
              alt={testimonial.name}
              className="rounded-circle mb-2"
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <h6 className="fw-bold mb-1">{testimonial.name}</h6>
            <div>
              {[...Array(testimonial.rating)].map((_, i) => (
                <BsStarFill key={i} className="text-warning" />
              ))}
            </div>
          </div>
          <p className="text-center" style={{ fontSize: "0.85rem" }}>
            {testimonial.feedback}
          </p>
        </Card>
      ))}
    </Carousel>
  </Container>
</Container>




      {/* Call to Action */}
      <Container className="text-center py-5">
        <h2 className="mb-3">Ready to Boost Your Search Visibility?</h2>
        <Button variant="warning" size="lg" onClick={handleShow}>
          Get Started Today
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
          <Modal.Title>Request a Free SEO Audit</Modal.Title>
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
              <Form.Label>Your Website URL</Form.Label>
              <Form.Control type="text" placeholder="www.yoursite.com" />
            </Form.Group>
            <Button variant="warning" type="submit">
              Request Audit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SEO;
