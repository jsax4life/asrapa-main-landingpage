import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { getAppDownloadUrl, LINKS, type AppDownloadUrl } from "./links";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/locale";

export function Navbar() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [listenUrl, setListenUrl] = useState<AppDownloadUrl>(LINKS.playStore);

  const links = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.manifesto, href: "#manifesto" },
    { label: t.nav.howItWorks, href: "#how-it-works" },
    { label: t.nav.artists, href: "#artists" },
    { label: t.nav.network, href: "#agents" },
    { label: t.nav.catalog, href: "#catalog" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    setListenUrl(getAppDownloadUrl());
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-border/80 shadow-[var(--shadow-soft)]"
          : "border-b border-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus-visible:font-medium focus:text-primary-foreground"
      >
        {t.nav.skip}
      </a>

      <nav
        aria-label={t.nav.main}
        className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 container-pad py-3"
      >
        <a
          href="#home"
          className="min-w-0 rounded-lg transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Logo />
        </a>

        <div className="hidden items-center gap-0.5 xl:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {link.label}
            </a>
          ))}
          <div className="ml-3 flex items-center gap-2">
            <LanguageSwitcher />
            <Button asChild className="rounded-full">
              <a href={listenUrl} target="_blank" rel="noopener noreferrer">
                {t.nav.getStarted}
              </a>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-secondary/60 transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-nav" className="glass border-t border-border/80 px-5 pb-6 xl:hidden">
          <ul className="grid gap-1 py-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="grid gap-2.5">
            <Button asChild variant="outline" className="h-11 rounded-full">
              <a href={listenUrl} target="_blank" rel="noopener noreferrer">
                {t.nav.login}
              </a>
            </Button>
            <Button asChild className="h-11 rounded-full">
              <a href={listenUrl} target="_blank" rel="noopener noreferrer">
                {t.nav.getStarted}
              </a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
