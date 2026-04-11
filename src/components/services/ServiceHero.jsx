import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ctaClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-8 py-3.5 font-sans text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_16px_40px_-12px_rgba(0,0,0,0.35)] transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(52,211,153,0.35),0_20px_50px_-8px_rgba(52,211,153,0.18),0_16px_40px_-12px_rgba(0,0,0,0.3)] sm:py-4 sm:text-base";

export default function ServiceHero({
  kicker,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  ctaHref = "/#convert",
  ctaLabel = "Book a discovery call",
}) {
  return (
    <section className="relative border-b border-neutral-200/60 bg-[#f5f5f3] pb-16 pt-[calc(76px+3rem)] sm:pb-20 sm:pt-[calc(80px+4rem)] md:pt-[calc(96px+4rem)] lg:pb-24 lg:pt-[calc(100px+4.5rem)]">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[min(100%,560px)] bg-gradient-to-r from-emerald-100/35 via-transparent to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500"
            >
              {kicker}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.04 }}
              className="mt-4 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-normal leading-[1.05] tracking-tight text-neutral-950"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 max-w-xl font-sans text-base leading-relaxed text-neutral-600 sm:text-lg"
            >
              {subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="mt-10"
            >
              <Link to={ctaHref} className={ctaClass}>
                {ctaLabel}
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} aria-hidden />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-neutral-200/90 bg-white shadow-[0_28px_70px_-28px_rgba(15,23,42,0.18)] ring-1 ring-black/[0.03]">
              <img src={imageSrc} alt={imageAlt} className="aspect-[4/3] w-full object-cover sm:aspect-[5/4]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
