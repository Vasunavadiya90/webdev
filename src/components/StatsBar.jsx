import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 9, suffix: "+", label: "Premium Themes" },
  { value: 10000, suffix: "+", label: "Merchants Worldwide" },
  { value: 4.9, suffix: "★", label: "Average Rating" },
  { value: 100, suffix: "%", label: "Shopify OS 2.0 Ready" },
];

function CountUp({ target, suffix, duration = 1800 }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const isFloat = !Number.isInteger(target);
    const start = performance.now();
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setDisplay(
        isFloat
          ? current.toFixed(1)
          : target >= 1000
          ? Math.round(current).toLocaleString()
          : Math.round(current).toString(),
      );
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-[#1A1A2E] py-16 sm:py-20">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center"
            >
              <p className="font-display text-[clamp(2.5rem,6vw,4rem)] font-normal leading-none tracking-tight text-white">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 font-sans text-sm font-medium uppercase tracking-wider text-white/50 sm:text-[0.95rem]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
