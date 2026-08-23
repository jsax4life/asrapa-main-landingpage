import { useEffect, useState } from "react";
import { Heart, Play, Shuffle, SkipBack, SkipForward } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Waveform } from "./Waveform";
import { StoreBadges } from "./StoreBadges";
import { getAppDownloadUrl, LINKS, type AppDownloadUrl } from "./links";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";
import album5 from "@/assets/album-5.jpg";
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
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28"
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

          <div className="glass relative rounded-[28px] p-5 shadow-[var(--shadow-soft)] sm:rounded-[32px] sm:p-6">
            <div className="flex items-center gap-4">
              <div className="relative shrink-0">
                <img
                  src={album1}
                  alt={t.hero.player.albumAlt}
                  width={224}
                  height={224}
                  fetchPriority="high"
                  decoding="async"
                  className="size-24 rounded-2xl object-cover shadow-[var(--shadow-soft)] sm:size-28"
                />
                <span
                  aria-hidden
                  className="absolute -right-1 -bottom-1 grid size-7 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                >
                  <Play className="size-3 fill-current" />
                </span>
              </div>
              <div className="min-w-0">
                <p className="text-[11px] tracking-[0.22em] text-primary uppercase">
                  {t.hero.nowPlaying}
                </p>
                <h2 className="mt-1 truncate font-display text-xl font-bold sm:text-2xl">
                  {t.hero.player.trackTitle}
                </h2>
                <p className="truncate text-sm text-muted-foreground">
                  {t.hero.player.trackArtist}
                </p>
              </div>
            </div>

            <Waveform className="mt-6" />

            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span>1:24</span>
              <span>3:42</span>
            </div>
            <div
              className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary"
              role="progressbar"
              aria-valuenow={40}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={t.hero.progress}
            >
              <div className="h-full w-2/5 rounded-full bg-primary transition-[width] duration-500" />
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button
                type="button"
                aria-label={t.hero.like}
                className="grid size-11 place-items-center rounded-full border border-border bg-secondary/60 text-primary transition-all duration-200 hover:scale-105 hover:border-primary/40 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Heart className="size-5 fill-current" aria-hidden />
              </button>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <button
                  type="button"
                  aria-label={t.hero.previous}
                  className="grid size-11 place-items-center rounded-full border border-border bg-secondary/60 transition-all duration-200 hover:scale-105 hover:border-primary/40 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <SkipBack className="size-5" aria-hidden />
                </button>
                <button
                  type="button"
                  aria-label={t.hero.play}
                  className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-200 hover:scale-105 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Play className="size-6 fill-current" aria-hidden />
                </button>
                <button
                  type="button"
                  aria-label={t.hero.next}
                  className="grid size-11 place-items-center rounded-full border border-border bg-secondary/60 transition-all duration-200 hover:scale-105 hover:border-primary/40 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <SkipForward className="size-5" aria-hidden />
                </button>
              </div>
              <button
                type="button"
                aria-label={t.hero.shuffle}
                className="grid size-11 place-items-center rounded-full border border-border bg-secondary/60 transition-all duration-200 hover:scale-105 hover:border-primary/40 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Shuffle className="size-5" aria-hidden />
              </button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { cover: album2, ...t.hero.player.playlists[0]! },
                { cover: album5, ...t.hero.player.playlists[1]! },
              ].map((playlist) => (
                <button
                  key={playlist.title}
                  type="button"
                  className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/40 p-2.5 text-left transition-all duration-200 hover:border-primary/35 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <img
                    src={playlist.cover}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    decoding="async"
                    width={88}
                    height={88}
                    className="size-11 shrink-0 rounded-xl object-cover"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{playlist.title}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {playlist.count} {t.hero.songsCount}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="glass absolute -top-5 -left-3 hidden items-center gap-3 rounded-2xl p-3 shadow-[var(--shadow-soft)] animate-float sm:flex lg:-left-5">
            <img
              src={album3}
              alt=""
              aria-hidden
              loading="lazy"
              decoding="async"
              width={80}
              height={80}
              className="size-10 rounded-xl object-cover"
            />
            <div>
              <p className="text-sm font-medium">{t.hero.player.featuredArtist}</p>
              <p className="text-xs text-muted-foreground">+1,204 {t.hero.newFans}</p>
            </div>
          </div>

          <div className="glass absolute -right-2 -bottom-6 hidden rounded-2xl p-4 shadow-[var(--shadow-soft)] animate-float-slow sm:block lg:-right-4">
            <p className="text-xs text-muted-foreground">{t.hero.monthlyStreams}</p>
            <p className="font-display text-2xl font-bold text-primary">
              {t.hero.player.monthlyStreamsCount}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
