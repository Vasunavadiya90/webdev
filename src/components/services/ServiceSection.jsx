import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const ctaClass =
  "group inline-flex items-center justify-center gap-2 rounded-full border border-neutral-900 bg-neutral-950 px-7 py-3.5 font-sans text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(52,211,153,0.4),0_12px_40px_-8px_rgba(52,211,153,0.25)] sm:px-8 sm:py-4 sm:text-base";

export default function ServiceSection({
  service,
  index,
  detailPath,
  className = "",
}) {
  const reverse = index % 2 === 1;

  return (
    <section
      className={`relative border-b border-neutral-200/50 py-20 sm:py-24 lg:py-28 ${index % 2 === 0 ? "bg-[#f5f5f3]" : "bg-[#f0f0ec]"} ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[min(55%,420px)] bg-gradient-to-r from-emerald-100/25 to-transparent opacity-80"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div
          className={`grid items-center gap-12 lg:gap-16 ${reverse ? "lg:grid-cols-[0.95fr_1.05fr]" : "lg:grid-cols-[1.05fr_0.95fr]"}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={reverse ? "lg:order-2" : ""}
          >
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.26em] text-neutral-500">
              {service.listEyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-neutral-950 sm:text-4xl lg:text-[2.65rem] lg:leading-tight">
              {service.fullTitle}
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-neutral-600 sm:text-lg">{service.painIntro}</p>
            <ul className="mt-8 space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex gap-3 font-sans text-sm leading-relaxed text-neutral-700 sm:text-base">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100/80 text-emerald-800">
                    <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-l-2 border-neutral-900/15 pl-4 font-sans text-sm italic leading-relaxed text-neutral-500 sm:text-[0.95rem]">
              {service.processPreview}
            </p>
            <div className="mt-10">
              <Link to={detailPath} className={ctaClass}>
                Explore Service
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-5 sm:w-5" strokeWidth={2} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className={reverse ? "lg:order-1" : ""}
          >
            <div className="overflow-hidden rounded-3xl border border-neutral-200/90 bg-white p-3 shadow-[0_28px_70px_-32px_rgba(15,23,42,0.15)] sm:p-4">
              <img
                src={service.heroImage}
                alt=""
                className="aspect-[4/3] w-full rounded-2xl object-cover sm:aspect-[16/11]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
