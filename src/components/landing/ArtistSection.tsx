import { Check, Headphones, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { LINKS } from "./links";
import { useLocale } from "@/i18n/locale";

export function ArtistSection() {
  const { t } = useLocale();

  const highlights = [
    {
      strong: t.artists.highlight1Strong,
      rest: t.artists.highlight1Rest,
    },
    {
      strong: t.artists.highlight2Strong,
      rest: t.artists.highlight2Rest,
    },
  ];

  const categories = [
    {
      icon: Mic,
      title: t.artists.labelled,
      body: t.artists.labelledBody,
    },
    {
      icon: Headphones,
      title: t.artists.independent,
      body: t.artists.independentBody,
    },
  ];

  return (
    <section
      id="artists"
      className="scroll-mt-24 border-y border-border/70 bg-surface/55 section-shell"
    >
      <div className="mx-auto max-w-[1400px] container-pad">
        <Reveal>
          <span className="text-xs font-medium tracking-[0.25em] text-primary uppercase">
            {t.artists.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl leading-[1.05] font-bold sm:text-4xl lg:text-[2.75rem]">
            {t.artists.title}
          </h2>
          <p className="mt-4 max-w-none text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.artists.body}
          </p>
        </Reveal>

        <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={60}>
            <ul className="grid gap-4">
              {highlights.map((item) => (
                <li key={item.strong} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-3" aria-hidden />
                  </span>
                  <span>
                    <strong className="font-semibold text-foreground">{item.strong}</strong>
                    {item.rest}
                  </span>
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
                  {t.artists.startCatalog}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-7">
                <a href="#faq">{t.artists.compensation}</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div
              className="glass rounded-[28px] p-5 shadow-[var(--shadow-soft)] sm:rounded-[32px] sm:p-7"
              aria-labelledby="income-distribution-title"
            >
              <h3 id="income-distribution-title" className="font-display text-lg font-bold">
                {t.artists.incomeTitle}
              </h3>

              <div
                className="mt-6 flex h-14 overflow-hidden rounded-2xl border border-border"
                role="img"
                aria-label={t.artists.incomeAria}
              >
                <div className="flex w-[65%] items-center justify-center bg-primary px-3">
                  <span className="text-center text-sm font-bold text-primary-foreground sm:text-base">
                    {t.artists.artistsShare}
                  </span>
                </div>
                <div className="flex w-[35%] items-center justify-center bg-secondary px-2">
                  <span className="text-center text-xs font-semibold text-muted-foreground sm:text-sm">
                    {t.artists.platformShare}
                  </span>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {t.artists.incomeFoot}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
