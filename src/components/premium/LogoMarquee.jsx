import { motion } from "framer-motion";

const NAMES = [
  "Aurora",
  "Velour",
  "Nordic",
  "Lumen",
  "Maison",
  "Atlas",
  "Harbor",
  "Monolith",
  "Silk",
  "Root",
];

export default function LogoMarquee() {
  const row = [...NAMES, ...NAMES];
  return (
    <section className="border-y border-neutral-200/90 bg-neutral-50/80 py-10 backdrop-blur-sm">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
        Brands scaling with Pixel Template
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-neutral-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-neutral-50 to-transparent" />
        <motion.div
          className="flex w-max gap-16 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 42, ease: "linear", repeat: Infinity }}
        >
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-display text-2xl tracking-tight text-neutral-400 sm:text-3xl"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
