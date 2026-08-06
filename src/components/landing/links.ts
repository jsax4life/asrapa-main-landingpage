/** Central destination URLs for Asrapa Music CTAs. */
export const LINKS = {
  artists: "https://artists.asrapa.com/",
  agents: "https://agents.asrapa.com/",
  /** Update when the App Store listing ID is finalized. */
  appStore: "https://apps.apple.com/app/asrapa-music",
  /** Update when the Play Store package name is finalized. */
  playStore: "https://play.google.com/store/apps/details?id=com.asrapa.music",
} as const;

export type AppDownloadUrl = (typeof LINKS)["appStore"] | (typeof LINKS)["playStore"];

/** Route listeners to the store matching their device. */
export function getAppDownloadUrl(
  userAgent = typeof navigator !== "undefined" ? navigator.userAgent : "",
): AppDownloadUrl {
  const ua = userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(ua)) return LINKS.appStore;
  if (/android/.test(ua)) return LINKS.playStore;
  if (/mac os x|macintosh/.test(ua)) return LINKS.appStore;
  return LINKS.playStore;
}
