import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { BOOKING_URL, COORDS, FACEBOOK_URL, IMG, INSTAGRAM_URL, MAPS_URL, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "../data/lodge";
import { TornEdge } from "./Decor";
import { Parallax, Reveal, SplitWords } from "./Motion";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* final invitation under the stars */}
      <section className="relative overflow-hidden bg-night text-cream">
        <div className="relative z-10 bg-night">
          <TornEdge className="text-cream" flip={false} />
        </div>
        <Parallax speed={50} className="absolute inset-0">
          <img
            src={IMG.night}
            alt="Milky Way over the mountains"
            loading="lazy"
            className="h-[120%] w-full object-cover"
            style={{ filter: "saturate(0.95) brightness(0.85)" }}
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-b from-night/80 via-night/40 to-night/85" />

        <div className="relative mx-auto flex max-w-[1100px] flex-col items-center px-6 py-36 text-center md:py-48">
          <Reveal className="font-mono text-[10px] uppercase tracking-[0.34em] text-gold md:text-[11px]">
            The kettle is on — N°06
          </Reveal>
          <h2 className="mt-6 font-display text-5xl font-medium leading-[1.04] md:text-8xl">
            <SplitWords text="See you above" /> <br />
            <em className="font-light italic text-sand">
              <SplitWords text="the valley." delay={0.25} />
            </em>
          </h2>
          <Reveal delay={0.35} className="mt-4 origin-center -rotate-2 font-hand text-2xl text-cream/85 md:text-3xl">
            we&rsquo;ll keep the pool warm
          </Reveal>

          <Reveal delay={0.45} className="mt-10 flex flex-col items-center gap-5">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-clay px-9 py-5 font-mono text-xs font-medium uppercase tracking-[0.22em] text-cream shadow-[0_20px_50px_-14px_rgba(46,139,61,0.75)] transition-all duration-300 hover:-translate-y-1 hover:bg-clay-deep"
            >
              Reserve your stay on Booking.com
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
            </a>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/5 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-cream transition-colors hover:border-clay hover:bg-clay hover:text-cream"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp us — {PHONE_DISPLAY}
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/5 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-cream transition-colors hover:border-clay hover:bg-clay hover:text-cream"
              >
                <Phone className="h-3.5 w-3.5" />
                Call directly
              </a>
            </div>

            <p className="font-mono text-[9.5px] uppercase tracking-[0.26em] text-cream/45">
              Best rates · Breakfast included · Free cancellation on most dates
            </p>
          </Reveal>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-cream/12 bg-night px-6 pb-10 pt-16 text-cream md:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-12">
          {/* Logo & Info */}
          <div className="md:col-span-5">
            <a href="#top" className="inline-block">
              <img
                src="/logo-white.png"
                alt="Ouirgane Discovery Lodge"
                className="h-12 w-auto object-contain md:h-14"
              />
            </a>
            <p className="mt-4 font-mono text-[9.5px] uppercase tracking-[0.3em] text-cream/60">
              Your Comfort is Our Priority · High Atlas, Morocco
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
              Ouirgane Asni, Marrakech 42173 — Morocco
              <br />
              {COORDS} · 500 m from the dam
            </p>

            {/* Social Icons row */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-cream/30 text-cream transition-colors hover:border-clay hover:bg-clay"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-cream/30 text-cream transition-colors hover:border-clay hover:bg-clay"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="grid h-9 w-9 place-items-center rounded-full border border-cream/30 text-cream transition-colors hover:border-clay hover:bg-clay"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Google Maps"
                className="grid h-9 w-9 place-items-center rounded-full border border-cream/30 text-cream transition-colors hover:border-clay hover:bg-clay"
              >
                <MapPin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/45">Wander</p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="font-display text-lg italic text-cream/80 transition-colors hover:text-clay">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/45">Reserve &amp; Connect</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li>
                <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 transition-colors hover:text-cream">
                  Booking.com — live rates &amp; dates
                  <ArrowUpRight className="h-3.5 w-3.5 text-clay transition-transform duration-300 group-hover:rotate-45" />
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-clay hover:underline">
                  <MessageCircle className="h-3.5 w-3.5" />
                  Chat on WhatsApp: {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-cream">
                  <MapPin className="h-3.5 w-3.5 text-clay" />
                  Open in Google Maps
                </a>
              </li>
              <li className="text-cream/50">Languages: العربية · English · Français</li>
              <li className="text-cream/50">Pay at the lodge in cash (MAD)</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-[1500px] flex-wrap items-center justify-between gap-4 border-t border-dashed border-cream/12 pt-6 font-mono text-[9.5px] uppercase tracking-[0.18em] text-cream/40">
          <p>© {year} Ouirgane Discovery Lodge — Your Comfort is Our Priority</p>
          <div className="flex gap-4">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-clay">Instagram</a>
            <span>·</span>
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="hover:text-clay">Facebook</a>
            <span>·</span>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="hover:text-clay">Google Maps</a>
          </div>
        </div>
      </footer>
    </>
  );
}
