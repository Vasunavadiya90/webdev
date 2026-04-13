import { motion } from "framer-motion";
import ThemeRow from "./ThemeRow.jsx";
import { WEBIBAZAAR_THEMES } from "../data/themes.js";

export default function ThemesSection() {
  return (
    <section id="themes" className="scroll-mt-24 bg-[#F5F5F0] py-8 sm:py-12">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-center"
        >
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6B6B6B]">
            9 premium themes
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.75rem)] font-normal tracking-tight text-[#1A1A1A]">
            Find your perfect storefront
          </h2>
        </motion.div>
        {WEBIBAZAAR_THEMES.map((theme, index) => (
          <ThemeRow key={theme.id} theme={theme} index={index} />
        ))}
      </div>
    </section>
  );
}
