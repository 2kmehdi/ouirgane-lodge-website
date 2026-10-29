import { Coffee, Waves, Wifi, Car, MapPin, Heart } from "lucide-react";
import { ArrowButton, ChapterHead, CountUp, GhostNumber, HandArrow, Squiggle, Tape } from "./Decor";
import { ImageReveal, Parallax, Reveal } from "./Motion";
import { BOOKING_URL, IMG } from "../data/lodge";

const STATS = [
  { n: 9.5, suffix: "/10", decimals: 1, label: "location score on Booking.com" },
  { n: 9.4, suffix: "/10", decimals: 1, label: "couples rating for 2-person trips" },
  { n: 62, suffix: " km", label: "from Marrakech-Menara Airport" },
  { n: 365, suffix: " days", label: "year-round outdoor pool & sun terrace" },
];

export function Story() {
  return (
    <section id="lodge" className="relative overflow-hidden bg-paper py-24 md:py-36">
      <GhostNumber className="-right-10 top-10 text-ink">01</GhostNumber>

      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          {/* words */}
          <div className="relative lg:col-span-5">
            <ChapterHead
              no="01"
              kicker="Field Note N°01 · The Lodge"
              title={
                <>
                  A peaceful lodge, a <em className="font-light italic text-clay">very</em> big horizon.
                </>
              }
            />
            <Reveal delay={0.15} className="mt-8 space-y-4 text-[15px] leading-relaxed text-ink/80 md:text-base">
              <p>
                <strong className="font-semibold text-ink">Elegant Accommodation:</strong> Ouirgane Discovery Lodge in Ouirgane
                offers a bed and breakfast experience with a sun terrace, landscaped garden, and a year-round outdoor swimming pool.
                Free Wi-Fi is available throughout the property.
              </p>
              <p>
                <strong className="font-semibold text-ink">Comfortable Amenities:</strong> Guests enjoy air-conditioning, private
                bathrooms with mountain views, and complimentary toiletries. Additional facilities include a relaxing lounge, outdoor play
                area, and dedicated bicycle parking.
              </p>
              <p>
                <strong className="font-semibold text-ink">Dining Experience:</strong> The family-friendly restaurant serves authentic
                Moroccan cuisine with halal, vegetarian, and vegan options. Breakfast includes traditional local specialities, homemade cheese,
                and breakfast-to-go options.
              </p>
              <p>
                <strong className="font-semibold text-ink">Prime Location:</strong> Located 62 km from Marrakech-Menara Airport, the lodge
                offers scenic mountain and lake views with easy access to valley trails. Highly rated for attentive staff and top location (9.5) —
                couples particularly like the location, rating it <strong className="font-semibold text-clay">9.4</strong> for a two-person trip.
              </p>
            </Reveal>

            {/* Real Property Highlights from Booking.com */}
            <Reveal delay={0.2} className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              <div className="flex items-center gap-2 rounded-xl bg-cream/90 p-2.5 border border-ink/8 shadow-xs">
                <Coffee className="h-4 w-4 text-clay shrink-0" />
                <span className="font-mono text-[9.5px] uppercase tracking-wider text-ink/80 leading-tight">Good Breakfast</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-cream/90 p-2.5 border border-ink/8 shadow-xs">
                <Waves className="h-4 w-4 text-clay shrink-0" />
                <span className="font-mono text-[9.5px] uppercase tracking-wider text-ink/80 leading-tight">Outdoor Pool</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-cream/90 p-2.5 border border-ink/8 shadow-xs">
                <Wifi className="h-4 w-4 text-clay shrink-0" />
                <span className="font-mono text-[9.5px] uppercase tracking-wider text-ink/80 leading-tight">Free WiFi</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-cream/90 p-2.5 border border-ink/8 shadow-xs">
                <Car className="h-4 w-4 text-clay shrink-0" />
                <span className="font-mono text-[9.5px] uppercase tracking-wider text-ink/80 leading-tight">Free Parking</span>
              </div>
            </Reveal>

            <Reveal delay={0.25} className="mt-8 flex flex-wrap items-center gap-4">
              <ArrowButton href={BOOKING_URL}>Reserve on Booking.com</ArrowButton>
              <a href="#rooms" className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60 underline-offset-4 hover:text-clay">
                See the rooms
              </a>
            </Reveal>

            {/* handwritten margin note */}
            <Reveal delay={0.4} className="mt-10 hidden origin-top-left -rotate-3 lg:block">
              <div className="max-w-[270px]">
                <p className="font-hand text-2xl leading-snug text-clay">
                  rated 9.4 by couples &amp; 9.5 for top location
                </p>
                <Squiggle className="mt-1 w-44" />
              </div>
            </Reveal>
          </div>

          {/* photos */}
          <div className="relative lg:col-span-7 lg:pl-8">
            <Parallax speed={34} className="relative ml-auto w-[86%] rotate-2">
              <div className="relative bg-cream p-2.5 pb-10 shadow-[0_24px_60px_-24px_rgba(34,26,17,0.45)]">
                <Tape className="-top-3 left-8 -rotate-6" />
                <Tape className="-top-2 right-8 rotate-3" />
                <ImageReveal src={IMG.village} alt="The road sign and lake panorama at Ouirgane Discovery Lodge" className="aspect-[4/3]" />
                <p className="absolute bottom-2.5 left-4 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/55">
                  our road sign &amp; lake vista — 50 m to the lodge
                </p>
              </div>
            </Parallax>

            <Parallax speed={70} className="absolute -bottom-6 left-0 w-[38%] -rotate-6 md:-bottom-10 md:w-[34%]">
              <div className="relative bg-cream p-2 pb-8 shadow-[0_20px_50px_-20px_rgba(34,26,17,0.5)]">
                <Tape className="-top-2.5 left-1/2 -translate-x-1/2 -rotate-2" />
                <ImageReveal src={IMG.mudhouse} alt="Sun terrace overlooking the High Atlas Mountains" className="aspect-[3/4]" delay={0.15} />
                <p className="absolute bottom-2 left-3 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/55">
                  sun terrace &amp; mountain view
                </p>
              </div>
            </Parallax>

            <Reveal delay={0.5} className="absolute -bottom-16 right-0 hidden lg:block">
              <HandArrow />
            </Reveal>
          </div>
        </div>

        {/* field-note stats */}
        <div className="mt-32 grid grid-cols-2 gap-y-10 border-t border-dashed border-ink/20 pt-12 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="relative px-1 md:px-6">
              {i > 0 && <span className="absolute left-0 top-1 hidden h-12 border-l border-dashed border-ink/20 md:block" />}
              <div className="font-display text-4xl font-medium tabular-nums md:text-5xl">
                <CountUp to={s.n} decimals={s.decimals ?? 0} />
                <span className="text-2xl text-clay md:text-3xl">{s.suffix}</span>
              </div>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
