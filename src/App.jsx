import { useEffect, useRef, useState } from "react";
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
  { name: "Poco", family: "Poco", price: "$220", preset: "poco", tag: "Quick setup, polished style", desc: "Designed for modern merchants, Poco offers an elegant look and hassle-free setup to get your store running fast." },
  { name: "Techmart", family: "Poco", price: "$220", preset: "techmart", tag: "Tech-forward, conversion ready", desc: "Built for electronics and gadget stores with smart filtering and comparison tools." },
  { name: "Woodmart", family: "Poco", price: "$220", preset: "woodmart", tag: "Warm, natural aesthetics", desc: "Perfect for craft and artisan brands with warm tones and editorial layouts." },
  { name: "Flute", family: "Flute", price: "$230", preset: "flute", tag: "Big, beautiful and fast", desc: "Built to accommodate even the largest catalogs, packed with features designed to help you convert." },
  { name: "Track", family: "Flute", price: "$230", preset: "track", tag: "Athletic, performance driven", desc: "Designed for sports and activewear brands with dynamic layouts and bold imagery." },
  { name: "Pretiosa", family: "Flute", price: "$230", preset: "pretiosa", tag: "Luxury meets simplicity", desc: "Sophisticated and refined, designed for premium and luxury product lines." },
  { name: "Glaze", family: "Flute", price: "$230", preset: "glaze", tag: "Clean, modern, minimal", desc: "A minimalist theme with generous whitespace and focus on product photography." },
  { name: "Lyra", family: "Lyra", price: "$260", preset: "lyra", tag: "High-end meets high conversion", desc: "Flexible and beautiful without sacrificing functionality, designed to power your growth." },
  { name: "Thread", family: "Lyra", price: "$260", preset: "thread", tag: "Fashion-first design", desc: "Built for fashion brands with lookbook layouts, size guides, and style filtering." },
  { name: "Pixel", family: "Lyra", price: "$260", preset: "pixel", tag: "Effortlessly good", desc: "Perfect for merchants kickstarting their business, spanning the gap between vision and marketplace." },
  { name: "Glossy", family: "Lyra", price: "$260", preset: "glossy", tag: "Bold and eye-catching", desc: "A vibrant theme with bold colors and dynamic sections for standout brands." },
  { name: "Bonsai", family: "Lyra", price: "$260", preset: "bonsai", tag: "Organic, grounded feel", desc: "Designed for wellness and natural product brands with earthy, calming layouts." },
].map((t, i) => ({
  ...t,
  url: `https://themes.shopify.com/themes/${t.family.toLowerCase()}/presets/${t.preset}`,
  img: themeImages[i % themeImages.length],
}));

function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const h = (e) => {
      if (ref.current) {
        ref.current.style.setProperty("--cx", e.clientX + "px");
        ref.current.style.setProperty("--cy", e.clientY + "px");
      }
    };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);
  return <div className="cursor-glow" ref={ref} />;
}

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

const featureIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
];

