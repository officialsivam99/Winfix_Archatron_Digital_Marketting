import React from "react";

// Put the actual logo URLs for real client logos; avoid using one logo for multiple brands.
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

const BrandScroller = () => {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #1c1730 0%, #271879 100%)",
        padding: "64px 0 54px 0"
      }}
    >
      <div className="container text-center mb-5">
        <h6 style={{ color: "#00ffd1", letterSpacing: 1.5, fontWeight: 700 }} className="text-uppercase mb-2">
          Our Clients
        </h6>
        <h2 className="fw-bold text-white mb-2" style={{ fontSize: "2.3rem" }}>
          A Trusted Digital Marketing Partner
        </h2>
        <p className="text-light" style={{ color: "#c8ccdf" }}>
          We Deliver Digital Marketing Services To Brands Of All Sizes
        </p>
      </div>

      <div style={{ overflow: "hidden" }}>
        {/* Row A - Moves Left */}
        <div className="brand-scroller-row animate-left">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`rowA-${i}`}
              className="brand-scroller-card"
              style={{
                minWidth: 170,
                background: "rgba(23,23,48, 0.88)",
                border: "1px solid #2e3156",
                borderRadius: 14,
                padding: "16px 28px",
                margin: "0 12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                style={{
                  maxHeight: 34,
                  maxWidth: 100,
                  objectFit: "contain",
                  marginBottom: 8,
                  filter: "brightness(1.2) drop-shadow(0 2px 4px #15156a20)"
                }}
              />
              <span style={{ color: "#b8bfdc", fontSize: 13, textAlign: "center" }}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row B - Moves Right */}
        <div className="brand-scroller-row animate-right mt-4">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`rowB-${i}`}
              className="brand-scroller-card"
              style={{
                minWidth: 170,
                background: "rgba(23,23,48, 0.88)",
                border: "1px solid #2e3156",
                borderRadius: 14,
                padding: "16px 28px",
                margin: "0 12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                style={{
                  maxHeight: 34,
                  maxWidth: 100,
                  objectFit: "contain",
                  marginBottom: 8,
                  filter: "brightness(1.2) drop-shadow(0 2px 4px #15156a20)"
                }}
              />
              <span style={{ color: "#b8bfdc", fontSize: 13, textAlign: "center" }}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Inline CSS for animation */}
      <style>
        {`
          .brand-scroller-row {
            display: flex;
            flex-wrap: nowrap;
            white-space: nowrap;
            will-change: transform;
          }
          .animate-left {
            animation: scroll-left 35s linear infinite;
          }
          .animate-right {
            animation: scroll-right 38s linear infinite;
          }
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          @media (max-width: 767px) {
            .brand-scroller-row {
              gap: 12px;
            }
            .brand-scroller-card {
              min-width: 110px !important;
              padding: 10px 10px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BrandScroller;
