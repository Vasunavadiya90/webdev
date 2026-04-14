import { Link } from "react-router-dom";
import pixelMark from "@/assets/pixel_mark.svg";

const wrap =
  "group flex min-w-0 items-center gap-2.5 text-left transition-opacity duration-300 hover:opacity-[0.88] sm:gap-3 md:gap-3.5";

export default function NavBrand({ variant = "nav", className = "" }) {
  const isNav = variant === "nav";

  const imgClass = isNav
    ? "h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11 md:h-12 md:w-12 lg:h-[3.25rem] lg:w-[3.25rem]"
    : "h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11 md:h-12 md:w-12";

  const nameColor = "text-[#1A1A2E]";
  const tagColor = "text-[#00B386]";

  const inner = (
    <>
      <img
        src={pixelMark}
        alt=""
        width={52}
        height={52}
        className={imgClass}
        decoding="async"
        aria-hidden
      />
      <span className="min-w-0 flex flex-col">
        <span
          className={`block leading-[1] tracking-[-0.03em] transition-colors duration-300 ${nameColor}`}
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(1.3rem, 3.5vw, 1.65rem)" }}
        >
          Pixel
        </span>
        <span
          className={`mt-0.5 block font-sans text-[0.65rem] font-semibold uppercase tracking-[0.3em] transition-colors duration-300 sm:text-[0.7rem] ${tagColor}`}
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
