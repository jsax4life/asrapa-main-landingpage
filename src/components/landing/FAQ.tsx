import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/**
 * Question titles are final.
 * Answers marked provisional should be replaced with the bilingual Section Plan text before launch.
 */
const faqs = [
  {
    q: "What is ASRAPA?",
    a: "ASRAPA is the 100% Chadian streaming platform: urban music, traditional music, great classics, sketches and shows, accessible on both smartphones and small phones.",
  },
  {
    q: "When will the application be available?",
    a: "The app is not yet released. Pre-order for free to be notified as soon as it launches.",
  },
  {
    q: "I am abroad, how do I subscribe?",
    // Provisional — replace with Section Plan (FR/EN) answer before publishing.
    a: "You can subscribe from abroad through the ASRAPA app once it launches. Access and payment options for the diaspora will be detailed at launch; get notified via the newsletter to receive the official instructions.",
  },
  {
    q: "How do I submit a catalogue?",
    // Provisional — replace with Section Plan (FR/EN) answer before publishing.
    a: "Create an artist account on the ASRAPA artists portal, verify your identity, then upload your tracks or full catalogue from the dashboard. Releases go live after a short quality review.",
  },
  {
    q: "How to become a reseller?",
    a: "Whether you're a market vendor, Canal+ partner, or mobile banking agent, you can join the ASRAPA network. The Bunda package earns 50 FCFA per sale for market vendors.",
  },
  {
    q: "Does it work without a smartphone?",
    a: "Yes. ASRAPA is accessible on small KaiOS phones (1,000 FCFA/month) and on classic phones via USSD (500 FCFA/month).",
  },
  {
    q: "How are artists paid?",
    a: "65% of revenue goes to the artists, distributed according to actual streams; 35% funds the platform. Transparent reporting every quarter, payment within 30 days, to bank account or mobile money.",
  },
  {
    q: "Can I pay with mobile money?",
    // Provisional — replace with Section Plan (FR/EN) answer before publishing.
    a: "Yes. ASRAPA is built for local payment habits: subscribe and renew through mobile money via our reseller and partner network, and artists can also receive their payouts by mobile money.",
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
