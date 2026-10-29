import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, ArrowUpRight, HelpCircle } from "lucide-react";
import { BOOKING_URL, FAQS, WHATSAPP_URL } from "../data/lodge";
import { EASE, Reveal } from "./Motion";

export function Faq() {
  const [openIds, setOpenIds] = useState<string[]>(["faq-pool"]);

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faqs" className="relative overflow-hidden bg-paper pt-20 pb-24 md:pt-28 md:pb-36 text-ink border-t border-dashed border-ink/15">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading, Botanical Leaf & Badge */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative lg:col-span-5 flex flex-col justify-between"
          >
            {/* Delicate Leaf Outline Illustration in background with subtle animation */}
            <motion.div
              animate={{ rotate: [0, 2, 0, -2, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -bottom-10 -left-6 z-0 opacity-25 origin-bottom-left"
              aria-hidden="true"
            >
              <svg width="340" height="340" viewBox="0 0 200 200" fill="none" className="text-clay">
                <path
                  d="M30 170 C 40 100, 100 40, 180 20 C 160 100, 100 160, 30 170 Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path d="M30 170 C 80 120, 130 70, 180 20" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
                <path d="M70 135 C 90 120, 100 110, 115 110" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                <path d="M100 105 C 120 90, 135 85, 145 80" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                <path d="M55 150 C 70 145, 80 135, 90 130" stroke="currentColor" strokeWidth="1" opacity="0.6" />
              </svg>
            </motion.div>

            <div className="relative z-10">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.32em] text-clay">
                Help &amp; Practical Details
              </p>
              
              <h2 className="mt-4 font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal uppercase tracking-wider text-ink leading-[1.08]">
                OUR GUESTS <br />
                <em className="font-light italic text-clay">OFTEN ASK</em>
              </h2>

              <p className="mt-6 max-w-sm font-body text-[15px] leading-relaxed text-ink/75">
                Everything you need to know about arrival, amenities, our mountain restaurant, and activities in the Ouirgane valley.
              </p>
            </div>

            {/* Additional Services Card Badge matching style */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 mt-12 max-w-xs rounded-2xl border-2 border-clay/80 bg-cream/90 p-5 shadow-sm backdrop-blur-sm"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-clay font-bold block mb-1">
                Lodge Guest Services
              </span>
              <h3 className="font-display text-lg font-semibold text-ink leading-snug">
                Additional Services in the Lodge
              </h3>
              <p className="mt-2 font-body text-xs text-ink/75 leading-relaxed">
                From airport transfers at Marrakech-Menara to private mountain guides and custom tagine cooking workshops.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[10px] uppercase tracking-wider text-clay underline underline-offset-4 hover:text-clay-deep"
                >
                  Ask via WhatsApp &rarr;
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Clean Underlined Accordion List */}
          <div className="lg:col-span-7 lg:pl-6">
            <div className="divide-y divide-ink/15 border-t border-b border-ink/15">
              {FAQS.map((faq, idx) => {
                const isOpen = openIds.includes(faq.id);
                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-6%" }}
                    transition={{ duration: 0.5, delay: idx * 0.05, ease: EASE }}
                    className="py-5"
                  >
                    <button
                      onClick={() => toggle(faq.id)}
                      className="group flex w-full items-center justify-between text-left focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-[17px] md:text-[19px] font-medium text-ink transition-colors group-hover:text-clay pr-6">
                        {faq.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-ink transition-colors group-hover:text-clay text-2xl font-light"
                      >
                        +
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 pb-2 font-body text-[15px] leading-relaxed text-ink/80 max-w-2xl">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-wider text-ink/65"
            >
              <span>Have a specific question?</span>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-clay hover:underline"
              >
                View all FAQs on Booking.com <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}