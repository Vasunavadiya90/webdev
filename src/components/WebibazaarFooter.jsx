import { motion } from "framer-motion";
import { WEBIBAZAAR_THEMES } from "../data/themes.js";

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const FOOTER_COLS = [
  {
    title: "Themes",
    links: WEBIBAZAAR_THEMES.map((t) => ({ label: t.name, href: t.url })),
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Customizations", href: "#" },
      { label: "Theme Documentation", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  },
  {
    title: "Shopify",
    links: [
      { label: "Try Shopify Free Trial", href: "https://shopify.com" },
      { label: "Shopify Help Center", href: "https://help.shopify.com" },
      { label: "Shopify Theme Store", href: "https://themes.shopify.com/designers/webibazaar" },
    ],
  },
];

export default function WebibazaarFooter() {
  return (
    <footer className="bg-[#111111] text-neutral-400">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        {/* Brand row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex flex-col items-start gap-1"
        >
          <span className="font-display text-2xl font-normal tracking-tight text-white">Webibazaar</span>
          <span className="font-sans text-sm text-neutral-500">Premium Shopify Themes</span>
        </motion.div>

        {/* Columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {FOOTER_COLS.map((col, ci) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: ci * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-sans text-sm transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider + bottom bar */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="font-sans text-sm">
              © 2025 Webibazaar Templates · Made with{" "}
              <span className="text-red-400" aria-label="love">
                ♥
              </span>{" "}
              in India
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Twitter / X" className="transition hover:text-white">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="LinkedIn" className="transition hover:text-white">
                <LinkedInIcon />
              </a>
              <a href="#" aria-label="YouTube" className="transition hover:text-white">
                <YouTubeIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
