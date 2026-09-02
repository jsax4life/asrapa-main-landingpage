import { Reveal } from "./Reveal";
import { useLocale } from "@/i18n/locale";

export function SocialProof() {
  const { t } = useLocale();

  return (
    <section aria-label={t.social.label} className="border-y border-border/70 bg-surface/70 section-shell">
      <Reveal className="mx-auto max-w-[1400px] container-pad">
        <p className="text-center text-xs tracking-[0.25em] text-muted-foreground uppercase">
          {t.social.heading}
        </p>
        <div className="mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <ul className="flex w-max animate-marquee items-center gap-3 sm:gap-4">
            {[...t.social.partners, ...t.social.partners].map((name, i) => (
              <li
                key={`${name}-${i}`}
                className="glass flex h-12 items-center gap-3 rounded-2xl px-5 text-sm font-medium text-muted-foreground sm:h-14 sm:px-6"
              >
                <span aria-hidden className="size-2.5 shrink-0 rounded-full bg-primary/80" />
                {name}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
