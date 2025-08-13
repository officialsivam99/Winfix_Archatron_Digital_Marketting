import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Styles (reuse your previous pattern!)
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

const ReturnAndExchangePage = () => {
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
              <h1 style={styleSet.headingStyles}>Return and Exchange Policy</h1>
              <div className="mb-4" style={{ color: "#49526a" }}>
                <em>Last Updated: 8/8/2025</em>
              </div>
              
              <div>
                Thank you for shopping at <strong>https://archatrontechnologies.com/</strong>
              </div>
              <div>
                If, for any reason, you are not completely satisfied with a purchase, we invite you to review our Policy.<br />
                The following terms are applicable for any products that you purchased with us.
              </div>

              <div style={styleSet.sectionTitle}>Interpretation and Definitions</div>
              <div>
                <strong>Interpretation</strong><br />
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </div>
              <div>
                <strong>Definitions</strong><br />
                For the purposes of this Return and Exchange Policy:<br />
                <ul>
                  <li><strong>Goods</strong> refer to the items offered for sale on the Service.</li>
                  <li><strong>Orders</strong> mean a request by You to purchase Goods from Us.</li>
                  <li><strong>Service</strong> refers to the Website.</li>
                  <li><strong>Website</strong> refers to My Site, accessible from <strong>https://archatrontechnologies.com/</strong></li>
                  <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                </ul>
              </div>

              

              <div style={styleSet.sectionTitle}>Refund Policy</div>
              <div>
                In order to be eligible for a refund, you have to return the product within <strong>7 days</strong> of your purchase.<br />
                If the product is damaged in any way, or you have initiated the return after 7 days have passed, you will not be eligible for a refund.
              </div>
              <div>
                In order for the product to be eligible for a Refund, make sure these conditions are met:
                <ul>
                  <li>Product must have the receipt or proof of purchase.</li>
                </ul>
                You will be updated on your Return Status through <strong>EMAIL and PHONE</strong>, provided that all contact information was provided.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReturnAndExchangePage;
