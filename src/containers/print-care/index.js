// src/components/PrinterModelSupport.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import HeroSection from "../HeroSection";

const setupSteps = [
  {
    title: "Download the Latest Software",
    description:
      "Download the most up-to-date drivers and printer software compatible with your system.",
    image: "https://pcpackard.com/images/psoft-1.jpg",
  },
  {
    title: "Connect Your Printer",
    description:
      "Link your printer to a USB cable or Wi-Fi via the printer’s wireless setup options.",
    image: "https://pcpackard.com/images/psoft-2.jpg",
  },
  {
    title: "Install the Printer Drivers",
    description:
      "Follow the on-screen prompts to complete the setup process.",
    image: "https://pcpackard.com/images/psoft-3.jpg",
  },
  {
    title: "Test the Printer",
    description:
      "Once installation is complete, print a test page to confirm your printer is working.",
    image: "https://pcpackard.com/images/psoft-4.jpg",
  },
];

const troubleshootingSteps = [
  {
    title: "Step 1: Reconnect the USB Cable Properly",
    description:
      "Ensure a secure physical connection between your printer and computer.",
    image: "https://pcpackard.com/images/usb.png",
    items: [
      "Unplug the USB cable from both the printer and the computer.",
      "Wait a few seconds before reconnecting.",
      "Firmly plug the cable into both ends.",
      "Restart the printer installation process.",
    ],
  },
  {
    title: "Step 2: Test the USB Port Functionality",
    description: "Make sure the USB port you're using is working correctly.",
    image: "https://pcpackard.com/images/usb.png",
    items: [
      "Try connecting the printer to a different USB port.",
      "Alternatively, test the current port by connecting another USB device.",
    ],
  },
  {
    title: "Step 3: Verify Printer Power & Status Lights",
    description: "Ensure the printer is powered on and ready.",
    items: [
      "Check the power cable is firmly connected.",
      "Confirm that the power switch is turned on.",
      "Look at the status LEDs; no flashing error lights should be present.",
      "If lights indicate error, refer to the printer manual for codes.",
    ],
  },
  {
    title: "Step 4: Update Your Operating System",
    description:
      "Outdated OS versions can conflict with printer drivers and software.",
    items: [
      "Check for system updates on Windows or macOS.",
      "Install any pending updates and restart your computer.",
      "Re-run the printer setup after reboot.",
    ],
  },
  {
    title: "Step 5: Disable Firewall or Antivirus Temporarily",
    description:
      "Security software can block printer communication during setup.",
    items: [
      "Open your firewall or antivirus settings.",
      "Temporarily turn off protection or add printer software to exceptions.",
      "Test the printer connection while disabled.",
    ],
  },
  {
    title: "Step 6: Inspect USB Cable and Ports for Damage",
    description:
      "Physical damage can prevent a stable data connection.",
    items: [
      "Visually examine the USB cable for cuts or frays.",
      "Inspect USB ports for bent pins or debris.",
      "Blow out ports gently with compressed air.",
    ],
  },
  {
    title: "Step 7: Check Device Manager or System Report",
    description:
      "Verify that the printer and USB controllers are recognized by your OS.",
    items: [
      "On Windows, open Device Manager and check under USB Controllers and Printers.",
      "On Mac, open System Report and review the USB section.",
      "If entries show errors, update or reinstall the driver.",
    ],
  },
  {
    title: "Step 8: Try a Different USB Cable or Port",
    description: "Swapping components helps isolate the faulty part.",
    items: [
      "Use a known-good USB cable of the same type.",
      "Connect to an alternative USB port (rear vs. front).",
      "Repeat the printer setup process.",
    ],
  },
  {
    title: "Step 9: Restart Both Printer and Computer",
    description:
      "A full power cycle can clear temporary faults and refresh connections.",
    items: [
      "Turn off the printer and shut down your computer.",
      "Wait at least 30 seconds.",
      "Power on the printer first, then start your computer.",
      "Launch the printer setup again.",
    ],
  },
];

