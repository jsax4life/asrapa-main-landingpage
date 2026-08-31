import { Reveal } from "./Reveal";
import { useLocale } from "@/i18n/locale";

export function Manifesto() {
  const { t } = useLocale();

  return (
    <section
      id="manifesto"
      aria-labelledby="manifesto-heading"
      className="scroll-mt-24 border-y border-border/40 bg-background"
    >
      <div className="mx-auto max-w-[1400px] container-pad py-12 sm:py-16 lg:py-20">
        <Reveal className="mx-auto max-w-2xl text-center sm:max-w-3xl">
          <p className="text-xs font-medium tracking-[0.3em] text-primary uppercase">
            {t.manifesto.eyebrow}
          </p>
          <h2 id="manifesto-heading" className="sr-only">
            {t.manifesto.heading}
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 max-w-xl space-y-10 text-center sm:mt-16 sm:max-w-2xl sm:space-y-12 lg:mt-20 lg:max-w-3xl lg:space-y-14">
          {t.manifesto.paragraphs.map((text, i) => (
            <Reveal key={text} delay={i * 90}>
              <p className="font-display text-xl leading-[1.55] font-medium tracking-[-0.02em] text-foreground/90 sm:text-2xl sm:leading-[1.5] lg:text-[1.75rem] lg:leading-[1.55]">
                {text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={420} className="mx-auto mt-16 max-w-2xl text-center sm:mt-20 lg:mt-24">
          <p className="font-display text-2xl leading-snug font-bold tracking-[-0.03em] sm:text-3xl lg:text-4xl">
            {t.manifesto.closeBefore}{" "}
            <span className="text-gradient">{t.manifesto.closeAccent}</span> {t.manifesto.closeAfter}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
