import React from "react";
import { Link } from "react-router-dom";

const newsletterSection = {
  background: "#f8f9fa",
  padding: "40px 0"
};
const newsletterInput = {
  border: "1px solid #dee2e6",
  borderRadius: "6px",
  padding: "8px 12px",
  marginRight: "10px",
  width: "250px",
  maxWidth: "90%",
  outline: "none"
};
const newsletterButton = {
  background: "#0d6efd",
  color: "#fff",
  border: "none",
  padding: "8px 20px",
  borderRadius: "6px",
  fontWeight: 600,
  cursor: "pointer"
};

const footerSection = {
  background: "#212529",
  color: "#fff",
  paddingTop: "48px",
  paddingBottom: "24px"
};
const containerStyle = {
  maxWidth: "1240px",
  margin: "0 auto",
  padding: "0 20px"
};
const rowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "32px 0"
};
const columnStyle = {
  flex: "1 1 180px",
  minWidth: "180px",
  marginBottom: "24px"
};
const columnTitle = {
  fontWeight: "bold",
  fontSize: "17px",
  marginBottom: "15px"
};
const footerLink = {
  color: "#fff",
  textDecoration: "none",
  display: "block",
  marginBottom: "8px",
  fontSize: "15px",
  transition: "color 0.2s"
};

const paymentRow = {
  display: "flex",
  gap: "10px",
  background: "#fff",
  borderRadius: "8px",
  border: "1px solid #dee2e6",
  padding: "7px 10px",
  marginTop: "5px",
  maxWidth: "180px"
};

const copyrightStyle = {
  borderTop: "1px solid #333",
  marginTop: "35px",
  paddingTop: "16px",
  textAlign: "center",
  color: "#fff",
  fontSize: "13px"
};

// Responsive tweaks (media query in JS)
const responsiveFooter = `
@media (max-width: 900px) {
  .footer-row {
    flex-direction: column;
    gap: 0;
  }
  .footer-col {
    margin-bottom: 28px !important;
    min-width: unset !important;
  }
}
`;

export default function Footer() {
  return (
    <div>
      {/* Inline CSS for mobile-responsiveness */}
      <style>{responsiveFooter}</style>
      {/* Newsletter Section */}
      <div style={newsletterSection}>
        <div style={containerStyle} className="text-center">
          <h6 style={{textTransform: "uppercase", letterSpacing: 2, fontSize: 14, color: "#444"}}>Newsletter</h6>
          <h4 style={{fontWeight: "bold", margin: "0 0 8px"}}>Subscribe To Our Newsletter</h4>
          <p style={{color: "#555", maxWidth: 550, margin: "0 auto 8px", fontSize: 15}}>
            Join our newsletter for the latest digital marketing insights, tips, and updates from Digital Impact. Stay ahead and grow your business with expert advice delivered to your inbox!
          </p>
          <form className="d-flex justify-content-center flex-wrap gap-2 mt-3" style={{justifyContent: "center", flexWrap: "wrap", gap: "10px"}}>
            <input
              type="text"
              style={newsletterInput}
              placeholder="Enter your email address"
              name="EMAIL"
              required
            />
            <button type="submit" style={newsletterButton}>
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <div style={footerSection}>
        <div style={containerStyle}>
          <div className="footer-row" style={rowStyle}>
            {/* About Us */}
            <div className="footer-col" style={columnStyle}>
              <div style={columnTitle}>About Us</div>
              <p style={{color: "#fff", lineHeight: 1.7, fontSize: 15}}>
                Digital Impact drives growth with data-driven digital marketing: SEO, paid media, 
                and content. Analytics attract qualified leads, increase revenue, and scale brands through
                strategy, creativity, and measurable results.

              </p>
            </div>

            {/* Resources */}
            <div className="footer-col" style={columnStyle}>
              <div style={columnTitle}>Resources</div>
              <ul style={{listStyle: "none", padding: 0, margin: 0}}>
                <li><Link to="/" style={footerLink}>Home</Link></li>
                <li><Link to="/Aboutus" style={footerLink}>About Us</Link></li>
                
                <li><Link to="/Price" style={footerLink}>Price</Link></li>
                <li><Link to="/Teams" style={footerLink}>Our Team</Link></li>
                <li><Link to="/Blog" style={footerLink}>Blog</Link></li>
                <li><Link to="/Contactus" style={footerLink}>Contact Us</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-col" style={columnStyle}>
              <div style={columnTitle}>Services</div>
              <ul style={{listStyle: "none", padding: 0, margin: 0}}>
                <li><Link to="/DigitalMarketing" style={footerLink}>Digital Marketing</Link></li>
                <li><Link to="/WebDesign" style={footerLink}>Web Design</Link></li>
                <li><Link to="/WebDevelopment" style={footerLink}>Web Development</Link></li>
                <li><Link to="/SEO" style={footerLink}>SEO</Link></li>
                <li><Link to="/EmailMarketing" style={footerLink}>Email Marketing</Link></li>
              </ul>
            </div>

            {/* Links */}
            <div className="footer-col" style={columnStyle}>
              <div style={columnTitle}>Links</div>
              <ul style={{listStyle: "none", padding: 0, margin: 0}}>
                <li><Link to="/DisclaimerPage" style={footerLink}>Disclaimer</Link></li>
                <li><Link to="/ReturnAndExchangePage" style={footerLink}>Refund Policy</Link></li>
                <li><Link to="/TermsAndConditionsPage" style={footerLink}>Terms & Condition</Link></li>
                <li><Link to="/Privacy" style={footerLink}>Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Payments */}
            <div className="footer-col" style={columnStyle}>
              <div style={columnTitle}>Payments</div>
              <div style={paymentRow}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                  alt="Visa"
                  style={{
                    maxHeight: "25px",
                    maxWidth: "35px",
                    objectFit: "contain"
                  }}
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                  alt="MasterCard"
                  style={{
                    maxHeight: "25px",
                    maxWidth: "35px",
                    objectFit: "contain"
                  }}
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="PayPal"
                  style={{
                    maxHeight: "25px",
                    maxWidth: "35px",
                    objectFit: "contain"
                  }}
                />
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div style={copyrightStyle}>
            © {new Date().getFullYear()} Digital Impact. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
