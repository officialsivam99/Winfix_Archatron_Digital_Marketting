import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";

const COLORS = {
  primary: "#2563eb",
  accent: "#38bdf8",
  bg: "#0f172a",
  bgSoft: "#1e293b",
  surface: "#111827",
  text: "#e5e7eb",
  muted: "#94a3b8",
  white: "#ffffff",
};

const HeroSection = () => (
  <section
    style={{
      background: `linear-gradient(135deg, ${COLORS.bg} 0%, ${COLORS.bgSoft} 100%)`,
      color: COLORS.white,
      fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      padding: 0,
    }}
  >
    <Container>
      <Row className="align-items-center" style={{ minHeight: "100vh", gap: 0 }}>
        {/* LEFT SIDE */}
        <Col
          md={6}
          className="pb-5 pt-5 d-flex flex-column justify-content-center"
          style={{ paddingRight: 46 }}
        >
          {/* Replaced numbers with a compliant, general trust signal */}
          <div className="mb-4 d-flex align-items-center" style={{ fontSize: "1.05rem" }}>
            <img
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=64&q=60"
              alt="Customer avatar"
              style={{ width: 32, height: 32, borderRadius: "50%", marginRight: -8, border: `2px solid ${COLORS.surface}` }}
            />
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=64&q=60"
              alt="Customer avatar"
              style={{ width: 32, height: 32, borderRadius: "50%", marginRight: -8, border: `2px solid ${COLORS.surface}` }}
            />
            <img
              src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=64&q=60"
              alt="Customer avatar"
              style={{ width: 32, height: 32, borderRadius: "50%", marginRight: 12, border: `2px solid ${COLORS.surface}` }}
            />
            <span style={{ color: COLORS.muted }}>Trusted by teams worldwide</span>
          </div>

          <h1
            style={{
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5.7vw, 3.4rem)",
              lineHeight: 1.16,
              marginBottom: 22,
              letterSpacing: "-.6px",
            }}
          >
            Accelerate Growth with Digital <br /> Marketing That Works
          </h1>

          <p
            style={{
              color: COLORS.muted,
              fontSize: "clamp(1.05rem, 2.1vw, 1.2rem)",
              maxWidth: 520,
              marginBottom: 14,
            }}
          >
            Digital Impact helps brands improve visibility, generate qualified leads, and drive revenue through SEO,
            paid media, and content strategies tailored to your goals.
          </p>

          {/* Small “results vary” note to keep claims compliant */}
          

          <div className="d-flex align-items-center flex-wrap mb-2">
            <Button
  style={{
    background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.accent} 100%)`,
    color: COLORS.white,
    border: 0,
    borderRadius: 12,
    fontWeight: 700,
    fontSize: "1.05rem",
    padding: "12px 24px",
    marginRight: 18,
    marginBottom: 12,
    boxShadow: "0 8px 26px rgba(37, 99, 235, 0.35)",
  }}
>
  Book a Free Consultation
</Button>


            
          </div>

          {/* Consent line under primary action */}
          

          <Row className="g-4 mb-3">
            <Col xs={12} sm={6}>
              <Card
                aria-label="Client review from Marvin McKinney"
                style={{
                  border: `1px solid rgba(255,255,255,0.06)`,
                  boxShadow: "0 10px 28px rgba(2,6,23,0.45)",
                  borderRadius: 12,
                  background: COLORS.surface,
                  color: COLORS.text,
                  minHeight: 104,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Card.Body style={{ padding: "14px 16px" }}>
                  <div style={{ fontSize: "1.02rem" }}>
                    “Clear strategy and consistent execution helped us lift qualified lead volume.”
                  </div>
                  <div style={{ fontSize: ".95rem", marginTop: 6, color: COLORS.muted }}>
                    — Marvin McKinney, B2B SaaS (client review, used with permission)
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6}>
              <Card
                aria-label="Client review from Floyd Miles"
                style={{
                  border: `1px solid rgba(255,255,255,0.06)`,
                  boxShadow: "0 10px 28px rgba(2,6,23,0.45)",
                  borderRadius: 12,
                  background: COLORS.surface,
                  color: COLORS.text,
                  minHeight: 104,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Card.Body style={{ padding: "14px 16px" }}>
                  <div style={{ fontSize: "1.02rem" }}>
                    “Fast communication, transparent reporting, and steady performance improvements.”
                  </div>
                  <div style={{ fontSize: ".95rem", marginTop: 6, color: COLORS.muted }}>
                    — Floyd Miles, Ecommerce (client review, used with permission)
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Logos with “illustrative only” clarification */}
          <div
            role="group"
            aria-label="Brand logos for illustration only"
            style={{
              marginTop: 18,
              gap: "28px",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              opacity: 0.9,
            }}
          >
            <span className="visually-hidden">Logos are illustrative and do not imply endorsement.</span>
            <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt="Slack logo (illustrative)" height={24} />
            <img src="https://cdn.worldvectorlogo.com/logos/xiaomi.svg" alt="Xiaomi logo (illustrative)" height={24} />
            <img src="https://cdn.worldvectorlogo.com/logos/hubspot.svg" alt="HubSpot logo (illustrative)" height={24} />
            <img src="https://cdn.worldvectorlogo.com/logos/walmart-2.svg" alt="Walmart logo (illustrative)" height={24} />
            <img src="https://cdn.worldvectorlogo.com/logos/spotify-2.svg" alt="Spotify logo (illustrative)" height={24} />
          </div>
        </Col>

        {/* RIGHT VISUAL */}
        <Col
          md={6}
          className="d-flex justify-content-md-end justify-content-center align-items-center"
          style={{ minHeight: 456, paddingLeft: 46 }}
        >
          <div
            style={{
              position: "relative",
              width: "clamp(478.8px, 39.9vw, 684px)",
              height: "clamp(456px, 57vh, 570px)",
              maxWidth: "100%",
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 14px 40px rgba(2,6,23,.55)",
              background: COLORS.white,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?fit=crop&w=1200&q=80"
              alt="Team discussing marketing strategy in an office"
              style={{ width: "100%", height: 388, objectFit: "cover", display: "block" }}
            />

            {/* Keep as recognition badge, no performance claim */}
            <Badge
              style={{
                position: "absolute",
                top: 20,
                right: 22,
                background: `linear-gradient(135deg, ${COLORS.accent} 0%, ${COLORS.primary} 100%)`,
                color: COLORS.white,
                fontWeight: 800,
                fontSize: "1rem",
                padding: "10px 20px",
                borderRadius: 999,
                boxShadow: "0 6px 20px rgba(37,99,235,.35)",
              }}
              aria-label="Client satisfaction focus"
            >
              Client-First Delivery
            </Badge>

            <Card
              style={{
                position: "absolute",
                left: 20,
                bottom: 20,
                padding: "16px 18px",
                minWidth: 200,
                border: "1px solid rgba(2,6,23,.06)",
                borderRadius: 12,
                boxShadow: "0 8px 26px rgba(2,6,23,.12)",
                background: COLORS.white,
                color: "#0b1220",
              }}
              aria-label="Impact summary"
            >
              <div style={{ fontWeight: 800, fontSize: "1.22rem", marginBottom: 2 }}>Impact & Insights</div>
              <div style={{ fontSize: ".98rem", marginTop: 2, color: "#475569" }}>
                Read how we structured campaigns for measurable growth.
              </div>
              <div style={{ fontSize: ".96rem", marginTop: 8 }}>
                <a href="/case-studies" style={{ color: COLORS.primary, fontWeight: 700, textDecoration: "none" }}>
                  View Case Study →
                </a>
              </div>
            </Card>

            <Card
              style={{
                position: "absolute",
                right: 20,
                bottom: 20,
                width: 180,
                border: "1px solid rgba(2,6,23,.06)",
                borderRadius: 12,
                padding: "20px 16px",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "0 8px 26px rgba(2,6,23,.12)",
                background: COLORS.white,
                color: "#0b1220",
              }}
              aria-label="Certifications"
            >
              <img
                src="https://cdn.worldvectorlogo.com/logos/google-ads-1.svg"
                alt="Google Ads logo"
                style={{ height: 40, marginBottom: 12 }}
              />
              <div style={{ lineHeight: 1.25, fontSize: ".98rem" }}>
                Platform Certified
                <br />
                <span style={{ fontWeight: 700, color: COLORS.primary }}>Search & Display</span>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default HeroSection;
