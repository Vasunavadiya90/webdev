import { motion } from "framer-motion";

export default function ProcessTimeline({ steps, className = "" }) {
  return (
    <ol className={`relative space-y-0 ${className}`}>
      <div
        className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-emerald-200/80 via-neutral-200 to-neutral-200 sm:left-5"
        aria-hidden
      />
      {steps.map((s, i) => (
        <motion.li
          key={s.step}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: i * 0.06 }}
          className="relative flex gap-5 pb-12 pl-10 sm:gap-8 sm:pb-14 sm:pl-14"
        >
          <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-[#f5f5f3] font-sans text-xs font-bold text-neutral-800 shadow-sm sm:h-10 sm:w-10 sm:text-sm">
            {s.step}
          </span>
          <div className="min-w-0 flex-1 rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-sm sm:p-7">
            <h3 className="font-display text-xl tracking-tight text-neutral-950 sm:text-2xl">{s.title}</h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-neutral-600 sm:text-base">{s.description}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
