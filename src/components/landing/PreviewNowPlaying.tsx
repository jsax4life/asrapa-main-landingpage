import { Heart, Pause, Play } from "lucide-react";
import { Waveform } from "./Waveform";
import { useLocale } from "@/i18n/locale";
import { useLandingSpotlightPlayer } from "./spotlight-player-context";

export function PreviewNowPlaying() {
  const { t } = useLocale();
  const { view, isPlaying, currentTime, canPlay, togglePlayback, formatDuration } =
    useLandingSpotlightPlayer();

  const duration = view.duration || 0;

  return (
    <>
      <img
        src={view.coverUrl}
        alt={view.albumAlt}
        loading="lazy"
        decoding="async"
        width={400}
        height={400}
        className="aspect-square w-full rounded-2xl object-cover"
      />
      {isPlaying ? (
        <p className="mt-3 text-[9px] tracking-[0.18em] text-primary uppercase">
          {t.hero.nowPlaying}
        </p>
      ) : null}
      <p className={`truncate font-display text-sm font-bold ${isPlaying ? "mt-0.5" : "mt-4"}`}>
        {view.trackTitle}
      </p>
      <p className="truncate text-xs text-muted-foreground">{view.artistLine}</p>
      <Waveform className="mt-4 h-8" active={isPlaying} />
      <div className="mt-4 flex items-center justify-between">
        <Heart className="size-4 text-primary" aria-hidden />
        <button
          type="button"
          aria-label={isPlaying ? t.hero.pause : t.hero.play}
          disabled={!canPlay}
          onClick={() => void togglePlayback()}
          className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40"
        >
          {isPlaying ? (
            <Pause className="size-4 fill-current" aria-hidden />
          ) : (
            <Play className="size-4 fill-current" aria-hidden />
          )}
        </button>
        <span className="text-[10px] text-muted-foreground tabular-nums">
          {formatDuration(isPlaying ? currentTime : duration)}
        </span>
      </div>
    </>
  );
}
