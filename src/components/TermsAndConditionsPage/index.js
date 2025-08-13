import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Base styles
const pageStyles = {
  minHeight: "100vh",
  background: "#f8fafc",
  paddingTop: "40px",
  paddingBottom: "40px",
};

const headingStyles = {
  fontWeight: 700,
  fontSize: "2.5rem",
  marginBottom: "1rem",
  letterSpacing: "-1px",
};

const sectionTitle = {
  fontWeight: 500,
  fontSize: "1.25rem",
  marginTop: "2rem",
  marginBottom: "0.8rem",
  color: "#1a2330",
};

// Responsive adjustments
const getResponsiveStyles = () => {
  const width = window.innerWidth;
  let pagePadTopBot = "40px";
  let h1Font = "2.5rem";
  let stFont = "1.25rem";
  if (width < 600) {
    pagePadTopBot = "24px";
    h1Font = "2rem";
    stFont = "1.1rem";
  }
  return {
    pageStyles: {
      ...pageStyles,
      paddingTop: pagePadTopBot,
      paddingBottom: pagePadTopBot,
    },
    headingStyles: { ...headingStyles, fontSize: h1Font },
    sectionTitle: { ...sectionTitle, fontSize: stFont },
  };
};

const TermsAndConditionsPage = () => {
  const [styleSet, setStyleSet] = React.useState(getResponsiveStyles());

  React.useEffect(() => {
    const handleResize = () => setStyleSet(getResponsiveStyles());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styleSet.pageStyles}>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <div
              style={{
                background: "#fff",
                boxShadow: "0 8px 24px rgba(60,72,88,0.10)",
                padding: "2.5rem",
                fontFamily: "'Inter', 'Roboto', 'Segoe UI', sans-serif",
                minHeight: "calc(100vh - 80px)",
                borderRadius: "0",
              }}
            >
              <h1 style={styleSet.headingStyles}>Terms and Conditions</h1>
              <div className="mb-4" style={{ color: "#49526a" }}>
                <em>Last Updated: August 8, 2025</em>
              </div>

              <div>
                These Terms and Conditions outline the rules and regulations for the use 
                of <strong>Archatron Technologies</strong>’s Website 
                (<strong>https://archatrontechnologies.com/</strong>).
              </div>

              <div style={styleSet.sectionTitle}>Acceptance of Terms</div>
              <p>
                By accessing this website, we assume you accept these Terms and Conditions. 
                Do not continue to use our website if you do not agree to all of the terms 
                and conditions stated on this page.
              </p>

              <div style={styleSet.sectionTitle}>License</div>
              <p>
                Unless otherwise stated, Archatron Technologies and/or its licensors own 
                the intellectual property rights for all material on this website. All 
                intellectual property rights are reserved. You may access this for your 
                personal use subject to restrictions set in these terms.
              </p>
              <p>You must not:</p>
              <ul>
                <li>Republish material from our website</li>
                <li>Sell, rent, or sub-license material from the site</li>
                <li>Reproduce, duplicate, or copy content for commercial purposes</li>
                <li>Redistribute content from our website</li>
              </ul>

              <div style={styleSet.sectionTitle}>User Responsibilities</div>
              <p>
                You agree to use our website in a lawful, respectful, and responsible way. 
                You must not engage in any activity that causes damage to the site or impairs 
                user accessibility.
              </p>

              <div style={styleSet.sectionTitle}>Limitation of Liability</div>
              <p>
                In no event shall Archatron Technologies be liable for any indirect, incidental, 
                consequential, or punitive damages arising out of your access to or use of 
                the website.
              </p>

              <div style={styleSet.sectionTitle}>Governing Law</div>
              <p>
                These Terms will be governed and interpreted in accordance with the laws of 
                your jurisdiction, without regard to its conflict of law provisions.
              </p>

              <div style={styleSet.sectionTitle}>Changes to These Terms</div>
              <p>
                We reserve the right to amend or replace these Terms at any time. It is your 
                responsibility to check this page periodically for updates.
              </p>

              <div style={styleSet.sectionTitle}>Contact Us</div>
              <p>
                If you have any questions about these Terms and Conditions, you can contact us 
                at <strong>support@archatrontechnologies.com</strong>.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TermsAndConditionsPage;
