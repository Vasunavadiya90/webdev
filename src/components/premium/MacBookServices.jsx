import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * One slide per service — human photo + title. Cycles continuously inside the Mac screen.
 */
const SERVICE_SLIDES = [
  {
    title: "Shopify Web Design Service",
    tag: "Design",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&h=1120&fit=crop&q=80",
  },
  {
    title: "Shopify Theme Customization Service",
    tag: "Customize",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&h=1120&fit=crop&q=80",
  },
  {
    title: "Shopify Store Setup Service",
    tag: "Launch",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=1120&fit=crop&q=80",
  },
  {
    title: "Shopify Speed & Performance Optimization Service",
    tag: "Performance",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=1120&fit=crop&q=80",
  },
  {
    title: "Shopify Support & Maintenance Service",
    tag: "Care",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&h=1120&fit=crop&q=80",
  },
];

const INTERVAL_MS = 4800;

export default function MacBookServices() {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const t = setInterval(
      () => setIndex((p) => (p + 1) % SERVICE_SLIDES.length),
      INTERVAL_MS
    );
    return () => clearInterval(t);
  }, [reduceMotion]);

  const slide = SERVICE_SLIDES[index];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto w-full max-w-[min(100%,520px)] sm:max-w-[560px] lg:max-w-[min(100%,640px)]"
    >
      <div className="relative">
        {/* Lid + single screen window */}
        <div className="rounded-t-[1.35rem] border border-neutral-300/70 bg-gradient-to-b from-neutral-100 via-neutral-50 to-neutral-200/90 p-[10px] pb-0 shadow-[0_28px_64px_-18px_rgba(15,23,42,0.18)]">
          <div className="relative overflow-hidden rounded-t-lg bg-neutral-950 ring-1 ring-black/40">
            <div className="relative z-20 flex h-7 items-center justify-center border-b border-white/5 bg-neutral-950">
              <div className="h-1.5 w-16 rounded-full bg-neutral-800" />
            </div>

            {/* One service visible — full-bleed portrait + title */}
            <div
              className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-900 sm:aspect-[16/10]"
              role="region"
              aria-roledescription="carousel"
              aria-label="Shopify services, one at a time"
              aria-live="polite"
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={slide.title}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-25%", opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={slide.image}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b8d4c8]">
                      {slide.tag}
                    </p>
                    <p className="mt-2 font-display text-lg leading-snug tracking-tight text-white sm:text-xl lg:text-2xl">
                      {slide.title}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="relative z-0 -mt-px">
          <div className="h-[14px] rounded-b-[1.25rem] bg-gradient-to-b from-neutral-300 via-neutral-200 to-neutral-300 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.2)]" />
          <div className="mx-auto -mt-1 h-2 w-[88%] rounded-b-xl bg-neutral-400/80 blur-[1px]" />
        </div>

        {/* Progress dots — which service is on screen */}
        <div className="mt-4 flex justify-center gap-2 sm:mt-5">
          {SERVICE_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show service ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-7 bg-neutral-800" : "w-1.5 bg-neutral-300/90 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
