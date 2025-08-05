import React from "react";
import "./style.css"; // Optional if you have custom styles

export default function Footer() {
  return (
    <div>
      {/* Newsletter Section */}
      <div className="newsletter py-5 bg-light">
        <div className="container text-center">
          <h6 className="text-uppercase">Newsletter</h6>
          <h4 className="fw-bold">Subscribe To Our Newsletter</h4>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <form className="d-flex justify-content-center flex-wrap gap-2 mt-3">
            <input
              type="text"
              className="form-control w-auto"
              placeholder="Enter your email address"
              name="EMAIL"
              required
            />
            <button type="submit" className="btn btn-primary">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer bg-dark text-light pt-5 pb-3">
        <div className="container">
          <div className="row gy-4">
            {/* About Us */}
            <div className="col-lg-4 col-md-6">
              <h5 className="fw-bold">About Us</h5>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>

            {/* Resources */}
            <div className="col-lg-2 col-md-6">
              <h5 className="fw-bold">Resources</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-decoration-none text-light">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/Aboutus"
                    className="text-decoration-none text-light"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/Services"
                    className="text-decoration-none text-light"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a href="/Price" className="text-decoration-none text-light">
                    Price
                  </a>
                </li>
                <li>
                  <a href="/Price" className="text-decoration-none text-light">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="/Price" className="text-decoration-none text-light">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/Price" className="text-decoration-none text-light">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-lg-2 col-md-6">
              <h5 className="fw-bold">Services</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-decoration-none text-light">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none text-light">
                    Web Design
                  </a>
                </li>
                <li>
                  <a
                    href="/Aboutus"
                    className="text-decoration-none text-light"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="/Services"
                    className="text-decoration-none text-light"
                  >
                    SEO
                  </a>
                </li>
                <li>
                  <a href="/Price" className="text-decoration-none text-light">
                    Email Marketing
                  </a>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div className="col-lg-2 col-md-6">
              <h5 className="fw-bold">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-decoration-none text-light">
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a href="/team" className="text-decoration-none text-light">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/Contactus"
                    className="text-decoration-none text-light"
                  >
                    Terms & Condition
                  </a>
                </li>
                <li>
                  <a
                    href="/Contactus"
                    className="text-decoration-none text-light"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Payment Methods */}
            {/* Payment Methods */}
            <div className="col-lg-2 col-md-6">
              <h5 className="fw-bold">Payments</h5>
              <div
                className="d-flex align-items-center justify-content-between p-2 rounded border bg-white"
                style={{ width: "180px" }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                  alt="Visa"
                  style={{
                    maxHeight: "30px",
                    maxWidth: "50px",
                    objectFit: "contain",
                  }}
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                  alt="MasterCard"
                  style={{
                    maxHeight: "30px",
                    maxWidth: "50px",
                    objectFit: "contain",
                  }}
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="PayPal"
                  style={{
                    maxHeight: "30px",
                    maxWidth: "50px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            {/* Address */}
            {/* <div className="col-lg-4 col-md-6">
              <h5 className="fw-bold mt-4 mt-lg-0">Address</h5>
              <ul className="list-unstyled text-light">
                <li>Chennai, Tamilnadu, India</li>
                <li>+91 9874563210</li>
                <li>contact@gmail.com</li>
                <li>+3214569870</li>
              </ul>
            </div> */}
          </div>

          {/* Footer End */}
          <hr className="border-secondary mt-4" />
          <div className="text-center text-light small">
            Design & Developed by Shivam
          </div>
        </div>
      </div>
    </div>
  );
}
