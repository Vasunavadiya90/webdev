import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

function StarRating({ count }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${i < count ? "fill-amber-400 text-amber-400" : "fill-neutral-200 text-neutral-200"}`}
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

function PreviewImage({ src, alt, gradientFrom, gradientTo }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative h-full w-full">
      {!error && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      )}
      {/* Gradient fallback — visible while loading or on error */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${loaded && !error ? "opacity-0" : "opacity-100"}`}
        style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
      >
        <span className="select-none font-display text-2xl font-semibold text-white/70 sm:text-3xl">
          {alt}
        </span>
      </div>
    </div>
  );
}

export default function ThemeRow({ theme, index }) {
  const [active, setActive] = useState(0);
  const imageRight = index % 2 === 1;
  const presets = theme.presets || [];
  const activePreset = presets[active];

  const imageBlock = (
    <motion.div
      initial={{ opacity: 0, x: imageRight ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-4"
    >
      {/* Main preview */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-neutral-100" style={{ aspectRatio: "16 / 9" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <PreviewImage
              src={activePreset?.image}
              alt={theme.name}
              gradientFrom={theme.gradientFrom}
              gradientTo={theme.gradientTo}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails — show preset name */}
      <div className={`grid gap-2 sm:gap-2.5 ${
        presets.length <= 3 ? "grid-cols-3" : presets.length === 4 ? "grid-cols-4" : "grid-cols-5"
      }`}>
        {presets.map((preset, i) => (
          <button
            key={preset.name}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Preview "${preset.name}" preset`}
            className={`group relative overflow-hidden rounded-xl transition-all duration-200 ${
              active === i
                ? "ring-2 ring-[#1A1A2E] ring-offset-2"
                : "opacity-75 hover:opacity-100"
            }`}
            style={{ aspectRatio: "4/3" }}
          >
            <PreviewImage
              src={preset.image}
              alt={preset.name}
              gradientFrom={theme.gradientFrom}
              gradientTo={theme.gradientTo}
            />
            {/* Preset name overlay */}
            <span className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/30 to-transparent pb-1.5 pt-4 font-sans text-[10px] font-semibold leading-tight text-white sm:text-xs">
              {preset.name}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );

  const textBlock = (
    <motion.div
      initial={{ opacity: 0, x: imageRight ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col justify-center"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex rounded-full border border-[#1A1A2E] px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-wider text-[#1A1A2E]">
          Shopify Theme
        </span>
        {theme.rating && (
          <span className="font-sans text-xs font-semibold text-amber-600">{theme.rating} rating</span>
        )}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <StarRating count={theme.stars} />
        {theme.price ? (
          <span className="font-sans text-sm font-medium text-[#6B6B6B]">{theme.price}</span>
        ) : (
          <span className="font-sans text-sm font-medium text-[#6B6B6B]">{theme.priceNote}</span>
        )}
      </div>

      <h3 className="mt-5">
        <a
          href={theme.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-[clamp(2rem,4vw,2.75rem)] font-normal leading-[1.1] tracking-[-0.025em] text-[#1A1A1A] transition hover:text-[#1A1A2E] hover:underline decoration-[#1A1A2E]/30 underline-offset-4"
        >
          {theme.name}
        </a>
      </h3>

      <p className="mt-4 font-sans text-base leading-relaxed text-[#6B6B6B] sm:text-[1.05rem]">
        {theme.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {theme.industries.map((ind) => (
          <span
            key={ind}
            className="rounded-full bg-[#F5F5F0] px-3 py-1.5 font-sans text-xs font-semibold text-[#1A1A2E]"
          >
            {ind}
          </span>
        ))}
      </div>

      <div className="mt-8">
        <a
          href={theme.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-[#1A1A2E] px-7 py-3.5 font-sans text-sm font-semibold text-white shadow-md transition hover:scale-[1.03] hover:bg-[#2a2a4e] active:scale-[0.98]"
        >
          Explore now
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" strokeWidth={2} />
        </a>
      </div>
    </motion.div>
  );

  return (
    <div
      className={`grid grid-cols-1 items-center gap-10 border-b border-neutral-200/70 py-16 lg:grid-cols-2 lg:gap-16 xl:gap-24 ${
        imageRight ? "lg:grid-flow-dense" : ""
      }`}
    >
      <div className={imageRight ? "lg:col-start-2" : ""}>{imageBlock}</div>
      <div className={imageRight ? "lg:col-start-1 lg:row-start-1" : ""}>{textBlock}</div>
    </div>
  );
}
