import { Heart, Play, Search } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { tracks } from "./data";
import { Waveform } from "./Waveform";
import { useLocale } from "@/i18n/locale";

function Phone({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="glass mx-auto w-full max-w-[240px] rounded-[36px] border-2 border-border p-3 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-2">
        <div className="relative overflow-hidden rounded-[26px] bg-background p-4">
          <span
            aria-hidden
            className="mx-auto mb-4 block h-1.5 w-16 rounded-full bg-secondary"
          />
          {children}
        </div>
      </div>
      <p className="mt-4 text-center text-xs tracking-[0.16em] text-muted-foreground uppercase">
        {label}
      </p>
    </div>
  );
}

export function AppPreview() {
  const { t } = useLocale();

  return (
    <section className="section-shell" aria-labelledby="app-preview-heading">
      <div className="mx-auto max-w-[1400px] container-pad">
        <SectionHeading
          eyebrow={t.preview.eyebrow}
          title={<span id="app-preview-heading">{t.preview.title}</span>}
          description={t.preview.description}
        />

        <div className="mt-12 grid gap-10 sm:mt-14 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          <Reveal>
            <Phone label={t.preview.nowPlaying}>
              <img
                src={tracks[0]!.cover}
                alt=""
                aria-hidden
                loading="lazy"
                decoding="async"
                width={400}
                height={400}
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <p className="mt-4 truncate font-display text-sm font-bold">{tracks[0]!.title}</p>
              <p className="truncate text-xs text-muted-foreground">{tracks[0]!.artist}</p>
              <Waveform className="mt-4 h-8" />
              <div className="mt-4 flex items-center justify-between">
                <Heart className="size-4 text-primary" aria-hidden />
                <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Play className="size-4 fill-current" aria-hidden />
                </span>
                <span className="text-[10px] text-muted-foreground">3:42</span>
              </div>
            </Phone>
          </Reveal>

          <Reveal delay={80}>
            <Phone label={t.preview.playlist}>
              <p className="font-display text-sm font-bold">Late Night Drive</p>
              <p className="text-[11px] text-muted-foreground">24 {t.preview.songs} · 1h 42m</p>
              <ul className="mt-4 space-y-2.5">
                {tracks.slice(0, 5).map((track) => (
                  <li key={track.title} className="flex items-center gap-2.5">
                    <img
                      src={track.cover}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      decoding="async"
                      width={64}
                      height={64}
                      className="size-8 shrink-0 rounded-lg object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[11px] font-medium">{track.title}</p>
                      <p className="truncate text-[10px] text-muted-foreground">{track.artist}</p>
                    </div>
                    <span className="text-[10px] text-muted-foreground">{track.duration}</span>
                  </li>
                ))}
              </ul>
            </Phone>
          </Reveal>

          <Reveal delay={160}>
            <Phone label={t.preview.artistProfile}>
              <img
                src={tracks[2]!.cover}
                alt=""
                aria-hidden
                loading="lazy"
                decoding="async"
                width={400}
                height={224}
                className="h-28 w-full rounded-2xl object-cover"
              />
              <p className="mt-3 font-display text-sm font-bold">Amara Sey</p>
              <p className="text-[11px] text-muted-foreground">9,412 {t.preview.followers} · Accra</p>
              <span className="mt-3 inline-block rounded-full bg-primary px-4 py-1.5 text-[11px] font-medium text-primary-foreground">
                {t.preview.follow}
              </span>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {tracks.slice(3, 5).map((track) => (
                  <img
                    key={track.title}
                    src={track.cover}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    decoding="async"
                    width={160}
                    height={160}
                    className="aspect-square w-full rounded-xl object-cover"
                  />
                ))}
              </div>
            </Phone>
          </Reveal>

          <Reveal delay={240}>
            <Phone label={t.preview.search}>
              <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-2">
                <Search className="size-3.5 text-muted-foreground" aria-hidden />
                <span className="text-[11px] text-muted-foreground">{t.preview.searchPlaceholder}</span>
              </div>
              <p className="mt-4 text-[10px] tracking-widest text-muted-foreground uppercase">
                {t.preview.topGenres}
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {tracks.slice(0, 4).map((track) => (
                  <div key={track.title} className="relative overflow-hidden rounded-xl">
                    <img
                      src={track.cover}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      decoding="async"
                      width={160}
                      height={128}
                      className="h-16 w-full object-cover"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <span className="absolute bottom-1 left-1.5 text-[10px] font-medium">
                      {track.tag}
                    </span>
                  </div>
                ))}
              </div>
            </Phone>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
