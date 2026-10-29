import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Asterisk, MapPin } from "lucide-react";
import { BOOKING_URL, COORDS, IMG } from "../data/lodge";
import { ArrowButton, RatingSticker } from "./Decor";
import { EASE, SplitWords } from "./Motion";
import { Ticker } from "./Ticker";

export function Hero({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] overflow-hidden bg-night text-cream">
      {/* backdrop */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <img
          src={IMG.hero}
          alt="The Toubkal valley above Ouirgane, High Atlas"
          className="h-full w-full animate-kenburns object-cover"
          style={{ filter: "sepia(0.22) saturate(1.05) contrast(1.02) brightness(0.94)" }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-night/70 via-night/10 to-night/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-night/45 via-transparent to-transparent" />

      {/* top meta row */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute inset-x-0 top-20 z-10 hidden items-center justify-between px-6 font-mono text-[10px] uppercase tracking-[0.28em] text-cream/80 md:top-24 md:flex md:px-12"
      >
        <motion.span initial={{ opacity: 0, y: -8 }} animate={ready ? { opacity: 1, y: 0 } : undefined} transition={{ delay: 1.0, duration: 0.7 }}>
          Bed &amp; Breakfast — Ouirgane Valley
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 1.15, duration: 0.7 }}
          className="flex items-center gap-2"
        >
          <MapPin className="h-3 w-3" />
          {COORDS}
        </motion.span>
        <motion.span initial={{ opacity: 0, y: -8 }} animate={ready ? { opacity: 1, y: 0 } : undefined} transition={{ delay: 1.3, duration: 0.7 }}>
          At the foot of Toubkal
        </motion.span>
      </motion.div>

      {/* main block */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1500px] flex-col justify-end px-6 pb-36 pt-40 md:px-12 md:pb-40">
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          animate={ready ? { opacity: 1, x: 0 } : undefined}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.34em] text-sand md:text-[11px]"
        >
          <Asterisk className="h-4 w-4 text-clay" />
          A family-run lodge, above the valley
        </motion.p>

        <h1 className="font-display font-medium leading-[0.94] tracking-[-0.015em]">
          <span className="block text-[clamp(3.4rem,11.5vw,10.5rem)]">
            <SplitWords text="Ouirgane" active={ready} delay={0.7} />
          </span>
          <span className="block pl-[6vw] font-light italic text-[clamp(2.6rem,9vw,8.4rem)] text-sand">
            <SplitWords text="Discovery" active={ready} delay={0.95} />
            <span className="inline-block w-[0.35em]" />
            <SplitWords text="Lodge" active={ready} delay={1.15} />
          </span>
        </h1>

        {/* handwritten annotation */}
        <motion.p
          initial={{ opacity: 0, rotate: -8 }}
          animate={ready ? { opacity: 1, rotate: -4 } : undefined}
          transition={{ delay: 1.55, duration: 0.8 }}
          className="mt-6 origin-left font-hand text-2xl text-gold md:ml-[30vw] md:text-3xl"
        >
          pool with a view, breakfast on the terrace, stars after ten ↴
        </motion.p>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 1.35, duration: 0.8, ease: EASE }}
            className="max-w-md"
          >
            <p className="text-[15px] leading-relaxed text-cream/85">
              Nine beds, a Berber kitchen and a pool that looks straight down the valley. 500 metres from the Ouirgane dam,
              one hour from Marrakech — and nobody is in a hurry here.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <ArrowButton href={BOOKING_URL}>Reserve on Booking.com</ArrowButton>
              <a
                href="#lodge"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cream/80 underline-offset-4 transition-colors hover:text-cream"
              >
                Explore the lodge <ArrowDown className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: 10 }}
            animate={ready ? { opacity: 1, scale: 1, rotate: -6 } : undefined}
            transition={{ delay: 1.5, duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
            className="hidden shrink-0 md:block"
          >
            <RatingSticker />
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : undefined}
        transition={{ delay: 2.1 }}
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.34em] text-cream/60">Scroll</span>
          <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} className="h-8 w-px bg-cream/50" />
        </div>
      </motion.div>

      {/* clay ticker band */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : undefined}
        transition={{ delay: 1.7, duration: 0.8, ease: EASE }}
        className="absolute inset-x-[-2%] bottom-0 z-10 -rotate-1 bg-clay py-2.5 text-cream shadow-[0_-6px_30px_rgba(0,0,0,0.35)]"
      >
        <Ticker items={["Pool with a view", "Berber kitchen", "Atlas trails", "Cooking class", "Mint tea, always", "Est. Ouirgane Valley"]} />
      </motion.div>
    </section>
  );
}
