// src/components/PrintCare.jsx
import React, { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    // ACCESSORY CAROUSEL LOGIC (safe if elements are missing)
    const carousel = document.getElementById("accessoryCarousel");
    const prevBtn = document.getElementById("carouselPrev");
    const nextBtn = document.getElementById("carouselNext");

    const getCardW = () => {
      if (window.innerWidth < 576) return 118;
      if (window.innerWidth < 992) return 180;
      return 240;
    };
    const scrollAmount = () => getCardW() + (window.innerWidth < 576 ? 10 : 24);

    const onPrev = () =>
      carousel?.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
    const onNext = () =>
      carousel?.scrollBy({ left: scrollAmount(), behavior: "smooth" });

    if (prevBtn && nextBtn && carousel) {
      prevBtn.addEventListener("click", onPrev);
      nextBtn.addEventListener("click", onNext);
    }

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onPointerDown = (e) => {
      if (!carousel) return;
      isDown = true;
      startX = e.pageX ?? e.touches?.[0]?.pageX ?? 0;
      scrollLeft = carousel.scrollLeft;
      carousel.classList.add("dragging");
    };
    const onPointerUp = () => {
      if (!carousel) return;
      isDown = false;
      carousel.classList.remove("dragging");
    };
    const onPointerMove = (e) => {
      if (!isDown || !carousel) return;
      e.preventDefault();
      const x = e.pageX ?? e.touches?.[0]?.pageX ?? 0;
      const walk = (x - startX) * 1.7;
      carousel.scrollLeft = scrollLeft - walk;
    };

    carousel?.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    carousel?.addEventListener("pointerleave", onPointerUp);
    carousel?.addEventListener("pointermove", onPointerMove);

    // Touch events (mobile)
    carousel?.addEventListener("touchstart", onPointerDown);
    carousel?.addEventListener("touchend", onPointerUp);
    carousel?.addEventListener("touchmove", (e) => {
      if (!isDown || !carousel) return;
      const x = e.touches[0].pageX;
      const walk = (x - startX) * 1.6;
      carousel.scrollLeft = scrollLeft - walk;
    });

    return () => {
      if (prevBtn && nextBtn && carousel) {
        prevBtn.removeEventListener("click", onPrev);
        nextBtn.removeEventListener("click", onNext);
      }
      carousel?.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      carousel?.removeEventListener("pointerleave", onPointerUp);
      carousel?.removeEventListener("pointermove", onPointerMove);

      carousel?.removeEventListener("touchstart", onPointerDown);
      carousel?.removeEventListener("touchend", onPointerUp);
      // touchmove anonymous above is fine to leave; no-op cleanup needed
    };
  }, []);

  return (
    <section className="print-care">
      {/* Local component styles */}
      <style>{`
        :root {
          --primary: #1849b2;
          --accent: #fd9226;
          --bg-light: #f5f7fa;
          --font-heading: 'Poppins', sans-serif;
          --font-body: 'Inter', Arial, sans-serif;
        }

        /* --- Hero --- */
        .site-hero {
          background: linear-gradient(100deg, var(--primary) 60%, var(--accent));
          color: #fff;
          padding: 6.5rem 0 4rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .site-hero h1 {
          font-family: var(--font-heading);
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1.4rem;
          letter-spacing: -1px;
          animation: fadeInDown 1s both;
        }
        .site-hero p {
          font-size: 1.25rem;
          font-weight: 400;
          max-width: 560px;
          margin: 0 auto 2.2rem;
          animation: fadeInUp 1s both;
          font-family: var(--font-body);
        }
        .btn-hero {
          background: var(--accent);
          color: #fff;
          border-radius: 36px;
          font-family: var(--font-heading);
          padding: 0.8rem 2.3rem;
          font-size: 1.14rem;
          border: none;
          box-shadow: 0 4px 18px rgba(253, 146, 38, 0.08);
          transition: background .18s, transform .15s;
          animation: fadeIn 1.5s both;
        }
        .btn-hero:hover { background: #e8831e; transform: scale(1.04); }

        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-55px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(65px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
      `}</style>

      {/* Hero */}
      <div className="site-hero">
        <h1>Professional Printing. Effortless Experience.</h1>
        <p>
          Empower your office and creativity with HP &amp; Canon’s latest printers. <br />
          Stunning color, business speed, and reliable wireless — the future of printing is here.
        </p>
        <button className="btn btn-hero">Get Started</button>
      </div>

      {/* Promo Strip */}
      <section
        style={{
          background: "#fff",
          borderRadius: "30px",
          margin: "35px auto 34px auto",
          maxWidth: "1070px",
          boxShadow: "0 2px 18px rgba(24,73,178,.07)",
          padding: "2rem 0 1.2rem 0",
        }}
      >
        <div className="container d-flex flex-wrap justify-content-center gap-4">
          <div className="p-3 text-center" style={{ flex: "1 1 220px", minWidth: "180px" }}>
            <span style={{ fontSize: "1.8rem" }}>🚀</span>
            <div style={{ fontFamily: "'Poppins',sans-serif", marginTop: ".3em" }}>
              <b>Blazing Fast Prints</b>
              <br />
              Up to 36ppm on select models
            </div>
          </div>

          <div className="p-3 text-center" style={{ flex: "1 1 220px", minWidth: "180px" }}>
            <span style={{ fontSize: "1.8rem" }}>💡</span>
            <div style={{ fontFamily: "'Poppins',sans-serif", marginTop: ".3em" }}>
              <b>Stunning Color</b>
              <br />
              Canon’s FINE &amp; HP Vivid tech
            </div>
          </div>

          <div className="p-3 text-center" style={{ flex: "1 1 220px", minWidth: "180px" }}>
            <span style={{ fontSize: "1.8rem" }}>📱</span>
            <div style={{ fontFamily: "'Poppins',sans-serif", marginTop: ".3em" }}>
              <b>One-Touch Wireless</b>
              <br />
              Mobile and AirPrint ready
            </div>
          </div>

          <div className="p-3 text-center" style={{ flex: "1 1 220px", minWidth: "180px" }}>
            <span style={{ fontSize: "1.8rem" }}>🌱</span>
            <div style={{ fontFamily: "'Poppins',sans-serif", marginTop: ".3em" }}>
              <b>Low Carbon Tech</b>
              <br />
              Energy Star &amp; 40% less power
            </div>
          </div>
        </div>
      </section>

      {/* 
        Optional: Promo strip you commented out in HTML can be re-added here as needed.

        <div className="strip-promo container">
          <span>🚚 <strong>Free Shipping</strong> on 1st order</span>
          <span>⏱️ <strong>Same-day setup</strong> included</span>
          <span>💡 <strong>24/7 Support, Trusted Worldwide</strong></span>
        </div>
      */}
    </section>
  );
}
