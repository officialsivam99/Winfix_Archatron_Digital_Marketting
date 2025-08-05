import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const carouselSlides = [
  {
    logo: (
      <span
        style={{
          fontFamily: "'Oswald',sans-serif",
          fontSize: "2.2rem",
          fontWeight: 700,
          letterSpacing: "2px",
          color: "#dad8ee",
          display: "block",
        }}
      >
        SPAR | BERNSTEIN
        <span style={{ display: "block", fontWeight: 300, fontSize: "1.1rem", color: "#bdbcc9" }}>
          Law Offices | Since 1958
        </span>
      </span>
    ),
    description:
      "Strategic SEO and content enhancements for Law Offices of Spar & Bernstein, an NYC-based immigration and personal injury practice.",
    stats: [
      {
        value: "14x",
        text: "increase in organic traffic",
        bg: "#4e4fff"
      },
      {
        value: "9,900%",
        text: "boost over the primary SQL target",
        bg: "#9352fc"
      },
      {
        value: "53%",
        text: "decrease in CPL",
        bg: "#37a4fd"
      },
    ],
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1350&q=80",
  },
  {
    logo: (
      <span
        style={{
          fontFamily: "'Oswald',sans-serif",
          fontSize: "2.2rem",
          fontWeight: 700,
          letterSpacing: "2px",
          color: "#dad8ee",
          display: "block",
        }}
      >
        JOHNSON LAW
        <span style={{ display: "block", fontWeight: 300, fontSize: "1.1rem", color: "#bdbcc9" }}>
          Legal Advisors | Since 2001
        </span>
      </span>
    ),
    description:
      "Award-winning legal support with a focus on criminal and civil rights, serving clients across the US for over two decades.",
    stats: [
      {
        value: "21%",
        text: "higher win rate in trials",
        bg: "#28c9ed"
      },
      {
        value: "30+",
        text: "years of combined experience",
        bg: "#47d773"
      },
      {
        value: "5x",
        text: "faster case resolutions",
        bg: "#fa7ea3"
      },
    ],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80",
  },
  {
    logo: (
      <span
        style={{
          fontFamily: "'Oswald',sans-serif",
          fontSize: "2.2rem",
          fontWeight: 700,
          letterSpacing: "2px",
          color: "#dad8ee",
          display: "block",
        }}
      >
        ACE PARTNERS
        <span style={{ display: "block", fontWeight: 300, fontSize: "1.1rem", color: "#bdbcc9" }}>
          Attorneys | Since 1990
        </span>
      </span>
    ),
    description:
      "Full-service law firm providing expert consultation in real estate, business, and personal law matters.",
    stats: [
      {
        value: "17%",
        text: "rise in client satisfaction",
        bg: "#5d5cf3"
      },
      {
        value: "7x",
        text: "increase in successful closings",
        bg: "#36cbff"
      },
      {
        value: "90%",
        text: "repeat client rate",
        bg: "#f7c25e"
      },
    ],
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1350&q=80",
  },
];

function LawOfficeSliderSection() {
  const [current, setCurrent] = useState(0);

  // Handle next/prev with bounds
  const nextSlide = () => setCurrent((prev) => (prev + 1) % carouselSlides.length);
  const goToSlide = idx => setCurrent(idx);

  const slide = carouselSlides[current];

  return (
    <section
      style={{
        width: "100%",
        minHeight: 520,
        background: `linear-gradient(to right,rgba(23,27,58,0.93) 60%,rgba(32,38,73,0.20)), url('${slide.image}') center/cover no-repeat`,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 0,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 640,
          width: "100%",
          padding: "58px 32px 44px 6%",
          zIndex: 2,
          color: "#fff",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Logo */}
        <div>{slide.logo}</div>

        {/* Description */}
        <div
          style={{
            fontSize: "1.18rem",
            color: "#e6e5f3",
            marginBottom: 30,
            marginTop: 13,
            lineHeight: 1.45,
            fontWeight: 400,
          }}
        >
          {slide.description}
        </div>

        {/* Stats */}
        <div style={{
          marginBottom: 40,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}>
          {slide.stats.map((stat, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <span
                style={{
                  minWidth: 56,
                  background: stat.bg,
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "1.09rem",
                  borderRadius: "5px",
                  textAlign: "center",
                  padding: "5px 16px 5px 16px",
                  marginRight: 8,
                  display: "inline-block",
                  boxShadow: "0 1px 6px 1px #23225fb8"
                }}
              >
                {stat.value}
              </span>
              <span style={{ fontSize: "1.1rem", color: "#fff", fontWeight: 400 }}>
                {stat.text}
              </span>
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          style={{
            padding: "15px 35px 14px 30px",
            fontSize: "1.15rem",
            fontWeight: 700,
            color: "#fff",
            background: "none",
            border: "2px solid",
            borderImage: "linear-gradient(90deg,#915dfe,#36cbff) 1",
            borderRadius: "4px",
            letterSpacing: "1.2px",
            outline: "none",
            boxShadow: "0 1.5px 16px 0 #4533e760",
            display: "inline-flex",
            alignItems: "center",
            transition: "background 0.18s, color 0.18s",
            marginBottom: 15,
            marginTop: 7,
            position: "relative",
            cursor: "pointer",
          }}
        >
          REQUEST A QUOTE
          <FaArrowRight style={{ fontSize: 18, marginLeft: 12 }} />
        </button>
      </div>

      {/* Carousel Dots */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        {carouselSlides.map((_, idx) => (
          <span
            key={idx}
            onClick={() => goToSlide(idx)}
            style={{
              width: 35,
              height: 35,
              borderRadius: "50%",
              background: current === idx
                ? "linear-gradient(90deg,#398ffe 60%,#46ffe5 100%)"
                : "#ebecf1",
              color: current === idx ? "#fff" : "#76798a",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.13rem",
              border: current === idx ? "none" : "1.2px solid #c1c3d6",
              cursor: "pointer",
              boxShadow: current === idx ? "0 2px 10px #398ffe55" : "none",
              transition: "background 0.14s, color 0.14s",
              userSelect: "none",
            }}
          >
            {idx + 1}
          </span>
        ))}
        {/* Arrow */}
        <span
          onClick={nextSlide}
          style={{
            marginLeft: 14,
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 2px 10px #25273a55"
          }}
        >
          <FaArrowRight style={{ color: "#4478f3", fontSize: 25 }} />
        </span>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          section[style*="min-height"] > div {
            padding: 38px 5vw 34px 5vw !important;
            max-width: 100vw !important;
          }
        }
        @media (max-width: 600px) {
          section[style*="min-height"] > div {
            padding: 22px 4vw 26px 4vw !important;
          }
          section[style*="min-height"] {
            min-height: 420px !important;
          }
          section[style*="min-height"] h2,
          section[style*="min-height"] span[style*="font-size: 2.2rem"] {
            font-size: 1.25rem !important;
          }
        }
        @media (max-width: 480px) {
          section[style*="min-height"] > div {
            padding: 8vw 2vw 12vw 2vw !important;
          }
        }
      `}</style>
    </section>
  );
}

export default LawOfficeSliderSection;
