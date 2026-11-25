import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { whatsappLink } from "./links";
import { useLocale } from "@/i18n/locale";

export function Preorder() {
  const { t } = useLocale();
  const whatsappHref = whatsappLink(t.preorder.whatsappMessage);

  return (
    <section id="precommande" className="scroll-mt-24 container-pad section-shell">
      <Reveal className="mx-auto max-w-xl">
        <div className="glass rounded-[28px] p-7 text-center sm:rounded-[32px] sm:p-8">
          <span className="text-xs font-medium tracking-[0.25em] text-primary uppercase">
            {t.preorder.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl leading-[1.1] font-bold text-balance">{t.preorder.title}</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{t.preorder.body}</p>

          <div className="mt-6 grid gap-3">
            {whatsappHref ? (
              <Button asChild size="lg" className="w-full rounded-full">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  {t.preorder.whatsapp}
                </a>
              </Button>
            ) : (
              <div>
                <Button size="lg" className="w-full rounded-full" disabled>
                  {t.preorder.whatsapp}
                </Button>
                <p className="mt-2 text-xs text-muted-foreground">{t.preorder.whatsappPending}</p>
              </div>
            )}
            <Button asChild size="lg" variant="outline" className="w-full rounded-full">
              <a href="#newsletter">{t.preorder.email}</a>
            </Button>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">{t.preorder.consent}</p>
        </div>
      </Reveal>
    </section>
  );
}
