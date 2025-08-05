// src/components/QuoteForm.js
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { BsBriefcase, BsChatDots } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

const QuoteForm = () => {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0d1535 60%, #182b50 100%)",
        padding: "80px 0",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left content */}
          <Col lg={6} className="text-light mb-5 mb-lg-0">
            <h2 className="fw-bold mb-4" style={{ fontSize: "2rem", color: "#00e1ff" }}>
              Let’s Elevate Your Brand Together
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#e0e8ff" }}>
              Whether you're launching a new business or scaling an existing one,
              our digital marketing experts tailor strategies that drive real results.
              Request a free consultation to discover how SEO, PPC, social media, and
              email campaigns can boost your growth.
            </p>
            <ul className="mt-4" style={{ fontSize: "1rem", lineHeight: "1.8", color: "#c8d4ff" }}>
              <li>✔ Free strategic consultation</li>
              <li>✔ Customized campaign planning</li>
              <li>✔ Actionable recommendations</li>
              <li>✔ No strings attached</li>
            </ul>
          </Col>

          {/* Right form */}
          <Col lg={6}>
            <div
              style={{
                background: "#0a1237",
                borderRadius: "12px",
                padding: "24px 28px 20px 28px",
                maxWidth: 580,
                margin: "auto",
                boxShadow: "0 2px 26px 4px rgba(0,52,150,0.18)",
                borderTop: "4px solid #36d6ff",
                borderLeft: "1.5px solid #6243e0",
              }}
            >
              <h3
                className="fw-bold"
                style={{
                  color: "#19e2ff",
                  fontSize: "1.5rem",
                  letterSpacing: "-1px",
                  marginBottom: 10,
                }}
              >
                Request a Quote
              </h3>
              <p className="mb-3" style={{ color: "#fff", fontSize: "1.02rem" }}>
                Maximize your digital reach with tailored strategies.
              </p>
              <Form>
                <Form.Group className="mb-2" controlId="name">
                  <Form.Label className="d-flex align-items-center gap-2" style={{ color: "#fff", fontSize: "1rem" }}>
                    <AiOutlineUser style={{ fontSize: 19 }} /> Name<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    required
                    style={inputStyle}
                  />
                </Form.Group>

                <Form.Group className="mb-2" controlId="company">
                  <Form.Label className="d-flex align-items-center gap-2" style={{ color: "#fff", fontSize: "1rem" }}>
                    <BsBriefcase style={{ fontSize: 17 }} /> Company Name<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Company Name"
                    required
                    style={inputStyle}
                  />
                </Form.Group>

                <Form.Group className="mb-2" controlId="email">
                  <Form.Label className="d-flex align-items-center gap-2" style={{ color: "#fff", fontSize: "1rem" }}>
                    <AiOutlineMail style={{ fontSize: 18 }} /> Email<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    required
                    style={inputStyle}
                  />
                </Form.Group>

                <Form.Group className="mb-2" controlId="phone">
                  <Form.Label className="d-flex align-items-center gap-2" style={{ color: "#fff", fontSize: "1rem" }}>
                    <FiPhone style={{ fontSize: 17 }} /> Phone<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Phone Number"
                    required
                    style={inputStyle}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                  <Form.Label className="d-flex align-items-center gap-2" style={{ color: "#fff", fontSize: "1rem" }}>
                    <BsChatDots style={{ fontSize: 17 }} /> Your Message<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Type your message..."
                    required
                    style={{
                      ...inputStyle,
                      resize: "none",
                      minHeight: "36px",
                      maxHeight: "64px",
                    }}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="fw-bold"
                  style={{
                    width: "100%",
                    background: "linear-gradient(90deg, #8c35f7 20%, #22e3fd 100%)",
                    border: "none",
                    fontWeight: 700,
                    fontSize: "1.08rem",
                    padding: "10px 0",
                    color: "#fff",
                    boxShadow: "0 0 0 3px rgba(34,227,253,0.12), 0 6px 18px 0 rgba(84,56,227,0.07)",
                    borderRadius: "6px",
                    transition: "box-shadow 0.18s",
                    outline: "none",
                  }}
                >
                  <span style={{ position: "relative", zIndex: 2 }}>
                    SUBMIT <FaArrowRight className="ms-2" />
                  </span>
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const inputStyle = {
  background: "transparent",
  border: "none",
  borderBottom: "2px solid #1de8ff",
  borderRadius: 0,
  color: "#fff",
  fontSize: "0.98rem",
  height: "38px",
};

export default QuoteForm;
