import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/legal/PrivacyPage";
import { privacyEn } from "@/components/legal/privacyContent";

const description =
  "AsraPa privacy policy: data collected, how it is used and shared, retention, account deletion and your rights.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy · AsraPa" },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Privacy Policy · AsraPa" },
      { property: "og:description", content: description },
      { property: "og:locale", content: "en_US" },
    ],
    links: [
      { rel: "canonical", href: "https://asrapa.com/privacy" },
      { rel: "alternate", hrefLang: "en", href: "https://asrapa.com/privacy" },
      { rel: "alternate", hrefLang: "fr", href: "https://asrapa.com/confidentialite" },
    ],
  }),
  component: () => <PrivacyPage content={privacyEn} />,
});
