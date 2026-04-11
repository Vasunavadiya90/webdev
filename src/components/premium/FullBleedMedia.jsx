import { motion } from "framer-motion";

/**
 * Full-width showcase band — image or video feel (poster image).
 */
export default function FullBleedMedia({
  imageSrc,
  imageAlt = "",
  eyebrow = "Inside the theme",
  title = "Cinematic product storytelling",
}) {
  return (
    <section className="bg-neutral-950 py-1">
      <div className="mx-auto max-w-[100vw] px-0">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 z-20 px-6 pb-10 pt-24 sm:px-10 sm:pb-14 lg:px-16">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">
              {eyebrow}
            </p>
            <h3 className="mt-3 max-w-xl font-display text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h3>
          </div>
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            src={imageSrc}
            alt={imageAlt}
            className="aspect-[21/9] w-full object-cover sm:min-h-[320px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
