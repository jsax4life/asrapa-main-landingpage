import { Check, Headphones, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { LINKS } from "./links";

const highlights = [
  {
    text: (
      <>
        <strong className="font-semibold text-foreground">65% of the revenue goes to the artists</strong>
        , distributed according to your actual listens. 35% funds the platform.
      </>
    ),
  },
  {
    text: (
      <>
        <strong className="font-semibold text-foreground">Transparent quarterly report</strong>, payment
        within 30 days, to bank account or mobile money.
      </>
    ),
  },
];

const categories = [
  {
    icon: Mic,
    title: "Labelled Artists",
    body: "Make your production investments profitable.",
  },
  {
    icon: Headphones,
    title: "Independent artists",
    body: "Express your talent without restraint.",
  },
];

export function ArtistSection() {
  return (
    <section
      id="artists"
      className="scroll-mt-24 border-y border-border/70 bg-surface/55 section-shell"
    >
      <div className="mx-auto max-w-[1400px] container-pad">
        <Reveal>
          <span className="text-xs font-medium tracking-[0.25em] text-primary uppercase">
            To make a living from one&apos;s music
          </span>
          <h2 className="mt-3 text-3xl leading-[1.05] font-bold sm:text-4xl lg:text-[2.75rem]">
            Your music deserves to be paid what it&apos;s worth.
          </h2>
          <p className="mt-4 max-w-none text-base leading-relaxed text-muted-foreground sm:text-lg">
            According to our studies, the CRBT (Chadian Cultural Heritage Fund) only paid 4% royalties
            to some artists for their work. Physical sales have disappeared. YouTube does not pay
            royalties for content produced in Chad. Global streaming platforms are ill-suited to the
            realities of Chadian artists and content creators. ASRAPA is changing the game.
          </p>
        </Reveal>

        <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={60}>
            <ul className="grid gap-4">
            {highlights.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                  <Check className="size-3" aria-hidden />
                </span>
                {item.text}
              </li>
            ))}
          </ul>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {categories.map((category) => (
              <li
                key={category.title}
                className="glass rounded-2xl p-4 transition-colors hover:border-primary/30"
              >
                <category.icon className="size-5 text-primary" aria-hidden />
                <h3 className="mt-3 font-display text-sm font-bold">{category.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{category.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7">
              <a href={LINKS.artists} target="_blank" rel="noopener noreferrer">
                Start my catalog
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7">
              <a href="#faq">How does compensation work?</a>
            </Button>
          </div>
          </Reveal>

          <Reveal delay={120}>
          <div
            className="glass rounded-[28px] p-5 shadow-[var(--shadow-soft)] sm:rounded-[32px] sm:p-7"
            aria-labelledby="income-distribution-title"
          >
            <h3 id="income-distribution-title" className="font-display text-lg font-bold">
              Income distribution
            </h3>

            <div
              className="mt-6 flex h-14 overflow-hidden rounded-2xl border border-border"
              role="img"
              aria-label="Revenue split: 65% to artists, 35% to platform"
            >
              <div className="flex w-[65%] items-center justify-center bg-primary px-3">
                <span className="text-center text-sm font-bold text-primary-foreground sm:text-base">
                  65% Artists
                </span>
              </div>
              <div className="flex w-[35%] items-center justify-center bg-secondary px-2">
                <span className="text-center text-xs font-semibold text-muted-foreground sm:text-sm">
                  35% Platform
                </span>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Distribution based on actual listening · quarterly report · payment within 30 days ·
              bank account or mobile money.
            </p>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
