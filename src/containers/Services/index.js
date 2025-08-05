import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
  AiOutlineRise,
  AiOutlineRocket,
  AiOutlineMail,
  AiOutlineShareAlt,
  AiOutlineEdit,
  AiOutlineFundView,
} from 'react-icons/ai';
import { ServicesText } from "./data";
import './style.css';

export default function services() {
  return (
    <div className="serviceshome">
      <div className="page-title-area text-center py-5 bg-light">
        <h1>Our Services</h1>
      </div>

      <Container className="py-5">
        <div className="text-center mb-4">
          <h6>{ServicesText.serviceshome_subheader}</h6>
          <h4>{ServicesText.serviceshome_header}</h4>
          <p>{ServicesText.serviceshome_subheader1}</p>
        </div>

        <Row className="g-4">
          {[
            {
              icon: <AiOutlineRise size={50} className="text-success" />,
              title: "SEO Optimization",
              desc: "Boost your search engine rankings and attract quality traffic to your website. Our SEO strategies ensure your brand stands out.",
            },
            {
              icon: <AiOutlineRocket size={50} className="text-info" />,
              title: "PPC Campaigns",
              desc: "Maximize ROI with targeted pay-per-click advertising. We design campaigns that put your products in front of motivated buyers.",
            },
            {
              icon: <AiOutlineMail size={50} className="text-warning" />,
              title: "Email Marketing",
              desc: "Engage customers with personalized email campaigns that nurture leads and promote your offers effectively.",
            },
            {
              icon: <AiOutlineShareAlt size={50} className="text-primary" />,
              title: "Social Media Management",
              desc: "Grow your brand’s reach across all platforms with consistent content and audience engagement strategies.",
            },
            {
              icon: <AiOutlineEdit size={50} className="text-danger" />,
              title: "Content Creation",
              desc: "Craft compelling articles, videos, and visuals that communicate your message and inspire action.",
            },
            {
              icon: <AiOutlineFundView size={50} className="text-info" />,
              title: "Analytics & Reporting",
              desc: "Track performance with detailed reports and dashboards that help you make data-driven decisions.",
            },
          ].map((service, i) => (
            <Col key={i} lg={4} md={6}>
              <div
                className="d-flex flex-column justify-content-center text-center h-100 p-4"
                style={{
                  background: "#000",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "0.5rem",
                  minHeight: "380px",
                }}
              >
                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle border border-light mb-3"
                  style={{
                    width: "70px",
                    height: "70px",
                  }}
                >
                  {service.icon}
                </div>
                <h5 className="fw-semibold text-white">{service.title}</h5>
                <p className="text-light">{service.desc}</p>
                <Button variant="outline-light" size="sm" className="mt-2">
                  Learn More
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
