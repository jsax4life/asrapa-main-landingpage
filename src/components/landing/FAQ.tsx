import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    q: "What is Asrapa Music?",
    a: "Asrapa Music is a digital streaming platform connecting artists, fans and agents. Fans stream unlimited music, artists publish and monetise their catalogue, and agents earn commission growing the subscriber base.",
  },
  {
    q: "How do artists upload music?",
    a: "Create a free artist account, verify your identity, then upload tracks or full albums from the artist dashboard. Add artwork and credits, and your release goes live after a short quality review — usually within 24 hours.",
  },
  {
    q: "How can I become an agent?",
    a: "Apply through the agent form, complete verification and finish a short onboarding. You get an agent dashboard, a referral code and access to commission payouts from your first subscriber.",
  },
  {
    q: "Is Asrapa free?",
    a: "Yes. The free tier gives you full catalogue access with occasional ads. Premium removes ads, unlocks the highest audio quality and adds offline listening when it launches.",
  },
  {
    q: "Can I create playlists?",
    a: "Absolutely. Build unlimited playlists, reorder tracks, add custom covers and share them publicly with a single link.",
  },
  {
    q: "How do subscriptions work?",
    a: "Subscriptions are billed monthly or yearly and can be paid by card, bank transfer or through an Asrapa agent. Cancel anytime — you keep premium access until the end of the paid period.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-border/70 bg-surface/55 section-shell"
    >
      <div className="mx-auto max-w-[1400px] container-pad">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything you need to know before you press play."
        />

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="grid gap-3">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.q}
                value={faq.q}
                className="glass rounded-2xl border border-border px-5 transition-colors hover:border-primary/30 last:border-b data-[state=open]:border-primary/40"
              >
                <AccordionTrigger className="py-5 text-left font-display text-base font-bold hover:no-underline focus-visible:ring-2 focus-visible:ring-ring">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
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
