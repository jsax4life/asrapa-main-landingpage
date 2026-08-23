import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/locale";
import type { Locale } from "@/i18n/translations";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      role="group"
      aria-label={t.lang.label}
      className={cn(
        "inline-flex shrink-0 items-center rounded-full border border-border bg-secondary/50 p-0.5",
        className,
      )}
    >
      {(["fr", "en"] as Locale[]).map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            aria-label={code === "fr" ? t.lang.switchToFr : t.lang.switchToEn}
            className={cn(
              "rounded-full px-2.5 py-1.5 text-xs font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {code === "fr" ? t.lang.fr : t.lang.en}
          </button>
        );
      })}
    </div>
  );
}
