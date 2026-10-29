import { ArrowRight, Coffee, Croissant, Soup, UtensilsCrossed } from "lucide-react";
import { IMG } from "../data/lodge";
import { TornEdge } from "./Decor";
import { Reveal, SplitWords } from "./Motion";
import { cn } from "../utils/cn";

const PHOTOS = [
  { src: IMG.tagineLift, alt: "Tagine lifted at the table" },
  { src: IMG.teaPour, alt: "Mint tea poured high" },
  { src: IMG.tagineFresh, alt: "Tagine with olives and lemon" },
  { src: IMG.teaHands, alt: "Tea handed over, guest to host" },
  { src: IMG.tagineClot, alt: "Slow-cooked vegetables in clay" },
];

const SERVED = [
  {
    icon: Croissant,
    title: "Breakfast — included",
    line: "08:00 — 10:30 on the terrace. Flatbread from the earth oven, amlou, olives, eggs, our own jam.",
  },
  {
    icon: Soup,
    title: "The family restaurant",
    line: "Tagines all week, couscous on Fridays. Halal, vegetarian and vegan — always. Special menus on request.",
  },
  {
    icon: Coffee,
    title: "Coffee house & tea",
    line: "All day by the pool. Then a complimentary evening reception — mint tea and something sweet, on the house.",
  },
];

export function Dining() {
  return (
    <section className="relative bg-clay-deep text-cream">
      <div className="bg-cream">
        <TornEdge className="text-clay-deep" />
      </div>

      <div className="relative overflow-hidden py-24 md:py-32">
        {/* faint monumental word */}
        <span aria-hidden="true" className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 select-none whitespace-nowrap font-display text-[24vw] font-light italic leading-none text-cream/[0.05]">
          tagine
        </span>

        <div className="relative mx-auto max-w-[1500px] px-6 text-center md:px-12">
          <Reveal className="flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-sand/90 md:text-[11px]">
            <UtensilsCrossed className="h-4 w-4" />
            Field note N°03.5 — The kitchen
          </Reveal>

          <h2 className="mx-auto mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.02] md:text-7xl">
            <SplitWords text="Bread at dawn," /> <br />
            <em className="font-light italic">
              <SplitWords text="tagine at dusk." delay={0.25} />
            </em>
          </h2>

          <Reveal delay={0.35} className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.24em] text-cream/75">
            <span>Halal</span>
            <span className="h-1 w-1 rounded-full bg-cream/50" />
            <span>Vegetarian</span>
            <span className="h-1 w-1 rounded-full bg-cream/50" />
            <span>Vegan</span>
            <span className="h-1 w-1 rounded-full bg-cream/50" />
            <span>From the garden when ready</span>
          </Reveal>

          {/* carousel strip */}
          <Reveal delay={0.2} className="relative mt-14">
            <div className="group overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="flex w-max animate-marquee gap-5 group-hover:[animation-play-state:paused] md:gap-8">
                {[...PHOTOS, ...PHOTOS].map((p, i) => (
                  <figure
                    key={i}
                    className={cn("shrink-0 overflow-hidden rounded-sm shadow-[0_18px_44px_-18px_rgba(0,0,0,0.5)]", i % 2 === 0 ? "-rotate-1" : "rotate-1")}
                  >
                    <img src={p.src} alt={p.alt} loading="lazy" className="h-48 w-[280px] object-cover warm-img md:h-64 md:w-[360px]" />
                  </figure>
                ))}
              </div>
            </div>
            <p className="pointer-events-none absolute -top-8 right-2 hidden rotate-3 font-hand text-2xl text-sand md:block">
              cousin Omar&rsquo;s pots — ask for the recipe
            </p>
          </Reveal>

          {/* served list */}
          <div className="mx-auto mt-16 grid max-w-5xl gap-px overflow-hidden rounded-sm bg-cream/15 text-left sm:grid-cols-3">
            {SERVED.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1} className="group bg-clay-deep/95 p-6 transition-colors duration-500 hover:bg-night/35 md:p-8">
                <s.icon className="h-5 w-5 text-sand" strokeWidth={1.8} />
                <h3 className="mt-4 font-display text-xl italic">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">{s.line}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-12 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-cream/85">
            Hungry? Book a room and dinner follows
            <ArrowRight className="h-4 w-4" />
          </Reveal>
        </div>
      </div>

      <div className="bg-night">
        <TornEdge className="text-clay-deep" flip />
      </div>
    </section>
  );
}
