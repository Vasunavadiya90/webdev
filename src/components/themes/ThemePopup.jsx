import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Sparkles, X } from "lucide-react";
import ThemeImage from "./ThemeImage.jsx";
import { THEME_MARKET_FEATURES, THEME_MARKET_USE_CASES } from "../../data/shopifyThemes.js";

const ACCENTS = [
  { bar: "from-emerald-500 to-teal-400", ring: "ring-emerald-500/25", dot: "bg-emerald-500" },
  { bar: "from-amber-500 to-orange-400", ring: "ring-amber-500/25", dot: "bg-amber-500" },
  { bar: "from-sky-500 to-indigo-400", ring: "ring-sky-500/25", dot: "bg-sky-500" },
  { bar: "from-violet-500 to-fuchsia-400", ring: "ring-violet-500/25", dot: "bg-violet-500" },
];

function buildSlides(theme) {
  if (!theme) return [];
  const hero = { key: "hero", src: theme.heroImage, label: "Showcase", frame: "wide" };
  return [hero, ...theme.gallery.map((g, i) => ({ key: `g-${i}`, src: g.src, label: g.label, frame: g.frame }))];
}

/**
 * Full-screen theme viewer: name, copy, animated multi-image carousel, features, CTAs.
 * @param {{ theme: object | null; themeIndex: number; onClose: () => void }} props
 */
