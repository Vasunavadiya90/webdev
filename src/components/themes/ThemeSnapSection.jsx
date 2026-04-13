import { Link } from "react-router-dom";
import { ExternalLink, Layers } from "lucide-react";
import ThemeImage from "./ThemeImage.jsx";

const sectionH =
  "h-[calc(100dvh-76px)] sm:h-[calc(100dvh-80px)] md:h-[calc(100dvh-96px)] lg:h-[calc(100dvh-100px)]";

function DesktopPreviewFrame({ src, alt, eager }) {
  return (
    <div className="flex h-full min-h-0 max-h-full w-full max-w-full flex-col overflow-hidden rounded-xl border border-neutral-200/90 bg-neutral-100 shadow-[0_12px_40px_-20px_rgba(15,23,42,0.2)] ring-1 ring-black/[0.04] sm:rounded-2xl">
      <div className="flex shrink-0 items-center gap-2 border-b border-neutral-200/80 bg-neutral-200/90 px-3 py-2 sm:px-4 sm:py-2.5">
        <span className="h-2 w-2 rounded-full bg-red-400/90" aria-hidden />
        <span className="h-2 w-2 rounded-full bg-amber-400/90" aria-hidden />
        <span className="h-2 w-2 rounded-full bg-emerald-400/90" aria-hidden />
        <span className="ml-2 flex-1 truncate rounded-md bg-white/95 px-2 py-1 text-center text-[9px] font-medium text-neutral-500 sm:text-[10px]">
          storefront preview
        </span>
      </div>
      <div className="relative min-h-0 w-full flex-1">
        <div className="relative aspect-[16/10] w-full min-h-0">
          <ThemeImage src={src} alt={`${alt} — desktop`} eager={eager} fill roundedClass="rounded-b-xl sm:rounded-b-2xl" />
        </div>
      </div>
    </div>
  );
}

/**
 * One full-viewport snap step: large desktop preview + compact story card (reference layout).
 */
export default function ThemeSnapSection({ theme, index, total, onOpenDetails, eager }) {
  const reversed = index % 2 === 1;
  const desktopSrc = theme.preview?.desktop ?? theme.heroImage;

  return (
    <section
      aria-labelledby={`theme-title-${theme.slug}`}
      className={`snap-start snap-always shrink-0 ${sectionH} overflow-hidden border-b border-neutral-200/80 bg-white`}
    >
      <div className="relative mx-auto flex h-full min-h-0 max-h-full max-w-[1400px] flex-col gap-4 px-4 py-3 sm:gap-5 sm:px-6 sm:py-4 lg:grid lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-5">
        <div className="pointer-events-none absolute left-4 top-3 flex items-center gap-3 sm:left-6 lg:left-8">
          <Link
            to="/"
            className="pointer-events-auto text-xs font-medium text-neutral-500 transition hover:text-neutral-900 sm:text-sm"
          >
            ← Home
          </Link>
          <span className="hidden text-neutral-300 sm:inline">|</span>
          <span className="hidden font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-400 sm:inline">
            {index + 1} / {total}
          </span>
        </div>

        {/* Desktop preview — left by default, right when reversed */}
        <div
          className={`mt-10 flex min-h-0 flex-1 flex-col justify-center lg:row-start-1 lg:mt-0 lg:max-h-full ${
            reversed ? "lg:col-span-7 lg:col-start-6" : "lg:col-span-7 lg:col-start-1"
          }`}
        >
          <div className="flex min-h-0 max-h-full w-full flex-1 flex-col justify-center">
            <DesktopPreviewFrame src={desktopSrc} alt={theme.name} eager={eager} />
          </div>
        </div>

        {/* Story card — right by default */}
        <div
          className={`flex min-h-0 shrink-0 flex-col justify-center lg:row-start-1 lg:max-h-full ${
            reversed ? "lg:col-span-5 lg:col-start-1" : "lg:col-span-5 lg:col-start-8"
          }`}
        >
          <div className="mx-auto flex w-full max-w-md min-h-0 flex-col overflow-hidden rounded-2xl border border-neutral-200/90 bg-white p-4 shadow-[0_16px_48px_-28px_rgba(15,23,42,0.18)] ring-1 ring-black/[0.03] sm:p-5 lg:mx-0 lg:max-h-full">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[220px] shrink-0 overflow-hidden rounded-xl bg-neutral-100 sm:max-w-[260px] lg:max-w-[min(100%,300px)]">
              <ThemeImage src={theme.cardImage} alt={theme.heroAlt} eager={eager} fill roundedClass="rounded-xl" />
            </div>
            <div className="mt-4 flex min-h-0 flex-1 flex-col">
              <span className="inline-flex w-fit rounded-full border border-neutral-200/90 bg-neutral-50 px-2.5 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wide text-neutral-600 sm:text-[11px]">
                {theme.tag}
              </span>
              <h2
                id={`theme-title-${theme.slug}`}
                className="mt-2.5 font-sans text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl"
              >
                {theme.name}
              </h2>
              <p className="mt-2 line-clamp-3 font-sans text-sm leading-relaxed text-neutral-600 sm:text-[0.95rem]">
                {theme.cardSummary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => onOpenDetails(theme.slug)}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-neutral-900 px-4 py-2.5 font-sans text-sm font-semibold text-white transition hover:bg-neutral-800 sm:flex-none sm:px-5"
                >
                  <Layers className="h-4 w-4 opacity-90" strokeWidth={2} aria-hidden />
                  Full showcase
                </button>
                <a
                  href={theme.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-neutral-300 bg-white px-4 py-2.5 font-sans text-sm font-semibold text-neutral-900 transition hover:border-neutral-400 hover:bg-neutral-50 sm:flex-none"
                >
                  Shopify
                  <ExternalLink className="h-3.5 w-3.5 opacity-80" strokeWidth={2} aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
