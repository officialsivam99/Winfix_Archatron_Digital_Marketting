import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function Aboutus() {
  return (
    <div className="bg-dark text-light">
      {/* Hero Section */}
      <Container fluid className="py-5 text-center bg-black">
        <h1 className="display-4 fw-bold">About Us</h1>
        <p className="lead text-light">
          Your trusted partner in digital success. Discover our journey, values, and the people behind the work.
        </p>
      </Container>

      {/* Our Story */}
      <Container className="py-5">
        <Row className="align-items-center g-4">
          <Col md={6}>
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?fit=crop&w=800&q=80"
              alt="Our Story"
              className="img-fluid rounded"
            />
          </Col>
          <Col md={6}>
            <h2>Our Story</h2>
<p className="text-light">
  Since our founding in 2015, our agency has evolved from a passionate team of designers and developers into a full-service digital powerhouse serving clients across the globe. What began as a small studio in a shared workspace has grown into a thriving company known for creativity, innovation, and a relentless focus on results.
</p>
<p className="text-light">
  From our earliest days, we’ve believed that great digital experiences are built on strong relationships. That’s why we prioritize collaboration—with our clients, within our teams, and with our partners. Every project we take on is shaped by our curiosity and commitment to understanding each client’s unique goals and challenges.
</p>
<p className="text-light">
  Over the years, we’ve helped hundreds of brands transform their online presence. Whether launching a new website, designing a brand identity, or running high-impact digital campaigns, our work is grounded in strategy and driven by passion. Along the way, we’ve grown our talented team, expanded our services, and embraced new technologies to stay ahead in a constantly evolving landscape.
</p>
<p className="text-light">
  Today, we’re proud to be a trusted partner to organizations of all sizes, from ambitious startups to established enterprises. As we look ahead, our mission remains the same: to empower brands to connect, engage, and succeed in the digital world.
</p>

          </Col>
        </Row>
      </Container>

      {/* Mission & Vision */}
      <Container className="py-5">
        <Row className="g-4">
          <Col md={6}>
            <Card bg="dark" text="light" border="light" className="h-100">
              <Card.Body>
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  To empower businesses to grow, engage, and succeed through powerful digital solutions that make a lasting impact.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card bg="dark" text="light" border="light" className="h-100">
              <Card.Body>
                <Card.Title>Our Vision</Card.Title>
                <Card.Text>
                  To be a global leader in digital innovation, recognized for our creativity, integrity, and commitment to excellence.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Core Values */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Our Core Values</h2>
        <Row className="g-4">
          {[
            { title: "Integrity", text: "We do what’s right, not what’s easy." },
            { title: "Creativity", text: "We think outside the box to deliver innovative solutions." },
            { title: "Excellence", text: "We strive for quality in everything we do." },
            { title: "Collaboration", text: "We believe in the power of teamwork and partnership." }
          ].map((value, idx) => (
            <Col md={3} key={idx}>
              <Card bg="dark" text="light" border="light" className="h-100">
                <Card.Body>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>{value.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Our Process */}
      <Container className="py-5">
        <Row className="align-items-center g-4">
          <Col md={6}>
            <h2>How We Work</h2>
            <p className="text-light">
  Our process is transparent, collaborative, and results-driven. We start by taking the time to understand your business goals, target audience, and unique challenges in detail. From there, we develop tailored strategies designed to help you achieve measurable outcomes, whether that's increasing your online visibility, generating qualified leads, or strengthening your brand reputation. Throughout each stage of your project, we maintain open communication, provide regular updates, and incorporate your feedback to ensure the final result exceeds expectations. Our team believes that success is built on a shared vision, clear strategy, and a commitment to delivering exceptional quality every step of the way.
</p>

            <ul>
              <li>Discovery & Research</li>
              <li>Strategy & Planning</li>
              <li>Design & Development</li>
              <li>Launch & Support</li>
            </ul>
          </Col>
          <Col md={6}>
            <img
              src="https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fFdvcmslMjBQcm9jZXNzJTIwZGlnaXRhbCUyMG1hcmtldHRpbmclMjBhZ2VuY3l8ZW58MHwwfDB8fHww"
              alt="Our Process"
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>

      {/* Meet the Team */}
      <Container>
  <Row className="justify-content-center mb-4 mb-md-5">
    <Col lg={7} xl={6} className="text-center">
      <h2
        className="ezy__team1-heading mb-3"
        style={{ fontWeight: 800, letterSpacing: "-0.3px" }}
      >
        Our Experts Team
      </h2>
      <p
        className="ezy__team1-sub-heading mb-0"
        style={{ color: "#444" }}
      >
        Paid media, SEO, content, analytics, and creative—aligned to your growth goals.
      </p>
    </Col>
  </Row>

  <Row className="text-center">
    {[
      {
        picture:
          "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=60",
        fullName: "Olivia Carter",
        designation: "Founder / CEO",
        bio: "Leads strategy and growth; 10+ years in paid media, analytics, and GTM execution.",
      },
      {
        picture:
          "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=60",
        fullName: "Ethan Brooks",
        designation: "Head of Performance Marketing",
        bio: "Google & Meta Ads specialist focused on CAC reduction and full-funnel optimization.",
      },
      {
        picture:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=60",
        fullName: "Sophia Reed",
        designation: "Creative Director",
        bio: "Directs brand storytelling, ad creatives, and high-converting landing page design.",
      },
      {
        picture:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60",
        fullName: "Liam Turner",
        designation: "SEO & Content Lead",
        bio: "Builds content engines, technical SEO, and growth-focused editorial calendars.",
      },
      {
        picture:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=60",
        fullName: "Noah Bennett",
        designation: "Data & Analytics Manager",
        bio: "Attribution, dashboards, and insights that guide spend and creative decisions.",
      },
      {
        picture:
          "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=800&q=60",
        fullName: "Ava Mitchell",
        designation: "CRO & UX Specialist",
        bio: "A/B testing, heatmaps, and UX audits to improve conversion rates across funnels.",
      },
      {
        picture:
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800&q=60",
        fullName: "Mason Clark",
        designation: "Social Media Manager",
        bio: "Organic + paid social, community building, and influencer collaborations.",
      },
    ].map((member, index) => (
      <Col md={6} lg={3} key={index}>
        <Card className="team-card mt-4 border-0">
          <Card.Img
            variant="top"
            src={member.picture}
            alt={member.fullName}
            className="img-fluid w-100"
          />
          <Card.Body className="ezy__team1-content px-3 py-4 px-xl-4">
            <Card.Title as="h4" className="mb-1">{member.fullName}</Card.Title>
            <Card.Subtitle as="h6" className="mb-2">{member.designation}</Card.Subtitle>
            <Card.Text className="opacity-75 mb-0">{member.bio}</Card.Text>
            <Button variant="outline-dark" className="mt-4 ezy__team1-btn">
              View Profile
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>

  <style>{`
    .team-card {
      border: 1px solid #e5e7eb !important;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 6px 20px rgba(0,0,0,.06);
      transition: transform .2s ease, box-shadow .2s ease;
      background: #fff;
    }
    .team-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(0,0,0,.08);
    }
    .team-card img {
      height: 260px;
      object-fit: cover;
      filter: grayscale(8%);
      transition: filter .2s ease, transform .25s ease;
    }
    .team-card:hover img { filter: grayscale(0%); }
    .ezy__team1-content h6 { color: #6b7280; font-weight: 600; }
    .ezy__team1-btn {
      border-color: #111;
      color: #111;
      border-radius: 999px;
      padding: 8px 16px;
    }
    .ezy__team1-btn:hover {
      background: #111;
      color: #fff;
    }
  `}</style>
</Container>


      {/* Photo Gallery */}
      <Container className="py-5">
  <h2 className="text-center mb-4">Life at Our Company</h2>

  <div className="d-flex justify-content-between align-items-center mb-3">
    <Button
      variant="outline-light"
      onClick={() => {
        document.getElementById("scrollGallery").scrollBy({
          left: -300,
          behavior: "smooth",
        });
      }}
    >
      <i className="bi bi-arrow-left"></i>
    </Button>
    <Button
      variant="outline-light"
      onClick={() => {
        document.getElementById("scrollGallery").scrollBy({
          left: 300,
          behavior: "smooth",
        });
      }}
    >
      <i className="bi bi-arrow-right"></i>
    </Button>
  </div>

  <div
    id="scrollGallery"
    style={{
      display: "flex",
      gap: "1rem",
      overflowX: "hidden", // 👈 hides any slider space
      scrollBehavior: "smooth",
    }}
  >
    {[
      "https://images.unsplash.com/photo-1556761175-129418cb2dfe?fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556761175-129418cb2dfe",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?fit=crop&w=600&q=80",
    ].map((src, idx) => (
      <div
        key={idx}
        style={{
          width: "250px",
          height: "180px",
          flexShrink: 0,
        }}
      >
        <img
          src={`${src}?fit=crop&w=600&q=80`}
          alt="Office"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "0.25rem",
          }}
        />
      </div>
    ))}
  </div>
</Container>




      {/* Testimonials */}
      <Container className="py-5">
        <h2 className="text-center mb-4">What Our Clients Say</h2>
        <Row className="g-4">
          {[
            {
              name: "Sarah Johnson",
              text: "Working with this team was an incredible experience. They exceeded our expectations in every way."
            },
            {
              name: "David Lee",
              text: "Their creativity and professionalism helped our brand reach new heights online."
            }
          ].map((testimonial, idx) => (
            <Col md={6} key={idx}>
              <Card bg="dark" text="light" border="light">
                <Card.Body>
                  <Card.Text>"{testimonial.text}"</Card.Text>
                  <Card.Footer className="text-light">— {testimonial.name}</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Call to Action */}
      <Container className="py-5 text-center">
        <h2 className="mb-3">Ready to Grow Together?</h2>
        <p>
          Let's collaborate to build something remarkable. Reach out today to start your project.
        </p>
        <Button variant="outline-light" size="lg">
          Contact Us
        </Button>
      </Container>
    </div>
  );
}

export default Aboutus;
