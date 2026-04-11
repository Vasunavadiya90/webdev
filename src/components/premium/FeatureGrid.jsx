import { motion } from "framer-motion";
import {
  Zap,
  LayoutGrid,
  Smartphone,
  ShoppingBag,
  Gauge,
  Headphones,
} from "lucide-react";

const items = [
  {
    icon: Smartphone,
    title: "Mobile-first UX",
    desc: "Touch targets, thumb zones, and checkout flows tuned for the majority of your traffic.",
  },
  {
    icon: LayoutGrid,
    title: "Section library",
    desc: "Editorial layouts, lookbooks, and storytelling blocks you can remix without code.",
  },
  {
    icon: Zap,
    title: "Performance budget",
    desc: "Lean scripts, lazy media, and Lighthouse-minded defaults baked into every preset.",
  },
  {
    icon: ShoppingBag,
    title: "Merchandising",
    desc: "Upsells, bundles, and urgency done tastefully — conversion without clutter.",
  },
  {
    icon: Gauge,
    title: "Core Web Vitals",
    desc: "CLS, LCP, and INP considered from the first frame — not patched in later.",
  },
  {
    icon: Headphones,
    title: "Human support",
    desc: "Real answers from people who ship stores, not bots reading a script.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const itemVar = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FeatureGrid() {
  return (
    <section id="features" className="bg-neutral-50 py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Capabilities
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-neutral-950 sm:text-5xl">
            Everything your flagship store expects
          </h2>
          <p className="mt-5 text-lg text-neutral-600">
            A cohesive system — design, engineering, and CRO working as one.
          </p>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.li
              key={title}
              variants={itemVar}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className="group rounded-3xl border border-neutral-200/90 bg-white p-8 shadow-sm ring-1 ring-black/[0.03]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-200/80 bg-neutral-50 text-neutral-900 transition group-hover:border-neutral-300 group-hover:bg-white">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-neutral-950">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{desc}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
