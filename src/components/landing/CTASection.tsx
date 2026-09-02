import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { StoreBadges } from "./StoreBadges";
import { BrandIcon } from "./Logo";
import { getAppDownloadUrl, LINKS, type AppDownloadUrl } from "./links";
import { useLocale } from "@/i18n/locale";

export function CTASection() {
  const { t } = useLocale();
  const [listenUrl, setListenUrl] = useState<AppDownloadUrl>(LINKS.playStore);

  useEffect(() => {
    setListenUrl(getAppDownloadUrl());
  }, []);

  return (
    <section className="container-pad section-shell">
      <Reveal className="mx-auto max-w-[1400px]">
        <div className="bg-brand-gradient relative overflow-hidden rounded-[28px] border border-primary/20 px-6 py-14 text-center shadow-[var(--shadow-glow)] sm:rounded-[32px] sm:px-12 sm:py-16 lg:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_120%,rgb(0_0_0/0.55),transparent)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <BrandIcon className="mx-auto size-12" />
            <h2 className="mt-5 text-3xl leading-[1.05] font-bold text-primary-foreground sm:text-4xl lg:text-[2.75rem]">
              {t.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/90">
              {t.cta.body}
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full bg-black px-8 text-brand-gray hover:bg-black/90"
              >
                <a href={listenUrl} target="_blank" rel="noopener noreferrer">
                  {t.cta.getStarted}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary-foreground/45 bg-transparent px-8 text-primary-foreground hover:bg-primary-foreground/12 hover:text-primary-foreground"
              >
                <a href={LINKS.artists} target="_blank" rel="noopener noreferrer">
                  {t.cta.joinArtist}
                </a>
              </Button>
            </div>
            <StoreBadges className="mt-6 justify-center" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
