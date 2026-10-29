import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BOOKING_URL, FACEBOOK_URL, INSTAGRAM_URL, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "../data/lodge";
import { EASE } from "./Motion";
import { cn } from "../utils/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "bg-paper/95 text-ink shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md" : "bg-transparent text-cream",
        )}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-3.5 md:px-10">
          {/* Logo Brandmark */}
          <a href="#top" className="group flex items-center gap-3">
            <img
              src={scrolled ? "/logo.png" : "/logo-white.png"}
              alt="Ouirgane Discovery Lodge Logo"
              className="h-10 w-auto object-contain transition-all duration-300 md:h-12"
            />
          </a>

          {/* Navigation links */}
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "group relative font-mono text-[11px] uppercase tracking-[0.22em] transition-colors",
                  scrolled ? "text-ink/75 hover:text-clay" : "text-cream/85 hover:text-cream",
                )}
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-clay transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Socials & CTA */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Social quick links */}
            <div className="hidden items-center gap-2 sm:flex">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className={cn(
                  "grid h-8 w-8 place-items-center rounded-full border transition-colors hover:border-clay hover:bg-clay hover:text-cream",
                  scrolled ? "border-ink/20 text-ink" : "border-cream/30 text-cream",
                )}
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                className={cn(
                  "grid h-8 w-8 place-items-center rounded-full border transition-colors hover:border-clay hover:bg-clay hover:text-cream",
                  scrolled ? "border-ink/20 text-ink" : "border-cream/30 text-cream",
                )}
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className={cn(
                  "grid h-8 w-8 place-items-center rounded-full border transition-colors hover:border-clay hover:bg-clay hover:text-cream",
                  scrolled ? "border-ink/20 text-ink" : "border-cream/30 text-cream",
                )}
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="group hidden items-center gap-2.5 rounded-full bg-clay px-5 py-2.5 font-mono text-[10.5px] font-medium uppercase tracking-[0.18em] text-cream transition-all duration-300 hover:bg-clay-deep sm:inline-flex"
            >
              Reserve on Booking.com
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45" />
            </a>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={cn(
                "grid h-10 w-10 place-items-center rounded-full border transition-colors lg:hidden",
                scrolled ? "border-ink/25 text-ink" : "border-cream/40 text-cream",
              )}
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="fixed inset-0 z-[60] flex flex-col bg-night text-cream"
          >
            <div className="flex items-center justify-between px-5 py-4 md:px-10">
              <img src="/logo-white.png" alt="Ouirgane Discovery Lodge" className="h-9 w-auto object-contain" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/40"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: EASE }}
                  className="group flex items-baseline gap-4 border-b border-dashed border-cream/15 py-4"
                >
                  <span className="font-mono text-[10px] text-clay">0{i + 1}</span>
                  <span className="font-display text-4xl italic transition-colors group-hover:text-clay">{l.label}</span>
                </motion.a>
              ))}
            </nav>
            <div className="px-8 pb-10">
              {/* Social icons in mobile drawer */}
              <div className="mb-6 flex items-center justify-center gap-4 border-t border-dashed border-cream/15 pt-5">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cream/80 hover:text-clay"
                >
                  Instagram
                </a>
                <span className="text-cream/30">·</span>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cream/80 hover:text-clay"
                >
                  Facebook
                </a>
                <span className="text-cream/30">·</span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cream/80 hover:text-clay"
                >
                  WhatsApp
                </a>
              </div>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="mb-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-clay py-4 font-mono text-xs uppercase tracking-[0.2em]"
              >
                Reserve on Booking.com <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={`tel:${PHONE_TEL}`} className="block text-center font-mono text-[11px] uppercase tracking-[0.2em] text-cream/60">
                Call the lodge — {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
