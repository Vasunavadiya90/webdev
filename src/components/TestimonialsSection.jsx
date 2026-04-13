import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Absolutely stunning theme. Our conversion rate jumped after switching. The design quality is unmatched.",
    name: "Priya S.",
    store: "Fashion Store",
    date: "March 2024",
  },
  {
    quote:
      "Support team is incredibly responsive. They helped us customize exactly what we needed within hours.",
    name: "Raj M.",
    store: "GlowBeauty",
    date: "Jan 2024",
  },
  {
    quote:
      "Best Shopify theme we've ever used. Fast, clean, and beautiful. Our customers keep complimenting the site.",
    name: "Sarah K.",
    store: "TrendHive",
    date: "Feb 2024",
  },
  {
    quote:
      "We tried 5 themes before this. Nothing came close to the quality and features Webibazaar offers.",
    name: "Ahmed T.",
    store: "CraftCo",
    date: "Dec 2023",
  },
  {
    quote:
      "The image galleries and product pages look incredible. Setup was easy and documentation is thorough.",
    name: "Lisa W.",
    store: "HomeNest",
    date: "Nov 2023",
  },
  {
    quote:
      "Finally a theme that looks premium AND performs fast. Highly recommend to any serious Shopify merchant.",
    name: "Karan P.",
    store: "SportZone",
    date: "Oct 2023",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F5F5F0] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6B6B6B]">
            What merchants say
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.025em] text-[#1A1A1A]">
            Loved by 10,000+ store owners
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col rounded-xl border border-neutral-200/80 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition hover:shadow-[0_6px_24px_rgba(0,0,0,0.09)]"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" strokeWidth={0} />
                  ))}
                </div>
                <span className="whitespace-nowrap font-sans text-[11px] text-[#6B6B6B]">{t.date}</span>
              </div>

              <p className="mt-4 flex-1 font-sans text-sm leading-relaxed text-[#6B6B6B]">
                &ldquo;{t.quote}&rdquo;
              </p>

              <footer className="mt-5 flex items-center gap-3 border-t border-neutral-100 pt-4">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-sans text-sm font-bold text-white"
                  style={{ background: `linear-gradient(135deg, #1A1A2E, #4A4A7E)` }}
                  aria-hidden
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-[#1A1A1A]">{t.name}</p>
                  <p className="font-sans text-xs text-[#6B6B6B]">{t.store}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
