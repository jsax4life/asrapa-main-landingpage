import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { useLocale } from "@/i18n/locale";

export function FAQ() {
  const { t } = useLocale();

  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-border/70 bg-surface/55 section-shell"
    >
      <div className="mx-auto max-w-[1400px] container-pad">
        <SectionHeading
          eyebrow={t.faq.eyebrow}
          title={t.faq.title}
          description={t.faq.description}
        />

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="grid gap-3">
            {t.faq.items.map((faq) => (
              <AccordionItem
                key={faq.q}
                value={faq.q}
                className="glass rounded-2xl border border-border px-5 transition-colors hover:border-primary/30 last:border-b data-[state=open]:border-primary/40"
              >
                <AccordionTrigger className="py-5 text-left font-display text-base font-bold hover:no-underline focus-visible:ring-2 focus-visible:ring-ring">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed whitespace-pre-line text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
