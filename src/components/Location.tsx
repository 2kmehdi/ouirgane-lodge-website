import { useState } from "react";
import { motion } from "framer-motion";
import { Compass, ExternalLink, MapPin, MessageCircle, Phone } from "lucide-react";
import { BOOKING_URL, FACEBOOK_URL, GOOD_TO_KNOW, INSTAGRAM_URL, MAPS_EMBED_URL, MAPS_FULL_URL, MAPS_URL, NEARBY, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "../data/lodge";
import { ArrowButton, ChapterHead, LocalTime, Tape, TornEdge } from "./Decor";
import { Reveal } from "./Motion";

/* Hand-drawn expedition map, drawn live as you arrive */
function ExpeditionMap() {
  return (
    <div className="relative -rotate-[1.2deg] bg-paper p-5 pb-16 shadow-[0_32px_80px_-30px_rgba(0,0,0,0.6)] md:p-7">
      <Tape className="-top-3 left-10 -rotate-3" />
      <Tape className="-top-3 right-10 rotate-2" />

      <div className="mb-4 flex items-center justify-between font-mono text-[9.5px] uppercase tracking-[0.26em] text-ink/60">
        <span className="flex items-center gap-2">
          <Compass className="h-4 w-4 text-clay" />
          Expedition map — Ouirgane valley
        </span>
        <span>fig. 06</span>
      </div>

      {/* postal stamp */}
      <div className="absolute -right-2 -top-5 rotate-6 rounded-sm border-[2.5px] border-clay/85 bg-paper/95 px-3 py-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.22em] text-clay shadow-md md:-right-4">
        62 km from Marrakech
      </div>

      <svg viewBox="0 0 600 440" className="h-auto w-full text-ink" fill="none">
        {/* faint contours */}
        {[
          "M-20 60 C 120 20, 260 90, 400 50 S 580 80, 640 40",
          "M-20 150 C 90 120, 200 175, 330 140 S 540 160, 640 120",
          "M-20 240 C 80 215, 190 260, 320 230 S 530 250, 640 210",
        ].map((d, i) => (
          <path key={i} d={d} stroke="currentColor" strokeOpacity="0.12" strokeWidth="1.4" />
        ))}

        {/* Toubkal massif */}
        <g stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round">
          <path d="M486 84 L512 44 L538 84 Z" />
          <path d="M522 86 L548 50 L574 86 Z" />
          <path d="M504 62 L512 72 L520 60 L530 72" strokeWidth="1.6" />
        </g>
        <text x="500" y="104" textAnchor="middle" className="fill-ink font-mono text-[11px] uppercase" letterSpacing="2">
          Toubkal 4,167 m
        </text>

        {/* the road */}
        <motion.path
          d="M88 384 C 128 358, 152 354, 186 330 S 226 300, 256 284 S 312 240, 356 216 S 412 176, 446 150"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 2.1, ease: "easeInOut" }}
        />
        {/* trail up to the peak */}
        <motion.path
          d="M446 150 Q 476 128, 512 88"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="7 7"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.8, delay: 2.0 }}
        />

        {/* stops */}
        {[
          { x: 88, y: 384, label: "Marrakech", lx: 98, ly: 392, anchor: "start" as const },
          { x: 186, y: 330, label: "Amizmiz", lx: 176, ly: 322, anchor: "end" as const },
          { x: 256, y: 284, label: "L. Takerkoust", lx: 266, ly: 280, anchor: "start" as const },
          { x: 446, y: 150, label: "Imlil", lx: 436, ly: 140, anchor: "end" as const },
        ].map((s, i) => (
          <motion.g
            key={s.label}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ delay: 0.35 + i * 0.45, type: "spring", stiffness: 260, damping: 16 }}
            style={{ transformOrigin: `${s.x}px ${s.y}px` }}
          >
            <circle cx={s.x} cy={s.y} r="4.5" fill="currentColor" />
            <text x={s.lx} y={s.ly} textAnchor={s.anchor} className="fill-ink/75 font-mono text-[11px] uppercase" letterSpacing="1.6">
              {s.label}
            </text>
          </motion.g>
        ))}

        {/* THE LODGE */}
        <motion.g
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ delay: 2.1, type: "spring", stiffness: 200, damping: 14 }}
          style={{ transformOrigin: "356px 216px" }}
        >
          <circle cx="356" cy="216" r="7" className="fill-clay" />
          <circle cx="356" cy="216" r="15" className="stroke-clay" strokeWidth="2" strokeDasharray="4 5" />
          <text x="368" y="212" className="fill-clay font-mono text-[13px] font-semibold uppercase" letterSpacing="2">
            Ouirgane
          </text>
          <text x="368" y="228" className="fill-clay/80 font-mono text-[9.5px] uppercase" letterSpacing="2">
            the lodge — you are here
          </text>
        </motion.g>

        {/* dam */}
        <g stroke="#488f54" strokeWidth="1.8" strokeLinecap="round">
          <path d="M286 252 q 8 -7 16 0 t 16 0 t 16 0" />
          <path d="M292 262 q 8 -7 16 0 t 16 0 t 16 0" />
          <path d="M298 272 q 8 -7 16 0 t 16 0 t 16 0" />
        </g>
        <text x="286" y="292" className="fill-olive font-mono text-[9.5px] uppercase" letterSpacing="1.6">
          Ouirgane dam · 500 m
        </text>

        {/* distance notes */}
        <text x="120" y="352" className="fill-ink/50 font-mono text-[9px]" letterSpacing="1.5" transform="rotate(-24 120 352)">
          62 km
        </text>
        <text x="452" y="118" className="fill-ink/50 font-mono text-[9px]" letterSpacing="1.5" transform="rotate(-32 452 118)">
          16 km
        </text>

        {/* compass */}
        <motion.g
          initial={{ opacity: 0, rotate: -30 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ delay: 2.4, duration: 0.7 }}
          style={{ transformOrigin: "548px 378px" }}
        >
          <circle cx="548" cy="378" r="19" stroke="currentColor" strokeWidth="1.6" />
          <path d="M548 366 L543 384 L548 380 L553 384 Z" className="fill-clay" />
          <text x="548" y="358" textAnchor="middle" className="fill-ink font-mono text-[10px]">
            N
          </text>
        </motion.g>
      </svg>

      <p className="absolute bottom-4 left-6 -rotate-2 font-hand text-xl text-clay">not to scale — the valley bends as it pleases</p>
    </div>
  );
}

