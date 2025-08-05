import { FaArrowRight } from "react-icons/fa";

const caseStudies = [
  {
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Learning_Tree_International_logo.png",
    title: "Accelerating Growth Through Strategic Affiliate Marketing",
    desc1:
      "A revamped digital strategy aligned Learning Tree’s training offerings with evolving audience expectations.",
    desc2:
      "Streamlined messaging, stronger positioning and a more intuitive user journey helped increase qualified leads and course conversions across multiple industries. This approach led to a 1,375% increase in unique purchases and consistent revenue growth over the following year.",
    links: [
      { text: "LAUNCH WEBSITE", href: "#", solid: true },
      { text: "REQUEST A QUOTE", href: "#", solid: false },
    ],
    bgColor: "linear-gradient(90deg, #17b5ff 0%, #05467b 100%)",
    brand: "LEARNING TREE INTERNATIONAL",
  },
  {
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png",
    title: "Driving Engagement for Streaming Platforms",
    desc1:
      "End-to-end campaign design to help a fast-growing streaming platform boost engagement and retention.",
    desc2:
      "Innovative retargeting and creative social pushes resulted in a 750% boost in monthly users and a 90% subscription renewal rate in just 8 months.",
    links: [
      { text: "LAUNCH WEBSITE", href: "#", solid: true },
      { text: "REQUEST A QUOTE", href: "#", solid: false },
    ],
    bgColor: "linear-gradient(90deg, #01d8fb 0%, #293bfa 100%)",
    brand: "STREAMIFY",
  },
  {
    img: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=800&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
    title: "Omnichannel Success for SaaS Company",
    desc1:
      "A full-funnel digital campaign led this SaaS brand to consistent quarter-over-quarter user growth.",
    desc2:
      "Our multi-channel approach increased customer LTV by 68% and generated a 315% increase in free trial signups year-on-year.",
    links: [
      { text: "LAUNCH WEBSITE", href: "#", solid: true },
      { text: "REQUEST A QUOTE", href: "#", solid: false },
    ],
    bgColor: "linear-gradient(90deg, #00e5ff 0%, #1761d7 100%)",
    brand: "SAAS SOLUTIONS",
  },
];

