import { Asterisk } from "lucide-react";
import { cn } from "../utils/cn";

export function Ticker({
  items,
  className,
  fast = false,
  reverse = false,
}: {
  items: string[];
  className?: string;
  fast?: boolean;
  reverse?: boolean;
}) {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <div
        className={cn(
          "flex w-max items-center",
          reverse ? "animate-marquee-rev" : fast ? "animate-marquee" : "animate-marquee-slow",
        )}
      >
        {row.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="px-6 font-display text-lg italic md:px-10 md:text-xl">{item}</span>
            <Asterisk className="h-4 w-4 shrink-0 opacity-70" />
          </span>
        ))}
      </div>
    </div>
  );
}
