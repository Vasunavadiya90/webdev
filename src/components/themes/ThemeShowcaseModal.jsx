import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, LayoutGrid, Sparkles, Store, X } from "lucide-react";
import ThemeImage from "./ThemeImage.jsx";
import {
  THEME_MARKET_FEATURES,
  THEME_MARKET_USE_CASES,
} from "../../data/shopifyThemes.js";

function uniqueSlideUrls(theme) {
  const list = [theme.heroImage, ...theme.gallery.map((g) => g.src)];
  return [...new Set(list)];
}

/** Stable 0–3 layout per theme (asymmetric showcase like premium theme sites). */
function layoutVariantForSlug(slug) {
  let h = 0;
  for (let i = 0; i < slug.length; i += 1) h = (h + slug.charCodeAt(i) * (i + 1)) % 997;
  return h % 4;
}

function MosaicThumb({ shot, themeName, delay, eager }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-50 shadow-sm"
    >
      <ThemeImage
        src={shot.src}
        alt={`${themeName} — ${shot.label}`}
        eager={eager}
        aspectClass={shot.frame === "tall" ? "aspect-[9/14]" : "aspect-[16/10]"}
        roundedClass="rounded-2xl"
      />
      <p className="px-2 py-2 text-center font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
        {shot.label}
      </p>
    </motion.div>
  );
}

