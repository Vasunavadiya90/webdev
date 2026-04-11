import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/premium/Navbar.jsx";
import Footer from "../components/premium/Footer.jsx";
import ServiceSection from "../components/services/ServiceSection.jsx";
import StickyServiceCTA from "../components/services/StickyServiceCTA.jsx";
import { SERVICES } from "../data/services.js";

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-[#f5f5f3]"
    >
      <Navbar />
      <main>
        <section className="relative overflow-hidden border-b border-neutral-200/60 bg-[#f5f5f3] pb-16 pt-[calc(76px+3rem)] sm:pb-20 sm:pt-[calc(80px+4rem)] md:pt-[calc(96px+4rem)] lg:pb-24">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-[min(100%,520px)] bg-gradient-to-r from-emerald-100/30 to-transparent"
            aria-hidden
          />
          <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8 lg:px-10">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500"
            >
              Pixel Template · Services
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.55 }}
              className="mt-4 font-display text-[clamp(2.25rem,5.5vw,3.75rem)] font-normal leading-[1.05] tracking-tight text-neutral-950"
            >
              Shopify expertise, end to end.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-neutral-600 sm:text-lg"
            >
              Scroll through each capability — design, customization, launch, performance, and ongoing care. Every
              engagement is built for conversion, clarity, and long-term maintainability.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="mt-8"
            >
              <Link
                to="/#convert"
                className="font-sans text-sm font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-900"
              >
                View project retainers →
              </Link>
            </motion.div>
          </div>
        </section>

        {SERVICES.map((service, index) => (
          <ServiceSection
            key={service.slug}
            service={service}
            index={index}
            detailPath={`/services/${service.slug}`}
          />
        ))}
      </main>
      <Footer />
      <StickyServiceCTA />
    </motion.div>
  );
}
