import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import whyChoose from "@/assets/why-choose.jpg";

const reasons = [
  {
    title: "Cultural Experience",
    body: "In our African traditions, cultural memory has always been oral. It is passed down from generation to generation.",
  },
  {
    title: "Support Independent Artists",
    body: "A bigger share of every stream goes straight to the creator.",
  },
  {
    title: "Fast Streaming",
    body: "Edge delivery tuned for African networks — playback starts instantly.",
  },
  {
    title: "Beautiful Interface",
    body: "Designed music-first, so the art stays the loudest thing on screen.",
  },
  {
    title: "Community Driven",
    body: "Playlists, comments and fan support built into the listening flow.",
  },
  {
    title: "Growing Ecosystem",
    body: "Fans, artists and agents growing together on one platform.",
  },
];

export function WhyChoose() {
  return (
    <section className="section-shell">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 container-pad lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <img
              src={whyChoose}
              alt="Independent artist producing music in a home studio with headphones"
              loading="lazy"
              decoding="async"
              width={1024}
              height={1024}
              className="aspect-[4/5] w-full rounded-[28px] object-cover shadow-[var(--shadow-soft)] sm:aspect-[5/6] sm:rounded-[32px] lg:aspect-square"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="text-xs font-medium tracking-[0.25em] text-primary uppercase">
            Why Asrapa
          </span>
          <h2 className="mt-3 text-3xl leading-[1.05] font-bold sm:text-4xl lg:text-[2.75rem]">
            Why Choose Asrapa Music
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            We built Asrapa for the sound of a new generation — and for the people making it.
          </p>

          <ul className="mt-8 grid gap-4">
            {reasons.map((reason) => (
              <li key={reason.title} className="group flex gap-4">
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-primary/15 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Check className="size-4" aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-bold">{reason.title}</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                    {reason.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
