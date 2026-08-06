import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <span className="text-xs font-medium tracking-[0.25em] text-primary uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl leading-[1.05] font-bold sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]",
            align === "center" && "mx-auto max-w-xl",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
