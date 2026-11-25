import { Headphones, Smartphone, Store } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { whatsappLink } from "./links";
import { useLocale } from "@/i18n/locale";

const tierIcons: LucideIcon[] = [Store, Headphones, Smartphone];

export function ResellerTiers() {
  const { t } = useLocale();

  return (
    <section id="revendeurs" className="scroll-mt-24 section-shell">
      <div className="mx-auto max-w-[1400px] container-pad">
        <SectionHeading
          eyebrow={t.tiers.eyebrow}
          title={t.tiers.title}
          description={t.tiers.description}
        />

        <ul className="mt-12 grid gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-3">
          {t.tiers.levels.map((level, i) => {
            const Icon = tierIcons[i] ?? Store;
            const href = whatsappLink(level.message);
            return (
              <Reveal as="li" key={level.name} delay={i * 70}>
                <article className="glass flex h-full flex-col rounded-3xl p-5 sm:p-6">
                  <span className="icon-box">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold">{level.name}</h3>

                  <p className="mt-4 text-xs font-medium tracking-[0.18em] text-primary uppercase">
                    {t.tiers.sells}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{level.sells}</p>

                  <p className="mt-4 text-xs font-medium tracking-[0.18em] text-primary uppercase">
                    {t.tiers.conditions}
                  </p>
                  <ul className="mt-1.5 flex-1 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                    {level.conditions.map((condition) => (
                      <li key={condition} className="flex gap-2">
                        <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{condition}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    {href ? (
                      <Button asChild size="lg" className="w-full rounded-full">
                        <a href={href} target="_blank" rel="noopener noreferrer">
                          {level.cta}
                        </a>
                      </Button>
                    ) : (
                      <>
                        <Button size="lg" className="w-full rounded-full" disabled>
                          {level.cta}
                        </Button>
                        <p className="mt-2 text-center text-xs text-muted-foreground">
                          {t.tiers.whatsappPending}
                        </p>
                      </>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
