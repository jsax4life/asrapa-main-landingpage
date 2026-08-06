import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

const testimonials = [
  {
    name: "Tayo Cole",
    role: "Afrobeats Artist, Lagos",
    avatar: avatar1,
    rating: 5,
    quote:
      "I uploaded my EP on a Friday and had 12,000 streams by Monday. The analytics showed me exactly which cities to book shows in.",
  },
  {
    name: "Amara Sey",
    role: "Independent Singer, Accra",
    avatar: avatar2,
    rating: 5,
    quote:
      "Asrapa pays fairly and treats independent artists like the main act, not an afterthought. My fanbase finally feels like mine.",
  },
  {
    name: "Kelvin Obi",
    role: "Asrapa Agent, Enugu",
    avatar: avatar3,
    rating: 4,
    quote:
      "I signed up 300 subscribers in my first two months. Commissions land on time and the agent dashboard makes follow-ups easy.",
  },
  {
    name: "Zainab Bello",
    role: "Listener, Abuja",
    avatar: avatar2,
    rating: 5,
    quote:
      "The recommendations actually understand my taste. I have found more new African artists here in a month than anywhere else in a year.",
  },
];

export function Testimonials() {
  return (
    <section className="border-y border-border/70 bg-surface/55 section-shell">
      <div className="mx-auto max-w-[1400px] container-pad">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by artists, fans and agents"
          description="Real stories from the people building their sound and their income on Asrapa."
        />

        <Reveal className="mt-12">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((item) => (
                <CarouselItem key={item.name} className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                  <figure className="glass interactive-lift flex h-full flex-col rounded-3xl p-6 sm:p-7">
                    <div className="flex gap-1" aria-label={`${item.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          aria-hidden
                          className={
                            i < item.rating
                              ? "size-4 fill-primary text-primary"
                              : "size-4 text-muted-foreground/35"
                          }
                        />
                      ))}
                    </div>
                    <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                      “{item.quote}”
                    </blockquote>
                    <figcaption className="mt-6 flex min-w-0 items-center gap-3">
                      <img
                        src={item.avatar}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        width={88}
                        height={88}
                        className="size-11 shrink-0 rounded-full object-cover ring-2 ring-border"
                      />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold">{item.name}</p>
                        <p className="truncate text-xs text-muted-foreground">{item.role}</p>
                      </div>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              aria-label="Previous testimonial"
              className="-left-2 hidden border-border bg-secondary/80 sm:flex"
            />
            <CarouselNext
              aria-label="Next testimonial"
              className="-right-2 hidden border-border bg-secondary/80 sm:flex"
            />
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
