import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Manifesto } from "@/components/landing/Manifesto";
import { SocialProof } from "@/components/landing/SocialProof";
import { Stats } from "@/components/landing/Stats";
import { Features } from "@/components/landing/Features";
import { ArtistSection } from "@/components/landing/ArtistSection";
import { AgentSection } from "@/components/landing/AgentSection";
import { Discover } from "@/components/landing/Discover";
import { WhyChoose } from "@/components/landing/WhyChoose";
import { Testimonials } from "@/components/landing/Testimonials";
import { AppPreview } from "@/components/landing/AppPreview";
import { CTASection } from "@/components/landing/CTASection";
import { FAQ } from "@/components/landing/FAQ";
import { Newsletter } from "@/components/landing/Newsletter";
import { Footer } from "@/components/landing/Footer";
import { LocaleProvider } from "@/i18n/locale";

const title = "Asrapa Music — Reconnect with your culture | Stream African Music";
const description =
  "Asrapa Music connects artists, fans and agents. Stream unlimited African music, release your songs, track analytics and earn as an agent.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Asrapa Music, African music streaming, Afrobeats, Amapiano, independent artists, music agents Nigeria",
      },
      { name: "theme-color", content: "#FF0000" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Asrapa Music — Reconnect with your culture" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Asrapa Music" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Asrapa Music — Reconnect with your culture" },
      { name: "twitter:description", content: description },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Asrapa Music",
          applicationCategory: "MultimediaApplication",
          operatingSystem: "Web",
          description,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "NGN",
          },
          brand: {
            "@type": "Brand",
            name: "Asrapa Music",
          },
        },
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LocaleProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main id="main">
          <Hero />
          <Manifesto />
          <SocialProof />
          <Stats />
          <Features />
          <ArtistSection />
          <AgentSection />
          <Discover />
          <WhyChoose />
          <Testimonials />
          <AppPreview />
          <CTASection />
          <FAQ />
          <Newsletter />
        </main>
        <Footer />
        <Toaster />
      </div>
    </LocaleProvider>
  );
}
