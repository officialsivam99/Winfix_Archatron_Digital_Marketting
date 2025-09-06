// src/components/printer-products.jsx
import React, { useMemo, useState, useEffect } from "react";
import { Container, Row, Col, Card, Breadcrumb } from "react-bootstrap";
import { PRINTER_DATA } from "../printer-data";

export default function PrinterProducts() {
  // Data-driven categories
  const categories = useMemo(() => {
    const set = new Set(PRINTER_DATA.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured"); // featured | price-asc | price-desc | name
  const [showTop, setShowTop] = useState(false);

  const products = useMemo(() => {
    let list = PRINTER_DATA
      .filter((p) => (selectedCategory === "All" ? true : p.category === selectedCategory))
      .filter((p) => {
        const q = query.trim().toLowerCase();
        if (!q) return true;
        return (
          p.title.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          (p.type || "").toLowerCase().includes(q)
        );
      });

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "name") list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    return list;
  }, [selectedCategory, query, sort]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const money = (n) => n.toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <section>
      {/* Banner */}
      <div className="pp-hero">
        <Container>
          <h1 className="pp-title">Printers</h1>
          <Breadcrumb className="pp-breadcrumb">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Printers</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div>

      {/* Main */}
      <Container className="my-4">
        <Row className="g-4">
          {/* Sidebar */}
          <Col lg={3}>
            <aside className="pp-side">
              <div className="pp-side-head">
                <span>Categories</span>
                <button
                  className="pp-collapse"
                  onClick={(e) => {
                    const body = e.currentTarget.closest(".pp-side").querySelector(".pp-side-body");
                    body.classList.toggle("d-none");
                    e.currentTarget.classList.toggle("rot");
                  }}
                  aria-label="Toggle categories"
                >
                  ▲
                </button>
              </div>

              <div className="pp-side-body mt-2">
                <ul className="pp-cat-list">
                  {categories.map((c) => (
                    <li key={c}>
                      <button
                        className={"pp-cat-btn " + (selectedCategory === c ? "active" : "")}
                        onClick={() => setSelectedCategory(c)}
                      >
                        {c}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="pp-filter mt-3">
                  <input
                    className="form-control form-control-sm"
                    placeholder="Search printers…"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <select
                    className="form-select form-select-sm mt-2"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name">Name A–Z</option>
                  </select>
                </div>
              </div>
            </aside>
          </Col>

          {/* Grid — 4 per row on lg+, 3 on md, 2 on sm, 1 on xs */}
          <Col lg={9}>
            <Row className="g-4">
              {products.map((p) => (
                <Col xs={12} sm={6} md={4} lg={3} key={p.id}>
                  <Card className="pp-card h-100">
                    {/* Fixed image area via Bootstrap ratio */}
                    <div className="ratio ratio-4x3">
                      <img src={p.image} alt={p.title} className="pp-img" loading="lazy" />
                    </div>

                    {/* Structured body to align levels */}
                    <Card.Body className="pp-body">
                      <div className="pp-meta">
                        <div className="pp-brand small text-muted">
                          {p.brand} • {p.type}
                        </div>
                        <h6 className="pp-title-2" title={p.title}>
                          {p.title}
                        </h6>
                      </div>

                      {/* Price pinned at bottom for consistency */}
                      <div className="pp-price mt-auto">
                        <span className="pp-now">{money(p.price)}</span>
                        {p.mrp > p.price && <span className="pp-mrp">{money(p.mrp)}</span>}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}

              {products.length === 0 && (
                <div className="text-center text-secondary py-5">No products found.</div>
              )}
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Scroll to top */}
      {showTop && (
        <button
          className="pp-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          title="Back to top"
        >
          ↑
        </button>
      )}

      {/* Styles */}
      <style>{`
        /* Banner */
        .pp-hero{
          background: linear-gradient(180deg,#efe6a9 0%, #c7def4 70%);
          padding: 52px 0 46px;
        }
        .pp-title{ margin:0; font-weight:700; }
        .pp-breadcrumb{ margin-top:8px; }

        /* Sidebar */
        .pp-side{
          border:1px solid #eef0f3; border-radius:12px; padding:14px;
          box-shadow: 0 6px 20px rgba(2,6,23,.04);
          background:#fff;
        }
        .pp-side-head{ display:flex; align-items:center; justify-content:space-between; font-weight:600; font-size:1.05rem; }
        .pp-collapse{ border:0; background:#fff; font-size:.9rem; line-height:1; transform:rotate(180deg); transition: transform .2s ease; }
        .pp-collapse.rot{ transform:rotate(0deg); }
        .pp-cat-list{ list-style:none; padding-left:0; margin:0; }
        .pp-cat-btn{ width:100%; text-align:left; padding:8px 10px; border-radius:8px; border:1px solid transparent; background:#fff; }
        .pp-cat-btn:hover{ background:#f8fafc; }
        .pp-cat-btn.active{ background:#f1f5ff; border-color:#e3e9ff; color:#2b2f8a; font-weight:600; }

        /* Cards: equal-level layout */
        .pp-card{
          border: 1px dashed #e5e7eb;
          border-radius: 14px;
          transition: transform .15s ease, box-shadow .15s ease;
          display: flex;                 /* column layout for image + body */
          flex-direction: column;
          background:#fff;
        }
        .pp-card:hover{
          transform: translateY(-2px);
          box-shadow: 0 10px 26px rgba(2,6,23,.08);
        }
        .pp-card .ratio{ flex: 0 0 auto; }

        /* Product image area stays uniform; contain keeps full product visible */
        .pp-img{
          width:100%; height:100%;
          object-fit: contain; background:#fff;
        }

        /* Body becomes flexible column so price can stick to bottom */
        .pp-body{
          display:flex; flex-direction:column; flex: 1 1 auto;
          padding-top: .8rem; padding-bottom: .9rem;
        }

        /* Brand + title block with a consistent height so rows align */
        .pp-meta{
          margin-bottom:.25rem;
          min-height: 92px; /* ~ brand + up to 3 lines of title */
        }
        .pp-brand{ margin-top:.15rem; }

        /* Title: clamp to 3 lines on >= sm for consistent rows */
        .pp-title-2{
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          line-height: 1.35;
          margin-bottom: .35rem;
          font-weight: 600;
          color:#0f172a;
        }

        /* On small screens, allow full title (better readability) */
        @media (max-width: 576px){
          .pp-meta{ min-height: 0; }
          .pp-title-2{
            display: block;
            -webkit-line-clamp: initial;
            -webkit-box-orient: initial;
            overflow: visible;
            white-space: normal;
            word-break: break-word;
          }
        }

        /* Price row pinned to bottom of body */
        .pp-price{ display:flex; align-items:baseline; gap:10px; }
        .pp-now{ color:#1e40af; font-weight:800; }
        .pp-mrp{ color:#9ca3af; text-decoration: line-through; }

        /* Back to top */
        .pp-top{
          position: fixed; right: 16px; bottom: 16px; z-index: 1000;
          width: 42px; height: 42px; border-radius: 10px; border: 1px solid #e5e7eb; background: #fff;
          box-shadow: 0 8px 20px rgba(2,6,23,.12);
        }
      `}</style>
    </section>
  );
}
