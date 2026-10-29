import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EASE } from "./Motion";

export function Preloader() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const t0 = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      setPct(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <motion.div
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: EASE }}
      className="fixed inset-0 z-[100] grid place-items-center bg-paper text-ink"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Official Lodge Logo */}
        <motion.img
          src="/logo.png"
          alt="Ouirgane Discovery Lodge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-16 w-auto object-contain md:h-20"
        />
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-[10px] uppercase tracking-[0.34em] text-ink/70"
          >
            Your Comfort is Our Priority · High Atlas
          </motion.p>
        </div>
        <div className="flex w-56 items-center gap-3">
          <div className="h-px flex-1 bg-ink/15 relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 bg-clay transition-[width] duration-150" style={{ width: `${pct}%` }} />
          </div>
          <span className="font-mono text-[11px] tabular-nums text-ink/60">{pct}%</span>
        </div>
      </div>
    </motion.div>
  );
}
