import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

/**
 * @param {{
 *   eyebrow: string;
 *   title: string;
 *   description: string;
 *   imageSrc: string;
 *   imageAlt: string;
 *   reverse?: boolean;
 *   ctaLabel?: string;
 *   ctaHref?: string;
 *   id?: string;
 * }} props
 */
export default function ShowcaseSection({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  ctaLabel = "Explore preset",
  ctaHref = "#convert",
  id,
}) {
  const text = (
    <motion.div {...fadeUp} className="flex flex-col justify-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl tracking-tight text-neutral-950 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
        {title}
      </h2>
      <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-600">{description}</p>
      <a
        href={ctaHref}
        className="group mt-10 inline-flex w-max items-center gap-2 text-sm font-semibold text-neutral-950"
      >
        {ctaLabel}
        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </motion.div>
  );

  const image = (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="overflow-hidden rounded-3xl border border-neutral-200/90 bg-neutral-100 shadow-xl shadow-neutral-900/8 ring-1 ring-black/5">
        <motion.img
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          src={imageSrc}
          alt={imageAlt}
          className="aspect-[4/3] w-full object-cover sm:aspect-[5/4]"
        />
      </div>
    </motion.div>
  );

  return (
    <section id={id} className="bg-white py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {reverse ? (
            <>
              {image}
              {text}
            </>
          ) : (
            <>
              {text}
              {image}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
