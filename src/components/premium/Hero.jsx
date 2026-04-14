import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import MacBookServices from "./MacBookServices.jsx";

function StarRow() {
  return (
    <div className="flex items-center justify-center gap-0.5 text-amber-400" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-[17px] w-[17px] fill-current sm:h-5 sm:w-5" strokeWidth={0} />
      ))}
    </div>
  );
}

function NeuralNetCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const NODE_COUNT = 65;
    const LINK_DIST = 180;
    const LINK_DIST_SQ = LINK_DIST * LINK_DIST;
    const PULSE_SPEED = 0.012;

    let nodes = [];
    let pulses = [];

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }

    function init() {
      nodes = [];
      pulses = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.15 + Math.random() * 0.25;
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: 2 + Math.random() * 2.5,
          dx: Math.cos(angle) * speed,
          dy: Math.sin(angle) * speed,
        });
      }
    }

    function spawnPulse() {
      if (nodes.length < 2) return;
      const a = Math.floor(Math.random() * nodes.length);
      let b = a;
      let best = Infinity;
      for (let i = 0; i < nodes.length; i++) {
        if (i === a) continue;
        const ddx = nodes[a].x - nodes[i].x;
        const ddy = nodes[a].y - nodes[i].y;
        const d2 = ddx * ddx + ddy * ddy;
        if (d2 < LINK_DIST_SQ && d2 < best) { best = d2; b = i; }
      }
      if (b !== a) {
        pulses.push({ from: a, to: b, t: 0 });
      }
    }

    let frame = 0;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      for (const n of nodes) {
        n.x += n.dx;
        n.y += n.dy;
        if (n.x < -20) n.x = canvas.width + 20;
        else if (n.x > canvas.width + 20) n.x = -20;
        if (n.y < -20) n.y = canvas.height + 20;
        else if (n.y > canvas.height + 20) n.y = -20;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const ddx = nodes[i].x - nodes[j].x;
          const ddy = nodes[i].y - nodes[j].y;
          const d2 = ddx * ddx + ddy * ddy;
          if (d2 < LINK_DIST_SQ) {
            const alpha = (1 - d2 / LINK_DIST_SQ) * 0.15;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0,179,134,${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,179,134,0.35)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,179,134,0.06)";
        ctx.fill();
      }

      if (frame % 8 === 0) spawnPulse();

      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.t += PULSE_SPEED;
        if (p.t > 1) { pulses.splice(i, 1); continue; }

        const nA = nodes[p.from];
        const nB = nodes[p.to];
        const px = nA.x + (nB.x - nA.x) * p.t;
        const py = nA.y + (nB.y - nA.y) * p.t;
        const glow = Math.sin(p.t * Math.PI);

        ctx.beginPath();
        ctx.arc(px, py, 3 + glow * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,229,168,${0.5 + glow * 0.4})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, 8 + glow * 6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,229,168,${0.08 + glow * 0.07})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    resize();
    init();
    draw();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-0" aria-hidden="true" />;
}

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{ background: "linear-gradient(160deg, #F5F5F0 0%, #EEEEE8 50%, #F5F5F0 100%)" }}
    >
      {/* Soft green glow — left */}
      <div
        className="pointer-events-none absolute -left-[15%] top-[10%] h-[70vh] w-[55vw] rounded-full opacity-[0.3] blur-[140px]"
        style={{ background: "radial-gradient(circle, #00E5A8 0%, transparent 70%)" }}
        aria-hidden
      />
      {/* Warm subtle glow — right */}
      <div
        className="pointer-events-none absolute -right-[10%] bottom-[5%] h-[50vh] w-[40vw] rounded-full opacity-[0.08] blur-[120px]"
        style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
        aria-hidden
      />

      <NeuralNetCanvas />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col items-center justify-center px-5 pb-16 pt-[calc(100px+2rem)] text-center sm:px-8 sm:pt-[calc(100px+3rem)] lg:px-10 lg:pt-[calc(100px+4rem)]">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-8 flex flex-col items-center gap-3 sm:mb-10 sm:flex-row sm:gap-5"
        >
          <div className="flex items-center gap-2.5 rounded-full border border-neutral-200/80 bg-white/60 px-4 py-2 shadow-sm backdrop-blur-md">
            <StarRow />
            <span className="text-sm font-semibold tracking-wide text-[#1A1A2E]">4.9</span>
          </div>
          <p className="text-sm font-medium text-neutral-500 sm:text-[0.95rem]">
            Merchant-loved themes · <span className="font-semibold text-[#1A1A2E]">534+</span> reviews
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease }}
          className="font-display w-full max-w-[950px] text-[clamp(2.8rem,10vw,7rem)] font-normal leading-[0.96] tracking-[-0.035em] text-[#1A1A2E]"
        >
          <span className="block">Premium Shopify themes</span>
          <span className="mt-2 block text-neutral-400 sm:mt-3">sold here — for your brand.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.16, ease }}
          className="mx-auto mt-7 max-w-[620px] font-sans text-[clamp(1.05rem,2.2vw,1.35rem)] leading-[1.7] text-neutral-500 sm:mt-8"
        >
          A dedicated theme studio — browse live demos, compare OS&nbsp;2.0 presets, and purchase directly.
          Documentation and launch support when you need it.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.26, ease }}
          className="mt-10 flex flex-col items-center gap-4 sm:mt-12 sm:flex-row sm:gap-5"
        >
          <Link
            to="/themes"
            className="group inline-flex items-center gap-2.5 rounded-full bg-[#1A1A2E] px-8 py-4 font-sans text-[0.95rem] font-semibold text-white shadow-md shadow-neutral-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#111128] hover:shadow-lg hover:shadow-neutral-900/15"
          >
            Explore Themes
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.5} />
          </Link>
          <a
            href="#showcase"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/70 px-8 py-4 font-sans text-[0.95rem] font-semibold text-[#1A1A2E] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-400 hover:bg-white hover:shadow-sm"
          >
            View Live Demos
          </a>
        </motion.div>

        {/* MacBook */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34, ease }}
          className="mt-16 w-full max-w-[min(100%,720px)] sm:mt-20 lg:max-w-4xl"
        >
          <MacBookServices />
        </motion.div>
      </div>
    </section>
  );
}
