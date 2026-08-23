import { useEffect, useState } from "react";
import { useCountUp, useInView } from "@/hooks/use-reveal";
import {
  fetchPlatformStats,
  formatStat,
  type PlatformStats,
} from "@/lib/platform-stats";
import { useLocale } from "@/i18n/locale";

function Stat({
  value,
  label,
  active,
}: {
  value: number;
  label: string;
  active: boolean;
}) {
  const { display, suffix } = formatStat(value);
  const target = Number(display) || 0;
  const count = useCountUp(target, active);

  return (
    <div className="glass interactive-lift rounded-3xl p-6 text-center sm:p-7">
      <p className="font-display text-4xl font-bold tabular-nums sm:text-5xl">
        <span className="sr-only">
          {display}
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

function StatSkeleton() {
  return (
    <div className="glass rounded-3xl p-6 text-center sm:p-7" aria-hidden>
      <div className="mx-auto h-10 w-20 animate-pulse rounded-lg bg-secondary sm:h-12" />
      <div className="mx-auto mt-3 h-3 w-16 animate-pulse rounded-full bg-secondary/70" />
    </div>
  );
}

export function Stats() {
  const { t } = useLocale();
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const [stats, setStats] = useState<PlatformStats | null>(null);
  const [loading, setLoading] = useState(true);

  const labels: { key: keyof PlatformStats; label: string }[] = [
    { key: "songs", label: t.stats.songs },
    { key: "artists", label: t.stats.artists },
    { key: "listeners", label: t.stats.listeners },
    { key: "cities", label: t.stats.cities },
  ];

  useEffect(() => {
    let cancelled = false;

    fetchPlatformStats()
      .then((data) => {
        if (!cancelled) setStats(data);
      })
      .catch(() => {
        if (!cancelled) {
          setStats({ songs: 0, artists: 0, listeners: 0, cities: 0 });
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section aria-label={t.stats.label} className="section-shell">
      <div
        ref={ref}
        className="mx-auto grid max-w-[1400px] grid-cols-2 gap-3 container-pad sm:gap-4 lg:grid-cols-4 lg:gap-6"
      >
        {loading || !stats
          ? labels.map((item) => <StatSkeleton key={item.key} />)
          : labels.map((item) => (
              <Stat
                key={item.key}
                value={stats[item.key]}
                label={item.label}
                active={inView}
              />
            ))}
      </div>
    </section>
  );
}
