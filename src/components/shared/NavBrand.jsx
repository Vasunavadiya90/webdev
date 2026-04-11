import { Link } from "react-router-dom";
import pixelMark from "@/assets/pixel_mark.svg";

const wrap =
  "group flex min-w-0 items-center gap-2.5 text-left transition-opacity duration-300 hover:opacity-[0.88] sm:gap-3.5 md:gap-4";

/**
 * Pixel mark + serif “Pixel” + tracked lowercase “template” (matches brand lockup).
 * @param {"nav" | "footer"} variant
 */
export default function NavBrand({ variant = "nav", className = "" }) {
  const isNav = variant === "nav";
  const imgClass = isNav
    ? "h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-[4.25rem] lg:w-[4.25rem]"
    : "h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14 md:h-16 md:w-16";
  const pixelClass = isNav
    ? "text-[clamp(1.85rem,8.5vw,2.35rem)] sm:text-[clamp(2rem,6.5vw,2.85rem)] md:text-[clamp(2.15rem,4.2vw,3.15rem)] lg:text-[clamp(2.35rem,3.5vw,3.5rem)]"
    : "text-3xl sm:text-4xl md:text-[2.35rem]";
  const templateClass = isNav
    ? "text-[clamp(0.58rem,2.2vw,0.72rem)] sm:text-[0.68rem] md:text-[0.72rem] lg:text-[0.78rem]"
    : "text-[0.65rem] sm:text-[0.7rem] md:text-xs";

  const inner = (
    <>
      <img
        src={pixelMark}
        alt=""
        width={80}
        height={80}
        className={imgClass}
        decoding="async"
        aria-hidden
      />
      <span className="min-w-0">
        <span
          className={`block font-display font-normal leading-[0.95] tracking-[-0.03em] text-neutral-950 ${pixelClass}`}
        >
          Pixel
        </span>
        <span
          className={`mt-0.5 block font-sans font-medium lowercase tracking-[0.38em] text-neutral-500 md:tracking-[0.42em] ${templateClass}`}
        >
          template
        </span>
      </span>
    </>
  );

  if (isNav) {
    return (
      <Link
        to="/"
        className={`${wrap} max-w-[min(92vw,400px)] justify-self-start sm:max-w-none ${className}`}
        aria-label="Pixel Template home"
      >
        {inner}
      </Link>
    );
  }

  return <div className={`${wrap} ${className}`}>{inner}</div>;
}
