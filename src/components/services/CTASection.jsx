import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ctaGlow =
  "shadow-[0_0_0_1px_rgba(15,23,42,0.06),0_18px_48px_-12px_rgba(15,23,42,0.25)] transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.25),0_22px_56px_-10px_rgba(16,185,129,0.2),0_18px_48px_-12px_rgba(15,23,42,0.2)]";

export default function CTASection({
  eyebrow,
  title,
  body,
  primaryHref = "/#convert",
  primaryLabel = "Start a project",
  className = "",
}) {
  return (
    <section className={`relative overflow-hidden py-20 sm:py-24 lg:py-28 ${className}`}>
      <div className="absolute inset-0 bg-neutral-950" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_20%,rgba(52,211,153,0.12),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/90"
        >
          {eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-4 font-display text-3xl tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-neutral-300 sm:text-lg"
        >
          {body}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10"
        >
          <Link
            to={primaryHref}
            className={`inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-sans text-sm font-semibold text-neutral-950 sm:text-base ${ctaGlow}`}
          >
            {primaryLabel}
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
