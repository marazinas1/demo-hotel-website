import { cn } from "@/lib/utils";

/**
 * Baltic Stay typographic wordmark. Pure type in the display face and
 * `currentColor`, so it works white over the hero, ink on the solid header
 * and white in the footer without any asset.
 */
export function Logo({ className, title = "Baltic Stay" }: { className?: string; title?: string }) {
  return (
    <span
      role="img"
      aria-label={title}
      className={cn(
        "inline-flex flex-col justify-center font-display leading-[1.05] text-current",
        className,
      )}
    >
      <span className="text-[1.6rem] font-medium tracking-[0.34em]">BALTIC</span>
      <span className="text-[1.6rem] font-medium tracking-[0.34em]">STAY</span>
    </span>
  );
}
