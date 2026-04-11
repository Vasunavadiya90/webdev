import { motion } from "framer-motion";
import { Star } from "lucide-react";
import MacBookServices from "./MacBookServices.jsx";

function StarRow() {
  return (
    <div className="flex items-center justify-center gap-0.5 text-amber-500/90" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-[17px] w-[17px] fill-current sm:h-5 sm:w-5" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-neutral-200/50 bg-[#f5f5f3] pb-24 pt-[calc(76px+3.5rem)] sm:pb-28 sm:pt-[calc(80px+4.5rem)] md:pt-[calc(96px+4rem)] lg:pb-36 lg:pt-[calc(100px+5.5rem)]"
    >
      {/* Subtle mint wash — left */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[min(100%,640px)] bg-gradient-to-r from-emerald-100/[0.45] via-teal-50/[0.2] to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-[min(70vh,520px)] w-[min(90vw,480px)] rounded-full bg-emerald-200/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[min(100%,1400px)] px-4 sm:px-8 lg:px-14 xl:px-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 flex flex-col items-center gap-3 sm:mb-12 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5"
          >
            <div className="flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white/60 px-3.5 py-2 backdrop-blur-sm sm:px-4 sm:py-2">
              <StarRow />
              <span className="text-sm font-semibold tracking-wide text-neutral-900 sm:text-base">4.9</span>
            </div>
            <p className="max-w-md text-sm font-medium leading-snug text-neutral-600 sm:max-w-none sm:text-base">
              Merchant-loved themes · <span className="text-neutral-800">534+</span> reviews
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="font-display w-full max-w-[min(100%,42rem)] text-[clamp(2.65rem,9.5vw,6.25rem)] font-normal leading-[0.98] tracking-[-0.03em] text-neutral-950 sm:max-w-[min(100%,52rem)] md:max-w-[min(100%,60rem)] lg:max-w-[min(100%,72rem)]"
          >
            <span className="block">Premium Shopify themes</span>
            <span className="mt-1 block text-neutral-800 sm:mt-2">sold here — for your brand.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 w-full max-w-[min(100%,36rem)] font-sans text-[clamp(1.05rem,2.4vw,1.75rem)] leading-[1.55] text-neutral-600 sm:mt-10 sm:max-w-[min(100%,44rem)] md:max-w-[min(100%,52rem)] lg:max-w-[min(100%,60rem)] lg:leading-[1.5]"
          >
            A dedicated theme studio — browse live demos, compare OS 2.0 presets, and purchase directly on this site.
            Documentation and optional launch support when you want a refined finish.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 w-full max-w-[min(100%,680px)] sm:mt-16 lg:mt-20 lg:max-w-4xl"
          >
            <MacBookServices />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
