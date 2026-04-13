import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/premium/Navbar.jsx";
import Hero from "../components/premium/Hero.jsx";
import WonderHomeBody from "../components/premium/WonderHomeBody.jsx";
import Footer from "../components/WebibazaarFooter.jsx";

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
        <WonderHomeBody />
      </main>
      <Footer />
    </motion.div>
  );
}
