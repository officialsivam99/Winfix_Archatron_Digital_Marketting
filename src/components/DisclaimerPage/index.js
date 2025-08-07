import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// Inline styles + media queries for ultimate responsiveness
const pageStyles = {
  minHeight: "100vh",
  background: "#f8fafc",
  paddingTop: "40px",
  paddingBottom: "40px",
  // Responsive padding for very small screens
};

const cardStyles = {
  borderRadius: "16px",
  background: "#fff",
  boxShadow: "0 8px 24px rgba(60,72,88,0.10)",
  border: "none",
  padding: "2.5rem 2rem",
  maxWidth: "700px",
  margin: "0 auto",
  fontFamily: "'Inter', 'Roboto', 'Segoe UI', sans-serif",
  // Responsive padding, reduced at <600px
};

const headingStyles = {
  fontWeight: 700,
  fontSize: "2.5rem",
  marginBottom: "1rem",
  letterSpacing: "-1px",
  // Responsive font size
};

const sectionTitle = {
  fontWeight: 500,
  fontSize: "1.25rem",
  marginTop: "2rem",
  marginBottom: "0.8rem",
  color: "#1a2330",
  // Responsive font size if desired
};

// Responsive helper
const getResponsiveStyles = () => {
  const width = window.innerWidth;
  let cardPad = "2.5rem 2rem";
  let pagePadTopBot = "40px";
  let h1Font = "2.5rem";
  let stFont = "1.25rem";
  if (width < 700) cardPad = "2rem 1rem";
  if (width < 600) {
    cardPad = "1.5rem 0.7rem";
    pagePadTopBot = "24px";
    h1Font = "2rem";
    stFont = "1.1rem";
  }
  return {
    cardStyles: { ...cardStyles, padding: cardPad },
    pageStyles: { ...pageStyles, paddingTop: pagePadTopBot, paddingBottom: pagePadTopBot },
    headingStyles: { ...headingStyles, fontSize: h1Font },
    sectionTitle: { ...sectionTitle, fontSize: stFont },
  };
};

const DisclaimerPage = () => {
  // Responsive styles on every render
  const [styleSet, setStyleSet] = React.useState(getResponsiveStyles());
  React.useEffect(() => {
    const handleResize = () => setStyleSet(getResponsiveStyles());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styleSet.pageStyles}>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} sm={11} md={10} lg={8}>
            <Card style={styleSet.cardStyles}>
              <div>
                <h1 style={styleSet.headingStyles}>Disclaimer</h1>
                <div className="mb-4" style={{ color: "#49526a" }}>
                  <em>Last updated August 07, 2025</em>
                </div>

                <div>
                  <div style={styleSet.sectionTitle}>Website Disclaimer</div>
                  <p>
                    The information provided by Archatron Technologies ("we", "us", or "our") on this website (<strong>marchatrotechnologies.com</strong>) is for general informational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind, express or implied,
                    regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
                  </p>
                  <p>
                    <strong>UNDER NO CIRCUMSTANCE</strong> shall we have any liability to you for any loss or damage of any kind incurred as a result
                    of the use of the site or reliance on any information provided on the site. <span style={{ color: "#bc2731", fontWeight: 500 }}>Your use of the site and your reliance on any information on the site is solely at your own risk.</span>
                  </p>
                </div>

                <div>
                  <div style={styleSet.sectionTitle}>Testimonials Disclaimer</div>
                  <p>
                    The site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users.
                    However, the experiences are personal to those individuals and may not necessarily be representative of all users of our products and services.
                    <strong> Your individual results may vary.</strong>
                  </p>
                  <p>
                    The testimonials on the site are submitted in various forms such as text, audio, and/or video, and are reviewed by us before being posted.
                    They appear on the site verbatim as given by the users, except for the correction of grammar or typing errors.
                    Some testimonials may have been shortened for the sake of brevity when the full testimonial contained extraneous information not relevant to the general public.
                  </p>
                  <p>
                    The views and opinions contained in the testimonials belong solely to the individual user and do not reflect our views and opinions. We are not affiliated with users who provide testimonials, and users are not paid or otherwise compensated for their testimonials.
                  </p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DisclaimerPage;
