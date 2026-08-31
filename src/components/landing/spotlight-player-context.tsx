import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useLocale } from "@/i18n/locale";
import {
  artistDisplayName,
  fetchLandingSpotlight,
  formatDuration,
  trackCoverUrl,
  type LandingSpotlight,
} from "@/lib/landing-spotlight";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";
import album5 from "@/assets/album-5.jpg";
import type { Messages } from "@/i18n/translations";

const fallbackCovers = [album2, album5];

export type SpotlightPlayerView = {
  trackTitle: string;
  artistLine: string;
  albumAlt: string;
  coverUrl: string;
  songUrl: string | null;
  duration: number;
  monthlyListens: number;
  featuredName: string;
  featuredPhoto: string;
  newFansThisMonth: number;
  collections: { id: string; title: string; coverUrl: string; trackCount: number }[];
};

type SpotlightPlayerContextValue = {
  view: SpotlightPlayerView;
  isPlaying: boolean;
  currentTime: number;
  progress: number;
  canPlay: boolean;
  togglePlayback: () => Promise<void>;
  formatDuration: typeof formatDuration;
};

const SpotlightPlayerContext = createContext<SpotlightPlayerContextValue | null>(null);

function buildFallbackView(t: Messages): SpotlightPlayerView {
  const [first, second] = t.hero.player.playlists;
  return {
    trackTitle: t.hero.player.trackTitle,
    artistLine: t.hero.player.trackArtist,
    albumAlt: t.hero.player.albumAlt,
    coverUrl: album1,
    songUrl: null,
    duration: 222,
    monthlyListens:
      Number(t.hero.player.monthlyStreamsCount.replace(/\s/g, "").replace(/,/g, "")) || 0,
    featuredName: t.hero.player.featuredArtist,
    featuredPhoto: album3,
    newFansThisMonth: 1204,
    collections: [
      {
        id: "fallback-1",
        title: first?.title ?? "",
        coverUrl: album2,
        trackCount: first?.count ?? 0,
      },
      {
        id: "fallback-2",
        title: second?.title ?? "",
        coverUrl: album5,
        trackCount: second?.count ?? 0,
      },
    ],
  };
}

function buildView(data: LandingSpotlight): SpotlightPlayerView {
  const { currentTrack, featuredArtist, relatedCollections } = data;
  const artist = artistDisplayName(currentTrack.artist);

  return {
    trackTitle: currentTrack.title,
    artistLine: `${artist} · ${currentTrack.genre.name}`,
    albumAlt: `${currentTrack.title} — ${artist}`,
    coverUrl: trackCoverUrl(currentTrack) || album1,
    songUrl: currentTrack.songUrl || null,
    duration: currentTrack.duration || 0,
    monthlyListens: currentTrack.monthlyListens ?? currentTrack.streams ?? 0,
    featuredName: artistDisplayName(featuredArtist),
    featuredPhoto: featuredArtist.profilePicture || album3,
    newFansThisMonth: featuredArtist.newFansThisMonth ?? 0,
    collections: relatedCollections.slice(0, 2).map((item, i) => ({
      id: item.id,
      title: item.title,
      coverUrl: item.coverPhotoUrl || fallbackCovers[i] || album2,
      trackCount: item.trackCount,
    })),
  };
}

export function LandingSpotlightPlayerProvider({ children }: { children: ReactNode }) {
  const { locale, t } = useLocale();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [view, setView] = useState<SpotlightPlayerView>(() => buildFallbackView(t));
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    let cancelled = false;

    fetchLandingSpotlight()
      .then((data) => {
        if (!cancelled) {
          setView(buildView(data));
          setCurrentTime(0);
          setIsPlaying(false);
        }
      })
      .catch(() => {
        if (!cancelled) setView(buildFallbackView(t));
      });

    return () => {
      cancelled = true;
    };
  }, [locale, t]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };
    const onPause = () => setIsPlaying(false);
    const onPlay = () => setIsPlaying(true);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("play", onPlay);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("play", onPlay);
    };
  }, [view.songUrl]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
    setCurrentTime(0);
    audio.load();
  }, [view.songUrl]);

  const duration = view.duration || 0;
  const progress = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  const togglePlayback = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || !view.songUrl) return;

    if (isPlaying) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch {
      setIsPlaying(false);
    }
  }, [isPlaying, view.songUrl]);

  const value = useMemo(
    () => ({
      view,
      isPlaying,
      currentTime,
      progress,
      canPlay: Boolean(view.songUrl),
      togglePlayback,
      formatDuration,
    }),
    [view, isPlaying, currentTime, progress, togglePlayback],
  );

  return (
    <SpotlightPlayerContext.Provider value={value}>
      {view.songUrl ? (
        <audio ref={audioRef} src={view.songUrl} preload="metadata" className="sr-only" />
      ) : null}
      {children}
    </SpotlightPlayerContext.Provider>
  );
}

export function useLandingSpotlightPlayer() {
  const context = useContext(SpotlightPlayerContext);
  if (!context) {
    throw new Error("useLandingSpotlightPlayer must be used within LandingSpotlightPlayerProvider");
  }
  return context;
}
