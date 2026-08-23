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
import { useLocale } from "@/i18n/locale";

const avatars = [avatar1, avatar2, avatar3, avatar2];
const ratings = [5, 5, 4, 5];

export function Testimonials() {
  const { t } = useLocale();

  return (
    <section className="border-y border-border/70 bg-surface/55 section-shell">
      <div className="mx-auto max-w-[1400px] container-pad">
        <SectionHeading
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          description={t.testimonials.description}
        />

        <Reveal className="mt-12">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {t.testimonials.items.map((item, i) => {
                const rating = ratings[i] ?? 5;
                return (
                  <CarouselItem key={item.name} className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                    <figure className="glass interactive-lift flex h-full flex-col rounded-3xl p-6 sm:p-7">
                      <div className="flex gap-1" aria-label={`${rating} ${t.testimonials.stars}`}>
                        {Array.from({ length: 5 }).map((_, star) => (
                          <Star
                            key={star}
                            aria-hidden
                            className={
                              star < rating
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
                          src={avatars[i] ?? avatar1}
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
                );
              })}
            </CarouselContent>
            <CarouselPrevious
              aria-label={t.testimonials.prev}
              className="-left-2 hidden border-border bg-secondary/80 sm:flex"
            />
            <CarouselNext
              aria-label={t.testimonials.next}
              className="-right-2 hidden border-border bg-secondary/80 sm:flex"
            />
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
