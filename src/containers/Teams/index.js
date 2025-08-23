import React from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import "./style.css";

const teamMembers = [
  {
    picture: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=60",
    fullName: "Olivia Carter",
    designation: "Founder / CEO",
    bio: "Leads strategy and growth; 10+ years in paid media, analytics, and GTM execution.",
  },
  {
    picture: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=60",
    fullName: "Ethan Brooks",
    designation: "Head of Performance Marketing",
    bio: "Google & Meta Ads specialist focused on CAC reduction and full-funnel optimization.",
  },
  {
    picture: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=60",
    fullName: "Sophia Reed",
    designation: "Creative Director",
    bio: "Directs brand storytelling, ad creatives, and high-converting landing page design.",
  },
  {
    picture: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60",
    fullName: "Liam Turner",
    designation: "SEO & Content Lead",
    bio: "Builds content engines, technical SEO, and growth-focused editorial calendars.",
  },
  // Row 2
  {
    picture: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=60",
    fullName: "Noah Bennett",
    designation: "Data & Analytics Manager",
    bio: "Attribution, dashboards, and insights that guide spend and creative decisions.",
  },
  {
    picture: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=800&q=60",
    fullName: "Ava Mitchell",
    designation: "CRO & UX Specialist",
    bio: "A/B testing, heatmaps, and UX audits to improve conversion rates across funnels.",
  },
  {
    picture: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800&q=60",
    fullName: "Mason Clark",
    designation: "Social Media Manager",
    bio: "Organic + paid social, community building, and influencer collaborations.",
  },
  ,
];

const TeamMemberItem = ({ member }) => (
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
);

TeamMemberItem.propTypes = {
  member: PropTypes.object.isRequired,
};

const Teams = () => {
  return (
    <section className="ezy__team1 minimal" style={{ background: "#fff", color: "#111" }}>
      <Container>
        <Row className="justify-content-center mb-4 mb-md-5">
          <Col lg={7} xl={6} className="text-center">
            <h2 className="ezy__team1-heading mb-3" style={{ fontWeight: 800, letterSpacing: "-0.3px" }}>
              Our Experts Team
            </h2>
            <p className="ezy__team1-sub-heading mb-0" style={{ color: "#444" }}>
              Paid media, SEO, content, analytics, and creative—aligned to your growth goals.
            </p>
          </Col>
        </Row>

        <Row className="text-center">
          {teamMembers.map((member, index) => (
            <Col md={6} lg={3} key={index}>
              <TeamMemberItem member={member} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Minimal styles scoped to this section */}
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
        .ezy__team1.minimal { padding: 56px 0; }
      `}</style>
    </section>
  );
};

export default Teams;
