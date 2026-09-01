import { cn } from "@/lib/utils";

const bars = [38, 62, 24, 80, 46, 92, 30, 70, 52, 86, 34, 64, 42, 76, 28, 58, 88, 40, 66, 32];

export function Waveform({ className, active = true }: { className?: string; active?: boolean }) {
  return (
    <div aria-hidden className={cn("flex h-12 items-end gap-[3px]", className)}>
      {bars.map((height, i) => (
        <span
          key={i}
          className="w-full flex-1 origin-bottom rounded-full bg-gradient-to-t from-primary/50 to-primary"
          style={{
            height: `${height}%`,
            animation: `equalize ${0.32 + (i % 4) * 0.09}s ease-in-out ${i * 0.025}s infinite alternate`,
            animationPlayState: active ? "running" : "paused",
          }}
        />
      ))}
    </div>
  );
}
