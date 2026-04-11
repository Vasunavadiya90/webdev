import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function TestimonialCard({ quote, name, role, company, className = "" }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-gradient-to-br from-white via-[#fafaf8] to-emerald-50/30 p-8 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.12)] sm:p-12 ${className}`}
    >
      <Quote
        className="absolute right-8 top-8 h-14 w-14 text-emerald-900/[0.06] sm:right-10 sm:top-10 sm:h-20 sm:w-20"
        strokeWidth={1}
        aria-hidden
      />
      <blockquote className="relative font-display text-2xl font-normal leading-snug tracking-tight text-neutral-900 sm:text-3xl lg:text-[2rem] lg:leading-snug">
        “{quote}”
      </blockquote>
      <figcaption className="relative mt-8 border-t border-neutral-200/80 pt-8 font-sans text-sm text-neutral-600 sm:text-base">
        <span className="font-semibold text-neutral-900">{name}</span>
        <span className="text-neutral-400"> · </span>
        <span>{role}</span>
        {company ? (
          <>
            <span className="text-neutral-400"> · </span>
            <span className="text-neutral-700">{company}</span>
          </>
        ) : null}
      </figcaption>
    </motion.figure>
  );
}