/* ===== New info-only content ===== */
const wifiSteps = [
  {
    title: "Prepare Your Network",
    description:
      "Keep printer, router, and computer close. Note your Wi-Fi name (SSID) and password.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Use Printer’s Wireless Setup",
    description:
      "From the printer panel, open Network/Wireless settings, select your Wi-Fi, and enter the password.",
    image:
      "https://images.unsplash.com/photo-1636015856875-00ce4b89433d?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Try WPS (If Supported)",
    description:
      "Press WPS on the router, then press WPS on the printer within 2 minutes to pair.",
    image:
      "https://images.unsplash.com/photo-1680128371762-7bb37403e292?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Finish with Software",
    description:
      "Run the brand app/driver so the computer can detect and add the printer on Wi-Fi.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
  },
];

const faqItems = [
  {
    q: "Printer shows “Offline”. What should I check first?",
    a: [
      "Ensure printer and router are powered on.",
      "USB users: reseat cable and try another port.",
      "Wi-Fi users: make sure PC and printer are on the same network.",
      "Remove and re-add the printer in system settings.",
    ],
  },
  {
    q: "Which driver type is best?",
    a: [
      "Full-feature driver includes scan utilities and device tools.",
      "If not available, use a basic or universal print driver for your brand.",
    ],
  },
  {
    q: "Prints are blank or faded.",
    a: [
      "Run printhead cleaning (inkjet) or check toner levels (laser).",
      "Use correct paper type and quality settings.",
      "Try a different document/app to rule out file issues.",
    ],
  },
  {
    q: "Wi-Fi drops while printing.",
    a: [
      "Place printer closer to the router; reduce obstacles.",
      "Prefer 2.4 GHz for better range if 5 GHz signal is weak.",
      "Assign a static IP to reduce DHCP changes (advanced).",
    ],
  },
];

const styles = {
  bannerSlide: {
    position: "relative",
    minHeight: 420,
    maxHeight: "70vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: 16,
    overflow: "hidden",
  },
  bannerOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,.65))",
  },
  bannerCaptionWrap: {
    position: "absolute",
    bottom: 40, // thoda upar from bottom
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    color: "#fff",
    width: "100%",
    padding: "0 20px",
  },
  captionBox: { maxWidth: 720, margin: "0 auto" },
  setupCardHover: {
    transition: "transform .3s ease, box-shadow .3s ease",
  },
};

