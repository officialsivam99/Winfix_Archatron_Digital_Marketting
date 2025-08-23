import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import './style.css'; // Optional if you're adding custom styles

const MyNavbar = () => {
  const location = useLocation();
  const [showServices, setShowServices] = useState(false);

  const handleMouseEnter = () => setShowServices(true);
  const handleMouseLeave = () => setShowServices(false);

  const isServicesActive = location.pathname.startsWith('/Services');

  return (
    <Navbar fixed="top" expand="lg" bg="dark" variant="dark" className="shadow-sm py-3 z-3">
      <Container fluid className="px-4 ">
        {/* Brand */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-uppercase d-flex align-items-center">
          Digital Impact
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Collapsible Navigation Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto mx-lg-auto">
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Aboutus" className={location.pathname === '/Aboutus' ? 'active' : ''}>
              About Us
            </Nav.Link>

            <NavDropdown
              title="Services"
              id="services-nav-dropdown"
              className={`services-dropdown ${isServicesActive ? 'active' : ''}`}
              show={showServices}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              menuVariant="dark"
            >
              <NavDropdown.Item as={Link} to="/DigitalMarketing">Digital Marketing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/WebDesign">Web Design</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/WebDevelopment">Web Development</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/SocialMediaMarketing">Social Media Marketing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/SEO">SEO</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/PPC">PPC</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/EmailMarketing">Email Marketing</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/Price" className={location.pathname === '/Price' ? 'active' : ''}>
              Price
            </Nav.Link>
            <Nav.Link as={Link} to="/Teams" className={location.pathname === '/Teams' ? 'active' : ''}>
              Our Team
            </Nav.Link>
            <Nav.Link as={Link} to="/Blog" className={location.pathname === '/Blog' ? 'active' : ''}>
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/ContactUs" className={location.pathname === '/ContactUs' ? 'active' : ''}>
              Contact Us
            </Nav.Link>
          </Nav>

          {/* Right-aligned contact info */}
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
