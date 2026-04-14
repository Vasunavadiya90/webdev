import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Headphones, Menu, Search, X } from "lucide-react";
import NavBrand from "../shared/NavBrand.jsx";

const hashLinksAfterServices = [
  { label: "Stories", to: "/#testimonials" },
  { label: "Pricing", to: "/#convert" },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const home = location.pathname === "/";
  const hash = location.hash || "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setSearchOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen]);

  const linkBase = "text-sm font-medium transition-colors duration-300 text-neutral-500 hover:text-[#1A1A2E]";
  const linkActiveClass = "text-sm font-medium transition-colors duration-300 text-[#1A1A2E]";

  const hashLinkClass = (targetHash) =>
    `${home && hash === targetHash ? linkActiveClass : linkBase}`;

  const btnClass =
    "inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200/80 bg-white/80 px-4 py-2.5 text-sm font-semibold text-neutral-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-neutral-300 hover:bg-white hover:text-[#1A1A2E]";

  return (
    <motion.header
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background,border-color,box-shadow] duration-500 ${
        scrolled
          ? "border-neutral-200/80 bg-[#F5F5F0]/85 shadow-sm shadow-neutral-900/[0.04] backdrop-blur-2xl"
          : "border-neutral-200/40 bg-[#F5F5F0]/60 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto grid min-h-[76px] w-full max-w-7xl grid-cols-[1fr_auto] items-center gap-3 px-5 sm:px-8 sm:min-h-[80px] md:min-h-[96px] md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-4 md:py-1 lg:min-h-[100px] lg:px-10">
        <NavBrand variant="nav" />

        <ul className="hidden min-w-0 items-center justify-center gap-6 lg:gap-9 md:flex">
          <li>
            <NavLink
              to="/themes"
              className={({ isActive }) => isActive ? linkActiveClass : linkBase}
            >
              Themes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => isActive ? linkActiveClass : linkBase}
            >
              Services
            </NavLink>
          </li>
          {hashLinksAfterServices.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className={hashLinkClass(`#${l.to.split("#")[1]}`)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-2 sm:gap-3 md:justify-self-end">
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              className={btnClass}
              aria-expanded={searchOpen}
              aria-controls="site-search-panel"
              onClick={() => setSearchOpen((v) => !v)}
            >
              <Search className="h-4 w-4 shrink-0" strokeWidth={2} />
              Search
            </button>
            <Link to="/#support" className={btnClass}>
              <Headphones className="h-4 w-4 shrink-0" strokeWidth={2} />
              Support
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex rounded-full border border-neutral-200/80 bg-white/70 p-2.5 text-neutral-700 backdrop-blur transition-colors duration-300 hover:bg-white hover:text-[#1A1A2E] md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
          </button>
        </div>
      </nav>

      {searchOpen && (
        <div
          id="site-search-panel"
          className="border-b border-neutral-200 bg-white/95 px-4 py-3 shadow-md backdrop-blur-xl sm:px-8"
        >
          <form
            className="mx-auto flex max-w-7xl items-center gap-3 lg:px-10"
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              if (query.trim()) navigate("/themes");
              setSearchOpen(false);
            }}
          >
            <Search className="h-5 w-5 shrink-0 text-neutral-400" strokeWidth={2} aria-hidden />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search themes, services…"
              className="min-w-0 flex-1 border-0 bg-transparent py-2 text-base text-neutral-900 outline-none placeholder:text-neutral-400"
              autoComplete="off"
              autoFocus
            />
            <button
              type="button"
              className="rounded-lg p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
              aria-label="Close search"
              onClick={() => setSearchOpen(false)}
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>
          </form>
        </div>
      )}

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="border-b border-neutral-200 bg-white/95 px-5 py-6 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-4">
            <li>
              <NavLink
                to="/themes"
                className="block text-lg font-medium text-neutral-800"
                onClick={() => setOpen(false)}
              >
                Themes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="block text-lg font-medium text-neutral-800"
                onClick={() => setOpen(false)}
              >
                Services
              </NavLink>
            </li>
            {hashLinksAfterServices.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="block text-lg font-medium text-neutral-800"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-2 border-t border-neutral-200 pt-4">
              <button
                type="button"
                className={`${btnClass} w-full`}
                onClick={() => { setOpen(false); setSearchOpen(true); }}
              >
                <Search className="h-4 w-4 shrink-0" strokeWidth={2} />
                Search
              </button>
              <Link to="/#support" className={`${btnClass} w-full`} onClick={() => setOpen(false)}>
                <Headphones className="h-4 w-4 shrink-0" strokeWidth={2} />
                Support
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
