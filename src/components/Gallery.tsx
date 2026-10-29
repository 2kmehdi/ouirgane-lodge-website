import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight, Eye, X } from "lucide-react";
import { LODGE_GALLERY, type GalleryItem } from "../data/lodge";
import { ChapterHead, GhostNumber, TornEdge } from "./Decor";
import { Reveal } from "./Motion";

type Filter = "all" | "pool" | "rooms" | "dining" | "views";

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const filteredPhotos = filter === "all"
    ? LODGE_GALLERY
    : LODGE_GALLERY.filter((p) => p.category === filter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIdx(null);
      if (e.key === "ArrowLeft") setActiveIdx((i) => (i !== null && i > 0 ? i - 1 : filteredPhotos.length - 1));
      if (e.key === "ArrowRight") setActiveIdx((i) => (i !== null && i < filteredPhotos.length - 1 ? i + 1 : 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIdx, filteredPhotos.length]);

  return (
    <section id="gallery" className="relative overflow-hidden bg-night text-cream pt-20 pb-24 md:pt-28 md:pb-36">
      <GhostNumber className="-left-8 top-16 text-cream">04</GhostNumber>

      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <ChapterHead
              no="04"
              kicker="Photo Journal"
              tone="light"
              title={
                <>
                  Thirty-five frames of <em className="font-light italic text-sand">real life</em> above the lake.
                </>
              }
            />
            <Reveal delay={0.15} className="mt-4 max-w-xl text-[15px] leading-relaxed text-cream/70">
              Unfiltered, genuine moments at Ouirgane Discovery Lodge. From the turquoise waters of our terrace pool
              to the cedar-scented bedrooms and quiet evening tea under the Atlas stars.
            </Reveal>
          </div>

          <Reveal delay={0.25} className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-sand">
            <Camera className="h-4 w-4 text-clay" />
            <span>35 Real Lodge Photographs</span>
          </Reveal>
        </div>

        {/* Filter Tabs */}
        <div className="mt-12 flex flex-wrap items-center gap-2.5 border-b border-dashed border-cream/15 pb-6">
          {[
            { id: "all", label: "All Photos", count: LODGE_GALLERY.length },
            { id: "pool", label: "Pool & Terraces", count: LODGE_GALLERY.filter((p) => p.category === "pool").length },
            { id: "rooms", label: "Suites & Rooms", count: LODGE_GALLERY.filter((p) => p.category === "rooms").length },
            { id: "dining", label: "Moroccan Dining", count: LODGE_GALLERY.filter((p) => p.category === "dining").length },
            { id: "views", label: "Mountain Horizons", count: LODGE_GALLERY.filter((p) => p.category === "views").length },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setFilter(tab.id as Filter);
                setActiveIdx(null);
              }}
              className={`rounded-full px-4 py-2 font-mono text-[10.5px] uppercase tracking-[0.18em] transition-all duration-300 ${
                filter === tab.id
                  ? "bg-clay text-cream shadow-md"
                  : "border border-cream/20 bg-cream/5 text-cream/60 hover:border-cream/40 hover:text-cream"
              }`}
            >
              {tab.label} <span className="ml-1 opacity-60">({tab.count})</span>
            </button>
          ))}
        </div>

        {/* Masonry-Style Responsive Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPhotos.map((photo, i) => (
            <motion.div
              key={photo.src}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: (i % 6) * 0.06, duration: 0.5 }}
              onClick={() => setActiveIdx(i)}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-cream/10 bg-night/80 shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-night">
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/95 via-night/30 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
              </div>

              {/* Hover Badge / Caption */}
              <div className="absolute inset-x-0 bottom-0 p-4 transition-transform duration-300">
                <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-clay">
                  {photo.category}
                </span>
                <h3 className="font-display text-base font-medium text-cream">{photo.title}</h3>
                <p className="mt-1 line-clamp-1 text-xs text-cream/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {photo.desc}
                </p>
              </div>

              <div className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-night/70 text-cream opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                <Eye className="h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/92 p-4 backdrop-blur-md md:p-8"
            onClick={() => setActiveIdx(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveIdx(null)}
              className="absolute right-6 top-6 z-10 grid h-11 w-11 place-items-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-black"
              aria-label="Close photo preview"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveIdx((i) => (i !== null && i > 0 ? i - 1 : filteredPhotos.length - 1));
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full border border-cream/25 bg-black/40 text-cream backdrop-blur transition-colors hover:bg-clay hover:border-clay"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveIdx((i) => (i !== null && i < filteredPhotos.length - 1 ? i + 1 : 0));
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full border border-cream/25 bg-black/40 text-cream backdrop-blur transition-colors hover:bg-clay hover:border-clay"
              aria-label="Next photo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image & Caption Container */}
            <div
              className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-2xl border border-cream/15 bg-night"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredPhotos[activeIdx].src}
                alt={filteredPhotos[activeIdx].title}
                className="max-h-[72vh] w-auto object-contain mx-auto"
              />
              <div className="border-t border-cream/10 bg-night p-4 text-center">
                <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-clay">
                  Frame {activeIdx + 1} of {filteredPhotos.length} · {filteredPhotos[activeIdx].category}
                </span>
                <h4 className="font-display text-xl text-cream">{filteredPhotos[activeIdx].title}</h4>
                <p className="mt-1 text-xs text-cream/70">{filteredPhotos[activeIdx].desc}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 bg-paper">
        <TornEdge className="text-night" flip />
      </div>
    </section>
  );
}