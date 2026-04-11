import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";

const heroWords = ["GROWTH", "BRANDS", "IMPACT", "SCALE"];

const allThemeImages = [
  "https://cdn.shopify.com/theme-store/45xprqwwhl4xif8uzu03clj0o8f2.jpg?width=684",
  "https://cdn.shopify.com/theme-store/1fetryjlfmoa0gc8a5lsab1ieo0r.jpg?width=684",
  "https://cdn.shopify.com/theme-store/1k1vhzjdn87ipqva1x6rgkmusq5g.jpg?width=684",
  "https://cdn.shopify.com/theme-store/2zrnb35tivgouznwvnhf3l3g3470.jpg?width=684",
  "https://cdn.shopify.com/theme-store/4p5vlo5npgksbxengfxx9szuhke3.jpg?width=684",
  "https://cdn.shopify.com/theme-store/53z6lp3bvvzs1broi7t32r9akde4.jpg?width=684",
  "https://cdn.shopify.com/theme-store/6fqa9ot96z9le1liww5pv3a9x8ib.jpg?width=684",
  "https://cdn.shopify.com/theme-store/76fvn2zgq39zp7bo62aekxgv4lln.jpg?width=684",
  "https://cdn.shopify.com/theme-store/9cnoepf8p8bjc4n1iam0x9zlrvwe.jpg?width=684",
  "https://cdn.shopify.com/theme-store/bf5fwjz2ythqoopz8h9rgk3o9r0a.jpg?width=684",
  "https://cdn.shopify.com/theme-store/cm89n16mgbb3ujtdzciw1ytnxk14.jpg?width=684",
  "https://cdn.shopify.com/theme-store/f9gnuq00d8njuc7ddt3bgvgohv8w.jpg?width=684",
];

const portfolio = [
  { brand: "KOHLER", desc: "Web design + Shopify development for premium home products", img: allThemeImages[0] },
  { brand: "SMASH FOODS", desc: "Full Shopify build for a nutritious food brand", img: allThemeImages[1] },
  { brand: "LUMAR ACTIVE", desc: "CRO + development for high-performance surfwear", img: allThemeImages[2] },
  { brand: "VYBRANCE LABS", desc: "Design + Shopify for a supplement brand", img: allThemeImages[3] },
  { brand: "COURTING", desc: "Contemporary e-commerce for tennis fashion", img: allThemeImages[4] },
  { brand: "FREDERICK BENJAMIN", desc: "Full brand experience for natural grooming", img: allThemeImages[5] },
];

const services = [
  { title: "Brand Launches", desc: "From zero to launch-ready in weeks", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg> },
  { title: "Store Overhauls", desc: "Reimagine your digital storefront", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg> },
  { title: "Theme Development", desc: "Custom Shopify themes built to convert", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
  { title: "Migration", desc: "Seamless platform transitions", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> },
  { title: "Landing Pages", desc: "High-converting page design & build", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg> },
  { title: "CRO", desc: "Data-driven conversion optimization", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg> },
];

const stats = [
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 4.2, suffix: "x", label: "Avg Revenue Lift" },
  { value: 12, suffix: "", label: "Countries Served" },
];

const industries = [
  { label: "Health & Wellness", desc: "Customized Shopify themes with ongoing conversion refinement and iterative landing page development.", img: allThemeImages[6] },
  { label: "Fashion & Apparel", desc: "Visual identity and e-commerce design systems for eco-friendly marketplaces and activewear brands.", img: allThemeImages[7] },
  { label: "Beauty & Personal Care", desc: "Segmented landing experiences aligned to distinct customer personas for grooming and fragrance brands.", img: allThemeImages[8] },
  { label: "Food & Beverage", desc: "Debut Shopify storefronts for CPG brands, translating founder-led visions into scalable platforms.", img: allThemeImages[9] },
];

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

