import { Heart, Play } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { genres, tracks } from "./data";

export function Discover() {
  return (
    <section
      id="discover"
      className="scroll-mt-24 border-y border-border/70 bg-surface/55 section-shell"
    >
      <div className="mx-auto max-w-[1400px] container-pad">
        <SectionHeading
          eyebrow="Discover"
          title="Trending on Asrapa right now"
          description="Fresh albums, rising artists and playlists built by listeners across the continent."
        />

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {genres.map((genre, i) => (
            <button
              key={genre}
              type="button"
              aria-pressed={i === 0}
              className={
                i === 0
                  ? "rounded-full border border-primary/50 bg-primary/15 px-4 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  : "rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:border-primary/45 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              }
            >
              {genre}
            </button>
          ))}
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-6">
          {tracks.map((track, i) => (
            <Reveal as="li" key={track.title} delay={(i % 6) * 55}>
              <article className="group glass interactive-lift h-full overflow-hidden rounded-3xl p-3">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={track.cover}
                    alt={`${track.title} cover art by ${track.artist}`}
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={400}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[linear-gradient(to_top,var(--background),transparent_55%)] opacity-65"
                  />
                  <button
                    type="button"
                    aria-label={`Play ${track.title}`}
                    className="absolute right-3 bottom-3 grid size-11 translate-y-2 place-items-center rounded-full bg-primary text-primary-foreground opacity-0 shadow-[var(--shadow-glow)] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Play className="size-5 fill-current" aria-hidden />
                  </button>
                  <span className="absolute top-3 left-3 rounded-full bg-background/75 px-2.5 py-1 text-[10px] tracking-wide uppercase backdrop-blur-md">
                    {track.tag}
                  </span>
                </div>

                <div className="px-1.5 pt-4 pb-2">
                  <h3 className="truncate font-display text-sm font-bold">{track.title}</h3>
                  <p className="truncate text-xs text-muted-foreground">{track.artist}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{track.duration}</span>
                    <button
                      type="button"
                      aria-label={`Add ${track.title} to favourites`}
                      className="rounded-full p-1 text-muted-foreground transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Heart className="size-4" aria-hidden />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
