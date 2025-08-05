// src/components/PricingSection.js
import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Price = () => {
  const [billing, setBilling] = useState("monthly");
  const [hovered, setHovered] = useState(null);

  const plans = [
    {
      title: "Starter",
      description: "A free plan perfect for individuals getting started",
      btnText: "Choose Starter",
      recommended: false,
      pricing: { monthly: "Free", yearly: "$0/yr" },
    },
    {
      title: "Pro",
      description: "Great for small teams needing more control and features",
      btnText: "Choose Pro",
      recommended: true,
      pricing: { monthly: "$20/mo", yearly: "$200/yr" },
    },
    {
      title: "Business+",
      description: "Designed for growing businesses managing multiple users",
      btnText: "Choose Business+",
      recommended: false,
      pricing: { monthly: "$100/mo", yearly: "$1000/yr" },
    },
    {
      title: "Enterprise",
      description: "Customized solutions for large organizations",
      btnText: "Contact Sales",
      recommended: false,
      pricing: { monthly: "Custom", yearly: "Custom" },
    },
  ];

  return (
    <div style={{ backgroundColor: "#121212", paddingTop: "4rem" }}>
      <Container
        className="py-5 text-center text-light border border-secondary rounded"
        style={{ backgroundColor: "#121212" }}
      >
        <h6 className="text-secondary">PRICING</h6>
        <h3 className="mb-4">Find the Plan That Fits Your Needs</h3>
        <p className="mb-5">
          Choose a flexible pricing option that grows with your business. Whether you're starting out or scaling up, we have a plan that’s right for you.
        </p>

        <div className="d-flex justify-content-center mb-4">
          <Button
            variant={billing === "monthly" ? "success" : "outline-light"}
            className="me-2"
            onClick={() => setBilling("monthly")}
          >
            Monthly Billing
          </Button>
          <Button
            variant={billing === "yearly" ? "success" : "outline-light"}
            onClick={() => setBilling("yearly")}
          >
            Yearly Billing
          </Button>
          <span className="ms-3 text-warning align-self-center">
            Save up to 30%
          </span>
        </div>

        <Row
          className="g-3 justify-content-center"
          style={{ columnGap: "15px", flexWrap: "nowrap", overflowX: "auto" }}
        >
          {plans.map((plan, idx) => (
            <Col key={idx} sm={6} md={3} style={{ maxWidth: "280px" }}>
              <Card
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className={`h-100 text-center position-relative border ${
                  plan.recommended ? "border-success" : "border-secondary"
                } ${
                  hovered === idx
                    ? "bg-success text-dark shadow-lg"
                    : "bg-dark text-light"
                }`}
                style={{ transition: "transform 0.2s, box-shadow 0.2s" }}
              >
                {plan.recommended && (
                  <div className="position-absolute top-0 start-50 translate-middle badge bg-success">
                    Best Value
                  </div>
                )}
                <Card.Body className="py-4">
                  <Card.Title>{plan.title}</Card.Title>
                  <Card.Text className="mb-2 text-light">
                    {plan.description}
                  </Card.Text>
                  <h3
                    className={`fw-bold ${
                      hovered === idx
                        ? "text-dark"
                        : plan.recommended
                        ? "text-success"
                        : "text-light"
                    }`}
                  >
                    {plan.pricing[billing]}
                  </h3>
                  <Button
                    variant={
                      hovered === idx
                        ? "dark"
                        : plan.recommended
                        ? "success"
                        : "outline-light"
                    }
                    className="mt-3"
                  >
                    {plan.btnText}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Price;
