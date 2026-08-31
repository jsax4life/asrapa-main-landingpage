import { Heart, Pause, Play, Shuffle, SkipBack, SkipForward } from "lucide-react";
import { Waveform } from "./Waveform";
import { useLocale } from "@/i18n/locale";
import { formatCount } from "@/lib/landing-spotlight";
import { useLandingSpotlightPlayer } from "./spotlight-player-context";

export function HeroPlayer() {
  const { locale, t } = useLocale();
  const { view, isPlaying, currentTime, progress, canPlay, togglePlayback, formatDuration } =
    useLandingSpotlightPlayer();

  const duration = view.duration || 0;

  return (
    <>
      <div className="glass relative rounded-[28px] p-5 shadow-[var(--shadow-soft)] sm:rounded-[32px] sm:p-6">
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <img
              src={view.coverUrl}
              alt={view.albumAlt}
              width={224}
              height={224}
              fetchPriority="high"
              decoding="async"
              className="size-24 rounded-2xl object-cover shadow-[var(--shadow-soft)] sm:size-28"
            />
            {isPlaying ? (
              <span
                aria-hidden
                className="absolute -right-1 -bottom-1 grid size-7 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
              >
                <Pause className="size-3 fill-current" />
              </span>
            ) : null}
          </div>
          <div className="min-w-0">
            {isPlaying ? (
              <p className="text-[11px] tracking-[0.22em] text-primary uppercase">
                {t.hero.nowPlaying}
              </p>
            ) : (
              <p className="text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
                {t.hero.spotlight}
              </p>
            )}
            <h2 className="mt-1 truncate font-display text-xl font-bold sm:text-2xl">
              {view.trackTitle}
            </h2>
            <p className="truncate text-sm text-muted-foreground">{view.artistLine}</p>
          </div>
        </div>

        <Waveform className="mt-6" active={isPlaying} />

        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground tabular-nums">
          <span>{formatDuration(isPlaying ? currentTime : 0)}</span>
          <span>{formatDuration(duration)}</span>
        </div>
        <div
          className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary"
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={t.hero.progress}
        >
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
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
              disabled={!canPlay}
              className="grid size-11 place-items-center rounded-full border border-border bg-secondary/60 transition-all duration-200 hover:scale-105 hover:border-primary/40 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40"
            >
              <SkipBack className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              aria-label={isPlaying ? t.hero.pause : t.hero.play}
              disabled={!canPlay}
              onClick={() => void togglePlayback()}
              className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-200 hover:scale-105 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40"
            >
              {isPlaying ? (
                <Pause className="size-6 fill-current" aria-hidden />
              ) : (
                <Play className="size-6 fill-current" aria-hidden />
              )}
            </button>
            <button
              type="button"
              aria-label={t.hero.next}
              disabled={!canPlay}
              className="grid size-11 place-items-center rounded-full border border-border bg-secondary/60 transition-all duration-200 hover:scale-105 hover:border-primary/40 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40"
            >
              <SkipForward className="size-5" aria-hidden />
            </button>
          </div>
          <button
            type="button"
            aria-label={t.hero.shuffle}
            disabled={!canPlay}
            className="grid size-11 place-items-center rounded-full border border-border bg-secondary/60 transition-all duration-200 hover:scale-105 hover:border-primary/40 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40"
          >
            <Shuffle className="size-5" aria-hidden />
          </button>
        </div>

        {view.collections.length > 0 ? (
          <div className="mt-6 grid grid-cols-2 gap-3">
            {view.collections.map((collection) => (
              <button
                key={collection.id}
                type="button"
                className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/40 p-2.5 text-left transition-all duration-200 hover:border-primary/35 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <img
                  src={collection.coverUrl}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  decoding="async"
                  width={88}
                  height={88}
                  className="size-11 shrink-0 rounded-xl object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{collection.title}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {formatCount(collection.trackCount, locale)} {t.hero.songsCount}
                  </p>
                </div>
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="glass absolute -top-5 -left-3 hidden items-center gap-3 rounded-2xl p-3 shadow-[var(--shadow-soft)] animate-float sm:flex lg:-left-5">
        <img
          src={view.featuredPhoto}
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          width={80}
          height={80}
          className="size-10 rounded-xl object-cover"
        />
        <div>
          <p className="text-sm font-medium">{view.featuredName}</p>
          <p className="text-xs text-muted-foreground">
            +{formatCount(view.newFansThisMonth, locale)} {t.hero.newFans}
          </p>
        </div>
      </div>

      <div className="glass absolute -right-2 -bottom-6 hidden rounded-2xl p-4 shadow-[var(--shadow-soft)] animate-float-slow sm:block lg:-right-4">
        <p className="text-xs text-muted-foreground">{t.hero.monthlyStreams}</p>
        <p className="font-display text-2xl font-bold text-primary tabular-nums">
          {formatCount(view.monthlyListens, locale)}
        </p>
      </div>
    </>
  );
}
