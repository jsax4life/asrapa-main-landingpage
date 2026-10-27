import { Logo } from "@/components/landing/Logo";
import { PRIVACY_CONTACT, type PrivacyContent } from "./privacyContent";

export function PrivacyPage({ content }: { content: PrivacyContent }) {
  return (
    <div lang={content.lang} className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/70">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 container-pad py-5">
          <a
            href="/"
            aria-label={content.homeLabel}
            className="inline-flex rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Logo />
          </a>
          <a
            href={content.otherPath}
            hrefLang={content.lang === "fr" ? "en" : "fr"}
            className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {content.otherLabel}
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl container-pad py-12 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">{content.eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          {content.title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">{content.updated}</p>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">{content.intro}</p>

        <div className="mt-6 rounded-2xl border border-border bg-secondary/30 px-5 py-4 text-sm">
          <span className="text-muted-foreground">
            {content.contactLabel}
            {content.lang === "fr" ? " : " : ": "}
          </span>
          <a href={`mailto:${PRIVACY_CONTACT}`} className="font-medium text-foreground hover:text-primary">
            {PRIVACY_CONTACT}
          </a>
        </div>

        <nav aria-label={content.title} className="mt-10">
          <ol className="grid gap-1.5 text-sm sm:grid-cols-2">
            {content.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="text-muted-foreground transition-colors hover:text-primary">
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-12 space-y-10">
          {content.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-8">
              <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">{section.title}</h2>
              {section.itemsFirst ? (
                <>
                  {section.items ? <SectionList items={section.items} /> : null}
                  {section.paragraphs?.map((p) => <SectionParagraph key={p} text={p} />)}
                </>
              ) : (
                <>
                  {section.paragraphs?.map((p) => <SectionParagraph key={p} text={p} />)}
                  {section.items ? <SectionList items={section.items} /> : null}
                </>
              )}
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-border/70">
        <div className="mx-auto flex max-w-3xl flex-col gap-2 container-pad py-8 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} AsraPa · {content.footer}</p>
          <a href="/" className="hover:text-primary">
            {content.homeLabel}
          </a>
        </div>
      </footer>
    </div>
  );
}

function SectionParagraph({ text }: { text: string }) {
  return <p className="mt-4 text-base leading-relaxed text-muted-foreground">{text}</p>;
}

function SectionList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
