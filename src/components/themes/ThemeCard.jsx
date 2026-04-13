import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ThemeImage from "./ThemeImage.jsx";

export default function ThemeCard({ theme, index, onSelect }) {
  const eager = index < 4;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-32px" }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.35), ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <button
        type="button"
        onClick={() => onSelect(theme.slug)}
        className="group flex h-full w-full flex-col rounded-2xl border border-neutral-200/90 bg-white p-2.5 text-left shadow-[0_1px_3px_rgba(15,23,42,0.06)] outline-none ring-black/[0.03] transition duration-300 hover:-translate-y-1 hover:border-neutral-300/90 hover:shadow-[0_20px_50px_-24px_rgba(15,23,42,0.18)] focus-visible:ring-2 focus-visible:ring-neutral-900/20 sm:p-3"
      >
        <div className="relative overflow-hidden rounded-xl">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-neutral-100">
            <ThemeImage
              src={theme.cardImage}
              alt={theme.heroAlt}
              eager={eager}
              fill
              roundedClass="rounded-xl"
              className="[&>img]:duration-500 [&>img]:ease-out motion-reduce:[&>img]:transition-none group-hover:[&>img]:scale-[1.06]"
            />
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col px-1 pb-1 pt-4 sm:px-1.5 sm:pt-5">
          <span className="inline-flex w-fit rounded-full border border-neutral-200/90 bg-neutral-50 px-2.5 py-0.5 font-sans text-[11px] font-semibold uppercase tracking-wide text-neutral-600">
            {theme.tag}
          </span>
          <h2 className="mt-3 font-sans text-xl font-semibold tracking-tight text-neutral-950 sm:text-[1.35rem]">
            {theme.name}
          </h2>
          <p className="mt-2 line-clamp-2 flex-1 font-sans text-sm leading-relaxed text-neutral-600 sm:text-[0.95rem]">
            {theme.cardSummary}
          </p>
          <span className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 px-4 py-3 font-sans text-sm font-semibold text-white transition group-hover:bg-neutral-800 sm:w-auto sm:px-5">
            Explore Theme
            <ArrowUpRight className="h-4 w-4 opacity-90 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} aria-hidden />
          </span>
        </div>
      </button>
    </motion.div>
  );
}