/* Interactive Live Google Map View */
function LiveGoogleMapView() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-cream/20 bg-paper/10 p-2 shadow-2xl backdrop-blur-sm">
      <div className="relative h-[380px] w-full overflow-hidden rounded-xl md:h-[440px]">
        <iframe
          src={MAPS_EMBED_URL}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ouirgane Discovery Lodge Google Map Location"
          className="h-full w-full grayscale-[25%] contrast-[1.05]"
        />
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cream/70">
        <span className="flex items-center gap-1.5 text-clay">
          <MapPin className="h-3.5 w-3.5" />
          Ouirgane Discovery Lodge · High Atlas
        </span>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-cream transition-colors hover:text-clay underline-offset-4 hover:underline"
        >
          Open in Google Maps App <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}

export function LocationSection() {
  const [showGoogleMap, setShowGoogleMap] = useState(false);

  return (
    <section id="find" className="relative bg-night text-cream">
      <div className="bg-paper">
        <TornEdge className="text-night" />
      </div>

      <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-12 md:py-32">
        <div className="grid items-start gap-14 lg:grid-cols-12">
          {/* Left Column: Expedition Map (Primary as requested) */}
          <div className="relative lg:col-span-6">
            <Reveal>
              <ExpeditionMap />
            </Reveal>

            {/* Google Map Toggle Accordion */}
            <div className="mt-6 flex flex-col items-center sm:items-start">
              <button
                onClick={() => setShowGoogleMap(!showGoogleMap)}
                className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-5 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-cream transition-colors hover:border-clay hover:bg-clay"
              >
                <MapPin className="h-3.5 w-3.5 text-clay group-hover:text-cream" />
                <span>{showGoogleMap ? "Hide Interactive Google Map" : "View Interactive Google Map (Satellite)"}</span>
              </button>

              {showGoogleMap && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 w-full"
                >
                  <LiveGoogleMapView />
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Column: Location details, nearby, contact */}
          <div className="lg:col-span-6 lg:pl-6">
            <ChapterHead
              no="06"
              kicker="Find us"
              tone="light"
              title={
                <>
                  An hour from the red city. <em className="font-light italic text-sand">A world</em> away.
                </>
              }
            />

            <Reveal delay={0.15} className="mt-7 text-[15px] leading-relaxed text-cream/70">
              From Marrakech, follow the scenic mountain road through Amizmiz toward the Kik Plateau and Ouirgane Valley.
              The tarmac curves right past the shimmering dam and leads directly to our lodge gate.
              Let us know your flight details and our private shuttle will welcome you at Marrakech–Menara airport (62 km).
            </Reveal>

            {/* Nearby ledger */}
            <Reveal delay={0.2} className="mt-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/45">Close by, once you&rsquo;re here</p>
              <ul className="mt-4 grid gap-x-10 sm:grid-cols-2">
                {NEARBY.map((n) => (
                  <li key={n.place} className="flex items-baseline gap-3 border-b border-dashed border-cream/12 py-2.5">
                    <span className="font-display text-base text-cream/90">{n.place}</span>
                    <span className="flex-1 border-b border-dotted border-cream/25" />
                    <span className="font-mono text-[10px] tabular-nums text-sand">{n.dist}</span>
                    <span className="hidden font-mono text-[9px] uppercase tracking-[0.14em] text-cream/40 xl:inline">{n.how}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Good to know */}
            <Reveal delay={0.25} className="mt-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/45">Good to know</p>
              <dl className="mt-4 grid gap-x-10 sm:grid-cols-2">
                {GOOD_TO_KNOW.map((g) => (
                  <div key={g.k} className="border-b border-dashed border-cream/12 py-2.5">
                    <dt className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-cream/45">{g.k}</dt>
                    <dd className="mt-1 text-sm text-cream/85">{g.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.3} className="mt-9 flex flex-wrap items-center gap-3">
              <ArrowButton href={BOOKING_URL}>Reserve on Booking.com</ArrowButton>
              <ArrowButton href={MAPS_URL} variant="outline">
                Open in Google Maps
              </ArrowButton>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-clay bg-clay/10 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-cream transition-colors hover:bg-clay"
              >
                <MessageCircle className="h-4 w-4 text-clay group-hover:text-cream" />
                WhatsApp Us
              </a>
            </Reveal>

            {/* Social media connections */}
            <Reveal delay={0.33} className="mt-6 flex flex-wrap items-center gap-4 border-t border-dashed border-cream/15 pt-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream/50">Follow our valley:</span>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-sand hover:text-cream"
              >
                <span>Instagram @ouirganediscovery</span>
              </a>
              <span className="text-cream/30">·</span>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-sand hover:text-cream"
              >
                <span>Facebook</span>
              </a>
            </Reveal>

            <Reveal delay={0.35} className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-cream/55">
              <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 transition-colors hover:text-cream">
                <Phone className="h-3.5 w-3.5 text-clay" />
                {PHONE_DISPLAY}
              </a>
              <span className="inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-olive opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-olive" />
                </span>
                Right now in Ouirgane — <LocalTime />
              </span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
