const API_BASE = "https://api.asrapa.com";

export type PlatformStats = {
  songs: number;
  artists: number;
  listeners: number;
  cities: number;
};

type PlatformStatsResponse = {
  status: string;
  data: PlatformStats;
};

/** Format raw API counts like the landing dummy UI. */
export function formatStat(n: number): { display: string; suffix: string } {
  if (n >= 1000) {
    return { display: String(Math.floor(n / 1000)), suffix: "K+" };
  }
  return { display: String(n), suffix: "+" };
}

export async function fetchPlatformStats(): Promise<PlatformStats> {
  const res = await fetch(`${API_BASE}/api/v1/settings/platform-stats`, {
    headers: { Accept: "application/json" },
  });

  const json = (await res.json().catch(() => null)) as
    | PlatformStatsResponse
    | { status?: string; message?: string }
    | null;

  if (!res.ok || !json || json.status !== "success" || !("data" in json) || !json.data) {
    const message =
      json && "message" in json && json.message
        ? json.message
        : `Platform stats request failed (${res.status})`;
    throw new Error(message);
  }

  return {
    songs: Number(json.data.songs) || 0,
    artists: Number(json.data.artists) || 0,
    listeners: Number(json.data.listeners) || 0,
    cities: Number(json.data.cities) || 0,
  };
}
