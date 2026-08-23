import { useState } from "react";
import { Bell, Library } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const categories = [
  "All",
  "Urban music",
  "Traditional music",
  "Great classics",
  "Sketches",
  "Broadcasts",
];

/** Placeholder slots keep the Discover card-grid rhythm while the catalogue is empty. */
const PLACEHOLDER_COUNT = 6;

export function Discover() {
  const [active, setActive] = useState("All");

  return (
    <section
      id="catalog"
      className="scroll-mt-24 border-y border-border/70 bg-surface/55 section-shell"
    >
      <div className="mx-auto max-w-[1400px] container-pad">
        <SectionHeading
          eyebrow="Explore the catalogue"
          title="All the sounds of Chad, in one place."
          description="Urban music, traditional music, great classics, sketches, shows — the catalogue is built with Chadian artists and creators."
        />

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => {
            const isActive = category === active;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(category)}
                className={
                  isActive
                    ? "rounded-full border border-primary/50 bg-primary/15 px-4 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    : "rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:border-primary/45 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                }
              >
                {category}
              </button>
            );
          })}
        </Reveal>

        <div className="relative mt-10">
          <ul
            className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-6"
            aria-hidden
          >
            {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
              <Reveal as="li" key={i} delay={(i % 6) * 55}>
                <article className="glass h-full overflow-hidden rounded-3xl p-3 opacity-45">
                  <div className="aspect-square rounded-2xl border border-dashed border-border/80 bg-secondary/30" />
                  <div className="space-y-2 px-1.5 pt-4 pb-2">
                    <div className="h-3.5 w-3/4 rounded-full bg-secondary" />
                    <div className="h-3 w-1/2 rounded-full bg-secondary/70" />
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>

          <div className="absolute inset-0 flex items-center justify-center p-4">
            <Reveal className="glass max-w-md rounded-3xl border border-primary/25 p-6 text-center shadow-[var(--shadow-soft)] sm:p-8">
              <span className="icon-box mx-auto size-12 rounded-2xl">
                <Library className="size-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold sm:text-2xl">
                The catalogue is coming.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The first content will be available at the launch of the application.
              </p>
              <Button asChild size="lg" className="mt-6 rounded-full px-7">
                <a href="#contact">
                  <Bell className="size-4" aria-hidden />
                  Be notified of the launch
                </a>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
