import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { BOOKING_URL } from "./data/lodge";
import { Grain } from "./components/Decor";
import { Preloader } from "./components/Preloader";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Story } from "./components/Story";
import { Rooms } from "./components/Rooms";
import { Experiences } from "./components/Experiences";
import { Dining } from "./components/Dining";
import { Gallery } from "./components/Gallery";
import { Reviews } from "./components/Reviews";
import { Faq } from "./components/Faq";
import { InstagramSection } from "./components/InstagramSection";
import { LocationSection } from "./components/Location";
import { Footer } from "./components/Footer";

/* Floating reserve pill — appears once you leave the hero */
function FloatingReserve() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.a
      href={BOOKING_URL}
      target="_blank"
      rel="noreferrer"
      initial={false}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 24, scale: show ? 1 : 0.85 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      style={{ pointerEvents: show ? "auto" : "none" }}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-ink/90 py-3 pl-3.5 pr-5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-cream shadow-[0_16px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur transition-colors duration-300 hover:bg-clay md:bottom-7 md:right-7"
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-clay">
        <CalendarCheck className="h-4 w-4" />
      </span>
      <span className="hidden sm:inline">Reserve</span>
    </motion.a>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1950);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <div className="bg-night">
      <AnimatePresence>{loading && <Preloader key="preloader" />}</AnimatePresence>

      <Grain />
      <Navbar />

      <main>
        <Hero ready={!loading} />
        <Story />
        <Rooms />
        <Experiences />
        <Dining />
        <Gallery />
        <Reviews />
        <Faq />
        <InstagramSection />
        <LocationSection />
        <Footer />
      </main>

      <FloatingReserve />
    </div>
  );
}
