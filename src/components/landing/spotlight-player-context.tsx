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
  fetchLandingCatalog,
  fetchLandingSpotlight,
  formatDuration,
  trackCoverUrl,
  type LandingSpotlight,
  type SpotlightTrack,
} from "@/lib/landing-spotlight";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";
import album5 from "@/assets/album-5.jpg";
import type { Messages } from "@/i18n/translations";

const fallbackCovers = [album2, album5];
const LIKED_STORAGE_KEY = "asrapa:liked-tracks";

export type QueueTrack = {
  id: string;
  trackTitle: string;
  artistLine: string;
  albumAlt: string;
  coverUrl: string;
  songUrl: string | null;
  duration: number;
};

export type SpotlightPlayerView = QueueTrack & {
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
  canSkip: boolean;
  isLiked: boolean;
  togglePlayback: () => Promise<void>;
  playNext: () => void;
  playPrevious: () => void;
  shuffle: () => void;
  seek: (time: number) => void;
  toggleLike: () => void;
  formatDuration: typeof formatDuration;
};

const SpotlightPlayerContext = createContext<SpotlightPlayerContextValue | null>(null);

function loadLikedIds(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(LIKED_STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function saveLikedIds(ids: Set<string>) {
  try {
    window.localStorage.setItem(LIKED_STORAGE_KEY, JSON.stringify(Array.from(ids)));
  } catch {
    // ignore storage errors (private browsing, quota, etc.)
  }
}

function trackToQueueEntry(track: SpotlightTrack, knownArtists: Map<string, string>): QueueTrack {
  const artistId = track.artist?.id ?? track.artist?.stageName ?? "";
  const artistName = artistDisplayName(track.artist) || knownArtists.get(artistId) || track.genre.name;
  const artistLine =
    artistName && artistName !== track.genre.name
      ? `${artistName} · ${track.genre.name}`
      : track.genre.name;

  return {
    id: track.id,
    trackTitle: track.title,
    artistLine,
    albumAlt: artistName ? `${track.title} — ${artistName}` : track.title,
    coverUrl: trackCoverUrl(track) || album1,
    songUrl: track.songUrl || null,
    duration: track.duration || 0,
  };
}

function buildFallbackQueue(t: Messages): QueueTrack[] {
  const [first, second] = t.hero.player.playlists;
  void first;
  void second;
  return [
    {
      id: "fallback",
      trackTitle: t.hero.player.trackTitle,
      artistLine: t.hero.player.trackArtist,
      albumAlt: t.hero.player.albumAlt,
      coverUrl: album1,
      songUrl: null,
      duration: 222,
    },
  ];
}

function buildFallbackMeta(t: Messages) {
  const [first, second] = t.hero.player.playlists;
  return {
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

type SpotlightMeta = ReturnType<typeof buildFallbackMeta>;

export function LandingSpotlightPlayerProvider({ children }: { children: ReactNode }) {
  const { locale, t } = useLocale();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const wasPlayingRef = useRef(false);

  const [queue, setQueue] = useState<QueueTrack[]>(() => buildFallbackQueue(t));
  const [meta, setMeta] = useState<SpotlightMeta>(() => buildFallbackMeta(t));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [likedIds, setLikedIds] = useState<Set<string>>(() => loadLikedIds());

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const data: LandingSpotlight = await fetchLandingSpotlight();
        const artist = data.featuredArtist;
        const knownArtists = new Map<string, string>([[artist.id, artistDisplayName(artist)]]);

        const currentEntry = trackToQueueEntry(
          { ...data.currentTrack, artist: data.currentTrack.artist ?? artist },
          knownArtists,
        );

        let others: QueueTrack[] = [];
        try {
          const catalog = await fetchLandingCatalog();
          others = catalog
            .filter((track) => track.id !== currentEntry.id && track.songUrl)
            .map((track) => trackToQueueEntry(track, knownArtists));
        } catch {
          others = [];
        }

        if (cancelled) return;
        setQueue([currentEntry, ...others]);
        setCurrentIndex(0);
        setCurrentTime(0);
        setIsPlaying(false);
        setMeta({
          monthlyListens: data.currentTrack.monthlyListens ?? data.currentTrack.streams ?? 0,
          featuredName: artistDisplayName(artist),
          featuredPhoto: artist.profilePicture || album3,
          newFansThisMonth: artist.newFansThisMonth ?? 0,
          collections: data.relatedCollections.slice(0, 2).map((item, i) => ({
            id: item.id,
            title: item.title,
            coverUrl: item.coverPhotoUrl || fallbackCovers[i] || album2,
            trackCount: item.trackCount,
          })),
        });
      } catch {
        if (!cancelled) {
          setQueue(buildFallbackQueue(t));
          setMeta(buildFallbackMeta(t));
          setCurrentIndex(0);
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [locale, t]);

  const track = queue[currentIndex] ?? queue[0];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onEnded = () => {
      setCurrentIndex((i) => (queue.length > 0 ? (i + 1) % queue.length : i));
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
  }, [queue.length]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const shouldResume = wasPlayingRef.current;
    audio.pause();
    setCurrentTime(0);
    audio.load();
    if (shouldResume && track?.songUrl) {
      audio.play().catch(() => setIsPlaying(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track?.songUrl]);

  const duration = track?.duration || 0;
  const progress = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  const togglePlayback = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || !track?.songUrl) return;

    if (isPlaying) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch {
      setIsPlaying(false);
    }
  }, [isPlaying, track?.songUrl]);

  const goToIndex = useCallback(
    (index: number) => {
      if (queue.length === 0) return;
      wasPlayingRef.current = isPlaying;
      setCurrentIndex(((index % queue.length) + queue.length) % queue.length);
    },
    [queue.length, isPlaying],
  );

  const playNext = useCallback(() => goToIndex(currentIndex + 1), [goToIndex, currentIndex]);
  const playPrevious = useCallback(() => goToIndex(currentIndex - 1), [goToIndex, currentIndex]);

  const shuffle = useCallback(() => {
    if (queue.length < 2) return;
    let next = currentIndex;
    while (next === currentIndex) {
      next = Math.floor(Math.random() * queue.length);
    }
    goToIndex(next);
  }, [queue.length, currentIndex, goToIndex]);

  const seek = useCallback(
    (time: number) => {
      const audio = audioRef.current;
      if (!audio || !track?.songUrl) return;
      const clamped = Math.max(0, Math.min(duration, time));
      audio.currentTime = clamped;
      setCurrentTime(clamped);
    },
    [duration, track?.songUrl],
  );

  const toggleLike = useCallback(() => {
    if (!track) return;
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(track.id)) next.delete(track.id);
      else next.add(track.id);
      saveLikedIds(next);
      return next;
    });
  }, [track]);

  const view: SpotlightPlayerView = useMemo(
    () => ({
      ...(track ?? buildFallbackQueue(t)[0]),
      ...meta,
    }),
    [track, meta, t],
  );

  const value = useMemo(
    () => ({
      view,
      isPlaying,
      currentTime,
      progress,
      canPlay: Boolean(track?.songUrl),
      canSkip: queue.length > 1,
      isLiked: track ? likedIds.has(track.id) : false,
      togglePlayback,
      playNext,
      playPrevious,
      shuffle,
      seek,
      toggleLike,
      formatDuration,
    }),
    [
      view,
      isPlaying,
      currentTime,
      progress,
      track,
      queue.length,
      likedIds,
      togglePlayback,
      playNext,
      playPrevious,
      shuffle,
      seek,
      toggleLike,
    ],
  );

  return (
    <SpotlightPlayerContext.Provider value={value}>
      {track?.songUrl ? (
        <audio ref={audioRef} src={track.songUrl} preload="metadata" className="sr-only" />
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
