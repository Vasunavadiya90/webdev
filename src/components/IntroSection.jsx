import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function IntroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F0] py-20 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute -left-32 top-0 h-[min(70vh,480px)] w-[min(80vw,480px)] rounded-full bg-emerald-200/20 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8 lg:px-10">
        <motion.div {...fadeUp}>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6B6B6B]">
            Our Collection
          </p>
          <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.025em] text-[#1A1A1A]">
            Create the ultimate ecommerce experience
            <span className="mt-1 block text-[#1A1A1A]/70"> for your Shopify store</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-[#6B6B6B] sm:text-lg">
            Explore our collection of Premium Shopify Themes — fully customizable, OS&nbsp;2.0 ready, and always
            beautiful.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["Mobile First", "OS 2.0 Ready", "Fast Loading", "Premium Support"].map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-full border border-[#1A1A2E]/20 bg-white px-4 py-2 font-sans text-xs font-semibold tracking-wide text-[#1A1A2E]"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
