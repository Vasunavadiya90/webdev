import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { ArrowRight } from "lucide-react";

function BigStat({ value, label, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => c.stop();
  }, [inView, value]);

  return (
    <div ref={ref} className="rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-center backdrop-blur-sm">
      <p className="font-display text-4xl text-white sm:text-5xl">
        {n}
        {suffix}
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
        {label}
      </p>
    </div>
  );
}

export default function ConversionSection() {
  return (
    <section id="convert" className="bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
            Ready when you are
          </p>
          <h2 className="mt-5 font-display text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
            Launch a store that feels like a flagship
          </h2>
          <p className="mt-6 text-lg text-neutral-400">
            Start a trial, import a demo, and publish — most teams go live in days, not months.
          </p>
          <a
            href="#top"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-neutral-950 shadow-lg transition hover:scale-[1.03] hover:bg-neutral-100"
          >
            Get started
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-20 grid gap-5 sm:grid-cols-3"
        >
          <BigStat value={31} suffix="k+" label="Active installs" />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-center backdrop-blur-sm"
          >
            <p className="font-display text-4xl text-white sm:text-5xl">4.9</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Avg. rating
            </p>
          </motion.div>
          <BigStat value={48} suffix="h" label="Median launch" />
        </motion.div>
      </div>
    </section>
  );
}