export default function ThemePopup({ theme, themeIndex = 0, onClose }) {
  const open = Boolean(theme);
  const slides = useMemo(() => buildSlides(theme), [theme]);
  const [slide, setSlide] = useState(0);
  const closeRef = useRef(null);
  const accent = ACCENTS[themeIndex % ACCENTS.length];
  const slideDir = themeIndex % 2 === 0 ? 1 : -1;

  useEffect(() => {
    setSlide(0);
  }, [theme?.slug]);

  useEffect(() => {
    if (!open || slides.length === 0) return;
    const id = window.setInterval(() => {
      setSlide((s) => (s + 1) % slides.length);
    }, 4800);
    return () => window.clearInterval(id);
  }, [open, slides.length]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => closeRef.current?.focus(), 80);
    return () => {
      document.body.style.overflow = prev;
      window.clearTimeout(t);
    };
  }, [open]);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setSlide((s) => (s + 1) % slides.length);
      if (e.key === "ArrowLeft") setSlide((s) => (s - 1 + slides.length) % slides.length);
    },
    [onClose, slides.length],
  );

  useEffect(() => {
    if (!open) return;
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onKeyDown]);

  const go = (dir) => {
    setSlide((s) => (s + dir + slides.length) % slides.length);
  };

  if (typeof document === "undefined") return null;

  const content = (
    <AnimatePresence>
      {open && theme ? (
        <motion.div
          key="theme-popup"
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="presentation"
        >
          <motion.button
            type="button"
            aria-label="Close theme preview"
            className="absolute inset-0 bg-neutral-950/45 backdrop-blur-[2px] transition hover:bg-neutral-950/55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="theme-popup-title"
            className={`relative z-10 flex max-h-[100dvh] w-full max-w-5xl flex-col overflow-hidden rounded-t-3xl border border-neutral-200/90 bg-white shadow-[0_32px_120px_-24px_rgba(0,0,0,0.35)] ring-1 sm:max-h-[min(92dvh,900px)] sm:rounded-3xl ${accent.ring} ring-4`}
            initial={{ y: 48, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 36, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
          >
            <div className={`h-1.5 w-full shrink-0 bg-gradient-to-r ${accent.bar}`} aria-hidden />

            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain">
              <div className="sticky top-0 z-20 flex items-start justify-between gap-4 border-b border-neutral-100 bg-white/95 px-5 py-4 backdrop-blur-md sm:px-6">
                <div className="min-w-0 pt-0.5">
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">Theme preview</p>
                  <h2 id="theme-popup-title" className="mt-1 font-sans text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                    {theme.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-neutral-500">{theme.tag}</p>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-700 shadow-sm transition hover:border-neutral-300 hover:bg-neutral-50"
                >
                  <X className="h-5 w-5" strokeWidth={2} aria-hidden />
                </button>
              </div>

              <div className={`grid flex-1 gap-6 px-5 py-5 sm:gap-8 sm:px-6 sm:py-6 ${themeIndex % 2 === 0 ? "lg:grid-cols-[1fr_1.05fr]" : "lg:grid-cols-[1.05fr_1fr]"}`}>
                {/* Copy column — order swaps by themeIndex for a different "place" */}
                <motion.div
                  className={`flex flex-col justify-center ${themeIndex % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
                  }}
                >
                  <motion.p
                    variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                    className="font-sans text-base leading-relaxed text-neutral-600 sm:text-lg"
                  >
                    {theme.blurb}
                  </motion.p>
                  <motion.p
                    variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                    className="mt-3 font-sans text-sm leading-relaxed text-neutral-500"
                  >
                    {theme.cardSummary}
                  </motion.p>

                  <motion.ul
                    variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.12 } } }}
                    className="mt-6 flex flex-wrap gap-2"
                  >
                    {THEME_MARKET_USE_CASES.map((label) => (
                      <motion.li
                        key={label}
                        variants={{ hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1 } }}
                        className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 font-sans text-xs font-medium text-neutral-700"
                      >
                        {label}
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.div
                    variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                    className="mt-8 flex flex-col gap-2.5 sm:flex-row"
                  >
                    <a
                      href={theme.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 font-sans text-sm font-semibold text-white transition hover:bg-neutral-800"
                    >
                      Use this theme
                      <ExternalLink className="h-4 w-4 opacity-90" strokeWidth={2} aria-hidden />
                    </a>
                    <a
                      href={theme.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-5 py-3 font-sans text-sm font-semibold text-neutral-900 transition hover:border-neutral-400 hover:bg-neutral-50"
                    >
                      Preview demo
                    </a>
                  </motion.div>
                </motion.div>

                {/* Carousel column */}
                <div className={`min-h-0 ${themeIndex % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-100 shadow-inner">
                    <div className="relative aspect-[16/11] w-full sm:aspect-[16/10]">
                      <AnimatePresence initial={false} mode="wait">
                        <motion.div
                          key={`${theme.slug}-${slide}`}
                          className="absolute inset-0"
                          initial={{ opacity: 0, x: 28 * slideDir }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -22 * slideDir }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <ThemeImage
                            src={slides[slide]?.src}
                            alt={`${theme.name} — ${slides[slide]?.label ?? "preview"}`}
                            eager
                            fill
                            roundedClass="rounded-2xl"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 sm:bottom-4 sm:left-4 sm:right-4">
                      <button
                        type="button"
                        aria-label="Previous image"
                        onClick={() => go(-1)}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-neutral-800 shadow-md ring-1 ring-black/5 backdrop-blur transition hover:bg-white"
                      >
                        <ChevronLeft className="h-5 w-5" strokeWidth={2} />
                      </button>
                      <span className="rounded-full bg-white/90 px-3 py-1.5 text-center font-sans text-[11px] font-semibold uppercase tracking-wide text-neutral-600 shadow-sm ring-1 ring-black/5 backdrop-blur">
                        {slides[slide]?.label}
                      </span>
                      <button
                        type="button"
                        aria-label="Next image"
                        onClick={() => go(1)}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-neutral-800 shadow-md ring-1 ring-black/5 backdrop-blur transition hover:bg-white"
                      >
                        <ChevronRight className="h-5 w-5" strokeWidth={2} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-3 flex gap-2 overflow-x-auto pb-1 pt-1 [scrollbar-width:thin]">
                    {slides.map((s, i) => (
                      <motion.button
                        key={s.key}
                        type="button"
                        onClick={() => setSlide(i)}
                        aria-label={`Show ${s.label}`}
                        className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 bg-neutral-100 transition sm:h-16 sm:w-24 ${
                          i === slide ? "border-neutral-900 ring-2 ring-neutral-900/15" : "border-transparent opacity-75 hover:opacity-100"
                        }`}
                        whileTap={{ scale: 0.96 }}
                      >
                        <ThemeImage src={s.src} alt="" fill roundedClass="rounded-md" className="pointer-events-none" />
                        {i === slide ? (
                          <motion.span
                            layoutId={`thumb-dot-${theme.slug}`}
                            className={`absolute bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full ${accent.dot}`}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        ) : null}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-neutral-100 bg-neutral-50/80 px-5 py-4 sm:px-6">
                <p className="mb-3 flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  <Sparkles className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                  Highlights
                </p>
                <ul className="flex flex-wrap gap-2">
                  {THEME_MARKET_FEATURES.map((f, i) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 + i * 0.03 }}
                      className="rounded-lg border border-neutral-200/90 bg-white px-2.5 py-1.5 font-sans text-xs font-medium text-neutral-800 shadow-sm"
                    >
                      {f}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return createPortal(content, document.body);
}
