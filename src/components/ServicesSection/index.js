import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaBullhorn,
  FaPaintBrush,
  FaCode,
  FaInstagram,
  FaSearchDollar,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Digital Marketing",
    description:
      "We craft multi-platform digital campaigns tailored to drive awareness, engagement, and conversion. From funnel design to analytics — everything is tracked and optimized.",
    features: ["Cross-platform strategy", "Conversion optimization"],
    icon: <FaBullhorn size={30} />,
  },
  {
    title: "Web Design",
    description:
      "We design sleek, modern interfaces that align with your brand and inspire user action. Mobile-first, performance-tuned, and stunning to look at.",
    features: ["UI/UX centric", "Responsive across devices"],
    icon: <FaPaintBrush size={30} />,
  },
  {
    title: "Web Development",
    description:
      "We build dynamic, SEO-friendly websites using React, WordPress, or full custom stacks. Expect blazing speed, clean code, and scalable performance.",
    features: ["Secure architecture", "SEO & analytics ready"],
    icon: <FaCode size={30} />,
  },
  {
    title: "Social Media Management",
    description:
      "We grow your social presence by curating content, scheduling posts, running ad campaigns, and engaging your followers with consistency.",
    features: ["Meta & IG expertise", "Monthly growth reports"],
    icon: <FaInstagram size={30} />,
  },
  {
    title: "SEO & PPC",
    description:
      "We help you rank higher and run profitable ad campaigns. On-page optimization, keyword research, Google Ads, retargeting — all handled.",
    features: ["Google Ads Certified", "SEO audit reports"],
    icon: <FaSearchDollar size={30} />,
  },
  {
    title: "Email Marketing",
    description:
      "We set up automations, segment your list, write compelling copy, and deliver email funnels that nurture leads and convert cold traffic.",
    features: ["Personalized flows", "A/B tested campaigns"],
    icon: <FaEnvelopeOpenText size={30} />,
  },
];

const ServicesSection = () => {
  return (
    <div style={{ background: "#0b0f19", padding: "70px 0" }}>
      <Container>
        <motion.h2
          className="text-center mb-5"
          style={{ fontWeight: 700, color: "#1ddfff" }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Results-Driven Services
        </motion.h2>

        <Row>
          {services.map((service, idx) => (
            <Col key={idx} lg={4} md={6} sm={12} className="mb-4 d-flex align-items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.04 }}
                style={{ width: "100%" }}
              >
                <Card
                  className="text-white text-center"
                  style={{
                    background: "#121826",
                    border: "1px solid #1ddfff33",
                    borderRadius: "16px",
                    height: "100%",
                    aspectRatio: "1 / 1",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    style={{ color: "#1ddfff", marginBottom: "18px" }}
                  >
                    {service.icon}
                  </motion.div>

                  <Card.Title style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                    {service.title}
                  </Card.Title>

                  <Card.Text
                    style={{
                      color: "#bbb",
                      fontSize: "0.9rem",
                      marginTop: 12,
                      padding: "0 10px",
                    }}
                  >
                    {service.description}
                  </Card.Text>

                  <p
                    style={{
                      color: "#ccc",
                      fontSize: "0.85rem",
                      marginTop: 14,
                      padding: "0 10px",
                    }}
                  >
                    <strong>Highlights:</strong> {service.features.join(", ")}.
                  </p>

                  <div className="mt-3">
                    <Button size="sm" variant="outline-info">
                      Learn More
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ServicesSection;