export default function PrintCare({ fallbackModelName = "Printer" }) {
  // If used under a route like /support/:modelId we’ll show that model; otherwise fallback
  let routeModel = fallbackModelName;
  try {
    const params = useParams();
    if (params && params.modelId) {
      routeModel = decodeURIComponent(params.modelId);
    }
  } catch {
    // useParams not available (not under Router) – ignore and use fallback
  }

  // const slides = [ ... ] (kept commented exactly as in your file)

  return (
    <div style={{ marginTop: 0, paddingTop: 0, minHeight: '100vh' }}>
      <HeroSection />
      {/* ====== 3-Slide Banner (kept commented) ====== */}
      {/* ... */}

      {/* ====== Step-by-step cards ====== */}
      <section id="setup" className="bg-white py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold text-primary">Step-by-Step Printer Setup Manual</h2>
            <p className="text-muted">
              Easily set up your printer by following these simple instructions.
            </p>
          </div>

          <Row className="g-4" id="setupCardsRow">
            {setupSteps.map((step, idx) => (
              <Col key={idx} md={6} lg={3}>
                <Card
                  className="h-100 border bg-light text-center shadow-sm"
                  style={styles.setupCardHover}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 .5rem 1rem rgba(0,0,0,.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "var(--bs-box-shadow-sm)";
                  }}
                >
                  <div className="overflow-hidden rounded-top p-2 bg-white">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-100"
                      style={{
                        height: 200,
                        objectFit: "cover",
                        borderRadius: "8px 8px 0 0",
                      }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold text-primary fs-6">
                      {step.title}
                    </Card.Title>
                    <Card.Text className="text-muted small">
                      {step.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ====== USB Troubleshooting ====== */}
      <section id="usb" className="bg-white py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold text-primary">USB Connecting Manual</h2>
          </div>

          <div id="troubleshootContainer">
            {troubleshootingSteps.map((step, idx) => (
              <div key={idx} className="mb-5">
                <h3 className="fw-bold text-primary">{step.title}</h3>
                {step.description && (
                  <p className="text-muted">{step.description}</p>
                )}
                {Array.isArray(step.items) && step.items.length > 0 && (
                  <ol className="ps-4">
                    {step.items.map((it, i) => (
                      <li key={i}>{it}</li>
                    ))}
                  </ol>
                )}
                {step.image && (
                  <img
                    src={step.image}
                    alt={step.title}
                    className="img-fluid rounded shadow-sm mt-3"
                  />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ====== NEW: Wireless (Wi-Fi) Setup (info only) ====== */}
      <section id="wifi" className="bg-white py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold text-primary">Wireless (Wi-Fi) Setup</h2>
            <p className="text-muted">Connect {routeModel} to your network in a few simple steps.</p>
          </div>

          <Row className="g-4">
            {wifiSteps.map((step, idx) => (
              <Col key={idx} md={6} lg={3}>
                <Card className="h-100 border bg-light text-center shadow-sm">
                  <div className="overflow-hidden rounded-top p-2 bg-white">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-100"
                      style={{
                        height: 200,
                        objectFit: "cover",
                        borderRadius: "8px 8px 0 0",
                      }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold text-primary fs-6">
                      {step.title}
                    </Card.Title>
                    <Card.Text className="text-muted small">
                      {step.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Row className="mt-4">
            <Col md={8} className="mx-auto">
              <Card className="border-0 bg-light">
                <Card.Body className="py-3 px-4">
                  <ul className="mb-0">
                    <li>If your router splits 2.4/5 GHz, try 2.4 GHz for better range.</li>
                    <li>Avoid special characters in Wi-Fi name/password to reduce pairing issues.</li>
                    <li>After connecting, print a <em>Network Configuration</em> page to confirm the IP.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ====== NEW: Printer Offline? Quick Fix (info only) ====== */}
      <section id="offline-fix" className="bg-white py-5">
        <Container>
          <div className="text-center mb-4">
            <h2 className="fw-bold text-primary">Printer Offline? Quick Fix</h2>
            <p className="text-muted">Try these checks before advanced troubleshooting.</p>
          </div>

          <Row className="g-4">
            <Col md={6}>
              <Card className="border shadow-sm h-100">
                <Card.Body>
                  <h5 className="fw-bold">Windows</h5>
                  <ol className="ps-3">
                    <li>Open “Printers & scanners” and select your printer.</li>
                    <li>In the queue, uncheck “Use printer offline”.</li>
                    <li>Remove device and add it again if needed.</li>
                    <li>Restart Print Spooler (Win+R → <code>services.msc</code> → Restart).</li>
                  </ol>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="border shadow-sm h-100">
                <Card.Body>
                  <h5 className="fw-bold">macOS</h5>
                  <ol className="ps-3">
                    <li>System Settings → Printers & Scanners → select the printer.</li>
                    <li>Delete and re-add the printer (Default or IP list).</li>
                    <li>Ensure the Mac and printer are on the same Wi-Fi network.</li>
                    <li>Reset printing system (advanced): right-click list → “Reset printing system…”.</li>
                  </ol>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ====== NEW: Firmware Update (info only) ====== */}
      <section id="firmware" className="bg-white py-5">
        <Container>
          <div className="text-center mb-4">
            <h2 className="fw-bold text-primary">Firmware Update (Recommended)</h2>
            <p className="text-muted">Improves connectivity, security, and print quality for {routeModel}.</p>
          </div>

          <Row className="g-4 justify-content-center">
            <Col md={10} lg={8}>
              <Card className="border shadow-sm">
                <Card.Body className="p-4">
                  <ol className="ps-3 mb-0">
                    <li>Ensure stable power and network; avoid turning the device off mid-update.</li>
                    <li>Open the printer toolbox/app or driver utility on your computer.</li>
                    <li>Look for “Firmware Update” or “Device Update”.</li>
                    <li>Apply the update and let the printer reboot if required.</li>
                  </ol>
                  <p className="small text-muted mt-3 mb-0">
                    If an update fails, power-cycle the printer and retry. Avoid USB hubs during updates.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ====== NEW: FAQs (info only) ====== */}
      <section id="faq" className="bg-white py-5">
        <Container>
          <div className="text-center mb-4">
            <h2 className="fw-bold text-primary">Frequently Asked Questions</h2>
          </div>
          <Row className="g-4">
            {faqItems.map((f, idx) => (
              <Col md={6} key={idx}>
                <Card className="border shadow-sm h-100">
                  <Card.Body>
                    <h5 className="fw-bold mb-2">{f.q}</h5>
                    <ul className="mb-0">
                      {f.a.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}
