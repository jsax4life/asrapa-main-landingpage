import { useState } from "react";
import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { LINKS } from "./links";
import { StoreBadges } from "./StoreBadges";
import { useLocale } from "@/i18n/locale";

const externalHrefs = {
  artists: LINKS.artists,
  agents: LINKS.agents,
  playStore: LINKS.playStore,
} as const;

function resolveHref(href: string) {
  if (href in externalHrefs) {
    return externalHrefs[href as keyof typeof externalHrefs];
  }
  return href;
}

function TikTok(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M16.5 3c.3 2 1.6 3.4 3.5 3.6v2.5c-1.3.1-2.5-.2-3.7-.9v6.1c0 3.3-2.5 5.7-5.6 5.7A5.6 5.6 0 1 1 11 8.5v2.7a2.9 2.9 0 1 0 2.1 2.8V3h3.4Z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M17.5 3h3.1l-6.8 7.8L21.8 21h-6.2l-4.4-5.8L6.1 21H3l7.3-8.3L2.6 3h6.4l4 5.3L17.5 3Zm-1.1 16h1.7L7.7 4.8H5.9L16.4 19Z" />
    </svg>
  );
}

const socials = [
  { label: "Facebook", Icon: Facebook, href: LINKS.facebook, external: true },
  { label: "Instagram", Icon: Instagram, href: LINKS.instagram, external: true },
  { label: "TikTok", Icon: TikTok, href: "#contact", external: false },
  { label: "YouTube", Icon: Youtube, href: "#contact", external: false },
  { label: "X", Icon: XIcon, href: "#contact", external: false },
];

export function Footer() {
  const { t } = useLocale();
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-border/70 bg-surface/70">
      <div className="mx-auto max-w-[1400px] container-pad py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2.7fr]">
          <div>
            <a
              href="#home"
              className="inline-flex rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Logo />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t.footer.blurb}
            </p>
            <StoreBadges className="mt-5" />
            <ul className="mt-6 flex flex-wrap gap-2">
              {socials.map(({ label, Icon, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    aria-label={label}
                    className="grid size-10 place-items-center rounded-full border border-border bg-secondary/40 text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label={t.footer.nav} className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {t.footer.columns.map((column) => (
              <div key={column.title}>
                <h3 className="font-display text-sm font-bold">{column.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) =>
                    link.href === "#contact-toggle" ? (
                      <li key={link.label}>
                        <button
                          type="button"
                          aria-expanded={contactOpen}
                          onClick={() => setContactOpen((v) => !v)}
                          className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          {link.label}
                        </button>
                        {contactOpen ? (
                          <ul className="mt-3 space-y-2 border-l border-border/70 pl-3 text-sm">
                            <li>
                              <a
                                href={`mailto:${t.contact.email}`}
                                className="inline-flex items-center gap-2 text-foreground/90 transition-colors hover:text-primary"
                              >
                                <Mail className="size-4 text-primary" aria-hidden />
                                {t.contact.email}
                              </a>
                            </li>
                            {t.contact.phones.map((phone) => (
                              <li key={phone}>
                                <a
                                  href={`tel:${phone.replace(/\s/g, "")}`}
                                  className="inline-flex items-center gap-2 text-foreground/90 transition-colors hover:text-primary"
                                >
                                  <Phone className="size-4 text-primary" aria-hidden />
                                  {phone}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ) : (
                      <li key={link.label}>
                        <a
                          href={resolveHref(link.href)}
                          {...("external" in link && link.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          {link.label}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} AsraPa. {t.footer.rights}
          </p>
          <p>{t.footer.made}</p>
        </div>
      </div>
    </footer>
  );
}
