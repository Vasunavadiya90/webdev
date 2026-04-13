import { motion } from "framer-motion";
import { WEBIBAZAAR_THEMES } from "../data/themes.js";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

export default function SupportSection() {
  const pillThemes = WEBIBAZAAR_THEMES.filter((t) => t.name !== "Sitar");

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Left — copy */}
          <motion.div {...fadeUp}>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6B6B6B]">
              Expert Support
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,4vw,2.75rem)] font-normal leading-[1.12] tracking-[-0.025em] text-[#1A1A1A]">
              Personalized customer support, whenever you need it
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-[#6B6B6B] sm:text-[1.05rem]">
              We offer quick and expert support — from setting up your shop to ensuring it runs smoothly. Our friendly
              team of technical experts will be here to help!
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {pillThemes.map((t) => (
                <a
                  key={t.id}
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center rounded-full border border-[#1A1A2E] px-4 py-2 font-sans text-sm font-semibold text-[#1A1A2E] transition hover:bg-[#1A1A2E] hover:text-white"
                >
                  {t.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — illustration placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-neutral-200/80 bg-[#F5F5F0] shadow-sm" style={{ aspectRatio: "4/3" }}>
              <div className="flex flex-col items-center gap-4 text-center px-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1A1A2E] text-white text-3xl">
                  💬
                </div>
                <p className="font-display text-xl text-[#1A1A1A]">Support Illustration</p>
                <p className="font-sans text-sm text-[#6B6B6B]">
                  Real people, real answers — from setup to scaling.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
