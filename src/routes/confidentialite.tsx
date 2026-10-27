import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/legal/PrivacyPage";
import { privacyFr } from "@/components/legal/privacyContent";

const description =
  "Politique de confidentialité d'AsraPa : données collectées, utilisation, partage, conservation, suppression du compte et vos droits.";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité · AsraPa" },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Politique de confidentialité · AsraPa" },
      { property: "og:description", content: description },
      { property: "og:locale", content: "fr_FR" },
    ],
    links: [
      { rel: "canonical", href: "https://asrapa.com/confidentialite" },
      { rel: "alternate", hrefLang: "en", href: "https://asrapa.com/privacy" },
      { rel: "alternate", hrefLang: "fr", href: "https://asrapa.com/confidentialite" },
    ],
  }),
  component: () => <PrivacyPage content={privacyFr} />,
});
