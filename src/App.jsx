import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";

const themeImages = [
  "https://cdn.shopify.com/theme-store/45xprqwwhl4xif8uzu03clj0o8f2.jpg?width=900",
  "https://cdn.shopify.com/theme-store/1fetryjlfmoa0gc8a5lsab1ieo0r.jpg?width=900",
  "https://cdn.shopify.com/theme-store/1k1vhzjdn87ipqva1x6rgkmusq5g.jpg?width=900",
  "https://cdn.shopify.com/theme-store/2zrnb35tivgouznwvnhf3l3g3470.jpg?width=900",
  "https://cdn.shopify.com/theme-store/4p5vlo5npgksbxengfxx9szuhke3.jpg?width=900",
  "https://cdn.shopify.com/theme-store/53z6lp3bvvzs1broi7t32r9akde4.jpg?width=900",
  "https://cdn.shopify.com/theme-store/6fqa9ot96z9le1liww5pv3a9x8ib.jpg?width=900",
  "https://cdn.shopify.com/theme-store/76fvn2zgq39zp7bo62aekxgv4lln.jpg?width=900",
  "https://cdn.shopify.com/theme-store/9cnoepf8p8bjc4n1iam0x9zlrvwe.jpg?width=900",
  "https://cdn.shopify.com/theme-store/bf5fwjz2ythqoopz8h9rgk3o9r0a.jpg?width=900",
  "https://cdn.shopify.com/theme-store/cm89n16mgbb3ujtdzciw1ytnxk14.jpg?width=900",
  "https://cdn.shopify.com/theme-store/f9gnuq00d8njuc7ddt3bgvgohv8w.jpg?width=900",
];

const themes = [
  { name: "Poco", family: "Poco", price: "$220", preset: "poco" },
  { name: "Techmart", family: "Poco", price: "$220", preset: "techmart" },
  { name: "Woodmart", family: "Poco", price: "$220", preset: "woodmart" },
  { name: "Flute", family: "Flute", price: "$230", preset: "flute" },
  { name: "Track", family: "Flute", price: "$230", preset: "track" },
  { name: "Pretiosa", family: "Flute", price: "$230", preset: "pretiosa" },
  { name: "Glaze", family: "Flute", price: "$230", preset: "glaze" },
  { name: "Lyra", family: "Lyra", price: "$260", preset: "lyra" },
  { name: "Thread", family: "Lyra", price: "$260", preset: "thread" },
  { name: "Pixel", family: "Lyra", price: "$260", preset: "pixel" },
  { name: "Glossy", family: "Lyra", price: "$260", preset: "glossy" },
  { name: "Bonsai", family: "Lyra", price: "$260", preset: "bonsai" },
].map((t, i) => ({
  ...t,
  url: `https://themes.shopify.com/themes/${t.family.toLowerCase()}/presets/${t.preset}`,
  img: themeImages[i % themeImages.length],
}));

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("vis"); obs.unobserve(el); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function R({ children, d = 0 }) {
  const ref = useReveal();
  return <div ref={ref} className="rv" style={{ transitionDelay: `${d}ms` }}>{children}</div>;
}

function MouseGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (ref.current) {
        ref.current.style.setProperty("--mx", e.clientX + "px");
        ref.current.style.setProperty("--my", e.clientY + "px");
      }
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return <div className="mouse-glow" ref={ref} />;
}

const featureIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
];

