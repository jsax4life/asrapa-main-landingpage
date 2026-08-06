import {
  BarChart3,
  Clock,
  Download,
  Headphones,
  Heart,
  ListMusic,
  Share2,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const features = [
  {
    icon: Headphones,
    title: "Unlimited Music Streaming",
    body: "Play every track in the catalogue with no daily caps or hidden limits.",
  },
  {
    icon: ListMusic,
    title: "Create Playlists",
    body: "Build, reorder and share playlists for every mood, commute and party.",
  },
  {
    icon: Heart,
    title: "Follow Artists",
    body: "Get notified the moment the artists you love drop something new.",
  },
  {
    icon: Sparkles,
    title: "High Quality Audio",
    body: "Studio-grade streaming that keeps every bassline and vocal intact.",
  },
  {
    icon: Download,
    title: "Offline Listening",
    body: "Save your favourites for the road. Rolling out soon on mobile.",
    soon: true,
  },
  {
    icon: BarChart3,
    title: "Artist Analytics",
    body: "See streams, saves, cities and listener growth in real time.",
  },
  {
    icon: Share2,
    title: "Music Sharing",
    body: "Share tracks anywhere with rich, instant-playing preview links.",
  },
  {
    icon: Clock,
    title: "Personalized Recommendations",
    body: "A feed that learns your taste and surfaces the next favourite.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    body: "Protected accounts, safe payouts and verified artist profiles.",
  },
  {
    icon: Zap,
    title: "Fast Streaming",
    body: "Optimised delivery that starts playback instantly, even on 3G.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 section-shell">
      <div className="mx-auto max-w-[1400px] container-pad">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to listen, create and grow"
          description="A complete music ecosystem designed for fans, independent artists and the agents who back them."
        />

        <ul className="mt-12 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((feature, i) => (
            <Reveal as="li" key={feature.title} delay={(i % 5) * 60}>
              <article className="group glass interactive-lift h-full rounded-3xl p-5 sm:p-6">
                <span className="icon-box group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105">
                  <feature.icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-5 flex flex-wrap items-center gap-2 font-display text-base font-bold">
                  {feature.title}
                  {feature.soon ? (
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[10px] tracking-wide text-muted-foreground uppercase">
                      Coming soon
                    </span>
                  ) : null}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