export default function ThemeShowcaseModal({ theme, onClose }) {
  const [slide, setSlide] = useState(0);
  const slides = useMemo(() => uniqueSlideUrls(theme), [theme]);
  const v = layoutVariantForSlug(theme.slug);
  const mosaic = theme.gallery.slice(0, 5);

  const next = useCallback(() => setSlide((s) => (s + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setSlide((s) => (s - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    setSlide(0);
  }, [theme.slug]);

  useEffect(() => {
    if (slides.length <= 1) return undefined;
    const id = window.setInterval(next, 4200);
    return () => window.clearInterval(id);
  }, [slides.length, next, theme.slug]);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, next, prev]);

  const shell = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-[200]"
    >
      <button
        type="button"
        aria-label="Close theme preview"
        className="absolute inset-0 bg-neutral-950/45 backdrop-blur-[10px]"
        onClick={onClose}
      />
      <div className="pointer-events-none absolute inset-0 flex items-end justify-center sm:items-center sm:p-5">
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="theme-showcase-title"
          initial={{ opacity: 0, y: 48, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 36, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 380, damping: 34 }}
          className="pointer-events-auto flex max-h-[min(94dvh,920px)] w-full max-w-8xl flex-col overflow-hidden rounded-t-[1.75rem] border border-neutral-200/90 bg-white shadow-[0_-32px_80px_-32px_rgba(15,23,42,0.35)] sm:max-h-[min(90vh,880px)] sm:rounded-3xl"
          onClick={(e) => e.stopPropagation()}
        >
        <header className="flex shrink-0 items-start justify-between gap-4 border-b border-neutral-200/80 bg-white px-5 py-4 sm:px-7 sm:py-5">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100 text-neutral-800 ring-1 ring-neutral-200/80">
                <Store className="h-4 w-4" strokeWidth={2} aria-hidden />
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200/90 bg-neutral-50 px-2.5 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wide text-neutral-600">
                <LayoutGrid className="h-3 w-3" strokeWidth={2} aria-hidden />
                Shopify theme
              </span>
            </div>
            <h2 id="theme-showcase-title" className="mt-3 truncate font-sans text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
              {theme.name}
            </h2>
            <p className="mt-1 text-sm font-medium text-neutral-500">{theme.tag}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50"
            aria-label="Close theme preview"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-6 sm:px-7 sm:py-8">
          {/* Variant layouts: different composition per theme */}
          {v === 0 && (
            <div className="space-y-8">
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200/90 bg-neutral-100 ring-1 ring-black/[0.04]">
                <div className="relative aspect-[16/10] w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${theme.slug}-slide-${slide}`}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45 }}
                    >
                      <ThemeImage src={slides[slide]} alt={theme.heroAlt} eager fill roundedClass="rounded-3xl" />
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="absolute bottom-3 right-3 flex gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-neutral-800 shadow-md ring-1 ring-neutral-200/80 backdrop-blur transition hover:bg-white"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-neutral-800 shadow-md ring-1 ring-neutral-200/80 backdrop-blur transition hover:bg-white"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 }}
                  className="lg:col-span-5"
                >
                  <p className="font-sans text-base leading-relaxed text-neutral-700 sm:text-lg">{theme.blurb}</p>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-neutral-500">{theme.cardSummary}</p>
                  <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                    <a
                      href={theme.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 px-6 py-3 font-sans text-sm font-semibold text-white transition hover:bg-neutral-800"
                    >
                      Use this theme
                      <ExternalLink className="h-4 w-4 opacity-90" />
                    </a>
                    <a
                      href={theme.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-3 font-sans text-sm font-semibold text-neutral-900 transition hover:border-neutral-400 hover:bg-neutral-50"
                    >
                      Preview demo
                    </a>
                  </div>
                </motion.div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-7">
                  {mosaic.map((shot, i) => (
                    <MosaicThumb key={shot.label + i} shot={shot} themeName={theme.name} delay={0.1 + i * 0.06} eager={i < 2} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {v === 1 && (
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="grid gap-3 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-1 lg:gap-4">
                {mosaic.slice(0, 3).map((shot, i) => (
                  <MosaicThumb key={shot.label + i} shot={shot} themeName={theme.name} delay={0.05 + i * 0.07} eager={i < 2} />
                ))}
              </div>
              <div className="space-y-6 lg:col-span-8">
                <div className="relative overflow-hidden rounded-3xl border border-neutral-200/90 bg-neutral-100">
                  <div className="relative aspect-[16/10] w-full">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${theme.slug}-s1-${slide}`}
                        className="absolute inset-0"
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        transition={{ duration: 0.4 }}
                      >
                        <ThemeImage src={slides[slide]} alt={theme.heroAlt} eager fill roundedClass="rounded-3xl" />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <button type="button" onClick={prev} className="rounded-full bg-white/95 p-2 shadow ring-1 ring-neutral-200/80" aria-label="Previous">
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button type="button" onClick={next} className="rounded-full bg-white/95 p-2 shadow ring-1 ring-neutral-200/80" aria-label="Next">
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-sans text-base leading-relaxed text-neutral-700">
                  {theme.blurb}
                </motion.p>
                <div className="flex flex-wrap gap-2">
                  <a href={theme.href} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white">
                    Use this theme
                  </a>
                  <a href={theme.href} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900">
                    Preview demo
                  </a>
                </div>
              </div>
            </div>
          )}

          {v === 2 && (
            <div className="flex flex-col gap-8 lg:flex-row-reverse lg:items-start">
              <div className="relative min-w-0 flex-1 overflow-hidden rounded-3xl border border-neutral-200/90 bg-neutral-100 lg:max-w-[58%]">
                <div className="relative aspect-[16/11] w-full sm:aspect-[16/10]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${theme.slug}-s2-${slide}`}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.45 }}
                    >
                      <ThemeImage src={slides[slide]} alt={theme.heroAlt} eager fill roundedClass="rounded-3xl" />
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="absolute top-3 right-3 flex gap-2">
                  <button type="button" onClick={prev} className="rounded-full bg-white/95 p-2 shadow ring-1 ring-neutral-200/80" aria-label="Previous">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button type="button" onClick={next} className="rounded-full bg-white/95 p-2 shadow ring-1 ring-neutral-200/80" aria-label="Next">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="w-full shrink-0 space-y-5 lg:w-[min(100%,340px)]">
                <p className="font-sans text-base leading-relaxed text-neutral-700">{theme.blurb}</p>
                <div className="grid grid-cols-2 gap-2">
                  {mosaic.slice(2, 6).map((shot, i) => (
                    <MosaicThumb key={shot.label + i} shot={shot} themeName={theme.name} delay={0.08 + i * 0.05} eager={false} />
                  ))}
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <a href={theme.href} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 justify-center rounded-xl bg-neutral-900 px-4 py-3 text-center text-sm font-semibold text-white">
                    Use this theme
                  </a>
                  <a href={theme.href} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 justify-center rounded-xl border border-neutral-300 bg-white px-4 py-3 text-center text-sm font-semibold text-neutral-900">
                    Preview demo
                  </a>
                </div>
              </div>
            </div>
          )}

          {v === 3 && (
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-3xl border border-neutral-200/90 bg-neutral-100">
                  <div className="relative aspect-[16/10] w-full">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${theme.slug}-s3-${slide}`}
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                      >
                        <ThemeImage src={slides[slide]} alt={theme.heroAlt} eager fill roundedClass="rounded-3xl" />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="flex justify-center gap-2 py-3">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSlide(i)}
                        className={`h-2 rounded-full transition-all ${i === slide ? "w-7 bg-neutral-900" : "w-2 bg-neutral-300 hover:bg-neutral-400"}`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {mosaic.slice(0, 3).map((shot, i) => (
                    <MosaicThumb key={shot.label + i} shot={shot} themeName={theme.name} delay={0.06 + i * 0.05} eager={i < 2} />
                  ))}
                </div>
              </div>
              <div>
                <p className="font-sans text-base leading-relaxed text-neutral-700">{theme.blurb}</p>
                <p className="mt-3 text-sm text-neutral-500">{theme.cardSummary}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {THEME_MARKET_USE_CASES.map((label) => (
                    <li key={label} className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-semibold text-neutral-700">
                      {label}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-2 sm:flex-row">
                  <a href={theme.href} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white">
                    Use this theme
                  </a>
                  <a href={theme.href} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center rounded-xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900">
                    Preview demo
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="mt-10 border-t border-neutral-200/80 pt-8">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500">Built-in features</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {THEME_MARKET_FEATURES.map((title) => (
                <li
                  key={title}
                  className="flex items-center gap-2 rounded-xl border border-neutral-200/80 bg-neutral-50/90 px-3 py-2.5 font-sans text-sm font-medium text-neutral-800"
                >
                  <Sparkles className="h-4 w-4 shrink-0 text-neutral-500" strokeWidth={2} aria-hidden />
                  {title}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-center font-sans text-xs leading-relaxed text-neutral-500">
            Showcase rhythm inspired by premium theme shops such as{" "}
            <a
              href="https://archetypethemes.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-neutral-800 underline decoration-neutral-300 underline-offset-2 transition hover:text-neutral-950"
            >
              Archetype Themes
            </a>
            — editorial blocks, strong imagery, and clear calls to action.
          </p>
        </div>
        </motion.div>
      </div>
    </motion.div>
  );

  if (typeof document === "undefined") return null;
  return createPortal(shell, document.body);
}
