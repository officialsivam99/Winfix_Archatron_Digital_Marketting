import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { FiUser, FiMail, FiSend } from "react-icons/fi";
import { FaRocket } from "react-icons/fa";

const HERO_PALETTE = {
  gradient: "linear-gradient(120deg, #232b60 0%, #222 70%, #24d2fb 100%)",
  accent: "#24d2fb",
  accent2: "#3556f8",
  bgGlass: "rgba(26,36,72,0.92)",
  inputBg: "#232953",
  inputBorder: "#24d2fb",
};

const FONT_FAMILY = `'Inter', 'Space Grotesk', Arial, sans-serif`;

export default function Slideshow() {
  // Animation triggers
  const [showHero, setShowHero] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowHero(true), 150);
  }, []);

  // Form state
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // Form handlers
  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section
      style={{
        minHeight: "92vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        background: HERO_PALETTE.gradient,
        fontFamily: FONT_FAMILY,
      }}
    >
      {/* Animated, blurred, glowing background blobs */}
      <div
        style={{
          position: "absolute",
          left: "-160px",
          top: "-110px",
          width: "400px",
          height: "400px",
          zIndex: 0,
          background: "radial-gradient(circle at 60% 40%, #24d2fb99, transparent 70%)",
          filter: "blur(26px)",
          opacity: 0.38,
          animation: "blobGlow 9s ease-in-out infinite alternate",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "-140px",
          bottom: "-90px",
          width: "350px",
          height: "350px",
          zIndex: 0,
          background: "radial-gradient(circle at 30% 80%, #3556f888, transparent 70%)",
          filter: "blur(30px)",
          opacity: 0.33,
          animation: "blobGlow2 11s ease-in-out infinite alternate",
        }}
      />

      <Container fluid="lg" style={{ position: "relative", zIndex: 1 }}>
        <Row
          className="align-items-center"
          style={{ minHeight: "85vh", padding: "2.5rem 0" }}
        >
          {/* LEFT: Hero Content */}
          <Col
            lg={6}
            className="mb-5 mb-lg-0"
            style={{
              zIndex: 2,
              position: "relative",
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {/* Floating rocket icon */}
            <span
              style={{
                display: "inline-block",
                background: "linear-gradient(90deg,#24d2fb33,#3556f833)",
                borderRadius: "999px",
                padding: "11px 21px",
                marginBottom: 18,
                color: HERO_PALETTE.accent,
                fontWeight: 600,
                fontSize: 17,
                letterSpacing: ".7px",
                boxShadow: "0 2px 14px #24d2fb28",
                transform: showHero ? "translateY(0)" : "translateY(-30px)",
                opacity: showHero ? 1 : 0,
                transition: "all 0.7s cubic-bezier(.5,1.8,.36,.95)",
                animation: "floatRocket 3.6s ease-in-out infinite alternate",
              }}
            >
              <FaRocket style={{ marginRight: 12, color: HERO_PALETTE.accent2 }} />
              Top-Tier Results
            </span>
            {/* Animated headline */}
            <h1
              style={{
                fontWeight: 900,
                fontSize: "clamp(2.3rem,5vw,3.7rem)",
                letterSpacing: "-2px",
                lineHeight: 1.11,
                marginBottom: "14px",
                background: "linear-gradient(92deg,#fff,#24d2fb 77%,#b0d8ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                opacity: showHero ? 1 : 0,
                transform: showHero ? "translateY(0)" : "translateY(42px)",
                transition: "all 0.9s cubic-bezier(.3,1.5,.38,.98)",
                textShadow: "0 4px 32px #222a4a44",
              }}
            >
              Elevate Your Brand
            </h1>
            {/* Subheadline */}
            <h3
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: "1.36rem",
                marginBottom: "14px",
                letterSpacing: "0.8px",
                textShadow: "0 2px 14px #181d2f33",
                opacity: showHero ? 1 : 0,
                transform: showHero ? "translateY(0)" : "translateY(26px)",
                transition: "all 1.2s cubic-bezier(.3,1.5,.38,.98)",
              }}
            >
              Premium Digital Marketing, For Ambitious Brands
            </h3>
            {/* Description */}
            <p
              style={{
                fontSize: "1.09rem",
                color: "#eaf4fe",
                maxWidth: 470,
                marginBottom: 28,
                fontWeight: 500,
                opacity: showHero ? 1 : 0,
                transform: showHero ? "translateY(0)" : "translateY(18px)",
                transition: "all 1.4s cubic-bezier(.3,1.5,.38,.98)",
              }}
            >
              SEO, PPC, Social, Email—custom strategies with measurable results, creative vision, and full transparency.
            </p>
            {/* CTA Button */}
            <Button
              size="lg"
              style={{
                background: "linear-gradient(90deg,#24d2fb 0%,#3556f8 100%)",
                border: "none",
                color: "#fff",
                fontWeight: 800,
                borderRadius: "99px",
                fontSize: "1.14rem",
                letterSpacing: ".8px",
                boxShadow: "0 4px 24px #3556f880,0 1.5px 6px #24d2fb70",
                padding: "12px 34px",
                transition: "background .17s, transform .16s",
                outline: "none",
              }}
              onMouseOver={e => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseOut={e => (e.currentTarget.style.transform = "scale(1.0)")}
              href="#contact"
            >
              Start Your Project <FiSend style={{ marginLeft: 10, fontSize: 22, verticalAlign: -2 }} />
            </Button>
          </Col>

          {/* RIGHT: Glassmorphic Contact Form */}
          <Col lg={6} className="d-flex justify-content-center" style={{ zIndex: 2 }}>
            <Form
              onSubmit={handleSubmit}
              className="w-100"
              style={{
                maxWidth: 410,
                borderRadius: 23,
                background: HERO_PALETTE.bgGlass,
                boxShadow: "0 8px 44px #192c3f55, 0 1.5px 4px #24d2fb44",
                border: "1.5px solid #253270",
                backdropFilter: "blur(8px)",
                padding: "38px 30px 26px 30px",
                position: "relative",
                animation: showHero ? "fadeInUp 1.1s" : "none",
              }}
            >
              {/* Floating icon */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "-32px",
                  transform: "translateX(-50%)",
                  background:
                    "linear-gradient(90deg,#24d2fb 30%,#3556f8 100%)",
                  borderRadius: "999px",
                  padding: 14,
                  boxShadow: "0 4px 24px #24d2fb44",
                }}
              >
                <FiMail style={{ color: "#fff", fontSize: 27 }} />
              </div>
              <h5
                className="mb-4 text-center"
                style={{
                  color: HERO_PALETTE.accent,
                  fontWeight: 800,
                  letterSpacing: ".7px",
                  fontSize: "1.22rem",
                }}
              >
                Quick Contact
              </h5>
              {/* Name */}
              <Form.Group className="mb-3">
                <Form.Label style={{ color: "#b9c2df", fontSize: "0.95rem", fontWeight: 700 }}>
                  Name
                </Form.Label>
                <div style={{ position: "relative" }}>
                  <FiUser style={{
                    position: "absolute", top: 13, left: 13,
                    color: HERO_PALETTE.accent
                  }} />
                  <Form.Control
                    required
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    autoComplete="off"
                    value={form.name}
                    onChange={handleChange}
                    style={{
                      paddingLeft: 38,
                      background: HERO_PALETTE.inputBg,
                      color: "#fff",
                      border: `1.5px solid #232953`,
                      fontWeight: 500,
                      boxShadow: "none",
                      height: 46,
                      transition: "border .18s, box-shadow .18s",
                    }}
                    onFocus={e => e.target.style.border = `1.5px solid ${HERO_PALETTE.inputBorder}`}
                    onBlur={e => e.target.style.border = `1.5px solid #232953`}
                  />
                </div>
              </Form.Group>
              {/* Email */}
              <Form.Group className="mb-3">
                <Form.Label style={{ color: "#b9c2df", fontSize: "0.95rem", fontWeight: 700 }}>
                  Email
                </Form.Label>
                <div style={{ position: "relative" }}>
                  <FiMail style={{
                    position: "absolute", top: 13, left: 13,
                    color: HERO_PALETTE.accent
                  }} />
                  <Form.Control
                    required
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    autoComplete="off"
                    value={form.email}
                    onChange={handleChange}
                    style={{
                      paddingLeft: 38,
                      background: HERO_PALETTE.inputBg,
                      color: "#fff",
                      border: `1.5px solid #232953`,
                      fontWeight: 500,
                      boxShadow: "none",
                      height: 46,
                      transition: "border .18s, box-shadow .18s",
                    }}
                    onFocus={e => e.target.style.border = `1.5px solid ${HERO_PALETTE.inputBorder}`}
                    onBlur={e => e.target.style.border = `1.5px solid #232953`}
                  />
                </div>
              </Form.Group>
              {/* Message */}
              <Form.Group className="mb-4">
                <Form.Label style={{ color: "#b9c2df", fontSize: "0.95rem", fontWeight: 700 }}>
                  Message
                </Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  required
                  placeholder="How can we help?"
                  value={form.message}
                  onChange={handleChange}
                  style={{
                    background: HERO_PALETTE.inputBg,
                    color: "#fff",
                    border: `1.5px solid #232953`,
                    fontWeight: 500,
                    minHeight: 74,
                    boxShadow: "none",
                    resize: "vertical",
                    transition: "border .18s, box-shadow .18s",
                  }}
                  onFocus={e => e.target.style.border = `1.5px solid ${HERO_PALETTE.inputBorder}`}
                  onBlur={e => e.target.style.border = `1.5px solid #232953`}
                />
              </Form.Group>
              <Button
                type="submit"
                className="w-100 d-flex align-items-center justify-content-center"
                style={{
                  background:
                    "linear-gradient(90deg,#24d2fb 25%,#3556f8 100%)",
                  border: "none",
                  fontWeight: 800,
                  fontSize: 18,
                  borderRadius: 10,
                  boxShadow: "0 2px 14px #24d2fb50",
                  padding: "13px 0",
                  transition: "background .17s, transform .17s",
                  outline: "none",
                }}
                disabled={submitted}
                onMouseOver={e => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={e => (e.currentTarget.style.transform = "scale(1.0)")}
                aria-label="Send Message"
              >
                {submitted ? (
                  <>
                    <FiSend className="me-2 spin-slow" /> Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="me-2" /> Send Message
                  </>
                )}
              </Button>
              {submitted && (
                <div className="mt-3 text-center" style={{ color: HERO_PALETTE.accent, fontWeight: 700 }}>
                  Thank you! We'll be in touch soon.
                </div>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
      {/* Animation keyframes for floating, headline reveal, etc */}
      <style>{`
        @keyframes floatRocket {
          0% { transform: translateY(0);}
          100% { transform: translateY(-13px);}
        }
        @keyframes blobGlow {
          0% { transform: scale(1);}
          100% { transform: scale(1.08);}
        }
        @keyframes blobGlow2 {
          0% { transform: scale(1);}
          100% { transform: scale(1.12);}
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .spin-slow { animation: spin 1.2s linear infinite;}
        @keyframes spin { 100% { transform: rotate(360deg);} }
        @media (max-width: 991px) {
          .row.align-items-center {
            min-height: unset !important;
            padding-bottom: 48px !important;
          }
          .mb-lg-0 { margin-bottom: 2.7rem !important; }
        }
        @media (max-width: 767px) {
          h1 { font-size: 2rem !important; }
          h3 { font-size: 1.08rem !important; }
          .row.align-items-center {
            padding-top: 20px !important;
            padding-bottom: 20px !important;
          }
          div[style*="maxWidth: 410px"] {
            padding: 18px 8px !important;
          }
        }
      `}</style>
    </section>
  );
}
