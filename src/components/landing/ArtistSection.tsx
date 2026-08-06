import { Check, Music4, TrendingUp, Upload, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { LINKS } from "./links";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";

const points = [
  "Upload songs in minutes with automatic metadata",
  "Manage albums, singles and EP releases in one library",
  "Track analytics on streams, saves and listener cities",
  "Watch stream counts update in real time",
  "Build a fanbase that follows you, not an algorithm",
  "Receive engagement, comments and direct fan support",
];

const chart = [42, 58, 36, 74, 61, 88, 70, 96];

export function ArtistSection() {
  return (
    <section
      id="artists"
      className="scroll-mt-24 border-y border-border/70 bg-surface/55 section-shell"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 container-pad lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="text-xs font-medium tracking-[0.25em] text-primary uppercase">
            For Artists
          </span>
          <h2 className="mt-3 text-3xl leading-[1.05] font-bold sm:text-4xl lg:text-[2.75rem]">
            Grow Your Music Career
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Asrapa gives independent artists the tools major labels keep in-house: a release
            pipeline, a live analytics desk and a direct line to the people streaming your sound.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                  <Check className="size-3" aria-hidden />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-9 rounded-full px-7">
            <a href={LINKS.artists} target="_blank" rel="noopener noreferrer">
              Start Uploading
            </a>
          </Button>
        </Reveal>

        <Reveal delay={120}>
          <div
            className="glass rounded-[28px] p-5 shadow-[var(--shadow-soft)] sm:rounded-[32px] sm:p-7"
            aria-label="Artist dashboard preview"
          >
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Artist Dashboard</p>
                <h3 className="truncate font-display text-lg font-bold">Amara Sey</h3>
              </div>
              <span className="shrink-0 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                Verified
              </span>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2.5 sm:gap-3">
              {[
                { icon: TrendingUp, label: "Streams", value: "128.9K" },
                { icon: Users, label: "Followers", value: "9,412" },
                { icon: Music4, label: "Tracks", value: "27" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-secondary/40 p-3 transition-colors hover:border-primary/30 sm:p-3.5"
                >
                  <stat.icon className="size-4 text-primary" aria-hidden />
                  <p className="mt-2 font-display text-base font-bold sm:text-lg">{stat.value}</p>
                  <p className="text-[11px] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-border bg-secondary/30 p-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Weekly streams</span>
                <span className="font-medium text-primary">+18.4%</span>
              </div>
              <div
                className="mt-4 flex h-28 items-end gap-2"
                role="img"
                aria-label="Bar chart showing rising weekly streams"
              >
                {chart.map((value, i) => (
                  <span
                    key={i}
                    style={{ height: `${value}%` }}
                    className="flex-1 rounded-t-lg bg-primary/65 transition-colors duration-200 hover:bg-primary"
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-2">
              {[
                { cover: album3, title: "Golden Hour", plays: "42,318 plays" },
                { cover: album2, title: "Frequency (Remix)", plays: "28,776 plays" },
              ].map((row) => (
                <div
                  key={row.title}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/30 p-3 transition-colors hover:border-primary/30 hover:bg-secondary/50"
                >
                  <img
                    src={row.cover}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    decoding="async"
                    width={80}
                    height={80}
                    className="size-10 shrink-0 rounded-xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{row.title}</p>
                    <p className="truncate text-xs text-muted-foreground">{row.plays}</p>
                  </div>
                  <Upload className="size-4 shrink-0 text-muted-foreground" aria-hidden />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
