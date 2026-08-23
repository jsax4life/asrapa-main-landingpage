import { Music2, Phone, Smartphone, TabletSmartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Plan = {
  name: string;
  price: string;
  detail: string;
};

type Channel = {
  icon: LucideIcon;
  title: string;
  price?: string;
  body: string;
  plans?: Plan[];
};

const channels: Channel[] = [
  {
    icon: Smartphone,
    title: "Smartphone",
    body: "Premium listening on modern devices — streaming, downloads and offline play.",
    plans: [
      {
        name: "Premium",
        price: "2,500 FCFA / month",
        detail: "Unlimited streaming, downloading, offline listening, high quality.",
      },
      {
        name: "Family",
        price: "4,000 FCFA / month",
        detail: "5 connectable people.",
      },
      {
        name: "Student",
        price: "1,200 FCFA / month",
        detail: "1 single account, download limited to 20 titles/month.",
      },
    ],
  },
  {
    icon: TabletSmartphone,
    title: "Small phone (KaiOS)",
    price: "1,000 FCFA / month",
    body: "Access to ASRAPA from a KaiOS-compatible keypad phone.",
  },
  {
    icon: Phone,
    title: "Classic telephone (USSD)",
    price: "500 FCFA / month",
    body: "Listen without internet or smartphone, via a USSD code.",
  },
  {
    icon: Music2,
    title: "Bunda Package",
    price: "150 FCFA / 6 titles",
    body: "Sold individually through the reseller network.",
  },
];

export function Features() {
  return (
    <section id="how-it-works" className="scroll-mt-24 section-shell">
      <div className="mx-auto max-w-[1400px] container-pad">
        <SectionHeading
          eyebrow="Accessible to all"
          title="It works on all phones."
          description="Whether you have a state-of-the-art smartphone or a classic phone (Aptorche, Tchoronko…) ASRAPA adapts to you — not the other way around."
        />

        <ul
          id="rates"
          className="mt-12 grid scroll-mt-28 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
        >
          {channels.map((channel, i) => (
            <Reveal as="li" key={channel.title} delay={(i % 4) * 70}>
              <article className="group glass interactive-lift flex h-full flex-col rounded-3xl p-5 sm:p-6">
                <span className="icon-box group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                  <channel.icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-base font-bold">{channel.title}</h3>
                {channel.price ? (
                  <p className="mt-2 font-display text-sm font-semibold text-primary">
                    {channel.price}
                  </p>
                ) : null}
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{channel.body}</p>

                {channel.plans ? (
                  <ul className="mt-5 grid flex-1 gap-2.5 border-t border-border/60 pt-4">
                    {channel.plans.map((plan) => (
                      <li
                        key={plan.name}
                        className="rounded-2xl border border-border/70 bg-secondary/30 p-3 transition-colors group-hover:border-primary/25"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
                          <span className="font-display text-sm font-bold">{plan.name}</span>
                          <span className="text-xs font-medium text-primary">{plan.price}</span>
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {plan.detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="flex-1" />
                )}
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10 flex justify-center sm:mt-12">
          <Button asChild size="lg" variant="outline" className="rounded-full px-8">
            <a href="#rates">View all rates</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
