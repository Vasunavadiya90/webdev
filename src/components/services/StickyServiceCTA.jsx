import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const ring =
  "shadow-[0_0_0_1px_rgba(15,23,42,0.06),0_12px_32px_-8px_rgba(15,23,42,0.25)] hover:shadow-[0_0_0_1px_rgba(52,211,153,0.35),0_16px_40px_-6px_rgba(52,211,153,0.2)]";

export default function StickyServiceCTA({ href = "/#convert", label = "Start a project" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.45 }}
      className="pointer-events-none fixed bottom-6 right-5 z-40 sm:bottom-8 sm:right-8"
    >
      <Link
        to={href}
        className={`pointer-events-auto inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3.5 font-sans text-sm font-semibold text-white transition-all duration-300 ${ring}`}
      >
        <MessageCircle className="h-4 w-4 text-emerald-300/90" strokeWidth={2} aria-hidden />
        {label}
      </Link>
    </motion.div>
  );
}
