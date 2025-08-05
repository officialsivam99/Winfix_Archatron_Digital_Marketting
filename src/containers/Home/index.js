import React, { useState, useEffect } from "react";
import Slideshow from "../../components/Slideshow";
import { Link } from "react-router-dom";
import LawOfficeSliderSection from "../../components/LawOfficeSliderSection";
import CaseStudiesZPattern from "../../components/CaseStudiesZPattern";
import ResultsDrivenServices from "../../components/ResultsDrivenServices";
import ServicesSection from "../../components/ServicesSection";
import QuoteForm from "../../components/QuoteForm";

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Modal,
  Form,
} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  AiOutlineRise,
  AiOutlineMail,
  AiOutlineAntDesign,
  AiOutlineUser,
} from "react-icons/ai";
import { MdMouse } from "react-icons/md";
import { FaInstagram, FaLaptopCode, FaArrowRight } from "react-icons/fa";
import { BsStarFill, BsBriefcase, BsChatDots } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import BrandScroller from "../BrandScroller";
import WhyChooseUsSlider from "../WhyChooseUsSlider";

function Home() {
  const [billing, setBilling] = useState("monthly");
  const [hovered, setHovered] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowForm(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseForm = () => setShowForm(false);

  const plans = [
    {
      title: "Starter",
      description: "Starter pack to help you get started",
      btnText: "Get Started",
      recommended: false,
      pricing: { monthly: "Free", yearly: "$0/yr" },
    },
    {
      title: "Pro",
      description: "More power for small teams",
      btnText: "Get Started",
      recommended: true,
      pricing: { monthly: "$20/mo", yearly: "$200/yr" },
    },
    {
      title: "Business+",
      description:
        "For companies that need to manage work across multiple teams",
      btnText: "Get Started",
      recommended: false,
      pricing: { monthly: "$100/mo", yearly: "$1000/yr" },
    },
    {
      title: "Enterprise",
      description: "For enterprise needs",
      btnText: "Contact Sales",
      recommended: false,
      pricing: { monthly: "Custom", yearly: "Custom" },
    },
  ];

  const testimonials = [
    {
      name: "Alice Johnson",
      photo: "https://randomuser.me/api/portraits/women/1.jpg",
      feedback:
        "The PPC team completely transformed our ROI. Within months, our ad spend was optimized to perfection.",
      rating: 5,
    },
    {
      name: "Bob Smith",
      photo: "https://randomuser.me/api/portraits/men/2.jpg",
      feedback:
        "Our clicks doubled and conversion rates soared. A dedicated manager made all the difference.",
      rating: 5,
    },
    {
      name: "Catherine Lee",
      photo: "https://randomuser.me/api/portraits/women/3.jpg",
      feedback:
        "Seamless setup, continuous A/B testing, and clear reports—couldn’t ask for more.",
      rating: 5,
    },
    {
      name: "David Brown",
      photo: "https://randomuser.me/api/portraits/men/4.jpg",
      feedback:
        "Their advanced targeting reached our ideal audience and boosted qualified leads massively.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      photo: "https://randomuser.me/api/portraits/women/5.jpg",
      feedback:
        "Great support, real-time insights, and visible ROI improvements each month.",
      rating: 5,
    },
    {
      name: "Frank Miller",
      photo: "https://randomuser.me/api/portraits/men/6.jpg",
      feedback:
        "Expert PPC audits uncovered issues we never knew existed—game changer.",
      rating: 5,
    },
  ];

  const caseStudies = [
    {
      name: "Rollink",
      desc: "Global eCommerce growth with digital marketing & conversion optimization.",
      img: "https://www.digitalsilk.com/wp-content/uploads/2024/03/rollink-case-study-feature.jpg",
    },
    {
      name: "Mezocare",
      desc: "Healthcare platform success through SEO and digital strategy.",
      img: "https://www.digitalsilk.com/wp-content/uploads/2024/03/mezocare-case-study-feature.jpg",
    },
  ];

  return (
    <div
      className="bg-dark text-light"
      style={{
        fontFamily: "Inter, sans-serif",
        overflowX: "hidden",
        width: "100%",
      }}
    >
      {/* HERO SECTION (Center-Aligned) */}
      <section
        className="py-5 bg-dark text-light"
        style={{
          minHeight: "75vh",
          background: "linear-gradient(105deg,#10182b 60%,#186fd8 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "70px 10px",
        }}
      >
        <Container>
          <Row className="justify-content-center text-center">
            <Col
              lg={10}
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ zIndex: 2 }}
            >
              <h1
                className="display-4 fw-bold mb-3"
                style={{ color: "#01e6ff" }}
              >
                Welcome to Archatron Technologies
              </h1>
              <p
                className="lead mb-4"
                style={{
                  fontSize: "1.25rem",
                  color: "#e5eaff",
                  maxWidth: 700,
                  lineHeight: 1.5,
                }}
              >
                We create custom strategies for SEO, PPC, Social Media, Email & more that deliver measurable growth for ambitious brands.
              </p>
              <Button
                href="#contact"
                variant="success"
                size="lg"
                className="fw-bold px-4 py-2"
                style={{
                  background: "#00FFD1",
                  color: "#181D3D",
                  border: "none",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  boxShadow: "0 2px 14px rgba(0,255,209,.2)",
                }}
              >
                REQUEST A QUOTE
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <BrandScroller />
      <ServicesSection />
      <LawOfficeSliderSection />
      <CaseStudiesZPattern />
      <ResultsDrivenServices />
      <QuoteForm />
      <WhyChooseUsSlider />
    </div>
  );
}

export default Home;
