import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ThemeImage from "../themes/ThemeImage.jsx";
import { STACKED_STORY_SECTIONS } from "../../data/stackedStorySections.js";

const ROTATE_MS = 4200;

/** Crossfades through `images` — ThemeImage handles Unsplash fallbacks so frames rarely stay blank. */
function RotatingStackImage({ images, eagerFirst, reduceMotion, staggerMs }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (reduceMotion || images.length <= 1) return undefined;
    let intervalId;
    const start = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setIdx((i) => (i + 1) % images.length);
      }, ROTATE_MS);
    }, staggerMs);
    return () => {
      window.clearTimeout(start);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [images.length, reduceMotion, staggerMs]);

  const shot = images[idx] ?? images[0];
  const eager = eagerFirst && idx === 0;

  return (
    <div className="relative h-full w-full overflow-hidden bg-neutral-100">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={shot.src}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.985 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <ThemeImage src={shot.src} alt={shot.alt} eager={eager} fill roundedClass="rounded-none" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function StackSlide({ item, index, total }) {
  const trackRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end start"],
  });

  const isLast = index === total - 1;
  const idle = [1, 1, 1];
  const scale = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    reduceMotion || isLast ? idle : [1, 0.988, 0.975],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], reduceMotion || isLast ? idle : [1, 0.96, 0.9]);

  const z = 10 + index;
  const bg = item.surface === "mist" ? "bg-[#f4f4f5]" : "bg-white";

  const imageCell = (
    <div key="stack-img" className="min-w-0 lg:col-span-1 lg:row-start-1">
      <div className="mx-auto w-full max-w-xl overflow-hidden rounded-[1.75rem] border border-neutral-200/80 bg-neutral-100 shadow-[0_20px_60px_-28px_rgba(15,23,42,0.12)] ring-1 ring-black/[0.03] lg:mx-0">
        <div className="relative h-[min(420px,48svh)] w-full sm:h-[min(460px,50svh)]">
          <RotatingStackImage
            images={item.images}
            eagerFirst={index === 0}
            reduceMotion={reduceMotion}
            staggerMs={index * 550}
          />
        </div>
      </div>
    </div>
  );

  const textCell = (
    <div key="stack-txt" className="min-w-0 max-w-xl lg:max-w-none lg:col-span-1 lg:row-start-1">
      <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">{item.eyebrow}</p>
      <h3 className="mt-3 font-sans text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-950">
        {item.title}
      </h3>
      <p className="mt-5 font-sans text-base leading-relaxed text-neutral-600 sm:text-lg">{item.body}</p>
    </div>
  );

  return (
    <div ref={trackRef} className="relative h-[128vh] min-h-[720px] sm:h-[132vh]">
      <motion.div
        style={{
          zIndex: z,
          scale,
          opacity,
        }}
        className={`sticky top-0 flex min-h-[100dvh] w-full transform-gpu items-center border-b border-neutral-200/60 ${bg} will-change-[transform,opacity]`}
      >
        <div className="mx-auto w-full max-w-8xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-20">
            {item.imageLeft ? (
              <>
                {imageCell}
                {textCell}
              </>
            ) : (
              <>
                {textCell}
                {imageCell}
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/**
 * Sticky section stacking: each panel pins at top:0 while the next slides over (higher z-index).
 */
export default function StickyStackScroll() {
  const total = STACKED_STORY_SECTIONS.length;

  return (
    <section aria-label="Stacking story sections" className="relative bg-white">
      <div className="border-b border-neutral-200/80 bg-white px-5 py-10 text-center sm:px-8 sm:py-12">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">Explore further</p>
        <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-normal tracking-tight text-neutral-950 sm:text-4xl">
          Why teams stay on these themes
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-relaxed text-neutral-600 sm:text-base">
          Scroll — each layer stacks over the last, like a premium product story.
        </p>
        <Link
          to="/themes"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:border-neutral-400 hover:bg-neutral-50"
        >
          Explore all themes
          <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
        </Link>
      </div>

      <div className="relative isolate">
        {STACKED_STORY_SECTIONS.map((item, index) => (
          <StackSlide key={item.id} item={item} index={index} total={total} />
        ))}
      </div>
    </section>
  );
}
