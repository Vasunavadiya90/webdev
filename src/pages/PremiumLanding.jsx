import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/premium/Navbar.jsx";
import Hero from "../components/premium/Hero.jsx";
import LogoMarquee from "../components/premium/LogoMarquee.jsx";
import ShowcaseSection from "../components/premium/ShowcaseSection.jsx";
import FeatureGrid from "../components/premium/FeatureGrid.jsx";
import Testimonials from "../components/premium/Testimonials.jsx";
import ConversionSection from "../components/premium/ConversionSection.jsx";
import FullBleedMedia from "../components/premium/FullBleedMedia.jsx";
import Footer from "../components/premium/Footer.jsx";

const IMG_A =
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=900&fit=crop&q=80";
const IMG_B =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=900&fit=crop&q=80";
const IMG_C =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=900&fit=crop&q=80";
const IMG_WIDE =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=2000&h=900&fit=crop&q=80";

export default function PremiumLanding() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const t = requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return () => cancelAnimationFrame(t);
    }
  }, [location.hash, location.pathname]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-white"
    >
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <ShowcaseSection
          id="showcase"
          eyebrow="Wonder fashion"
          title="Editorial layouts that sell the collection."
          description="Lookbooks, size guides, and shoppable stories — structured so shoppers discover more per visit without feeling pushed."
          imageSrc={IMG_A}
          imageAlt="Fashion storefront layout"
        />
        <ShowcaseSection
          eyebrow="Wonder interior"
          title="Built for catalogs that scale."
          description="Marketplace-grade discovery, filters that stay fast, and PDPs that keep attention on the product — not the chrome."
          imageSrc={IMG_B}
          imageAlt="Interior commerce UI"
          reverse
        />
        <FullBleedMedia
          imageSrc={IMG_WIDE}
          imageAlt="Team collaborating on ecommerce"
          title="Your next flagship, shipped with confidence"
        />
        <FeatureGrid />
        <ShowcaseSection
          eyebrow="Wonder wellness"
          title="Soft motion. Hard results."
          description="Micro-interactions and scroll choreography that feel luxury-grade — while staying respectful of performance budgets."
          imageSrc={IMG_C}
          imageAlt="Wellness brand storefront"
        />
        <Testimonials />
        <ConversionSection />
      </main>
      <Footer />
    </motion.div>
  );
}
