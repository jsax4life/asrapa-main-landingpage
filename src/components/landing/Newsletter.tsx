import { useState, type FormEvent } from "react";
import { Loader2, Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal } from "./Reveal";
import { useLocale } from "@/i18n/locale";
import { NewsletterSubscribeError, subscribeNewsletter } from "@/lib/newsletter";

export function Newsletter() {
  const { t } = useLocale();
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || submitting) return;

    setSubmitting(true);
    try {
      const result = await subscribeNewsletter(email);
      if (result === "already_subscribed") {
        toast.success(t.newsletter.toastAlreadyTitle, {
          description: t.newsletter.toastAlreadyBody,
        });
      } else {
        toast.success(t.newsletter.toastTitle, {
          description: t.newsletter.toastBody,
        });
      }
      setEmail("");
    } catch (error) {
      const description =
        error instanceof NewsletterSubscribeError && error.message
          ? error.message
          : t.newsletter.toastErrorBody;
      toast.error(t.newsletter.toastErrorTitle, { description });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 container-pad section-shell">
      <Reveal className="mx-auto max-w-[1400px]">
        <div className="glass grid gap-8 rounded-[28px] p-7 sm:rounded-[32px] sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:p-12">
          <div>
            <span className="text-xs font-medium tracking-[0.25em] text-primary uppercase">
              {t.newsletter.eyebrow}
            </span>
            <h2 className="mt-3 text-2xl leading-[1.1] font-bold sm:text-3xl">
              {t.newsletter.title}
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
              {t.newsletter.body}
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-3 sm:flex-row"
            aria-label={t.newsletter.formLabel}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              {t.newsletter.email}
            </label>
            <div className="relative flex-1">
              <Mail
                className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <Input
                id="newsletter-email"
                type="email"
                required
                autoComplete="email"
                disabled={submitting}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-12 rounded-full border-border bg-secondary/50 pl-11 focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="h-12 rounded-full px-7"
            >
              {submitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden />
                  {t.newsletter.submitting}
                </>
              ) : (
                t.newsletter.subscribe
              )}
            </Button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
