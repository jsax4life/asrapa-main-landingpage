import { AlertTriangle, Music2, Radio, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { LINKS } from "./links";

type PartnerChannel = {
  icon: LucideIcon;
  title: string;
  rate: string;
  body: string;
  confirmed: boolean;
};

const channels: PartnerChannel[] = [
  {
    icon: Music2,
    title: "Market reseller",
    rate: "50 FCFA per sale",
    body: "The Bunda Package earns you the same as your current offer — 50 FCFA per sale.",
    confirmed: true,
  },
  {
    icon: Radio,
    title: "Canal+ Partner",
    rate: "Commission to be confirmed",
    body: "Commission not yet finalized — rate to be announced once validated by ASRAPA.",
    confirmed: false,
  },
  {
    icon: Smartphone,
    title: "Mobile banking partner",
    rate: "Commission to be confirmed",
    body: "Commission not yet finalized — rate to be announced once validated by ASRAPA.",
    confirmed: false,
  },
];

export function AgentSection() {
  return (
    <section id="agents" className="scroll-mt-24 section-shell">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 container-pad lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div
            className="glass relative overflow-hidden rounded-[28px] p-5 shadow-[var(--shadow-soft)] sm:rounded-[32px] sm:p-6"
            aria-label="Reseller partner channels"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 -right-16 size-56 rounded-full bg-primary/20 blur-3xl"
            />
            <div className="relative grid gap-3">
              {channels.map((channel) => (
                <article
                  key={channel.title}
                  className="rounded-2xl border border-border bg-secondary/40 p-4 transition-colors hover:border-primary/30"
                >
                  <div className="flex items-start gap-3">
                    <span className="icon-box size-10 shrink-0 rounded-xl">
                      <channel.icon className="size-5" aria-hidden />
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
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2">
          <span className="text-xs font-medium tracking-[0.25em] text-primary uppercase">
            Join the network
          </span>
          <h2 className="mt-3 text-3xl leading-[1.05] font-bold sm:text-4xl lg:text-[2.75rem]">
            Sell Chadian music, without changing your habits.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Whether you are already a market reseller, Canal+ partner or mobile banking agent,
            ASRAPA integrates with what you already do — without disrupting anything.
          </p>

          <div
            className="mt-8 flex gap-3 rounded-2xl border border-primary/25 bg-primary/8 p-4"
            role="note"
            aria-label="Important note about reseller commissions"
          >
            <AlertTriangle className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
            <div className="min-w-0">
              <p className="font-display text-sm font-bold">Important note</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Only the reseller rate at the market (50 FCFA per sale) is confirmed. Canal+ and
                mobile banking commissions are not yet finalized: do not invent any figures or
                publish any numbers until ASRAPA has validated them.
              </p>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7">
              <a href={LINKS.agents} target="_blank" rel="noopener noreferrer">
                Becoming a reseller/distributor
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7">
              <a href="#faq">How does the network work?</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
