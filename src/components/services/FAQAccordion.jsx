import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({ items, className = "" }) {
  const [open, setOpen] = useState(0);

  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-start justify-between gap-4 rounded-2xl border border-neutral-200/90 bg-white px-5 py-4 text-left shadow-sm transition hover:border-neutral-300 hover:shadow-md sm:px-6 sm:py-5"
              aria-expanded={isOpen}
            >
              <span className="font-sans text-base font-semibold leading-snug text-neutral-900 sm:text-lg">
                {item.q}
              </span>
              <ChevronDown
                className={`mt-0.5 h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                strokeWidth={2}
                aria-hidden
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="border-x border-b border-neutral-200/90 border-t-0 bg-neutral-50/80 px-5 py-4 font-sans text-sm leading-relaxed text-neutral-600 sm:px-6 sm:text-base sm:leading-relaxed">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