function Rev({ children, className = "", delay = 0 }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`rv ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function useParallax() {
  const ref = useRef(null);
  const onScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = (vh - rect.top) / (vh + rect.height);
    el.style.setProperty("--px", Math.min(Math.max(progress, 0), 1).toFixed(3));
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);
  return ref;
}

function Counter({ target, suffix = "" }) {
  const ref = useRef(null);
  const [val, setVal] = useState("0");
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.unobserve(el);
      const dur = 1600;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 4);
        setVal((target * ease).toFixed(String(target).includes(".") ? 1 : 0));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export default function DigitalFlagship() {
  const [wordIdx, setWordIdx] = useState(0);
  const stripRef = useParallax();

  useEffect(() => {
    const t = setInterval(() => setWordIdx((i) => (i + 1) % heroWords.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="site">
      <CursorGlow />

      <nav className="nav">
        <div className="w nav-inner">
          <Link to="/" className="nav-logo">
            <span className="nav-logo-icon" aria-hidden="true">
              <span /><span /><span /><span />
            </span>
            <span className="nav-logo-text">Digital<br/>Flagship</span>
          </Link>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#industries">About</a>
            <a href="#cta">Insights</a>
          </div>
          <a href="#cta" className="nav-cta">Work With Us</a>
        </div>
      </nav>

      <header className="hero hero--df">
        <div className="w hero-inner hero-inner--df">
          <p className="df-hero-kicker">Built for</p>
          <h1 className="df-hero-word" key={wordIdx}>{heroWords[wordIdx]}</h1>
          <p className="hero-desc">
            We launch engaging ecommerce flagship experiences for brands shaping
            what&rsquo;s next — from emerging startups to billion-dollar enterprises.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn-main">View Our Work</a>
            <a href="#services" className="btn-outline">Explore Services</a>
          </div>
        </div>
      </header>

      <section className="stats-bar">
        <div className="w stats-row">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <strong><Counter target={s.value} suffix={s.suffix} /></strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="w">
          <Rev>
            <p className="sec-label">Selected Work</p>
            <h2 className="sec-heading">Crafting digital <em>experiences</em> that convert</h2>
          </Rev>
          <div className="work-list">
            {portfolio.map((item, i) => (
              <Rev key={item.brand} delay={i * 70}>
                <article className={`work-row ${i % 2 === 1 ? "work-row--flip" : ""}`}>
                  <div className="work-row-img" style={{ backgroundImage: `url(${item.img})` }} />
                  <div className="work-row-body">
                    <span className="work-row-tag">Case Study</span>
                    <h3>{item.brand}</h3>
                    <p>{item.desc}</p>
                    <span className="work-row-link">View Project →</span>
                  </div>
                </article>
              </Rev>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-section" id="services">
        <div className="w">
          <Rev>
            <p className="sec-label">What We Do</p>
            <h2 className="sec-heading">Helping you <em>rise above</em> the noise</h2>
            <p className="sec-desc">
              From initial strategy to launch and ongoing refinement — we design
              and develop ecommerce storefronts built to lead, evolve, and move
              with your business.
            </p>
          </Rev>
          <div className="svc-grid">
            {services.map((s, i) => (
              <Rev key={s.title} delay={i * 60}>
                <div className="svc-card">
                  <div className="svc-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Rev>
            ))}
          </div>
        </div>
      </section>

      <section className="strip-section">
        <div className="strip-track" ref={stripRef}>
          {[...allThemeImages, ...allThemeImages].map((src, i) => (
            <div key={i} className="strip-img" style={{ backgroundImage: `url(${src})` }} />
          ))}
        </div>
      </section>

      <section className="ind-section" id="industries">
        <div className="w">
          <Rev>
            <p className="sec-label">Industries</p>
            <h2 className="sec-heading">Scaling the <em>next wave</em> of consumer brands</h2>
          </Rev>
          <div className="ind-grid">
            {industries.map((ind, i) => (
              <Rev key={ind.label} delay={i * 80}>
                <article className="ind-card">
                  <div className="ind-img" style={{ backgroundImage: `url(${ind.img})` }} />
                  <div className="ind-body">
                    <span className="ind-pill">{ind.label}</span>
                    <p>{ind.desc}</p>
                  </div>
                </article>
              </Rev>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="w">
          <Rev>
            <blockquote className="big-quote">
              <p>&ldquo;Pixel Templates transformed our online presence. The flagship experience they built increased conversions by 42% in the first quarter.&rdquo;</p>
              <footer>
                <strong>Daniel Kim</strong>
                <span>Founder, Vybrance Labs</span>
              </footer>
            </blockquote>
          </Rev>
        </div>
      </section>

      <section className="cta-section" id="cta">
        <div className="w">
          <Rev>
            <div className="cta-box">
              <h2>Ready to elevate your digital flagship?</h2>
              <p>Join 200+ brands who trust us to build their ecommerce experiences.</p>
              <a href="mailto:hello@webibazaar.com" className="btn-main btn-main--inv">Get In Touch</a>
            </div>
          </Rev>
        </div>
      </section>

      <footer className="footer">
        <div className="w footer-inner">
          <div className="footer-brand">
            <strong>Pixel Templates</strong>
            <p>Premium ecommerce experiences for modern brands.</p>
          </div>
          <div className="footer-cols">
            <div>
              <h5>Services</h5>
              <a href="#services">Theme Dev</a>
              <a href="#services">Overhauls</a>
              <a href="#work">Portfolio</a>
            </div>
            <div>
              <h5>Company</h5>
              <a href="#industries">Industries</a>
              <a href="#cta">Contact</a>
              <Link to="/">Home</Link>
            </div>
          </div>
        </div>
        <div className="w footer-bottom">
          <span>&copy; 2026 Pixel Templates Studio. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

