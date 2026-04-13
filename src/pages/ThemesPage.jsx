import { useCallback, useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/premium/Navbar.jsx";
import ThemeSnapSection from "../components/themes/ThemeSnapSection.jsx";
import ThemeShowcaseModal from "../components/themes/ThemeShowcaseModal.jsx";
import { getThemeBySlug, SHOPIFY_THEME_SHOWCASE } from "../data/shopifyThemes.js";

const snapMain =
  "min-h-0 flex-1 snap-y snap-mandatory overflow-y-auto overflow-x-hidden overscroll-y-contain scroll-smooth";

const closingSnapH =
  "h-[calc(100dvh-76px)] sm:h-[calc(100dvh-80px)] md:h-[calc(100dvh-96px)] lg:h-[calc(100dvh-100px)]";

export default function ThemesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const themeParam = searchParams.get("theme");

  const openTheme = useMemo(() => (themeParam ? getThemeBySlug(themeParam) : null), [themeParam]);

  useEffect(() => {
    if (!themeParam) return;
    if (!getThemeBySlug(themeParam)) setSearchParams({}, { replace: true });
  }, [themeParam, setSearchParams]);

  const openModal = useCallback(
    (slug) => {
      setSearchParams({ theme: slug });
    },
    [setSearchParams],
  );

  const closeModal = useCallback(() => {
    setSearchParams({});
  }, [setSearchParams]);

  const total = SHOPIFY_THEME_SHOWCASE.length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="flex h-dvh max-h-dvh flex-col overflow-hidden bg-white text-neutral-900 antialiased"
    >
      <Navbar />

      <main id="themes-snap-scroll" className={snapMain}>
        {SHOPIFY_THEME_SHOWCASE.map((theme, index) => (
          <ThemeSnapSection
            key={theme.slug}
            theme={theme}
            index={index}
            total={total}
            onOpenDetails={openModal}
            eager={index < 2}
          />
        ))}

        <section
          className={`snap-start snap-always shrink-0 ${closingSnapH} flex flex-col items-center justify-center border-t border-neutral-200 bg-white px-6 text-center`}
        >
          <p className="font-sans text-xl font-semibold tracking-tight text-neutral-950 sm:text-2xl">Next steps</p>
          <p className="mt-2 max-w-md font-sans text-sm text-neutral-600">Services, platform features, or home.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/services"
              className="inline-flex justify-center rounded-xl bg-neutral-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              View services
            </Link>
            <Link
              to="/"
              className="inline-flex justify-center rounded-xl border border-neutral-300 bg-white px-8 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
            >
              Home
            </Link>
          </div>
        </section>
      </main>

      {openTheme ? <ThemeShowcaseModal key={openTheme.slug} theme={openTheme} onClose={closeModal} /> : null}
    </motion.div>
  );
}
