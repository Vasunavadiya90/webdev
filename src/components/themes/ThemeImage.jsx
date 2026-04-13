import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  THEME_IMAGE_FALLBACK,
  THEME_IMAGE_FALLBACK_3,
  THEME_IMAGE_FALLBACK_ALT,
} from "../../data/shopifyThemes.js";

/**
 * Multi-fallback Unsplash chain, cached-image detection, bright skeleton — avoids long blank frames.
 */
export default function ThemeImage({
  src,
  alt,
  eager = false,
  className = "",
  fill = false,
  aspectClass = fill ? "" : "aspect-[16/10]",
  roundedClass = "rounded-2xl",
}) {
  const [attempt, setAttempt] = useState(0);
  const [phase, setPhase] = useState("loading"); // loading | ready | fatal
  const imgRef = useRef(null);

  const chain = useMemo(() => {
    const list = [src, THEME_IMAGE_FALLBACK, THEME_IMAGE_FALLBACK_ALT, THEME_IMAGE_FALLBACK_3];
    return [...new Set(list.filter(Boolean))];
  }, [src]);

  const activeSrc = chain[Math.min(attempt, chain.length - 1)];

  useEffect(() => {
    setAttempt(0);
    setPhase("loading");
  }, [src]);

  useLayoutEffect(() => {
    const el = imgRef.current;
    if (el?.complete && el.naturalHeight > 0) {
      setPhase("ready");
    }
  }, [activeSrc]);

  const showSkeleton = phase === "loading";
  const showImg = phase === "ready";

  return (
    <div
      className={`relative isolate min-h-0 w-full overflow-hidden bg-neutral-100 ${fill ? "absolute inset-0 h-full" : ""} ${aspectClass} ${roundedClass} ${className}`}
    >
      {showSkeleton ? (
        <div
          className="absolute inset-0 z-10 bg-gradient-to-br from-neutral-100 via-neutral-200/70 to-neutral-100"
          aria-hidden
        >
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/80 to-transparent" />
        </div>
      ) : null}
      {phase === "fatal" ? (
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-200"
          role="img"
          aria-label={`${alt} — image unavailable`}
        />
      ) : (
        <img
          ref={imgRef}
          key={activeSrc}
          src={activeSrc}
          alt={alt}
          width={1600}
          height={1000}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={eager ? "high" : "auto"}
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setPhase("ready")}
          onError={() => {
            setAttempt((a) => {
              if (a >= chain.length - 1) {
                queueMicrotask(() => setPhase("fatal"));
                return a;
              }
              queueMicrotask(() => setPhase("loading"));
              return a + 1;
            });
          }}
          className={`relative z-[2] h-full w-full object-cover transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${
            showImg ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
          }`}
        />
      )}
    </div>
  );
}
