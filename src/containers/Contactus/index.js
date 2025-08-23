import React from "react";
import { FiMapPin, FiPhone, FiMail, FiClock, FiUser, FiBriefcase, FiMessageSquare, FiSend } from "react-icons/fi";

export default function Contactus() {
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to your backend / form service
    alert("Thanks! We’ll get back to you within 1 business day.");
  };

  return (
    <section className="contactus-wrapper">
      {/* Page Title */}
      <header className="page-title">
        <p className="eyebrow">Get in touch</p>
        <h1>Let’s talk about growth</h1>
        <p className="subtitle">
          Tell us about your goals. We’ll reply with next steps, timelines, and pricing options.
        </p>
      </header>

      <div className="container">
        {/* Quick Info Cards */}
        <div className="grid-3">
          
          <div className="info-card">
            <div className="icon"><FiPhone /></div>
            <h3>Contact</h3>
            <p>info@onlinedigitalimpact.com</p>
          </div>
          <div className="info-card">
            <div className="icon"><FiClock /></div>
            <h3>Hours</h3>
            <p>Mon–Fri: 10:00–19:00<br/>Sat–Sun: 10:30–15:00</p>
          </div>
        </div>

        {/* Form + Side Panel */}
        <div className="grid-2">
          <form className="card form-card" onSubmit={onSubmit} noValidate>
            <div className="row-2">
              <label className="field">
                <span>Name</span>
                <div className="input-wrap">
                  <FiUser className="left-icon" />
                  <input type="text" name="name" placeholder="Your full name" required />
                </div>
              </label>

              <label className="field">
                <span>Email</span>
                <div className="input-wrap">
                  <FiMail className="left-icon" />
                  <input type="email" name="email" placeholder="you@company.com" required />
                </div>
              </label>
            </div>

            <div className="row-2">
              <label className="field">
                <span>Phone</span>
                <div className="input-wrap">
                  <FiPhone className="left-icon" />
                  <input type="tel" name="phone" placeholder="+91 9XXXXXXXXX" pattern="^[0-9+\-\s()]{8,}$" />
                </div>
              </label>

              <label className="field">
                <span>Company</span>
                <div className="input-wrap">
                  <FiBriefcase className="left-icon" />
                  <input type="text" name="company" placeholder="Company / Brand" />
                </div>
              </label>
            </div>

            <div className="row-2">
              <label className="field">
                <span>Service</span>
                <select name="service" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>SEO & Content</option>
                  <option>Paid Ads (Google/Meta)</option>
                  <option>Social Media & Creatives</option>
                  <option>Website / Landing Pages</option>
                  <option>Analytics & CRO</option>
                </select>
              </label>

              <label className="field">
                <span>Estimated Budget</span>
                <select name="budget" defaultValue="">
                  <option value="" disabled>Select a range</option>
                  <option>₹25k–₹50k / month</option>
                  <option>₹50k–₹1L / month</option>
                  <option>₹1L–₹3L / month</option>
                  <option>₹3L+ / month</option>
                </select>
              </label>
            </div>

            <label className="field">
              <span>Project Details</span>
              <div className="input-wrap textarea">
                <FiMessageSquare className="left-icon" />
                <textarea name="message" rows="5" placeholder="Tell us about your goals, timelines, and any links…" required />
              </div>
            </label>

            

            <button type="submit" className="btn-primary">
              <FiSend /> Send Message
            </button>

            <p className="footnote">We usually reply within 1 business day.</p>
          </form>

          <aside className="card side-card">
            <div className="side-image" role="img" aria-label="Team collaborating in an office" />
            <ul className="bullets">
              <li>Strategy call tailored to your goals</li>
              <li>Transparent timelines & pricing</li>
              <li>No spam. No pressure—just value.</li>
            </ul>
            <div className="mini-logos" aria-label="Client logos (illustrative only)">
              <span>Logos are illustrative and do not imply endorsement.</span>
            </div>
          </aside>
        </div>

        {/* Map */}
        <div className="map-wrap">
          
        </div>
      </div>

      {/* Minimal page styles */}
      <style>{`
        :root{
          --primary:#0575e6;
          --primary-dark:#021b79;
          --text:#111;
          --muted:#555;
          --border:#e5e7eb;
          --bg:#fff;
          --radius:14px;
          --shadow:0 10px 30px rgba(0,0,0,.06);
        }
        .contactus-wrapper{ background: var(--bg); color: var(--text); }
        .container{ max-width: 1100px; margin: 0 auto; padding: 0 16px 72px; }
        .page-title{ text-align:center; padding: 48px 16px 8px; }
        .page-title .eyebrow{ text-transform:uppercase; letter-spacing:.18em; font-weight:700; color:var(--muted); margin:0 0 6px; font-size:.82rem;}
        .page-title h1{ margin:0; font-size: clamp(1.9rem, 3.6vw, 2.6rem); }
        .page-title .subtitle{ color:#333; margin:10px auto 0; max-width: 760px; }

        .grid-3{ display:grid; grid-template-columns: repeat(3,1fr); gap: 16px; margin: 26px 0 34px; }
        .info-card{ background:#fff; border:1px solid var(--border); border-radius: var(--radius); padding:18px 18px; box-shadow: var(--shadow); }
        .info-card .icon{ width:42px; height:42px; border-radius:999px; display:grid; place-items:center; background:#f4f7ff; color:var(--primary); margin-bottom:10px; font-size:20px;}
        .info-card h3{ margin:0 0 4px; font-size:1.05rem;}
        .info-card p{ margin:0; color:#333; }

        .grid-2{ display:grid; grid-template-columns: 1.1fr .9fr; gap: 20px; align-items:start; }
        .card{ background:#fff; border:1px solid var(--border); border-radius: var(--radius); box-shadow: var(--shadow); }
        .form-card{ padding: 20px; }
        .row-2{ display:grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .field{ display:block; }
        .field > span{ display:block; font-size:.92rem; color:#222; margin:8px 0 6px; font-weight:600;}
        .input-wrap{ position:relative; }
        .input-wrap.input, .input-wrap.textarea{ display:block; }
        .left-icon{ position:absolute; left:12px; top:50%; transform: translateY(-50%); color:#7a7a7a; font-size:18px; }
        .input-wrap.textarea .left-icon{ top:16px; transform:none; }
        input, select, textarea{
          width:100%; border:1px solid var(--border); border-radius:10px; padding:12px 12px 12px 38px;
          font-size: 0.98rem; outline:none; background:#fff; color:#111;
        }
        textarea{ padding-left:38px; }
        input:focus, select:focus, textarea:focus{ border-color: var(--primary); box-shadow: 0 0 0 3px rgba(5,117,230,.12); }
        .consent{ display:flex; align-items:center; gap:8px; font-size:.92rem; color:#333; margin: 8px 0 4px; }
        .consent a{ color: var(--primary-dark); text-decoration: underline; }

        .btn-primary{
          margin-top: 8px;
          display:inline-flex; align-items:center; gap:10px;
          border:0; border-radius:999px; padding:12px 18px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          color:#fff; font-weight:800; cursor:pointer;
          box-shadow: 0 10px 24px rgba(5,117,230,.25);
        }
        .btn-primary:hover{ filter: brightness(1.03); transform: translateY(-1px); transition: .15s ease; }

        .footnote{ margin: 10px 0 0; color:#4b5563; font-size:.9rem; }

        .side-card{ padding: 0; overflow:hidden; }
        .side-image{
          height: 220px;
          background-image: url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80');
          background-size: cover; background-position: center;
        }
        .bullets{ list-style: none; padding: 14px 18px 6px; margin:0; }
        .bullets li{ margin:6px 0; padding-left: 14px; position:relative; color:#222; }
        .bullets li::before{ content:"•"; position:absolute; left:0; color: var(--primary); }

        .mini-logos{ padding: 0 18px 14px; font-size:.85rem; color:#6b7280; }
        .mini-logos span{ display:block; }

        .map-wrap{ margin-top: 28px; border-radius: var(--radius); overflow:hidden; border:1px solid var(--border); box-shadow: var(--shadow); }
        .map-wrap iframe{ width:100%; height: 420px; border:0; display:block; }

        @media (max-width: 992px){
          .grid-3{ grid-template-columns: 1fr; }
          .grid-2{ grid-template-columns: 1fr; }
          .row-2{ grid-template-columns: 1fr; }
          .side-image{ height: 200px; }
        }
      `}</style>
    </section>
  );
}
