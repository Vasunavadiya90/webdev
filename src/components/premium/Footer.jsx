import { motion } from "framer-motion";
import { Heart, Share2, Sparkles } from "lucide-react";
import NavBrand from "../shared/NavBrand.jsx";

const cols = [
  {
    title: "Product",
    links: ["Themes", "Demos", "Changelog", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Blog", "Support", "Partners"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Licenses", "Security"],
  },
];

export default function Footer() {
  return (
    <footer id="support" className="scroll-mt-24 border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <NavBrand variant="footer" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-600">
              Premium Shopify experiences — minimal surfaces, maximum conversion. Built for brands
              that cannot afford generic.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="#"
                className="inline-flex rounded-full border border-neutral-200 p-2.5 text-neutral-600 transition hover:border-neutral-300 hover:text-neutral-950"
                aria-label="Share"
              >
                <Share2 className="h-4 w-4" strokeWidth={1.75} />
              </a>
              <a
                href="#"
                className="inline-flex rounded-full border border-neutral-200 p-2.5 text-neutral-600 transition hover:border-neutral-300 hover:text-neutral-950"
                aria-label="Updates"
              >
                <Sparkles className="h-4 w-4" strokeWidth={1.75} />
              </a>
              <a
                href="#"
                className="inline-flex rounded-full border border-neutral-200 p-2.5 text-neutral-600 transition hover:border-neutral-300 hover:text-neutral-950"
                aria-label="Community"
              >
                <Heart className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {cols.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  {c.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm font-medium text-neutral-700 transition hover:text-neutral-950"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex flex-col gap-8 border-t border-neutral-200 pt-10 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-md">
            <p className="text-sm font-semibold text-neutral-950">Newsletter</p>
            <p className="mt-1 text-sm text-neutral-600">
              Product drops, conversion playbooks, and changelog — no noise.
            </p>
            <form
              className="mt-4 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Work email"
                className="w-full rounded-full border border-neutral-200 bg-neutral-50 px-5 py-3 text-sm outline-none ring-neutral-950/10 transition placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-4"
              />
              <button
                type="submit"
                className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Join
              </button>
            </form>
          </div>
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Pixel Template. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
