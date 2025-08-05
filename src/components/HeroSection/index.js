import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";

const HeroSection = () => (
  <section
    style={{
      background: "#181a20",
      color: "#fff",
      fontFamily: "Inter, sans-serif",
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      padding: 0,
    }}
  >
    <Container>
      <Row
        className="align-items-center"
        style={{
          minHeight: "100vh",
          gap: 0,
        }}
      >
        {/* LEFT SIDE */}
        <Col
          md={6}
          className="pb-5 pt-5 d-flex flex-column justify-content-center"
          style={{
            paddingRight: 45.6, // 48 - 5%
          }}
        >
          <div className="mb-4 d-flex align-items-center" style={{ fontSize: "1.14rem" }}>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" style={{ width: 32.3, height: 32.3, borderRadius: "50%", marginRight: -7.6, border: "2.28px solid #232735" }}/>
            <img src="https://randomuser.me/api/portraits/women/31.jpg" alt="" style={{ width: 32.3, height: 32.3, borderRadius: "50%", marginRight: -7.6, border: "2.28px solid #232735" }}/>
            <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="" style={{ width: 32.3, height: 32.3, borderRadius: "50%", marginRight: 13.3, border: "2.28px solid #232735" }}/>
            <span style={{ color: "#bfc4cb" }}>Trusted by 10,000+ Customers</span>
          </div>
          <h1 style={{
            fontWeight: 700,
            fontSize: "clamp(2.622rem, 5.7vw, 3.42rem)",
            lineHeight: 1.16,
            marginBottom: 22.8,
            letterSpacing: "-.665px"
          }}>
            Accelerate Growth with<br />Digital Marketing That Works
          </h1>
          <p style={{
            color: "#b7bcc4",
            fontSize: "clamp(1.2445rem, 2.28vw, 1.3775rem)",
            maxWidth: 501.6,
            marginBottom: 36.1
          }}>
            NovaReach helps brands increase visibility, generate leads, and drive revenue through SEO, paid ads, and content strategies built for impact.
          </p>
          <div className="d-flex align-items-center flex-wrap mb-5">
            <Button style={{
              background: "#caff70",
              color: "#181a20",
              border: 0,
              borderRadius: 10,
              fontWeight: 600,
              fontSize: "1.292rem",
              padding: "13.3px 29.45px",
              marginRight: 21.85,
              marginBottom: 17.1,
              boxShadow: "0 2.28px 9.5px #caff7040"
            }}>
              Request Free Audit
            </Button>
            <a href="#" style={{
              fontWeight: 500,
              fontSize: "1.2445rem",
              color: "#fff",
              opacity: 0.89,
              textDecoration: "none",
              marginBottom: 17.1
            }}>
              Explore Case Studies
            </a>
          </div>
          <Row className="g-4 mb-4">
            <Col xs={12} sm={6}>
              <Card style={{
                border: 0,
                boxShadow: "0 2.28px 16.15px #000b",
                borderRadius: 9.12,
                background: "#232735",
                color: "#fff",
                minHeight: 104.5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}>
                <Card.Body style={{ padding: "13.3px 13.3px 9.5px 15.2px" }}>
                  <div style={{ fontSize: "1.1495em", color: "#dadfe2" }}>
                    “ Leads went up 3x after working with NovaReach. ”
                  </div>
                  <div>
                    <span style={{
                      fontWeight: 700,
                      color: "#caff70",
                      fontSize: "1.2065rem",
                      marginRight: 5.7
                    }}>
                      Marvin McKinney
                    </span>
                    <span style={{
                      color: "#ffe66f",
                      fontWeight: 600,
                      fontSize: "1.197rem"
                    }}>
                      ★ 5.0
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card style={{
                border: 0,
                boxShadow: "0 2.28px 16.15px #000b",
                borderRadius: 9.12,
                background: "#232735",
                color: "#fff",
                minHeight: 104.5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}>
                <Card.Body style={{ padding: "13.3px 13.3px 9.5px 15.2px" }}>
                  <div style={{ fontSize: "1.1495em", color: "#dadfe2" }}>
                    “ Fast team, clear strategy, and real results. ”
                  </div>
                  <div>
                    <span style={{
                      fontWeight: 700,
                      color: "#caff70",
                      fontSize: "1.2065rem",
                      marginRight: 5.7
                    }}>
                      Floyd Miles
                    </span>
                    <span style={{
                      color: "#ffe66f",
                      fontWeight: 600,
                      fontSize: "1.197rem"
                    }}>
                      ★ 4.8
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div style={{
            marginTop: 30.4,
            gap: "34.2px",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap"
          }}>
            <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt="Slack" height={24.7} />
            <img src="https://cdn.worldvectorlogo.com/logos/xiaomi.svg" alt="Xiaomi" height={24.7} />
            <img src="https://cdn.worldvectorlogo.com/logos/hubspot.svg" alt="Hubspot" height={24.7} />
            <img src="https://cdn.worldvectorlogo.com/logos/walmart-2.svg" alt="Walmart" height={24.7} />
            <img src="https://cdn.worldvectorlogo.com/logos/spotify-2.svg" alt="Spotify" height={24.7} />
          </div>
        </Col>

        {/* RIGHT VISUAL */}
        <Col
          md={6}
          className="d-flex justify-content-md-end justify-content-center align-items-center"
          style={{
            minHeight: 456,
            paddingLeft: 45.6,
          }}
        >
          <div
            style={{
              position: "relative",
              width: "clamp(684px, 39.9vw, 478.8px)",
              height: "clamp(456px, 57vh, 570px)",
              maxWidth: "100%",
              borderRadius: 9.12,
              overflow: "hidden",
              boxShadow: "0 9.12px 32.3px rgba(0,0,0,.32)",
              background: "#fff",
            }}
          >
            {/* Main Image */}
            <img
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?fit=crop&w=800&q=80"
              alt="Office Discussion"
              style={{
                width: "100%",
                height: 387.6,
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* 98% Client Satisfaction Badge */}
            <Badge
              style={{
                position: "absolute",
                top: 20.9,
                right: 22.8,
                background: "#d5ff95",
                color: "#173213",
                fontWeight: 700,
                fontSize: "1.2445rem",
                padding: "16.15px 32.3px",
                borderRadius: 9.12,
                boxShadow: "0 2.28px 16.15px rgba(0,0,0,.13)",
              }}
            >
              98% <span style={{ fontWeight: 400, fontSize: "1.045rem" }}>Client Satisfaction</span>
            </Badge>

            {/* 8500+ Clients Helped Card */}
            <Card
              style={{
                position: "absolute",
                left: 20.9,
                bottom: 20.9,
                padding: "20.9px 19.0px 16.15px 20.9px",
                minWidth: 199.5,
                border: 0,
                borderRadius: 9.12,
                boxShadow: "0 4.56px 20.9px rgba(0,0,0,.15)",
                background: "#fff",
                color: "#181a20",
              }}
            >
              <div style={{ fontWeight: 700, fontSize: "1.406rem", marginBottom: 0.95 }}>
                8500<span style={{ color: "#b5e952" }}>+</span>
              </div>
              <div style={{ fontSize: "1.1115rem", marginTop: 1.9, color: "#545963" }}>
                Clients Helped
              </div>
              <div style={{ fontSize: 21.66, marginTop: 9.5 }}>
                🧑‍💼&nbsp;👩‍💻&nbsp;🧔&nbsp;👩‍🎨
              </div>
            </Card>

            {/* Google Ads Certified Card */}
            <Card
              style={{
                position: "absolute",
                right: 20.9,
                bottom: 20.9,
                width: 161.5,
                border: 0,
                borderRadius: 9.12,
                padding: "24.7px 17.1px",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "0 4.56px 20.9px rgba(0,0,0,.12)",
                background: "#fff",
                color: "#181a20"
              }}
            >
              <img
                src="https://cdn.worldvectorlogo.com/logos/google-ads-1.svg"
                alt="Google Ads"
                style={{ height: 40.85, marginBottom: 13.3 }}
              />
              <div style={{ lineHeight: 1.25, fontSize: "1.121rem" }}>
                Google Ads<br />
                <span style={{ fontWeight: 600, color: "#43b324" }}>Certified ✔︎</span>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default HeroSection;
