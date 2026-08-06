import { Activity, BadgeDollarSign, Rocket, UserPlus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { LINKS } from "./links";

const benefits = [
  {
    icon: Users,
    title: "Manage subscribers",
    body: "Onboard and renew listeners from a single agent workspace.",
  },
  {
    icon: BadgeDollarSign,
    title: "Earn commissions",
    body: "Transparent payouts on every subscription you bring in.",
  },
  {
    icon: UserPlus,
    title: "Grow your network",
    body: "Invite sub-agents and scale beyond your own city.",
  },
  {
    icon: Activity,
    title: "Track performance",
    body: "Live dashboards on conversions, churn and earnings.",
  },
  {
    icon: Rocket,
    title: "Fast onboarding",
    body: "Verified and selling in under 24 hours.",
  },
];

export function AgentSection() {
  return (
    <section id="agents" className="scroll-mt-24 section-shell">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 container-pad lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div
            className="glass relative overflow-hidden rounded-[28px] p-5 shadow-[var(--shadow-soft)] sm:rounded-[32px] sm:p-6"
            aria-label="Agent earnings dashboard preview"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 -right-16 size-56 rounded-full bg-primary/20 blur-3xl"
            />
            <div className="relative">
              <p className="text-xs text-muted-foreground">Agent earnings</p>
              <p className="mt-1 font-display text-3xl font-bold sm:text-4xl">
                ₦482,900
                <span className="ml-2 text-sm font-medium text-primary">+24%</span>
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Active subscribers", value: "1,284" },
                  { label: "This month", value: "196 new" },
                  { label: "Commission rate", value: "18%" },
                  { label: "Network agents", value: "32" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border bg-secondary/40 p-4 transition-colors hover:border-primary/30"
                  >
                    <p className="font-display text-xl font-bold">{item.value}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-border bg-secondary/30 p-4">
                <p className="text-xs text-muted-foreground">Conversion this week</p>
                <div className="mt-3 space-y-3.5">
                  {[
                    { city: "Lagos", pct: 82 },
                    { city: "Accra", pct: 64 },
                    { city: "Nairobi", pct: 47 },
                  ].map((row) => (
                    <div key={row.city}>
                      <div className="flex justify-between text-xs">
                        <span>{row.city}</span>
                        <span className="text-muted-foreground">{row.pct}%</span>
                      </div>
                      <div
                        className="mt-1.5 h-2 overflow-hidden rounded-full bg-secondary"
                        role="progressbar"
                        aria-valuenow={row.pct}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${row.city} conversion`}
                      >
                        <div
                          className="h-full rounded-full bg-primary transition-[width] duration-700"
                          style={{ width: `${row.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2">
          <span className="text-xs font-medium tracking-[0.25em] text-primary uppercase">
            For Agents
          </span>
          <h2 className="mt-3 text-3xl leading-[1.05] font-bold sm:text-4xl lg:text-[2.75rem]">
            Become an Asrapa Agent
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Turn your community into a business. Agents sell Asrapa subscriptions, support listeners
            and earn recurring commission on every account they keep active.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li
                key={benefit.title}
                className="glass interactive-lift rounded-2xl p-4"
              >
                <span className="icon-box size-10 rounded-xl">
                  <benefit.icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-3 font-display text-sm font-bold">{benefit.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{benefit.body}</p>
              </li>
            ))}
          </ul>

          <Button asChild size="lg" className="mt-9 rounded-full px-7">
            <a href={LINKS.agents} target="_blank" rel="noopener noreferrer">
              Apply as Agent
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
