import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BedDouble, Mountain, Users, Plus } from "lucide-react";
import { BOOKING_URL, ROOMS, type Room } from "../data/lodge";
import { ArrowButton, ChapterHead, GhostNumber, Tape, TornEdge } from "./Decor";
import { EASE, Reveal } from "./Motion";
import { cn } from "../utils/cn";

function RoomCard({ room, index }: { room: Room; index: number }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: EASE }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn(
        "group relative bg-cream text-ink shadow-[0_28px_60px_-30px_rgba(0,0,0,0.55)] transition-all duration-500",
        index === 0 && "md:-rotate-2 md:hover:rotate-0",
        index === 1 && "md:translate-y-10 md:rotate-1 md:hover:rotate-0",
        index === 2 && "md:-rotate-1 md:hover:rotate-0",
        "md:hover:-translate-y-3",
      )}
    >
      <Tape className={cn("z-10", index === 1 ? "-top-3 right-6 rotate-3" : "-top-3 left-6 -rotate-6")} />

      {/* picture */}
      <div className="relative m-3 mb-0 overflow-hidden">
        <motion.img
          src={room.img}
          alt={room.name}
          loading="lazy"
          animate={{ scale: hover ? 1.07 : 1 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="aspect-[4/5] w-full object-cover warm-img sm:aspect-[7/8] lg:aspect-[4/5]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/35 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 -rotate-3 rounded-sm bg-ink/85 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.22em] text-cream backdrop-blur">
          {room.tag}
        </span>
        <span className="absolute bottom-3 right-3 rounded-sm bg-cream/95 px-2.5 py-1.5 font-mono text-[10px] tracking-[0.12em] text-ink shadow">
          {room.meter}
        </span>
      </div>

      {/* body */}
      <div className="p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink/55">
          <span className="inline-flex items-center gap-1.5">
            <BedDouble className="h-3.5 w-3.5 text-clay" /> {room.bed}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-clay" /> {room.sleeps}
          </span>
        </div>

        <h3 className="mt-3 font-display text-[1.7rem] leading-tight font-medium">{room.name}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-ink/68">{room.note}</p>

        <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2">
          {room.perks.map((p) => (
            <li key={p} className="flex items-center gap-1.5 text-[12.5px] text-ink/70">
              <Plus className="h-3 w-3 shrink-0 text-clay" strokeWidth={3} />
              {p}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center justify-between border-t border-dashed border-ink/20 pt-4">
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/60">
            <Mountain className="h-3.5 w-3.5 text-clay" />
            {room.view}
          </span>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="group/btn inline-flex items-center gap-1.5 rounded-full bg-clay px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-cream transition-colors duration-300 hover:bg-clay-deep"
          >
            Reserve
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:rotate-45" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function Rooms() {
  return (
    <section id="rooms" className="relative bg-night text-cream">
      {/* torn edge tearing out of the paper section above */}
      <div className="relative bg-paper">
        <TornEdge className="text-night" />
      </div>

      <GhostNumber className="-left-8 top-24 text-cream">02</GhostNumber>

      <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-12 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <ChapterHead
            no="02"
            kicker="Sleep"
            tone="light"
            title={
              <>
                Three rooms, nine beds, <em className="font-light italic text-sand">one</em> horizon.
              </>
            }
          />
          <Reveal delay={0.2} className="max-w-xs">
            <p className="text-sm leading-relaxed text-cream/60">
              Every rate includes a proper Moroccan breakfast on the terrace. Prices move with the season — you will see
              the live rate when you reserve.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-10">
          {ROOMS.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </div>

        <Reveal delay={0.15} className="mt-24 flex flex-col items-center gap-4 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">
            Free cancellation on most rates · availability updates in real time
          </p>
          <ArrowButton href={BOOKING_URL} variant="cream">
            Check dates on Booking.com
          </ArrowButton>
        </Reveal>
      </div>

      <div className="relative bg-cream">
        <TornEdge className="text-night" flip />
      </div>
    </section>
  );
}