function CaseStudiesZPattern() {
  return (
    <section
      style={{
        background: "#001e3a",
        padding: "64px 0 64px 0",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: 1200,
          width: "100%",
          margin: "0 auto 48px auto",
        }}
      >
        <div
          style={{
            color: "#11e6ff",
            fontWeight: 700,
            fontSize: "1.18rem",
            letterSpacing: ".08em",
          }}
        >
          OUR WORK
        </div>
        <h2
          style={{
            color: "#fff",
            fontWeight: 800,
            fontSize: "2.65rem",
            margin: "12px 0 10px 0",
            textShadow: "0 2px 12px #18c3fa55",
            letterSpacing: "-.01em",
          }}
        >
          Featured Digital Marketing Case Studies
        </h2>
        <div
          style={{
            color: "#dbf6ff",
            fontSize: "1.27rem",
            margin: "0 auto",
            maxWidth: 700,
            fontWeight: 500,
          }}
        >
          Explore some of our recent digital marketing campaigns for brands across industries.
        </div>
      </div>
      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {caseStudies.map((cs, idx) => (
          <div
            key={idx}
            className="zpattern-row"
            style={{
              display: "flex",
              flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
              alignItems: "stretch",
              gap: "5px", // 5px gap between image and text
              background: cs.bgColor,
              borderRadius: "18px",
              minHeight: 330,
              boxShadow: "0 10px 40px 0 #18e1ff55, 0 1.5px 12px #131a40",
              overflow: "hidden",
              width: "100%",
              position: "relative",
              padding: "0",
            }}
          >
            {/* Image Column */}
            <div
              style={{
                flex: "1 1 45%",
                minWidth: 180,
                maxWidth: 440,
                background: `linear-gradient(125deg,rgba(10,22,45,0.17),rgba(0,0,0,0.24)), url(${cs.img}) center/cover no-repeat`,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                borderRadius: idx % 2 === 0
                  ? "18px 0 0 18px"
                  : "0 18px 18px 0",
                position: "relative",
              }}
            >
              {/* Logo & Brand - Bottom left inside image */}
              <div
                style={{
                  position: "absolute",
                  left: idx % 2 === 0 ? 16 : "auto",
                  right: idx % 2 !== 0 ? 16 : "auto",
                  bottom: 16,
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  background: "rgba(0,34,64,0.72)",
                  padding: "8px 18px 8px 12px",
                  borderRadius: "7px",
                }}
              >
                <img
                  src={cs.logo}
                  alt=""
                  style={{
                    maxHeight: 40,
                    maxWidth: 90,
                    filter:
                      "brightness(0) invert(1) drop-shadow(0 0 7px #1bdfff)",
                    opacity: 0.96,
                    marginRight: 13,
                  }}
                />
                <span
                  style={{
                    color: "#d7fbff",
                    fontSize: "1.08rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textShadow: "0 1px 7px #06d2e4a2",
                  }}
                >
                  {cs.brand}
                </span>
              </div>
            </div>
            {/* Text Column */}
            <div
              style={{
                flex: "1 1 55%",
                minWidth: 200,
                padding: "48px 36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "#fff",
                alignItems: "flex-start",
                background: "rgba(0,32,58,0.86)",
              }}
            >
              <h3
                style={{
                  color: "#29e4ff",
                  fontWeight: 900,
                  fontSize: "1.55rem",
                  marginBottom: 19,
                  lineHeight: 1.21,
                  textShadow: "0 2px 12px #19e6ff3a",
                }}
              >
                {cs.title}
              </h3>
              <div
                style={{
                  color: "#eaffff",
                  fontSize: "1.18rem",
                  marginBottom: 13,
                  fontWeight: 600,
                  lineHeight: 1.54,
                }}
              >
                {cs.desc1}
              </div>
              <div
                style={{
                  color: "#b4f0ff",
                  fontSize: "1.06rem",
                  marginBottom: 23,
                  marginTop: 2,
                  fontWeight: 400,
                }}
              >
                {cs.desc2}
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "18px 32px",
                  marginTop: 5,
                }}
              >
                {cs.links.map((link, i) =>
                  link.solid ? (
                    <a
                      key={i}
                      href={link.href}
                      style={{
                        background:
                          "linear-gradient(90deg,#00e1fd 0%,#40cfff 100%)",
                        color: "#00436b",
                        fontWeight: 900,
                        fontSize: "1.14rem",
                        border: "none",
                        outline: "none",
                        padding: "11px 26px",
                        borderRadius: "4px",
                        textDecoration: "none",
                        letterSpacing: ".01em",
                        boxShadow: "0 2px 14px #00eaff50",
                        display: "inline-flex",
                        alignItems: "center",
                        textShadow: "0 1px 7px #ffffff80",
                        transition: "background 0.13s, color 0.13s",
                      }}
                    >
                      {link.text}
                      <FaArrowRight style={{ marginLeft: 9, fontSize: 17 }} />
                    </a>
                  ) : (
                    <a
                      key={i}
                      href={link.href}
                      style={{
                        color: "#29f6ff",
                        fontWeight: 900,
                        fontSize: "1.13rem",
                        border: "none",
                        background: "none",
                        outline: "none",
                        padding: 0,
                        textDecoration: "none",
                        marginLeft: 0,
                        letterSpacing: ".01em",
                        display: "inline-flex",
                        alignItems: "center",
                        textShadow: "0 1px 7px #00f6ff80",
                        transition: "color 0.13s",
                      }}
                    >
                      {link.text}
                      <FaArrowRight style={{ marginLeft: 7, fontSize: 17 }} />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 1050px) {
          .zpattern-row {
            flex-direction: column !important;
            min-height: 280px !important;
            border-radius: 16px !important;
          }
          .zpattern-row > div {
            border-radius: 16px !important;
          }
        }
        @media (max-width: 700px) {
          section {
            padding: 24px 0 24px 0 !important;
          }
          .zpattern-row {
            flex-direction: column !important;
            min-height: 150px !important;
            border-radius: 13px !important;
          }
          .zpattern-row > div {
            min-width: 90px !important;
            max-width: 99vw !important;
            padding: 21px 7vw !important;
            border-radius: 13px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default CaseStudiesZPattern;