export default function App() {
  const [tab, setTab] = useState("All");
  const [heroImg, setHeroImg] = useState(0);
  const families = ["All", ...new Set(themes.map((t) => t.family))];
  const list = tab === "All" ? themes : themes.filter((t) => t.family === tab);

  useEffect(() => {
    const t = setInterval(() => setHeroImg((i) => (i + 1) % themeImages.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="site">
      <CursorGlow />

      <nav className="nav">
        <div className="w nav-inner">
          <a href="#top" className="nav-logo">
            <span className="nav-logo-icon" aria-hidden="true">
              <span /><span /><span /><span />
            </span>
            <span className="nav-logo-text">Pixel<br/>Templates</span>
          </a>
          <div className="nav-links">
            <a href="#themes">Themes</a>
            <a href="#about">About</a>
            <Link to="/digital-flagship">Flagship</Link>
            <a href="#top">Support</a>
          </div>
          <a href="#themes" className="nav-cta">Browse Themes</a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="w hero-inner">
          <div className="hero-images">
            {themeImages.slice(0, 2).map((src, i) => (
              <div key={i} className={`hero-float hero-float--${i + 1}`}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
          <h1>Everything you need to <em>succeed</em> on Shopify</h1>
          <p className="hero-desc">
            Make every visit count with our conversion-optimized themes, packed with
            powerful features and backed by expert support.
          </p>
          <a href="#themes" className="btn-main">Shop our themes</a>
        </div>
      </header>

      <section className="themes-section" id="themes">
        <div className="w">
          <R>
            <p className="sec-label">Our Themes</p>
            <h2 className="sec-heading">Shopify themes built to surprise and delight your customers</h2>
            <p className="sec-desc">
              Get set up quickly using our custom built layouts, or let your imagination
              run free with a wide selection of flexible sections and features.
            </p>
          </R>

          <div className="tabs">
            {families.map((f) => (
              <button key={f} className={`tab ${tab === f ? "on" : ""}`} onClick={() => setTab(f)}>{f}</button>
            ))}
          </div>

          <div className="theme-list">
            {list.map((t, i) => (
              <R key={t.name} d={i * 60}>
                <a href={t.url} target="_blank" rel="noreferrer" className={`theme-row ${i % 2 === 1 ? "theme-row--flip" : ""}`}>
                  <div className="theme-row-img">
                    <img src={t.img} alt={t.name} loading="lazy" />
                  </div>
                  <div className="theme-row-body">
                    <span className="theme-row-family">{t.family}</span>
                    <h3>{t.name}</h3>
                    <span className="theme-row-tag">{t.tag}</span>
                    <p>{t.desc}</p>
                    <span className="theme-row-price">{t.price}</span>
                  </div>
                </a>
              </R>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="w">
          <R>
            <blockquote className="big-quote">
              <p>&ldquo;We launched a complete redesign in four days. Mobile revenue jumped 35% in month one. The theme quality feels enterprise-grade.&rdquo;</p>
              <footer>
                <strong>Priya Sharma</strong>
                <span>eCommerce Manager, StyleCraft</span>
              </footer>
            </blockquote>
          </R>
        </div>
      </section>

      <section className="features-section" id="about">
        <div className="w">
          <R>
            <p className="sec-label">Why Choose Us</p>
            <h2 className="sec-heading">Everything you need to <em>succeed</em></h2>
            <p className="sec-desc">
              Our themes offer a clean codebase for seamless customization,
              comprehensive documentation, and expert support.
            </p>
          </R>
          <div className="feat-grid">
            {[
              ["Lightning Speed", "Every theme scores 90+ on Google PageSpeed. Your store loads in under 3 seconds."],
              ["Conversion Optimized", "Smart checkout flows, trust signals, and product grids that turn browsers into buyers."],
              ["Fully Customizable", "No coding required. Drag-and-drop editor with 50+ section types and endless combinations."],
              ["Responsive Design", "Pixel-perfect on every device — desktop, tablet, and mobile — right out of the box."],
            ].map(([title, desc], i) => (
              <R key={title} d={i * 80}>
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

      <section className="cta-section">
        <div className="w">
          <R>
            <div className="cta-box">
              <h2>Explore our themes</h2>
              <p>Infinitely flexible and loaded with powerful features, our themes offer endless possibilities to take your brand to the next level.</p>
              <a href="#themes" className="btn-main">Shop our themes</a>
            </div>
          </R>
        </div>
      </section>

      <footer className="footer">
        <div className="w footer-inner">
          <div className="footer-brand">
            <strong>Pixel Templates</strong>
            <p>Premium Shopify themes for modern commerce. Our products are used and enjoyed by thousands of merchants worldwide.</p>
          </div>
          <div className="footer-cols">
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
              <a href="#top">Support</a>
            </div>
          </div>
        </div>
        <div className="w footer-bottom">
          <span>&copy; 2026 Pixel Templates. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
