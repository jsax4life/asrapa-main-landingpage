import { Reveal } from "./Reveal";

const paragraphs = [
  "In our African customs, cultural memory has always been oral. It is passed down from generation to generation.",
  "Listening is the foundation of our civilizations. It is on this foundation that our peoples have been built.",
  "That's why we created ASRAPA — so that the sounds of yesterday and those of today continue to transmit our cultures to those of tomorrow.",
  "A sound has the power to reveal an identity. Not just that of an individual—that of an entire people.",
];

export function Manifesto() {
  return (
    <section
      id="manifesto"
      aria-labelledby="manifesto-heading"
      className="scroll-mt-24 border-y border-border/40 bg-background"
    >
      <div className="mx-auto max-w-[1400px] container-pad py-24 sm:py-32 lg:py-40">
        <Reveal className="mx-auto max-w-2xl text-center sm:max-w-3xl">
          <p className="text-xs font-medium tracking-[0.3em] text-primary uppercase">
            Why Asrapa
          </p>
          <h2 id="manifesto-heading" className="sr-only">
            The Manifesto
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 max-w-xl space-y-10 text-center sm:mt-16 sm:max-w-2xl sm:space-y-12 lg:mt-20 lg:max-w-3xl lg:space-y-14">
          {paragraphs.map((text, i) => (
            <Reveal key={text} delay={i * 90}>
              <p className="font-display text-xl leading-[1.55] font-medium tracking-[-0.02em] text-foreground/90 sm:text-2xl sm:leading-[1.5] lg:text-[1.75rem] lg:leading-[1.55]">
                {text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={420} className="mx-auto mt-16 max-w-2xl text-center sm:mt-20 lg:mt-24">
          <p className="font-display text-2xl leading-snug font-bold tracking-[-0.03em] sm:text-3xl lg:text-4xl">
            One Sound.{" "}
            <span className="text-gradient">One Identity.</span> One People.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
