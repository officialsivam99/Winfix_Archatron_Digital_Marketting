import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Modal, Form } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  BsSearch,
  BsBarChartFill,
  BsGraphUp,
  BsRocketTakeoff,
  BsPeopleFill,
  BsCheckCircle,
  BsStarFill,
  BsXCircle
} from "react-icons/bs";

function PPC() {
  const [showForm, setShowForm] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3 });

  const handleShow = () => setShowForm(true);
  const handleClose = () => setShowForm(false);

  // Stats for delivered results
  const stats = [
    { icon: <BsRocketTakeoff size={36} color="#fd7e14" />, label: "Campaigns Launched", end: 500, suffix: "+" },
    { icon: <BsSearch size={36} color="#0d6efd" />, label: "Keywords Targeted", end: 12000, suffix: "+" },
    { icon: <BsBarChartFill size={36} color="#6610f2" />, label: "ROI Increase", end: 300, suffix: "%" },
    { icon: <BsPeopleFill size={36} color="#198754" />, label: "Leads Generated", end: 15000, suffix: "+" }
  ];

  // Testimonials data
  const testimonials = [
    { name: "Alice Johnson", photo: "https://randomuser.me/api/portraits/women/1.jpg", feedback: "The PPC team completely transformed our ROI. Within months, our ad spend was optimized to perfection.", rating: 5 },
    { name: "Bob Smith", photo: "https://randomuser.me/api/portraits/men/2.jpg", feedback: "Our clicks doubled and conversion rates soared. A dedicated manager made all the difference.", rating: 5 },
    { name: "Catherine Lee", photo: "https://randomuser.me/api/portraits/women/3.jpg", feedback: "Seamless setup, continuous A/B testing, and clear reports—couldn’t ask for more.", rating: 5 },
    { name: "David Brown", photo: "https://randomuser.me/api/portraits/men/4.jpg", feedback: "Their advanced targeting reached our ideal audience and boosted qualified leads massively.", rating: 5 },
    { name: "Emma Davis", photo: "https://randomuser.me/api/portraits/women/5.jpg", feedback: "Great support, real-time insights, and visible ROI improvements each month.", rating: 5 },
    { name: "Frank Miller", photo: "https://randomuser.me/api/portraits/men/6.jpg", feedback: "Expert PPC audits uncovered issues we never knew existed—game changer.", rating: 5 },
    { name: "Grace Wilson", photo: "https://randomuser.me/api/portraits/women/7.jpg", feedback: "They managed multiple campaigns seamlessly and scaled our budget with confidence.", rating: 5 },
    { name: "Henry Moore", photo: "https://randomuser.me/api/portraits/men/8.jpg", feedback: "Transparent budgeting, detailed reports, and constant optimization—top-notch team.", rating: 5 },
    { name: "Isabella Taylor", photo: "https://randomuser.me/api/portraits/women/9.jpg", feedback: "Highly recommend for businesses seeking measurable PPC growth.", rating: 5 },
    { name: "Jack Anderson", photo: "https://randomuser.me/api/portraits/men/10.jpg", feedback: "Their Google Ads expertise took us to page one for our priority keywords.", rating: 5 },
    { name: "Karen Thomas", photo: "https://randomuser.me/api/portraits/women/11.jpg", feedback: "Dedicated managers, great communication, and consistent performance gains.", rating: 5 },
    { name: "Liam White", photo: "https://randomuser.me/api/portraits/men/12.jpg", feedback: "If you want a PPC partner that delivers real ROI, look no further.", rating: 5 }
  ];

  // Pricing state and plans
  const [billing, setBilling] = useState('monthly');
  const [hovered, setHovered] = useState(null);
  const plans = [
    { title: 'Starter', description: 'Starter pack to help you get started', btnText: 'Get Started', recommended: false, pricing: { monthly: 'Free', yearly: '$0/yr' } },
    { title: 'Pro', description: 'More power for small teams', btnText: 'Get Started', recommended: true, pricing: { monthly: '$20/mo', yearly: '$200/yr' } },
    { title: 'Business+', description: 'For companies that need to manage work across multiple teams', btnText: 'Get Started', recommended: false, pricing: { monthly: '$100/mo', yearly: '$1000/yr' } },
    { title: 'Enterprise', description: 'For enterprise needs additional security, control & support', btnText: 'Contact Sales', recommended: false, pricing: { monthly: 'Custom', yearly: 'Custom' } }
  ];

  return (
    <div className="bg-dark text-light">
      {/* Hero Section */}
      <Container fluid className="py-5 text-center bg-dark text-light">
        <h1 className="display-4 fw-bold">PPC Advertising</h1>
        <p className="lead mt-3 px-2">Generate instant traffic and qualified leads with targeted PPC campaigns.</p>
        <Button variant="light" size="lg" className="mt-3" onClick={handleShow}>Request a PPC Proposal</Button>
      </Container>

      {/* Delivered Results */}
      <Container className="py-5" ref={ref}>
        <h2 className="text-center mb-3">Delivered Results</h2>
        <Row className="g-4 text-center">
          {stats.map((stat, idx) => (
            <Col key={idx} xs={12} sm={6} md={3}>
              <Card className="h-100 bg-dark text-light border-secondary d-flex flex-column justify-content-center align-items-center py-4">
                {stat.icon}
                <h3 className="my-2">
                  {inView ? <CountUp end={stat.end} duration={2.5} suffix={stat.suffix} /> : `0${stat.suffix}`}
                </h3>
                <p className="mb-0">{stat.label}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* What We Offer */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Our PPC Services</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 bg-dark text-light border-secondary">
              <Card.Body>
                <Card.Title>Google Ads Management</Card.Title>
                <Card.Text>Launch and optimize high-converting Search & Display campaigns.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 bg-dark text-light border-secondary">
              <Card.Body>
                <Card.Title>Social Media Advertising</Card.Title>
                <Card.Text>Reach audiences on Facebook, Instagram, LinkedIn, and beyond.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 bg-dark text-light border-secondary">
              <Card.Body>
                <Card.Title>Remarketing Campaigns</Card.Title>
                <Card.Text>Re-engage visitors and convert them into customers.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Pricing Plans */}
      <Container className="py-5 text-light border border-secondary rounded" style={{ backgroundColor: '#1f1f1f' }}>
        <h2 className="text-center mb-4">Pricing Plans</h2>
        <div className="d-flex justify-content-center mb-4">
          <Button variant={billing === 'monthly' ? 'success' : 'outline-light'} className="me-2" onClick={() => setBilling('monthly')}>Monthly</Button>
          <Button variant={billing === 'yearly' ? 'success' : 'outline-light'} onClick={() => setBilling('yearly')}>Yearly</Button>
          <span className="ms-3 text-warning align-self-center">SAVE UP TO 30%</span>
        </div>
        <Row className="g-3 justify-content-center" style={{ columnGap: '15px', flexWrap: 'nowrap', overflowX: 'auto' }}>
          {plans.map((plan, idx) => (
            <Col key={idx} sm={6} md={3} style={{ maxWidth: '280px' }}>
              <Card
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className={`h-100 text-center position-relative border ${plan.recommended ? 'border-success' : 'border-secondary'} ${hovered === idx ? 'bg-success text-dark shadow-lg translate-up' : 'bg-dark text-light'}`}
                style={{ transition: 'transform 0.2s, box-shadow 0.2s' }}
              >
                {plan.recommended && <div className="position-absolute top-0 start-50 translate-middle badge bg-success">Recommended</div>}
                <Card.Body className="py-4">
                  <Card.Title>{plan.title}</Card.Title>
                  <Card.Text className="mb-2 text-light">{plan.description}</Card.Text>
                  <h3 className={`fw-bold ${hovered === idx ? 'text-dark' : plan.recommended ? 'text-success' : 'text-light'}`}>{plan.pricing[billing]}</h3>
                  <Button variant={hovered === idx ? 'dark' : plan.recommended ? 'success' : 'outline-light'} className="mt-3">{plan.btnText}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Our Process */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Our PPC Process</h2>
        <Row className="g-4">
          {[
            { step: 'Research', desc: 'Keyword & market analysis to target the right audience.' },
            { step: 'Setup', desc: 'Campaign structure, ad copy, and landing page optimization.' },
            { step: 'Monitor', desc: 'Real-time performance tracking & budget allocation.' },
            { step: 'Optimize', desc: 'Continuous testing & refining for maximum ROI.' }
          ].map((item, idx) => (
            <Col key={idx} md={3}>
              <Card className="h-100 bg-dark text-light border-secondary text-center p-3">
                <Card.Body>
                  <Card.Title>{item.step}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Why Choose Us */}
      <Container fluid className="py-5">
        <Container>
          <Card className="bg-dark text-light border-secondary p-4 mb-5">
            <Row className="align-items-center">
              <Col md={6}>
                <h2 className="mb-4">Why Choose Our PPC Services?</h2>
                <ul className="mt-3 list-unstyled">
                  <li className="mb-3 d-flex align-items-center"><BsCheckCircle className="me-2 text-warning" /> White-hat PPC strategies only</li>
                  <li className="mb-3 d-flex align-items-center"><BsCheckCircle className="me-2 text-warning" /> Transparent budgeting & reporting</li>
                  <li className="mb-3 d-flex align-items-center"><BsCheckCircle className="me-2 text-warning" /> Data-driven optimization for ROI</li>
                  <li className="mb-3 d-flex align-items-center"><BsCheckCircle className="me-2 text-warning" /> Dedicated account managers</li>
                  <li className="mb-3 d-flex align-items-center"><BsCheckCircle className="me-2 text-warning" /> Advanced audience targeting</li>
                  <li className="mb-3 d-flex align-items-center"><BsCheckCircle className="me-2 text-warning" /> Continuous A/B testing</li>
                  <li className="mb-3 d-flex align-items-center"><BsCheckCircle className="me-2 text-warning" /> 24/7 performance monitoring</li>
                </ul>
              </Col>
              <Col md={6}>
                <img src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?fit=crop&w=800&q=80" alt="PPC Services" className="img-fluid rounded shadow h-100 w-100" style={{ objectFit: "cover" }} />
              </Col>
            </Row>
          </Card>
        </Container>
      </Container>

      {/* Testimonials Section */}
      <Container fluid className="py-5 bg-dark text-light">
        <Container>
          <h2 className="text-center mb-4">What Our Clients Say</h2>
          <Carousel additionalTransfrom={0} arrows={false} autoPlay autoPlaySpeed={1000} centerMode={false} containerClass="container-with-dots" draggable infinite keyBoardControl minimumTouchDrag={80} pauseOnHover renderDotsOutside={false} responsive={{ superLargeDesktop: { breakpoint: { max: 4000, min: 1400 }, items: 6 }, desktop: { breakpoint: { max: 1400, min: 1024 }, items: 6 }, tablet: { breakpoint: { max: 1024, min: 768 }, items: 3 }, mobile: { breakpoint: { max: 768, min: 0 }, items: 1 } }} showDots slidesToSlide={1} swipeable>
            {testimonials.map((t, i) => (
              <Card key={i} className="mx-3 p-3 bg-dark text-light border-secondary d-flex flex-column justify-content-center align-items-center" style={{ minWidth: "200px", minHeight: "380px" }}>
                <div className="text-center mb-3">
                  <img src={t.photo} alt={t.name} className="rounded-circle mb-2" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                  <h6 className="fw-bold mb-1">{t.name}</h6>
                  <div>{[...Array(t.rating)].map((_, idx) => <BsStarFill key={idx} className="text-warning" />)}</div>
                </div>
                <p className="text-center" style={{ fontSize: "0.85rem" }}>{t.feedback}</p>
              </Card>
            ))}
          </Carousel>
        </Container>
      </Container>

      {/* Modal Form */}
      <Modal show={showForm} onHide={handleClose} centered contentClassName="bg-dark text-light">
        <Modal.Header className="border-0">
          <Modal.Title>Request Your PPC Proposal</Modal.Title>
          <Button variant="link" onClick={handleClose} className="text-light fs-3"><BsXCircle /></Button>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control className="bg-secondary text-light border-0" type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control className="bg-secondary text-light border-0" type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBudget">
              <Form.Label>Monthly Budget</Form.Label>
              <Form.Control className="bg-secondary text-light border-0" type="text" placeholder="e.g. $1,000" />
            </Form.Group>
            <Button variant="warning" type="submit">Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PPC;
