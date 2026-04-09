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
  { brand: "KOHLER", desc: "Web design + Shopify development for a premium collection of home products", img: allThemeImages[0] },
  { brand: "SMASH FOODS", desc: "Web design + Shopify development for a deliciously nutritious food brand", img: allThemeImages[1] },
  { brand: "LUMAR ACTIVE", desc: "Web development + CRO for a high performance surfwear brand", img: allThemeImages[2] },
  { brand: "VYBRANCE LABS", desc: "Web design + Shopify development for a performance supplement brand", img: allThemeImages[3] },
  { brand: "COURTING", desc: "Web design + Shopify development for a contemporary tennis fashion brand", img: allThemeImages[4] },
  { brand: "FREDERICK BENJAMIN", desc: "Web design + Shopify development for a natural grooming brand", img: allThemeImages[5] },
];

const services = [
  "New Brand Launches", "Store Overhauls", "Shopify Theme Customization",
  "Shopify Migration", "Landing Page Design & Development",
  "Product Page Optimization", "Conversion Rate Optimization", "Ongoing Growth Support",
];

const industries = [
  { label: "Health & Wellness", desc: "Customized Shopify themes with ongoing conversion refinement and iterative landing page development.", img: allThemeImages[6] },
  { label: "Fashion & Apparel", desc: "Visual identity and e-commerce design systems for eco-friendly marketplaces and activewear brands.", img: allThemeImages[7] },
  { label: "Beauty & Personal Care", desc: "Segmented landing experiences aligned to distinct customer personas for grooming and fragrance brands.", img: allThemeImages[8] },
  { label: "Food & Beverage", desc: "Debut Shopify storefronts for CPG brands, translating founder-led visions into scalable platforms.", img: allThemeImages[9] },
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Rev({ children, className = "", delay = 0 }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
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


export default function DigitalFlagship() {
  const [wordIdx, setWordIdx] = useState(0);
  const stripRef = useParallax();

  useEffect(() => {
    const t = setInterval(() => setWordIdx((i) => (i + 1) % heroWords.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="df">

      <nav className="df-nav">
        <div className="wrap df-nav-inner">
          <Link to="/" className="df-logo">Pixel Templates</Link>
          <div className="df-nav-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#cta">Insights</a>
          </div>
          <a href="#cta" className="df-nav-cta">Work With Us</a>
        </div>
      </nav>

      <header className="df-hero">
        <div className="wrap df-hero-center">
          <span className="df-hero-small">BUILT FOR</span>
          <h1 className="df-hero-word" key={wordIdx}>{heroWords[wordIdx]}</h1>
          <a href="#work" className="df-hero-btn">Work With Us</a>
        </div>
        <div className="wrap df-hero-desc">
          <Rev>
            <p>
              We launch engaging ecommerce flagship experiences for brands shaping
              what's next, from emerging consumer startups to billion dollar enterprises.
            </p>
          </Rev>
        </div>
      </header>

      <section className="df-work" id="work">
        <div className="wrap">
          <Rev><p className="df-label">Selected Work</p></Rev>
        </div>
        <div className="df-port-grid wrap">
          {portfolio.map((item, i) => (
            <Rev key={item.brand} delay={i * 80}>
              <PortfolioCard item={item} />
            </Rev>
          ))}
        </div>
      </section>

      <section className="df-services" id="services">
        <div className="wrap">
          <Rev>
            <h2 className="df-heading">
              Helping you <span>Rise above</span> the current
            </h2>
          </Rev>
          <Rev delay={60}>
            <p className="df-sub">
              From initial strategy to launch and ongoing refinement, we design
              and develop ecommerce storefronts built to lead, evolve, and move
              with your business.
            </p>
          </Rev>
          <Rev delay={120}>
            <div className="df-tags">
              {services.map((s) => <span key={s} className="df-tag">{s}</span>)}
            </div>
          </Rev>
          <Rev delay={180}>
            <a href="#cta" className="df-text-link">Explore Services &rarr;</a>
          </Rev>
        </div>
      </section>

      <section className="df-strip">
        <div className="df-strip-track" ref={stripRef}>
          {[...allThemeImages, ...allThemeImages].map((src, i) => (
            <div key={i} className="df-strip-img" style={{ backgroundImage: `url(${src})` }} />
          ))}
        </div>
      </section>

      <section className="df-about" id="about">
        <div className="wrap">
          <Rev>
            <h2 className="df-heading">
              Scaling the <span>next wave</span> of consumer brands
            </h2>
            <p className="df-sub">Select partners and brands we've built alongside</p>
          </Rev>
          <div className="df-ind-grid">
            {industries.map((ind, i) => (
              <Rev key={ind.label} delay={i * 100}>
                <article className="df-ind-card">
                  <div className="df-ind-img" style={{ backgroundImage: `url(${ind.img})` }} />
                  <div className="df-ind-body">
                    <span className="df-ind-pill">{ind.label}</span>
                    <p>{ind.desc}</p>
                  </div>
                </article>
              </Rev>
            ))}
          </div>
        </div>
      </section>

      <section className="df-cta" id="cta">
        <div className="wrap">
          <Rev>
            <div className="df-cta-box">
              <h2><span>Elevate your</span> digital flagship</h2>
              <a href="mailto:hello@webibazaar.com" className="df-hero-btn">Get In Touch</a>
            </div>
          </Rev>
        </div>
      </section>

      <footer className="df-footer">
        <div className="wrap df-footer-inner">
          <div className="df-footer-col">
            <h4>Services</h4>
            <a href="#services">Themelift</a>
            <a href="#work">Work</a>
          </div>
          <div className="df-footer-col">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#cta">Contact</a>
          </div>
          <div className="df-footer-col">
            <h4>Legal</h4>
            <a href="#cta">Privacy Policy</a>
            <a href="#cta">Terms of Service</a>
          </div>
          <div className="df-footer-col">
            <h4>Navigate</h4>
            <Link to="/">Home</Link>
            <a href="#work">Portfolio</a>
          </div>
        </div>
        <div className="wrap df-footer-bottom">
          <p>&copy; 2026 Pixel Templates Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function PortfolioCard({ item }) {
  const ref = useParallax();
  return (
    <article className="df-port-card" ref={ref}>
      <div className="df-port-img" style={{ backgroundImage: `url(${item.img})` }} />
      <div className="df-port-over">
        <h3>{item.brand}</h3>
        <p>{item.desc}</p>
      </div>
    </article>
  );
}
