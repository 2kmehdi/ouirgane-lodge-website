import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BOOKING_URL, EXPERIENCES } from "../data/lodge";
import { ArrowButton, ChapterHead, GhostNumber, HandArrow, Tape } from "./Decor";
import { EASE, Reveal } from "./Motion";
import { cn } from "../utils/cn";

export function Experiences() {
  const [active, setActive] = useState(0);
  const current = EXPERIENCES[active];

  return (
    <section id="days" className="relative overflow-hidden bg-cream py-24 md:py-36">
      <GhostNumber className="-right-6 top-6 text-ink">03</GhostNumber>

      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <ChapterHead
            no="03"
            kicker="Days"
            title={
              <>
                Days here move at <em className="font-light italic">mountain</em> pace.
              </>
            }
          />
          <Reveal delay={0.2} className="hidden lg:block">
            <p className="origin-right rotate-2 font-hand text-2xl text-clay">walk, pedal, cook, pour, repeat →</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* sticky picture frame (desktop) */}
          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <Reveal>
                <div className="relative bg-paper p-3 pb-12 shadow-[0_24px_60px_-24px_rgba(34,26,17,0.4)]">
                  <Tape className="-top-3 left-10 -rotate-3" />
                  <Tape className="-top-2.5 right-10 rotate-2" />
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <AnimatePresence mode="popLayout">
                      <motion.img
                        key={current.id}
                        src={current.img}
                        alt={current.title}
                        initial={{ opacity: 0, scale: 1.12, clipPath: "inset(0% 0% 100% 0%)" }}
                        animate={{ opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0%)" }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7, ease: EASE }}
                        className="absolute inset-0 h-full w-full object-cover warm-img"
                      />
                    </AnimatePresence>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/60">
                      {current.index} — {current.line}
                    </p>
                    <HandArrow className="w-12 -rotate-12" />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* index list */}
          <div className="lg:col-span-7">
            <ul className="border-t border-dashed border-ink/20">
              {EXPERIENCES.map((exp, i) => (
                <Reveal key={exp.id} delay={i * 0.05}>
                  <li
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group cursor-pointer border-b border-dashed border-ink/20 py-6 transition-colors duration-300 md:py-7"
                  >
                    {/* mobile picture */}
                    <div className="mb-4 overflow-hidden lg:hidden">
                      <img src={exp.img} alt={exp.title} loading="lazy" className="aspect-[16/9] w-full object-cover warm-img" />
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="flex items-baseline gap-4 md:gap-6">
                        <span className="font-mono text-xs text-clay">{exp.index}</span>
                        <h3
                          className={cn(
                            "font-display text-3xl font-medium leading-none transition-all duration-300 md:text-[2.9rem]",
                            i === active ? "text-clay" : "text-ink group-hover:text-clay",
                          )}
                        >
                          {exp.title}
                        </h3>
                      </div>
                      <ArrowUpRight
                        className={cn(
                          "h-5 w-5 shrink-0 transition-all duration-300 md:h-6 md:w-6",
                          i === active ? "rotate-45 text-clay" : "text-ink/40 group-hover:rotate-45 group-hover:text-clay",
                        )}
                      />
                    </div>
                    <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink/50 md:pl-12 lg:pl-[3.6rem]">{exp.line}</p>
                    <motion.p
                      initial={false}
                      animate={{ height: i === active ? "auto" : 0, opacity: i === active ? 1 : 0, marginTop: i === active ? 10 : 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="hidden max-w-md overflow-hidden text-sm leading-relaxed text-ink/70 lg:block lg:pl-[3.6rem]"
                    >
                      {exp.detail}
                    </motion.p>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70 lg:hidden">{exp.detail}</p>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center gap-4">
              <ArrowButton href={BOOKING_URL} variant="outlineDark">
                Reserve, then plan your days
              </ArrowButton>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                All arranged at the front desk — fairly priced, always
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
