const API_BASE = "https://api.asrapa.com";
const SUBSCRIBE_PATH = "/api/v1/newsletter/subscribe";
const UNSUBSCRIBE_PATH = "/api/v1/newsletter/unsubscribe";

type ApiResponse = {
  status?: string;
  message?: string;
  data?: {
    email?: string;
    subscribedAt?: string;
  };
};

export type SubscribeResult = "subscribed" | "already_subscribed";

export class NewsletterSubscribeError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "NewsletterSubscribeError";
    this.status = status;
  }
}

function isAlreadySubscribed(message: string | undefined): boolean {
  return message?.toLowerCase().includes("already subscribed") ?? false;
}

export async function subscribeNewsletter(email: string): Promise<SubscribeResult> {
  const normalized = email.trim().toLowerCase();
  if (!normalized) {
    throw new NewsletterSubscribeError("Email is required.");
  }

  const res = await fetch(`${API_BASE}${SUBSCRIBE_PATH}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: normalized }),
  });

  const json = (await res.json().catch(() => null)) as ApiResponse | null;

  if (res.ok) {
    if (json?.status === "success") return "subscribed";
    if (isAlreadySubscribed(json?.message)) return "already_subscribed";
  }

  const message =
    json?.message ?? `Newsletter signup failed (${res.status}).`;
  throw new NewsletterSubscribeError(message, res.status);
}

export async function unsubscribeNewsletter(
  input: { email: string } | { token: string },
): Promise<void> {
  const res = await fetch(`${API_BASE}${UNSUBSCRIBE_PATH}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  const json = (await res.json().catch(() => null)) as ApiResponse | null;

  if (res.ok && json?.status === "success") return;

  const message =
    json?.message ?? `Newsletter unsubscribe failed (${res.status}).`;
  throw new NewsletterSubscribeError(message, res.status);
}
