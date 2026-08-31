import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StoreBadges } from "./StoreBadges";
import { HeroPlayer } from "./HeroPlayer";
import { getAppDownloadUrl, LINKS, type AppDownloadUrl } from "./links";
import heroBg from "@/assets/hero-bg.jpg";
import { useLocale } from "@/i18n/locale";

export function Hero() {
  const { t } = useLocale();
  const [listenUrl, setListenUrl] = useState<AppDownloadUrl>(LINKS.playStore);

  useEffect(() => {
    setListenUrl(getAppDownloadUrl());
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-10 sm:pt-32 sm:pb-12 lg:pt-36 lg:pb-14"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[78vh] overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-55 animate-ken-burns will-change-transform"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0_0_0/0.35)_0%,oklch(0_0_0/0.72)_55%,var(--background)_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(70%_55%_at_18%_10%,color-mix(in_oklab,var(--primary)_22%,transparent),transparent_68%)]"
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 size-[480px] rounded-full border border-border/50 opacity-30 animate-spin-slow sm:size-[560px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 right-[12%] hidden size-3 rounded-full bg-primary animate-pulse-soft lg:block"
      />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 container-pad lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <div className="animate-fade-up">
          <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
            <span className="relative flex size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-primary/60" />
              <span className="relative size-2 rounded-full bg-primary" />
            </span>
            {t.hero.badge}
          </span>

          <h1 className="mt-7 max-w-[14ch] text-[2.75rem] leading-[0.95] font-bold sm:text-6xl xl:text-7xl">
            {t.hero.titleBefore} <span className="text-gradient">{t.hero.titleAccent}</span>
            {t.hero.titleAfter ? ` ${t.hero.titleAfter}` : null}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.hero.body}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7">
              <a href={listenUrl} target="_blank" rel="noopener noreferrer">
                <Play className="size-4 fill-current" aria-hidden />
                {t.hero.preorder}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7">
              <a href={LINKS.artists} target="_blank" rel="noopener noreferrer">
                {t.hero.artistCta}
              </a>
            </Button>
          </div>
          <StoreBadges className="mt-5" />

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-3 sm:gap-5">
            {t.hero.trust.map((item) => (
              <div key={item.label} className="border-l border-border/80 pl-3 sm:pl-4">
                <dt className="font-display text-sm font-bold sm:text-base lg:text-lg">
                  {item.value}
                </dt>
                <dd className="mt-0.5 text-[11px] text-muted-foreground sm:text-sm">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up lg:mx-0 lg:max-w-none [animation-delay:140ms]">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 rounded-[40px] bg-[radial-gradient(circle_at_50%_30%,color-mix(in_oklab,var(--primary)_28%,transparent),transparent_70%)] blur-2xl"
          />

          <HeroPlayer />
        </div>
      </div>
    </section>
  );
}