export default function App() {
  const [tab, setTab] = useState("All");
  const [heroImg, setHeroImg] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const families = ["All", ...new Set(themes.map((t) => t.family))];
  const list = tab === "All" ? themes : themes.filter((t) => t.family === tab);

  useEffect(() => {
    const t = setInterval(() => setHeroImg((i) => (i + 1) % themeImages.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="p">
      <MouseGlow />

      <nav className={`n ${scrolled ? "n-scrolled" : ""}`}>
        <div className="w ni">
          <a href="#top" className="nl">
            <span className="nl-icon">P</span>
            <span>Pixel Templates</span>
          </a>
          <div className="nk">
            <a href="#themes">Themes</a>
            <a href="#about">About</a>
            <Link to="/digital-flagship">Flagship</Link>
          </div>
          <a href="#themes" className="nb">
            <span>Browse Themes</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-bg">
          {themeImages.map((src, i) => (
            <img key={i} src={src} alt="" className={i === heroImg ? "active" : ""} />
          ))}
        </div>
        <div className="hero-overlay" />
        <div className="hero-particles">
          {[...Array(6)].map((_, i) => <div key={i} className="particle" />)}
        </div>
        <div className="hero-content w">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Trusted by 30,000+ merchants worldwide
          </div>
          <h1>
            Stunning templates.
            <br />
            Effortless <span className="hero-hl">conversions</span>.
          </h1>
          <p className="hero-desc">
            Premium Shopify themes designed for speed, beauty, and revenue.
            Launch your dream store in minutes.
          </p>
          <div className="hero-actions">
            <a href="#themes" className="btn-p">
              Explore Collection
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#about" className="btn-s">Learn More</a>
          </div>
          <div className="hero-stats">
            {[["30K+", "Active Stores"], ["99%", "Satisfaction"], ["42+", "Countries"]].map(([v, l]) => (
              <div key={l} className="hero-stat">
                <strong>{v}</strong>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>Scroll to explore</span>
          <div className="scroll-line" />
        </div>
      </header>

      <section className="marquee-section">
        <div className="marquee-track">
          {[...Array(3)].map((_, r) => (
            <div key={r} className="marquee-set" aria-hidden={r > 0}>
              {["Lightning Fast", "Conversion Ready", "Mobile First", "SEO Optimized", "24/7 Support", "Pixel Perfect"].map((t) => (
                <span key={t + r} className="marquee-item">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="themes" id="themes">
        <div className="w">
          <R>
            <p className="section-label">Our Collection</p>
            <h2 className="sh">Themes built to <span className="grad-text">perform</span></h2>
            <p className="sp">Hand-crafted for performance. Built to help your store grow and convert.</p>
          </R>

          <div className="tabs">
            {families.map((f) => (
              <button key={f} className={`tab ${tab === f ? "on" : ""}`} onClick={() => setTab(f)}>{f}</button>
            ))}
          </div>

          <div className="tg">
            {list.map((t, i) => (
              <R key={t.name} d={i * 60}>
                <a href={t.url} target="_blank" rel="noreferrer" className="tc">
                  <div className="tc-img">
                    <img src={t.img} alt={t.name} loading="lazy" />
                    <div className="tc-overlay">
                      <span className="tc-view">View Theme →</span>
                    </div>
                  </div>
                  <div className="tc-info">
                    <div>
                      <span className="tc-fam">{t.family}</span>
                      <h3>{t.name}</h3>
                    </div>
                    <span className="tc-price">{t.price}</span>
                  </div>
                </a>
              </R>
            ))}
          </div>
        </div>
      </section>

      <section className="features" id="about">
        <div className="w">
          <R>
            <p className="section-label">Why Choose Us</p>
            <h2 className="sh">Everything you need to <span className="grad-text">succeed</span></h2>
          </R>
          <div className="feat-grid">
            {[
              ["Lightning Speed", "Every theme scores 90+ on Google PageSpeed. Your store loads in under 3 seconds."],
              ["Conversion Optimized", "Smart checkout flows, trust signals, and product grids that turn browsers into buyers."],
              ["Fully Customizable", "No coding required. Drag-and-drop editor with 50+ section types and endless combinations."],
              ["Responsive Design", "Pixel-perfect on every device — desktop, tablet, and mobile — right out of the box."],
            ].map(([title, desc], i) => (
              <R key={title} d={i * 100}>
                <div className="feat-card">
                  <div className="feat-icon">{featureIcons[i]}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      <section className="test-section">
        <div className="w">
          <R>
            <div className="test-card">
              <div className="test-stars">{"★★★★★"}</div>
              <blockquote>
                <p>&ldquo;We launched a complete redesign in four days. Mobile revenue jumped 35% in month one. The theme quality feels enterprise-grade.&rdquo;</p>
              </blockquote>
              <div className="test-author">
                <div className="test-avatar">PS</div>
                <div>
                  <strong>Priya Sharma</strong>
                  <span>eCommerce Manager, StyleCraft</span>
                </div>
              </div>
            </div>
          </R>
        </div>
      </section>

      <section className="cta-section">
        <div className="w">
          <R>
            <div className="cta-box">
              <div className="cta-glow" />
              <p className="section-label" style={{ color: "rgba(255,255,255,.5)" }}>Get Started Today</p>
              <h2>Ready to build something <span className="grad-text">beautiful</span>?</h2>
              <p className="cta-desc">Join 30,000+ merchants who trust Pixel Templates for their online stores.</p>
              <a href="#themes" className="btn-cta">
                Browse Themes
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </R>
        </div>
      </section>

      <footer className="ft">
        <div className="w ft-inner">
          <div className="ft-brand">
            <div className="ft-logo">
              <span className="nl-icon">P</span>
              <h4>Pixel Templates</h4>
            </div>
            <p>Premium Shopify themes for modern commerce.</p>
          </div>
          <div className="ft-links">
            <div>
              <h5>Themes</h5>
              <a href="#themes">Poco</a>
              <a href="#themes">Flute</a>
              <a href="#themes">Lyra</a>
            </div>
            <div>
              <h5>Company</h5>
              <a href="#about">About</a>
              <Link to="/digital-flagship">Flagship</Link>
              <a href="#top">Contact</a>
            </div>
          </div>
        </div>
        <div className="w ft-bottom">
          <span>&copy; 2026 Pixel Templates. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
