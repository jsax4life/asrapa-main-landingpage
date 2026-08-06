import { LINKS } from "./links";
import { cn } from "@/lib/utils";

function AppleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M16.37 12.59c.02 2.4 2.1 3.2 2.13 3.21-.02.06-.33 1.14-1.1 2.26-.66.97-1.35 1.93-2.43 1.95-1.06.02-1.4-.63-2.61-.63-1.22 0-1.6.61-2.6.65-1.04.04-1.84-1.05-2.51-2.01-1.37-1.98-2.42-5.6-1.01-8.05.7-1.22 1.95-1.99 3.3-2.01 1.03-.02 2 .7 2.61.7.61 0 1.83-.86 3.09-.73.53.02 2.01.21 2.96 1.61-.08.05-1.77 1.03-1.75 3.05ZM14.7 6.1c.55-.67.93-1.6.82-2.53-.8.03-1.76.53-2.33 1.2-.51.59-.96 1.54-.84 2.45.89.07 1.8-.45 2.35-1.12Z" />
    </svg>
  );
}

function PlayStoreIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M3.18 2.45A1.2 1.2 0 0 0 3 3.2v17.6c0 .45.24.86.63 1.07l9.52-9.52L3.18 2.45Zm11.05 6.03-2.05 2.05 2.05 2.05 4.5-2.56c.9-.51.9-1.48 0-2l-4.5-2.54ZM4.9 20.9l7.48-7.48 2.05 2.05-8.1 4.6a1.2 1.2 0 0 1-1.43-.17Zm9.53-11.42 2.05 2.05-2.05 2.05-2.05-2.05 2.05-2.05Z" />
    </svg>
  );
}

export function StoreBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <a
        href={LINKS.appStore}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Asrapa Music on the App Store"
        className="inline-flex items-center gap-2.5 rounded-xl border border-border bg-black px-3.5 py-2.5 text-left transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <AppleIcon className="size-6 shrink-0 text-foreground" />
        <span className="leading-tight">
          <span className="block text-[10px] text-muted-foreground">Download on the</span>
          <span className="block text-sm font-semibold text-foreground">App Store</span>
        </span>
      </a>
      <a
        href={LINKS.playStore}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Asrapa Music on Google Play"
        className="inline-flex items-center gap-2.5 rounded-xl border border-border bg-black px-3.5 py-2.5 text-left transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <PlayStoreIcon className="size-6 shrink-0 text-foreground" />
        <span className="leading-tight">
          <span className="block text-[10px] text-muted-foreground">Get it on</span>
          <span className="block text-sm font-semibold text-foreground">Google Play</span>
        </span>
      </a>
    </div>
  );
}
