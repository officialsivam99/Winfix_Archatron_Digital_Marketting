import React, { useState } from "react";
import {
  FaBullhorn,
  FaSearch,
  FaGoogle,
  FaChartLine,
  FaEnvelopeOpenText,
  FaRobot,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";

const services = [
  // ... [your services array, unchanged]
  {
    key: "digital",
    icon: <FaBullhorn style={{ color: "#1ddfff", fontSize: 32 }} />,
    title: "Digital Marketing Strategy",
    description: (
      <>
        <p>We craft data-driven digital strategies aligned with your goals, audience and revenue targets.</p>
        <p>
          Each plan includes channel selection, funnel mapping, competitor benchmarking and KPI planning, all backed by actionable roadmaps across SEO, PPC, social, email and more. We prioritize measurable growth over generic playbooks.
        </p>
        <p>
          <strong>Strategy engagements typically start at $3,000–$5,000</strong> for single-channel and $10,000–$15,000 for multi-channel, depending on complexity.
        </p>
      </>
    ),
  },
  // ... [other services]
  {
    key: "automation",
    icon: <FaRobot style={{ color: "#00ffc0", fontSize: 32 }} />,
    title: "Marketing Automation",
    description: (
      <>
        <p>
          Scale personalization and efficiency with best-in-class automation tools, workflow design, lead scoring, and CRM integrations.
        </p>
      </>
    ),
  },
];

function ResultsDrivenServices() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = () => setActiveIdx((i) => (i === 0 ? services.length - 1 : i - 1));
  const handleNext = () => setActiveIdx((i) => (i === services.length - 1 ? 0 : i + 1));

  return (
    <section
      style={{
        background: "#0b1234",
        width: "100vw",
        minHeight: "100vh",
        padding: 0,
      }}
    >
      <div
        className="rds-main-wrap"
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          padding: "64px 2vw",
          display: "flex",
          gap: "38px",
          alignItems: "flex-start", // Key: Aligns children at the top!
        }}
      >
        {/* LEFT COLUMN (STATIC) */}
        <div
          style={{
            flex: 1.09,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
          }}
        >
          <div
            style={{
              color: "#17e6ff",
              fontWeight: 700,
              fontSize: "1.18rem",
              letterSpacing: ".08em",
              marginBottom: 7,
            }}
          >
            RESULTS-DRIVEN SERVICES
          </div>
          <h2
            style={{
              color: "#fff",
              fontWeight: 800,
              fontSize: "2.7rem",
              margin: "0 0 22px 0",
              lineHeight: 1.1,
              paddingTop: 12, // Add this to align the heading perfectly
            }}
          >
            Strategic Digital <br /> Marketing Built To Scale
          </h2>
          <div
            style={{
              color: "#e8eefd",
              fontSize: "1.18rem",
              fontWeight: 500,
            }}
          >
            At Digital Silk, we craft data-driven strategies designed to grow your brand across every channel.
            <br />
            <br />
            From SEO and PPC to email campaigns, social media and beyond, our services are designed to drive measurable growth.
            <br />
            <br />
            We align creative execution with data-backed performance to help you gain visibility, increase conversions and scale efficiently.
          </div>
        </div>

        {/* RIGHT COLUMN (VERTICAL CAROUSEL) */}
        <div
          style={{
            flex: 1,
            minWidth: 340,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Scroll Up Arrow */}
          <button
            aria-label="Previous"
            onClick={handlePrev}
            style={{
              background: "none",
              border: "none",
              color: "#1ddfff",
              fontSize: 30,
              marginBottom: 10,
              cursor: "pointer",
              outline: "none",
              zIndex: 2,
              transition: "color .16s",
            }}
          >
            <FaChevronUp />
          </button>

          {/* Service Card */}
          <div
            className="rds-card"
            style={{
              background: "linear-gradient(135deg, #13193f 70%, #162050 100%)",
              borderRadius: "0", // SHARP CORNERS
              boxShadow: "0 2px 28px 0 #1b213e40, 0 1.5px 16px #2d376c30",
              padding: "44px 34px 36px 34px",
              border: "1.5px solid #262a44",
              color: "#fff",
              minHeight: 480,   // Bigger card!
              maxHeight: 480,   // Always the same
              maxWidth: 490,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "9px",
              marginBottom: 15,
              overflow: "hidden",
              transition: "box-shadow .18s",
            }}
          >
            <div style={{ marginBottom: 17 }}>{services[activeIdx].icon}</div>
            <h3
              style={{
                color: "#fff",
                fontWeight: 800,
                fontSize: "1.5rem",
                marginBottom: 12,
                lineHeight: 1.15,
              }}
            >
              {services[activeIdx].title}
            </h3>
            <div
              style={{
                color: "#e7f1fc",
                fontSize: "1.15rem",
                fontWeight: 400,
                flex: 1,
                width: "100%",
              }}
            >
              {services[activeIdx].description}
            </div>
          </div>

          {/* Scroll Down Arrow */}
          <button
            aria-label="Next"
            onClick={handleNext}
            style={{
              background: "none",
              border: "none",
              color: "#1ddfff",
              fontSize: 30,
              cursor: "pointer",
              outline: "none",
              zIndex: 2,
              transition: "color .16s",
            }}
          >
            <FaChevronDown />
          </button>

          {/* Pagination Dots */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginTop: 14,
              justifyContent: "center",
            }}
          >
            {services.map((_, i) => (
              <span
                key={i}
                onClick={() => setActiveIdx(i)}
                style={{
                  width: activeIdx === i ? 18 : 10,
                  height: 10,
                  borderRadius: 6,
                  background: activeIdx === i ? "#12e6ff" : "#1a2251",
                  display: "inline-block",
                  cursor: "pointer",
                  transition: "all .15s",
                }}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1200px) {
          .rds-main-wrap {
            max-width: 98vw !important;
          }
          .rds-card {
            max-width: 98vw !important;
          }
        }
        @media (max-width: 1100px) {
          .rds-main-wrap {
            flex-direction: column !important;
            gap: 0 !important;
            align-items: stretch !important;
          }
          .rds-card {
            max-width: 100% !important;
            min-width: 0 !important;
            min-height: 350px !important;
            max-height: 420px !important;
          }
        }
        @media (max-width: 700px) {
          .rds-main-wrap {
            padding: 18px 1vw 24px 1vw !important;
          }
          .rds-card {
            min-height: 220px !important;
            max-height: 260px !important;
            font-size: 0.99rem !important;
          }
        }
        @media (max-width: 480px) {
          .rds-main-wrap {
            padding: 7px 0 8px 0 !important;
          }
          .rds-card {
            min-height: 120px !important;
            max-height: 160px !important;
            font-size: 0.91rem !important;
            padding: 10px 6px 10px 6px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default ResultsDrivenServices;
