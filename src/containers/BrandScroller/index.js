import React from "react";

const brands = [
  { name: "Buddha Brands", logo: "https://www.digitalsilk.com/wp-content/uploads/2024/01/buddha.svg" },
  { name: "Paul Stuart", logo: "https://www.digitalsilk.com/wp-content/uploads/2024/01/paul-stuart.png.webp" },
  { name: "Spar & Bernstein", logo: "https://www.digitalsilk.com/wp-content/uploads/2024/01/rollink.svg" },
  { name: "Babies R Us", logo: "https://www.digitalsilk.com/wp-content/uploads/2025/04/best_buy_logo-cropped.svg" },
  { name: "Rollink", logo: "https://www.digitalsilk.com/wp-content/uploads/2024/01/rollink.svg" },
  { name: "Sony", logo: "https://www.digitalsilk.com/wp-content/uploads/2024/01/Sony-1.png.webp" },
  { name: "Grenco Science", logo: "https://www.digitalsilk.com/wp-content/uploads/2024/01/grenco.png.webp" },
  { name: "Enchant Christmas", logo: "https://www.digitalsilk.com/wp-content/uploads/2024/01/enchant.png.webp" },
  { name: "Xerox", logo: "https://www.digitalsilk.com/wp-content/uploads/2024/12/xerox.png.webp" }
];

const COLORS = {
  gradient: "linear-gradient(135deg, #44a08d 0%, #093637 100%)",
  surface: "rgba(9,54,55,0.88)",
  border: "rgba(68,160,141,0.3)",
  text: "#e6fffa",
  muted: "#b2f5ea",
};

const BrandScroller = () => {
  const rowA = [...brands, ...brands];
  const rowB = [...brands, ...brands];

  return (
    <section
      aria-labelledby="brands-heading"
      style={{
        background: COLORS.gradient,
        padding: "56px 0 64px 0",
      }}
    >
      <div className="container text-center" style={{ marginBottom: 26 }}>
        <h6
          id="brands-heading"
          className="text-uppercase mb-2"
          style={{
            color: COLORS.muted,
            letterSpacing: 1.5,
            fontWeight: 800,
            fontSize: ".9rem",
          }}
        >
          Our Clients
        </h6>
        <h2
          className="fw-bold"
          style={{ color: COLORS.text, fontSize: "2.2rem", marginBottom: 6 }}
        >
          A Trusted Digital Marketing Partner
        </h2>
        <p style={{ color: COLORS.muted, marginBottom: 0 }}>
          Logos shown below are <strong>illustrative only</strong> and do not imply endorsement.
        </p>
      </div>

      <div aria-label="Brand logos (illustrative)">
        <div className="brand-scroller-row animate-left" aria-hidden="true">
          {rowA.map((brand, i) => (
            <div
              key={`rowA-${i}-${brand.name}`}
              className="brand-scroller-card"
              style={{
                minWidth: 170,
                background: COLORS.surface,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 14,
                padding: "14px 24px",
                margin: "0 12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backdropFilter: "saturate(120%) blur(2px)",
              }}
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo (illustrative)`}
                loading="lazy"
                style={{
                  maxHeight: 34,
                  maxWidth: 110,
                  objectFit: "contain",
                  marginBottom: 8,
                  filter: "drop-shadow(0 2px 6px rgba(68,160,141,0.3))",
                }}
              />
              <span style={{ color: COLORS.muted, fontSize: 13, textAlign: "center" }}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        <div className="brand-scroller-row animate-right" aria-hidden="true" style={{ marginTop: 18 }}>
          {rowB.map((brand, i) => (
            <div
              key={`rowB-${i}-${brand.name}`}
              className="brand-scroller-card"
              style={{
                minWidth: 170,
                background: COLORS.surface,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 14,
                padding: "14px 24px",
                margin: "0 12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backdropFilter: "saturate(120%) blur(2px)",
              }}
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo (illustrative)`}
                loading="lazy"
                style={{
                  maxHeight: 34,
                  maxWidth: 110,
                  objectFit: "contain",
                  marginBottom: 8,
                  filter: "drop-shadow(0 2px 6px rgba(68,160,141,0.3))",
                }}
              />
              <span style={{ color: COLORS.muted, fontSize: 13, textAlign: "center" }}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .brand-scroller-row {
          display: flex;
          flex-wrap: nowrap;
          white-space: nowrap;
          will-change: transform;
          transform: translateZ(0);
        }
        .brand-scroller-row:hover {
          animation-play-state: paused;
        }
        .animate-left {
          animation: scroll-left 35s linear infinite;
        }
        .animate-right {
          animation: scroll-right 38s linear infinite;
        }
        @keyframes scroll-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes scroll-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        @media (max-width: 991px) {
          .brand-scroller-card {
            min-width: 140px !important;
            padding: 12px 16px !important;
          }
        }
        @media (max-width: 767px) {
          .brand-scroller-row { gap: 10px; }
          .brand-scroller-card {
            min-width: 110px !important;
            padding: 10px 10px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BrandScroller;
