// src/components/WhyChooseUsSlider.js
import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const cards = [
  {
    number: "01",
    title: "Strategic Planning",
    description:
      "We tailor digital strategies based on your business goals, industry trends, and audience behavior for sustainable growth.",
  },
  {
    number: "02",
    title: "Data-focused Services",
    description:
      "We collect, analyze, and act on performance metrics to drive result-oriented campaigns that scale.",
  },
  {
    number: "03",
    title: "Omnichannel Expertise",
    description:
      "From SEO to social media to paid ads, we manage end-to-end campaigns across all digital touchpoints.",
  },
  {
    number: "04",
    title: "Creative Content",
    description:
      "Our content team crafts compelling, SEO-optimized content that engages and converts.",
  },
  {
    number: "05",
    title: "Real-time Reporting",
    description:
      "You get live dashboards and frequent updates so you always stay informed about campaign performance.",
  },
  {
    number: "06",
    title: "Dedicated Support",
    description:
      "Our team is always just a message away, ensuring seamless communication and priority assistance.",
  },
];

const WhyChooseUsSlider = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#121212" }}>
      <Container fluid className="px-4">
        <Row className="align-items-center position-relative">
          {/* Left Section */}
          <Col md={6} className="p-5" style={{ backgroundColor: "#1a1a2e" }}>
            <h2 className="fw-bold text-white display-6 mb-3">
              Why WinFix Solution as Your Extended Digital Marketing Team
            </h2>
            <p className="fs-5 text-white">
              As a leading digital marketing company, Bluemoontech understands every unique business requirement. 
              Our skilled marketing experts craft solutions to drive conversions and growth.
            </p>
          </Col>

          {/* Right Carousel Section */}
          <Col md={6} className="py-5 px-3" style={{ backgroundColor: "#181a29", position: "relative" }}>
            {/* Carousel Wrapper with Absolute Positioned Arrows */}
            <div className="position-relative">
              <Carousel
                indicators={false}
                controls={true}
                fade={false}
                interval={5000}
                nextIcon={
                  <span
                    className="bg-white text-dark d-flex justify-content-center align-items-center shadow"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "50%",
                      right: "-25px",
                      transform: "translateY(-50%)",
                      zIndex: 10,
                    }}
                  >
                    <i className="bi bi-chevron-right"></i>
                  </span>
                }
                prevIcon={
                  <span
                    className="bg-white text-dark d-flex justify-content-center align-items-center shadow"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "50%",
                      left: "-25px",
                      transform: "translateY(-50%)",
                      zIndex: 10,
                    }}
                  >
                    <i className="bi bi-chevron-left"></i>
                  </span>
                }
              >
                {cards.map((card, index) => (
                  <Carousel.Item key={index}>
                    <Card
                      className="border-0 p-4 rounded shadow"
                      style={{ backgroundColor: "#24243e", color: "#fff" }}
                    >
                      <Card.Body>
                        <h1 className="text-white fw-bold mb-3">{card.number}</h1>
                        <h4 className="fw-bold text-white mb-3">{card.title}</h4>
                        <p className="text-white fs-6">{card.description}</p>
                      </Card.Body>
                    </Card>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUsSlider;
