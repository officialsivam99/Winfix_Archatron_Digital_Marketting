import React from "react";
import "./style.css"; // optional

export default function Privacy() {
  const lastUpdated = "August 23, 2025";

  const linkStyle = { color: "#0645AD", textDecoration: "underline" };
  const section = { margin: "28px 0" };
  const HR = () => (
    <hr style={{ border: 0, borderTop: "1px solid #e5e7eb", margin: "24px 0" }} />
  );

  return (
    <div className="contact" style={{ background: "#ffffff", color: "#111111" }}>
      {/* Title */}
      <div
        className="page-title-area"
        style={{ padding: "56px 0 20px", textAlign: "center", background: "#ffffff" }}
      >
        <h1 style={{ margin: 0, color: "#111111" }}>Privacy Policy</h1>
        
      </div>

      <div className="container" style={{ maxWidth: 960, paddingBottom: 56 }}>
        {/* Intro */}
        <section style={{ marginTop: 8 }}>
          <p>
            This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information
            when you use the Service, and explains your rights and how the law protects you.
          </p>
          <p style={{ color: "#333" }}>
            We use your personal data to provide and improve the Service. By using the Service, you agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>
        </section>

        <HR />

        {/* Interpretation & Definitions */}
        <section style={section}>
          <h3 style={{ marginBottom: 10, color: "#111111" }}>Interpretation and Definitions</h3>

          <h4 style={{ margin: "12px 0 6px" }}>Interpretation</h4>
          <p style={{ margin: 0 }}>
            Words with initial capital letters have meanings defined below. The following definitions have the same meaning whether
            they appear in singular or plural.
          </p>

          <h4 style={{ margin: "18px 0 6px" }}>Definitions</h4>
          <ul style={{ lineHeight: 1.8, margin: 0, paddingLeft: 18 }}>
            <li>
              <strong>Account</strong> means a unique account created for you to access our Service or parts of our Service.
            </li>
            <li>
              <strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party,
              where “control” means ownership of 50% or more of the shares or voting rights.
            </li>
            <li>
              <strong>Company</strong> (referred to as “the Company”, “we”, “us” or “our”) refers to Digital Impact.
            </li>
            <li>
              <strong>Cookies</strong> are small files placed on your device that store certain information about your browsing.
            </li>
            <li>
              <strong>Country</strong> refers to: Uttar Pradesh, India.
            </li>
            <li>
              <strong>Device</strong> means any device that can access the Service, such as a computer, cellphone, or tablet.
            </li>
            <li>
              <strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.
            </li>
            <li>
              <strong>Service</strong> refers to the Website and related services.
            </li>
            <li>
              <strong>Service Provider</strong> means any natural or legal person who processes data on behalf of the Company.
            </li>
            <li>
              <strong>Usage Data</strong> refers to data collected automatically (for example, page views and duration).
            </li>
            <li>
              <strong>Website</strong> refers to Digital Impact, accessible from{" "}
              <a href="http://onlinedigitalimpact.com" target="_blank" rel="noreferrer" style={linkStyle}>
                onlinedigitalimpact.com
              </a>
              .
            </li>
            <li>
              <strong>You</strong> means the individual accessing or using the Service, or the company or other legal entity on whose
              behalf such individual is accessing or using the Service.
            </li>
          </ul>
        </section>

        {/* Collecting and Using Personal Data */}
        <section style={section}>
          <h3 style={{ marginBottom: 10 }}>Collecting and Using Your Personal Data</h3>

          <h4 style={{ margin: "12px 0 6px" }}>Types of Data Collected</h4>
          <h5 style={{ margin: "6px 0" }}>Personal Data</h5>
          <p style={{ margin: 0 }}>
            While using our Service, we may ask you to provide certain personally identifiable information that can be used to
            contact or identify you, including:
          </p>
          <ul style={{ lineHeight: 1.8, paddingLeft: 18, marginTop: 8 }}>
            <li>Email address</li>
            <li>First and last name</li>
            <li>Phone number</li>
            <li>Address, State, Province, ZIP/Postal code, City</li>
            <li>Usage Data</li>
          </ul>

          <h5 style={{ margin: "12px 0 6px" }}>Usage Data</h5>
          <p style={{ margin: 0 }}>
            Usage Data is collected automatically and may include your IP address, browser type and version, the pages you visit, time
            and date of your visit, time spent on pages, unique device identifiers, and other diagnostic data. When accessing the
            Service via mobile, we may collect device type, unique ID, IP address, OS, mobile browser type, and diagnostics.
          </p>

          <h4 style={{ margin: "18px 0 6px" }}>Tracking Technologies and Cookies</h4>
          <p style={{ margin: 0 }}>
            We use cookies, web beacons, and similar technologies to operate the site and analyze performance. You can instruct your
            browser to refuse cookies or to indicate when a cookie is being sent. If you do not accept cookies, some parts of the
            Service may not function properly.
          </p>

          <h5 style={{ margin: "12px 0 6px" }}>Cookie Types We Use</h5>
          <ul style={{ lineHeight: 1.8, paddingLeft: 18 }}>
            <li>
              <strong>Necessary/Essential (Session):</strong> Required to provide core functionality and prevent fraud.
            </li>
            <li>
              <strong>Notice Acceptance (Persistent):</strong> Remembers your cookie choices.
            </li>
            <li>
              <strong>Functionality (Persistent):</strong> Saves preferences (e.g., language, login state).
            </li>
          </ul>
          <p style={{ marginTop: 6 }}>
            For more information on cookies and choices, see your browser settings or the Cookies section of this Policy.
          </p>
        </section>

        {/* Use of Personal Data */}
        <section style={section}>
          <h3 style={{ marginBottom: 10 }}>Use of Your Personal Data</h3>
          <ul style={{ lineHeight: 1.8, paddingLeft: 18, margin: 0 }}>
            <li>Provide, maintain, and improve the Service, including monitoring usage.</li>
            <li>Manage your Account and provide registered-user functionality.</li>
            <li>Perform and enforce contracts for products or services you purchase.</li>
            <li>Contact you by email, phone, or SMS regarding updates or informational communications.</li>
            <li>Provide news, offers, and information about similar services (unless you opt out).</li>
            <li>Respond to and manage your requests.</li>
            <li>
              Evaluate or conduct business changes (e.g., merger or asset sale) where Personal Data may be part of transferred assets.
            </li>
            <li>Analyze performance, identify trends, and improve services and marketing.</li>
          </ul>

          <h4 style={{ margin: "18px 0 6px" }}>Sharing Your Personal Data</h4>
          <ul style={{ lineHeight: 1.8, paddingLeft: 18 }}>
            <li>
              <strong>Service Providers:</strong> For hosting, analytics, CRM, and support.
            </li>
            <li>
              <strong>Business transfers:</strong> In connection with merger, acquisition, or sale of assets.
            </li>
            <li>
              <strong>Affiliates:</strong> Under this Policy and appropriate safeguards.
            </li>
            <li>
              <strong>Business partners:</strong> To offer certain services or promotions.
            </li>
            <li>
              <strong>Public interactions:</strong> Information you share in public areas may be visible to others.
            </li>
            <li>
              <strong>With your consent:</strong> For any other disclosed purpose.
            </li>
          </ul>
        </section>

        {/* Retention */}
        <section style={section}>
          <h3 style={{ marginBottom: 10 }}>Retention of Your Personal Data</h3>
          <p style={{ margin: 0 }}>
            We retain Personal Data only as long as necessary for the purposes described, to comply with legal obligations, and to
            resolve disputes. Usage Data is generally kept for a shorter period unless needed for security, functionality improvement,
            or legal requirements.
          </p>
        </section>

        {/* Transfers */}
        <section style={section}>
          <h3 style={{ marginBottom: 10 }}>Transfer of Your Personal Data</h3>
          <p style={{ margin: 0 }}>
            Your information may be processed in locations outside your jurisdiction. We take reasonable steps to ensure appropriate
            safeguards are in place and that your data is treated securely and in accordance with this Policy before any transfer.
          </p>
        </section>

        {/* Delete requests */}
        <section style={section}>
          <h3 style={{ marginBottom: 10 }}>Delete Your Personal Data</h3>
          <p style={{ margin: 0 }}>
            You may request deletion of Personal Data we hold about you. Some information may be retained as required by law or for
            legitimate business purposes. If you have an Account, you may be able to manage certain data directly in your settings, or
            you can contact us to request access, correction, or deletion.
          </p>
        </section>

        {/* Disclosures */}
        <section style={section}>
          <h3 style={{ marginBottom: 10 }}>Disclosure of Your Personal Data</h3>
          <h5 style={{ margin: "6px 0" }}>Business Transactions</h5>
          <p style={{ margin: 0 }}>
            If the Company is involved in a merger, acquisition, or asset sale, your Personal Data may be transferred, with notice
            provided where feasible.
          </p>

          <h5 style={{ margin: "12px 0 6px" }}>Law Enforcement</h5>
          <p style={{ margin: 0 }}>
            We may disclose Personal Data where required by law or in response to valid government requests.
          </p>

          <h5 style={{ margin: "12px 0 6px" }}>Other Legal Requirements</h5>
          <ul style={{ lineHeight: 1.8, paddingLeft: 18 }}>
            <li>Comply with a legal obligation</li>
            <li>Protect and defend the Company’s rights or property</li>
            <li>Prevent or investigate possible wrongdoing</li>
            <li>Protect the personal safety of users or the public</li>
            <li>Protect against legal liability</li>
          </ul>
        </section>

        {/* Security */}
        <section style={section}>
          <h3 style={{ marginBottom: 10 }}>Security of Your Personal Data</h3>
          <p style={{ margin: 0 }}>
            We implement technical and organizational measures designed to protect Personal Data. However, no method of transmission or
            storage is 100% secure; we cannot guarantee absolute security.
          </p>
        </section>

        {/* Children */}
        <section style={section}>
          <h3 style={{ marginBottom: 10 }}>Children’s Privacy</h3>
          <p style={{ margin: 0 }}>
            Our Service does not address anyone under 13. We do not knowingly collect personal information from children. If you believe
            a child has provided data, contact us to request deletion. Where consent is the legal basis and your country requires
            parental consent, we may require it before collecting or using information.
          </p>
        </section>

        {/* Links */}
        <section style={section}>
          <h3 style={{ marginBottom: 10 }}>Links to Other Websites</h3>
          <p style={{ margin: 0 }}>
            Our Service may contain links to websites not operated by us. We are not responsible for their content or policies.
            Please review the privacy policies of any third-party sites you visit.
          </p>
        </section>

        {/* Changes */}
        <section style={section}>
          <h3 style={{ marginBottom: 10 }}>Changes to this Privacy Policy</h3>
          <p style={{ margin: 0 }}>
            We may update this Policy from time to time. We will post the updated version here and revise the “Last updated” date above.
            Where required by law, we will provide additional notice.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" style={{ margin: "28px 0 6px" }}>
          <h3 style={{ marginBottom: 10 }}>How to Contact Us</h3>
          <address style={{ fontStyle: "normal", lineHeight: 1.8 }}>
            Digital Impact
            <br />
            
            <a href="mailto:info@onlinedigitalimpact.com" style={linkStyle}>
              info@onlinedigitalimpact.com
            </a>
          </address>
        </section>
      </div>
    </div>
  );
}
