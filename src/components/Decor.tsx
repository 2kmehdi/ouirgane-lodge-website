import { useEffect, useRef, type ReactNode } from "react";
import { animate, motion, useInView } from "framer-motion";
import { ArrowUpRight, Asterisk } from "lucide-react";
import { cn } from "../utils/cn";

/* ---------------------------------------------------------------- */
/* Grain — analog film noise over the whole site                      */
/* ---------------------------------------------------------------- */
export function Grain() {
  return <div className="grain" aria-hidden="true" />;
}

/* ---------------------------------------------------------------- */
/* Hand-drawn scribbles                                               */
/* ---------------------------------------------------------------- */
export function Squiggle({ className, color = "text-clay" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 120 12" fill="none" className={cn("block h-2.5 w-full", color, className)}>
      <motion.path
        d="M3 8 Q 18 3, 36 7 T 68 7 T 100 6 T 117 7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
      />
    </svg>
  );
}

/* A hand-drawn circle that scribbles itself around a word */
export function Circled({ children, className, delay = 0.3 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <span className={cn("relative inline-block whitespace-nowrap", className)}>
      <span className="relative z-10 px-2">{children}</span>
      <svg
        viewBox="0 0 100 62"
        fill="none"
        className="pointer-events-none absolute -inset-x-3 -inset-y-2 h-[calc(100%+16px)] w-[calc(100%+24px)] text-clay"
      >
        <motion.path
          d="M50 7 C 22 4, 7 17, 8 32 C 9 48, 33 57, 53 56 C 77 55, 94 45, 93 29 C 92 13, 66 5, 42 8"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 1.1, delay, ease: [0.65, 0, 0.35, 1] }}
        />
      </svg>
    </span>
  );
}

export function HandArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 44" fill="none" className={cn("w-20 text-clay", className)}>
      <motion.path
        d="M4 6 C 26 22, 54 28, 86 22"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      />
      <motion.path
        d="M76 14 L 88 22 L 78 30"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.4, delay: 1.0, ease: "easeOut" }}
      />
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* Torn paper edge — section divider                                  */
/* ---------------------------------------------------------------- */
export function TornEdge({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      className={cn("block h-[26px] w-full md:h-[40px]", flip && "-scale-y-100", className)}
      aria-hidden="true"
    >
      <path
        d="M0 48 L0 30 L24 26 L52 33 L88 24 L121 31 L160 22 L197 30 L233 19 L268 28 L310 21 L344 31 L383 23 L420 30 L455 17 L489 28 L528 22 L563 31 L604 20 L638 29 L676 24 L709 32 L748 21 L781 30 L819 25 L854 33 L893 22 L928 29 L963 24 L1001 31 L1036 22 L1071 28 L1110 19 L1143 31 L1182 24 L1216 30 L1254 22 L1288 29 L1324 20 L1358 31 L1394 25 L1420 30 L1440 26 L1440 48 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* Rotating sticker badge (Booking rating)                            */
/* ---------------------------------------------------------------- */
export function RatingSticker({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative grid h-28 w-28 place-items-center rounded-full bg-clay text-cream shadow-[0_10px_30px_-8px_rgba(56,142,66,0.7)] md:h-36 md:w-36",
        "-rotate-6 md:-rotate-[7deg]",
        className,
      )}
    >
      <div className="absolute inset-1.5 rounded-full border border-dashed border-cream/50" />
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full animate-spin-slower">
        <defs>
          <path id="sticker-arc" d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" />
        </defs>
        <text className="fill-cream font-mono text-[8.4px] uppercase tracking-[0.24em]">
          <textPath href="#sticker-arc">Wonderful · Booking.com · 178+ reviews ·</textPath>
        </text>
      </svg>
      <div className="text-center leading-none">
        <div className="font-display text-3xl font-semibold md:text-4xl">9.1</div>
        <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.28em] text-cream/80">/ 10</div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Buttons                                                            */
/* ---------------------------------------------------------------- */
export function ArrowButton({
  children,
  href,
  variant = "clay",
  className,
  external = true,
}: {
  children: ReactNode;
  href: string;
  variant?: "clay" | "cream" | "outline" | "outlineDark";
  className?: string;
  external?: boolean;
}) {
  const styles = {
    clay: "bg-clay text-cream hover:bg-clay-deep shadow-[0_14px_34px_-12px_rgba(56,142,66,0.65)]",
    cream: "bg-cream text-ink hover:bg-paper",
    outline: "border border-cream/40 text-cream hover:bg-cream hover:text-ink",
    outlineDark: "border border-ink/30 text-ink hover:bg-ink hover:text-cream",
  }[variant];
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      whileHover="on"
      initial="off"
      animate="off"
      className={cn(
        "group inline-flex items-center gap-3 rounded-full px-6 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300",
        styles,
        className,
      )}
    >
      <span className="relative overflow-hidden">
        <motion.span variants={{ off: { y: 0 }, on: { y: "-110%" } }} transition={{ duration: 0.28, ease: [0.65, 0, 0.35, 1] }} className="block">
          {children}
        </motion.span>
        <motion.span
          variants={{ off: { y: "110%" }, on: { y: 0 } }}
          transition={{ duration: 0.28, ease: [0.65, 0, 0.35, 1] }}
          className="absolute inset-0"
          aria-hidden="true"
        >
          {children}
        </motion.span>
      </span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" strokeWidth={2.2} />
    </motion.a>
  );
}

