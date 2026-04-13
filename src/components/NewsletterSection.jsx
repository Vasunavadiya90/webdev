import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section className="bg-[#1A1A2E] py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
            Stay in the loop
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.25rem)] font-normal tracking-[-0.025em] text-white">
            Stay connected
          </h2>
          <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-white/60 sm:text-base">
            Get updates on our themes and upcoming launches. No spam, sent quarterly.
          </p>

          {submitted ? (
            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-10 font-sans text-base font-semibold text-emerald-400"
            >
              Thank you! You&apos;re subscribed. 🎉
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full max-w-xs rounded-full border-0 bg-white px-5 py-3.5 font-sans text-sm text-[#1A1A1A] outline-none ring-1 ring-white/20 placeholder:text-neutral-400 focus:ring-2 focus:ring-white sm:max-w-sm"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-white px-7 py-3.5 font-sans text-sm font-semibold text-[#1A1A2E] transition hover:bg-neutral-100 active:scale-[0.98] sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
