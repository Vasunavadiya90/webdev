import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const slides = [
  {
    quote:
      "Our mobile conversion finally matched desktop. The polish paid for the theme in the first month.",
    name: "Elena Marchetti",
    role: "Founder",
    company: "Velour Studio",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
  },
  {
    quote:
      "Support felt like an in-house team. Launch was painless and the storefront looks absurdly premium.",
    name: "James Chen",
    role: "Head of eCommerce",
    company: "Harbor Supply",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80",
  },
  {
    quote:
      "We replaced a custom build. Faster, cleaner, and our CRO agency actually complimented the codebase.",
    name: "Amira Hassan",
    role: "COO",
    company: "Lumen Beauty",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&q=80",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const n = slides.length;

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % n), 6000);
    return () => clearInterval(t);
  }, [n]);

  const prev = () => setI((p) => (p - 1 + n) % n);
  const next = () => setI((p) => (p + 1) % n);

  const s = slides[i];

  return (
    <section id="testimonials" className="bg-white py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Wall of love
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-neutral-950 sm:text-5xl">
            Loved by operators who ship
          </h2>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="overflow-hidden rounded-3xl border border-neutral-200/90 bg-neutral-50/60 p-10 shadow-inner ring-1 ring-black/[0.03] sm:p-14">
            <Quote className="h-10 w-10 text-neutral-300" strokeWidth={1.25} />
            <AnimatePresence mode="wait">
              <motion.div
                key={s.company}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6"
              >
                <p className="font-display text-2xl leading-snug text-neutral-900 sm:text-3xl sm:leading-snug">
                  “{s.quote}”
                </p>
                <div className="mt-10 flex items-center gap-4">
                  <img
                    src={s.img}
                    alt=""
                    className="h-14 w-14 rounded-2xl border border-neutral-200 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-neutral-950">{s.name}</p>
                    <p className="text-sm text-neutral-600">
                      {s.role} · {s.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={prev}
              className="inline-flex rounded-full border border-neutral-200 bg-white p-2.5 text-neutral-700 shadow-sm transition hover:bg-neutral-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2 px-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === i ? "w-8 bg-neutral-950" : "w-2 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="inline-flex rounded-full border border-neutral-200 bg-white p-2.5 text-neutral-700 shadow-sm transition hover:bg-neutral-50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
