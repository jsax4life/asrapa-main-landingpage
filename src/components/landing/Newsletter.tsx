import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal } from "./Reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    toast.success("You're on the list", {
      description: "New drops and platform updates are on the way.",
    });
    setEmail("");
  };

  return (
    <section id="contact" className="scroll-mt-24 container-pad section-shell">
      <Reveal className="mx-auto max-w-[1400px]">
        <div className="glass grid gap-8 rounded-[28px] p-7 sm:rounded-[32px] sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:p-12">
          <div>
            <span className="text-xs font-medium tracking-[0.25em] text-primary uppercase">
              Newsletter
            </span>
            <h2 className="mt-3 text-2xl leading-[1.1] font-bold sm:text-3xl">
              New music, straight to your inbox
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Weekly drops, artist spotlights and product updates. No spam — unsubscribe anytime.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-3 sm:flex-row"
            aria-label="Newsletter signup"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-12 rounded-full border-border bg-secondary/50 pl-11 focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <Button type="submit" size="lg" className="h-12 rounded-full px-7">
              Subscribe
            </Button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
