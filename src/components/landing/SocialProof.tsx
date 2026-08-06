import { Reveal } from "./Reveal";

const partners = ["Artists", "Fans", "Music Creators", "Streaming Community", "Labels", "Studios"];

export function SocialProof() {
  return (
    <section aria-label="Trusted by" className="border-y border-border/70 bg-surface/70 py-10 sm:py-12">
      <Reveal className="mx-auto max-w-[1400px] container-pad">
        <p className="text-center text-xs tracking-[0.25em] text-muted-foreground uppercase">
          Trusted by artists, fans, music creators and the streaming community
        </p>
        <div className="mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <ul className="flex w-max animate-marquee items-center gap-3 sm:gap-4">
            {[...partners, ...partners].map((name, i) => (
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
