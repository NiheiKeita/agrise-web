import Image from "next/image"
import logo from "~/app/logo.png"

type BrandLogoSize = "sm" | "md" | "lg"

const sizeClassMap: Record<BrandLogoSize, string> = {
  sm: "h-[20px]",
  md: "h-[30px]",
  lg: "h-[32px]",
}

const plateClassName =
  "inline-flex items-center justify-center rounded-xl bg-white/15 px-3.5 py-2.5 shadow-[0_1px_6px_rgba(15,23,42,0.08)] ring-1 ring-black/5 backdrop-blur-md"

interface BrandLogoProps {
  size?: BrandLogoSize
  className?: string
  priority?: boolean
  alt?: string
}

export function BrandLogo({
  size = "md",
  className,
  priority = false,
  alt = "株式会社アグライズ ロゴ",
}: BrandLogoProps) {
  return (
    // <div className={`${plateClassName} ${className ?? ""}`}>
    <Image
      src={logo}
      alt={alt}
      width={logo.width}
      height={logo.height}
      priority={priority}
      className={`${sizeClassMap[size]} w-auto object-contain`}
    />
    // </div>
  )
}
