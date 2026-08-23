import { AlertTriangle, Music2, Radio, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { LINKS } from "./links";
import { useLocale } from "@/i18n/locale";

const channelIcons: LucideIcon[] = [Music2, Radio, Smartphone];

export function AgentSection() {
  const { t } = useLocale();

  return (
    <section id="agents" className="scroll-mt-24 section-shell">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 container-pad lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div
            className="glass relative overflow-hidden rounded-[28px] p-5 shadow-[var(--shadow-soft)] sm:rounded-[32px] sm:p-6"
            aria-label={t.network.channelsAria}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 -right-16 size-56 rounded-full bg-primary/20 blur-3xl"
            />
            <div className="relative grid gap-3">
              {t.network.channels.map((channel, i) => {
                const Icon = channelIcons[i] ?? Music2;
                return (
                  <article
                    key={channel.title}
                    className="rounded-2xl border border-border bg-secondary/40 p-4 transition-colors hover:border-primary/30"
                  >
                    <div className="flex items-start gap-3">
                      <span className="icon-box size-10 shrink-0 rounded-xl">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
                          <h3 className="font-display text-sm font-bold">{channel.title}</h3>
                          <span
                            className={
                              channel.confirmed
                                ? "text-xs font-semibold text-primary"
                                : "rounded-full bg-secondary px-2.5 py-0.5 text-[10px] tracking-wide text-muted-foreground uppercase"
                            }
                          >
                            {channel.rate}
                          </span>
                        </div>
                        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                          {channel.body}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2">
          <span className="text-xs font-medium tracking-[0.25em] text-primary uppercase">
            {t.network.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl leading-[1.05] font-bold sm:text-4xl lg:text-[2.75rem]">
            {t.network.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            {t.network.body}
          </p>

          <div
            className="mt-8 flex gap-3 rounded-2xl border border-primary/25 bg-primary/8 p-4"
            role="note"
            aria-label={t.network.noteAria}
          >
            <AlertTriangle className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
            <div className="min-w-0">
              <p className="font-display text-sm font-bold">{t.network.noteTitle}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {t.network.noteBody}
              </p>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7">
              <a href={LINKS.agents} target="_blank" rel="noopener noreferrer">
                {t.network.become}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7">
              <a href="#faq">{t.network.howNetwork}</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
