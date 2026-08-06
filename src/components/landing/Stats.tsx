import { useCountUp, useInView } from "@/hooks/use-reveal";

const stats = [
  { value: 10, suffix: "K+", label: "Songs" },
  { value: 2, suffix: "K+", label: "Artists" },
  { value: 50, suffix: "K+", label: "Listeners" },
  { value: 100, suffix: "+", label: "Cities" },
];

function Stat({
  value,
  suffix,
  label,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const count = useCountUp(value, active);
  return (
    <div className="glass interactive-lift rounded-3xl p-6 text-center sm:p-7">
      <p className="font-display text-4xl font-bold tabular-nums sm:text-5xl">
        <span className="sr-only">
          {value}
          {suffix}
        </span>
        <span aria-hidden>
          {count}
          <span className="text-primary">{suffix}</span>
        </span>
      </p>
      <p className="mt-2.5 text-xs tracking-[0.18em] text-muted-foreground uppercase sm:text-sm">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section aria-label="Asrapa Music by the numbers" className="section-shell">
      <div
        ref={ref}
        className="mx-auto grid max-w-[1400px] grid-cols-2 gap-3 container-pad sm:gap-4 lg:grid-cols-4 lg:gap-6"
      >
        {stats.map((stat) => (
          <Stat key={stat.label} {...stat} active={inView} />
        ))}
      </div>
    </section>
  );
}
