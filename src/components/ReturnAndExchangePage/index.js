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
  fontWeight: 600,
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
              <h1 style={styleSet.headingStyles}>
                Refunds & Cancellations — Digital Marketing Services
              </h1>
              <div className="mb-4" style={{ color: "#49526a" }}>
                
              </div>

              <p>
                Thank you for choosing <strong>Digital Impact</strong>{" "}
                (<a href="http://www.onlinedigitalimpact.com" target="_blank" rel="noreferrer">
                  onlinedigitalimpact.com
                </a>). This policy explains how refunds and cancellations work for our{" "}
                <strong>services</strong> (e.g., SEO, PPC/ads management, social media, content, branding, design,
                development, analytics). It does <strong>not</strong> apply to physical products.
              </p>

              {/* Key Definitions */}
              <div style={styleSet.sectionTitle}>Definitions</div>
              <ul>
                <li>
                  <strong>Company</strong>, <strong>we</strong>, <strong>us</strong>, or <strong>our</strong> refers to Digital Impact.
                </li>
                <li>
                  <strong>Services</strong> means our professional/managed services (e.g., strategy, creative, media buying, optimization,
                  development, audits, consulting).
                </li>
                <li>
                  <strong>Engagement</strong> means a signed proposal, SOW, quote, order, or online checkout confirming scope, fees, and terms.
                </li>
                <li>
                  <strong>Client</strong>, <strong>you</strong>, or <strong>your</strong> means the person or entity purchasing Services.
                </li>
              </ul>

              {/* General Principles */}
              <div style={styleSet.sectionTitle}>General Principles</div>
              <ul>
                <li>
                  Our Services are <strong>intangible and labor-based</strong>. Time spent, planning, creative ideation,
                  and partial delivery hold value even before final output is published.
                </li>
                <li>
                  We do not guarantee specific outcomes (e.g., a precise number of leads or revenue) as results can depend on
                  market forces, platform algorithms, budgets, competition, and your internal processes.
                </li>
              </ul>

              {/* Cancellations */}
              <div style={styleSet.sectionTitle}>Cancellations</div>
              <ul>
                <li>
                  <strong>One-time / Project engagements:</strong> You may cancel <strong>before project kickoff</strong> (i.e., before we
                  schedule resources or begin discovery). A full refund of fees paid <em>minus</em> any third-party costs incurred and a 3% payment
                  processing fee will be issued.
                </li>
                <li>
                  After <strong>kickoff</strong> (discovery started, strategy/creative work allocated, or any deliverable work begun),
                  the initial <strong>deposit/retainer is non-refundable</strong>. If you’ve paid beyond the deposit, we’ll refund the
                  <strong>unused</strong> portion net of work performed to date and committed resource time.
                </li>
                <li>
                  <strong>Monthly retainers / subscriptions:</strong> You can cancel anytime <strong>before the next billing date</strong>.
                  The current billing cycle is non-refundable. Service continues until the cycle ends.
                </li>
                <li>
                  <strong>Prepaid hours or credits</strong> expire 12 months from purchase and are non-refundable once work begins.
                </li>
              </ul>

              {/* Refund Eligibility */}
              <div style={styleSet.sectionTitle}>Refund Eligibility</div>
              <p>We may consider a partial or full refund when:</p>
              <ul>
                <li>
                  No work has begun and no resources were scheduled (see “Cancellations” above).
                </li>
                <li>
                  There is a <strong>material failure</strong> to deliver the scope defined in the Engagement and we are
                  unable to remedy it within a reasonable cure period (see “Quality & Rework”).
                </li>
              </ul>

              {/* Non-Refundable Items */}
              <div style={styleSet.sectionTitle}>Non-Refundable Items</div>
              <ul>
                <li>
                  <strong>Third-party costs</strong>: ad/media spend (Google, Meta, LinkedIn, etc.), domains, hosting, SSL,
                  software subscriptions, APIs, stock assets, fonts, premium plugins, data tools, or any pass-through expenses.
                </li>
                <li>
                  <strong>Completed phases</strong> (e.g., discovery, audits, research, strategy decks, creative concepts,
                  wireframes, tracking setups) and <strong>time already spent</strong> by our team.
                </li>
                <li>
                  <strong>Rush fees</strong> or priority scheduling fees.
                </li>
              </ul>

              {/* Client Responsibilities */}
              <div style={styleSet.sectionTitle}>Client Responsibilities</div>
              <ul>
                <li>
                  Provide timely <strong>access</strong> (accounts, CMS, ad platforms, analytics), content, approvals, and feedback.
                </li>
                <li>
                  <strong>Approval windows</strong>: Unless otherwise stated, we consider deliverables accepted if no
                  consolidated feedback is provided within <strong>7 calendar days</strong>.
                </li>
                <li>
                  Delays in access/feedback may impact timelines and are <strong>not grounds for a refund</strong>.
                </li>
              </ul>

              {/* Quality & Rework */}
              <div style={styleSet.sectionTitle}>Quality & Rework</div>
              <ul>
                <li>
                  If a delivered item deviates from the agreed scope/spec, notify us within <strong>14 days</strong> of delivery. We’ll
                  <strong>remedy or rework</strong> within a reasonable timeframe at no additional charge.
                </li>
                <li>
                  The policy covers scope-aligned corrections, not <strong>new scope</strong> or preference-only changes beyond the
                  included <strong>revision rounds</strong> stated in your Engagement.
                </li>
              </ul>

              {/* Chargebacks */}
              <div style={styleSet.sectionTitle}>Chargebacks</div>
              <p>
                Filing a chargeback instead of following this policy may be considered a breach. We’ll provide documentation to the
                payment processor demonstrating scope, communication, and work performed.
              </p>

              {/* How to Request a Cancellation or Refund */}
              <div style={styleSet.sectionTitle}>How to Request a Cancellation or Refund</div>
              <p>
                Send a clear written request from your authorized contact to:{" "}
                <strong>info@onlinedigitalimpact.com</strong>. Include your company name, engagement reference, reason, and any supporting
                details. We aim to respond within <strong>3 business days</strong>.
              </p>

              {/* Timing of Refunds */}
              <div style={styleSet.sectionTitle}>Timing of Refunds</div>
              <p>
                Approved refunds are processed within <strong>14 days</strong> to the original payment method. Bank or card providers may
                require additional time to post the funds.
              </p>

              {/* Governing Terms */}
              <div style={styleSet.sectionTitle}>Governing Terms</div>
              <ul>
                <li>
                  This policy works alongside your signed proposal/SOW or online terms. If there’s any conflict, the signed SOW prevails.
                </li>
                <li>
                  We may update this policy from time to time. The version in effect at purchase or renewal applies to that term.
                </li>
              </ul>

              {/* Contact */}
              <div style={styleSet.sectionTitle}>Contact Us</div>
              <ul>
                <li>Email: <strong>info@onlinedigitalimpact.com</strong></li>
                <li>Website: <a href="http://www.onlinedigitalimpact.com" target="_blank" rel="noreferrer">onlinedigitalimpact.com</a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReturnAndExchangePage;
