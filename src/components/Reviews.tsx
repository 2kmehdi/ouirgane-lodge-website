import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Star } from "lucide-react";
import { FEATURED_PHOTO_REVIEWS, type FeaturedReview } from "../data/lodge";
import { CountUp, GhostNumber } from "./Decor";
import { EASE } from "./Motion";

function FeaturedReviewCard({ review, index }: { review: FeaturedReview; index: number }) {
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6%" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: EASE }}
      className="group flex flex-col justify-between rounded-3xl bg-cream p-5 shadow-[0_16px_40px_-20px_rgba(20,34,25,0.18)] border border-ink/8 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_24px_50px_-20px_rgba(20,34,25,0.28)]"
    >
      <div>
        {/* Top Portrait Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-paper">
          <img
            src={review.image}
            alt={`${review.name} at Ouirgane Discovery Lodge`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-night/80 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-wider text-cream backdrop-blur">
            <CheckCircle2 className="h-3 w-3 text-clay" />
            <span>Verified Stay</span>
          </div>

          {/* Proof link directly to Booking.com reviews */}
          <a
            href="https://www.booking.com/hotel/ma/ouirgane-discovery-lodge-mrksh.en-gb.html?#tab-reviews"
            target="_blank"
            rel="noreferrer"
            title="Read verified reviews on Booking.com"
            className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-cream/95 px-3 py-1 font-mono text-[9.5px] font-medium uppercase tracking-wider text-ink shadow-md transition-all duration-300 hover:scale-105 hover:bg-clay hover:text-cream"
          >
            <span>Proof</span>
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>

        {/* Large Quote Mark */}
        <div className="mt-4 font-display text-4xl font-bold leading-none text-clay/80 select-none">
          &rdquo;
        </div>

        {/* Quote Content */}
        <blockquote className="mt-2 font-body text-[15px] leading-relaxed text-ink/85">
          {showOriginal && review.quoteOriginal ? review.quoteOriginal : review.quote}
        </blockquote>

        {review.quoteOriginal && (
          <button
            onClick={() => setShowOriginal(!showOriginal)}
            className="mt-2.5 text-left font-mono text-[9.5px] uppercase tracking-widest text-clay hover:underline"
          >
            {showOriginal ? "Translate to English" : "View original language"}
          </button>
        )}
      </div>

      {/* Author and Origin */}
      <footer className="mt-6 flex items-center justify-between border-t border-dashed border-ink/15 pt-3.5">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-clay text-cream font-display font-bold text-sm shadow">
            {review.avatar}
          </div>
          <div className="leading-tight">
            <p className="font-display text-base font-semibold text-ink">{review.name}</p>
            <p className="font-mono text-[9px] uppercase tracking-wider text-ink/55">{review.origin} · {review.stay}</p>
          </div>
        </div>

        <div className="text-right">
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-amber-500" />
            ))}
          </div>
          <span className="font-mono text-[9.5px] font-semibold text-clay">{review.score}</span>
        </div>
      </footer>
    </motion.article>
  );
}

export function Reviews() {
  return (
    <section id="guests" className="relative overflow-hidden bg-paper pt-24 pb-20 md:pt-36 md:pb-28">
      <GhostNumber className="-left-4 top-8 text-ink">05</GhostNumber>

      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        {/* Header matching requested visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="font-mono text-[10.5px] uppercase tracking-[0.32em] text-clay">
            Field Note N°05 · Real Experiences
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-normal uppercase tracking-wider text-ink leading-tight">
            WHAT OUR GUESTS <br />
            <em className="font-light italic text-clay">SAY ABOUT US?</em>
          </h2>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/65">
            Real guest memories from France, Germany &amp; the United Kingdom
          </p>
        </motion.div>

        {/* 3 Review Cards with Photos */}
        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3 max-w-[1360px] mx-auto">
          {FEATURED_PHOTO_REVIEWS.map((review, index) => (
            <FeaturedReviewCard
              key={review.id}
              review={review}
              index={index}
            />
          ))}
        </div>

        {/* Scores & Booking.com trust ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="mt-20 flex flex-wrap items-center justify-between gap-8 rounded-2xl border border-dashed border-ink/20 bg-cream/75 p-6 md:p-8 shadow-sm"
        >
          <div className="flex items-center gap-5">
            <div className="font-display text-5xl font-medium tabular-nums text-clay md:text-6xl">
              <CountUp to={9.8} decimals={1} />
              <span className="text-2xl text-ink/50 md:text-3xl">/10</span>
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-ink">Superb on Booking.com</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60">
                Staff 9.8 · Location 9.5 · Value 9.2 · 178+ verified reviews
              </p>
            </div>
          </div>

          <a
            href="https://www.booking.com/hotel/ma/ouirgane-discovery-lodge-mrksh.en-gb.html?#tab-reviews"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-clay px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-cream transition-transform duration-300 hover:scale-105 hover:bg-clay-deep"
          >
            <span>Read all reviews on Booking.com</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}