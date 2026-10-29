import { motion } from "framer-motion";
import { Bookmark, Heart } from "lucide-react";
import { INSTAGRAM_URL } from "../data/lodge";
import { EASE } from "./Motion";

export function InstagramSection() {
  return (
    <section className="relative overflow-hidden bg-paper pt-20 pb-28 md:pt-28 md:pb-36 text-ink border-t border-dashed border-ink/15">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Heading, Badge and Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="lg:col-span-5"
          >
            <p className="font-mono text-[10.5px] uppercase tracking-[0.32em] text-clay">
              Atlas Dispatch · Social
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.5rem,5.5vw,4.8rem)] font-normal uppercase tracking-wider text-ink leading-[1.04]">
              FOLLOW US <br />
              <span className="block font-light italic text-clay">ON OUR</span>
              INSTAGRAM
            </h2>

            <div className="mt-6 flex flex-col items-start gap-4">
              {/* Torn paper subtext card with subtle floating animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -1.5 }}
                viewport={{ once: true }}
                animate={{ rotate: [-1.5, -0.5, -1.5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-md bg-cream/95 px-4 py-2 font-hand text-2xl text-ink/85 shadow-sm border border-ink/10"
              >
                and let the adventure begin!
              </motion.div>

              {/* Follow Button */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2.5 rounded-full bg-clay px-8 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cream shadow-md transition-all duration-300 hover:scale-105 hover:bg-clay-deep"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>FOLLOW @ouirganediscovery</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Overlapping Polaroid Photos */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative flex items-center justify-center p-4">
              {/* Polaroid 1 (Left tilt) */}
              <motion.a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 40, rotate: -12 }}
                whileInView={{ opacity: 1, y: 0, rotate: -6 }}
                viewport={{ once: true, margin: "-10%" }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="relative -rotate-6 rounded-lg bg-white p-3 pb-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] transition-shadow duration-300 hover:shadow-2xl w-[210px] sm:w-[260px] md:w-[290px] cursor-pointer"
              >
                <div className="aspect-[4/5] w-full overflow-hidden rounded bg-night">
                  <img
                    src="/lodge-photos/IMG_6929.JPG"
                    alt="Ouirgane Lake and High Atlas Mountains"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between px-1 text-ink/75">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
                    <span className="font-mono text-[9.5px] uppercase tracking-wider">High Atlas</span>
                  </div>
                  <Bookmark className="h-4 w-4" />
                </div>
              </motion.a>

              {/* Polaroid 2 (Right tilt, overlapping) */}
              <motion.a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 40, rotate: 10 }}
                whileInView={{ opacity: 1, y: 0, rotate: 3 }}
                viewport={{ once: true, margin: "-10%" }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
                transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
                className="relative -ml-16 sm:-ml-20 md:-ml-24 rotate-3 rounded-lg bg-white p-3 pb-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] transition-shadow duration-300 hover:shadow-2xl w-[210px] sm:w-[260px] md:w-[290px] cursor-pointer z-10"
              >
                <div className="aspect-[4/5] w-full overflow-hidden rounded bg-night">
                  <img
                    src="/lodge-photos/IMG_6926.JPG"
                    alt="Swimming Pool and Terrace at Ouirgane Discovery Lodge"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between px-1 text-ink/75">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
                    <span className="font-mono text-[9.5px] uppercase tracking-wider">Pool Terrace</span>
                  </div>
                  <Bookmark className="h-4 w-4" />
                </div>
              </motion.a>

              {/* Polaroid 3 (Subtle tilt behind) */}
              <motion.a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 40, rotate: -6 }}
                whileInView={{ opacity: 1, y: 0, rotate: -2 }}
                viewport={{ once: true, margin: "-10%" }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
                transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
                className="relative -ml-16 sm:-ml-20 md:-ml-24 -rotate-2 rounded-lg bg-white p-3 pb-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] transition-shadow duration-300 hover:shadow-2xl w-[210px] sm:w-[260px] md:w-[290px] cursor-pointer hidden sm:block"
              >
                <div className="aspect-[4/5] w-full overflow-hidden rounded bg-night">
                  <img
                    src="/lodge-photos/IMG_6938.JPG"
                    alt="Moroccan breakfast and tea on the terrace"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between px-1 text-ink/75">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
                    <span className="font-mono text-[9.5px] uppercase tracking-wider">Morning Light</span>
                  </div>
                  <Bookmark className="h-4 w-4" />
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}