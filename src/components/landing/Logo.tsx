import { cn } from "@/lib/utils";
import logoWhite from "@/assets/brand/logo-white.png";
import logoMain from "@/assets/brand/logo-main.png";
import iconWhite from "@/assets/brand/icon-white.png";
import iconBlack from "@/assets/brand/icon-black.png";

type LogoVariant = "wordmark" | "main" | "icon" | "icon-black";

const assets = {
  wordmark: { src: logoWhite, width: 515, height: 185, className: "h-8 w-auto sm:h-9" },
  main: { src: logoMain, width: 720, height: 258, className: "h-9 w-auto sm:h-10" },
  icon: { src: iconWhite, width: 282, height: 299, className: "size-9" },
  "icon-black": { src: iconBlack, width: 282, height: 300, className: "size-9" },
} as const;

export function Logo({
  className,
  variant = "wordmark",
}: {
  className?: string;
  variant?: LogoVariant;
}) {
  const asset = assets[variant];

  return (
    <span className={cn("inline-flex items-center", className)}>
      <img
        src={asset.src}
        alt="AsraPa"
        width={asset.width}
        height={asset.height}
        decoding="async"
        className={cn("object-contain object-left", asset.className)}
      />
    </span>
  );
}

export function BrandIcon({
  className,
  variant = "white",
}: {
  className?: string;
  variant?: "white" | "black";
}) {
  const src = variant === "white" ? iconWhite : iconBlack;
  return (
    <img
      src={src}
      alt=""
      aria-hidden
      width={282}
      height={299}
      decoding="async"
      className={cn("size-5 object-contain", className)}
    />
  );
}