/* ---------------------------------------------------------------- */
/* Chapter heading                                                    */
/* ---------------------------------------------------------------- */
export function ChapterHead({
  no,
  kicker,
  title,
  tone = "dark",
  align = "left",
  className,
}: {
  no: string;
  kicker: string;
  title: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("relative", align === "center" && "text-center", className)}>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6 }}
        className={cn("flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] md:text-[11px]", align === "center" && "justify-center", tone === "dark" ? "text-clay" : "text-sand")}
      >
        <Asterisk className="h-3.5 w-3.5" />
        <span>Field note N°{no}</span>
        <span className={cn("h-px w-10 md:w-16", tone === "dark" ? "bg-ink/25" : "bg-cream/30")} />
        <span className={tone === "dark" ? "text-ink/70" : "text-cream/70"}>{kicker}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "mt-5 font-display text-[2.6rem] leading-[1.02] font-medium tracking-[-0.01em] text-balance md:text-6xl lg:text-[4.3rem]",
          tone === "dark" ? "text-ink" : "text-cream",
        )}
      >
        {title}
      </motion.h2>
    </div>
  );
}

/* Giant ghost index number */
export function GhostNumber({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("pointer-events-none absolute select-none font-display text-[34vw] leading-none font-light italic opacity-[0.07] md:text-[17vw]", className)}
    >
      {children}
    </span>
  );
}

/* ---------------------------------------------------------------- */
/* Tape corners for photos                                            */
/* ---------------------------------------------------------------- */
export function Tape({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cn("tape", className)} />;
}

/* ---------------------------------------------------------------- */
/* Live local time in Ouirgane                                        */
/* ---------------------------------------------------------------- */
export function LocalTime({ className }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Africa/Casablanca",
    });
    const tick = () => {
      if (ref.current) ref.current.textContent = fmt.format(new Date());
    };
    tick();
    const id = setInterval(tick, 20_000);
    return () => clearInterval(id);
  }, [inView]);
  return <span ref={ref} className={className}>--:--</span>;
}

/* Count-up number on scroll into view */
export function CountUp({ to, decimals = 0, className }: { to: number; decimals?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = v.toFixed(decimals);
      },
    });
    return controls.stop;
  }, [inView, to, decimals]);
  return (
    <span ref={ref} className={className}>
      0
    </span>
  );
}
