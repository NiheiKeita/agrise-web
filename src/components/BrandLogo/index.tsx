import Image from "next/image"
import logo from "~/app/logo.png"

type BrandLogoSize = "sm" | "md" | "lg"

const sizeClassMap: Record<BrandLogoSize, string> = {
  sm: "h-[20px]",
  md: "h-[30px]",
  lg: "h-[32px]",
}

interface BrandLogoProps {
  size?: BrandLogoSize
  className?: string
  priority?: boolean
  alt?: string
}

export function BrandLogo({
  size = "md",
  priority = false,
  alt = "株式会社アグライズ ロゴ",
}: BrandLogoProps) {
  return (
    <Image
      src={logo}
      alt={alt}
      width={logo.width}
      height={logo.height}
      priority={priority}
      className={`${sizeClassMap[size]} w-auto object-contain`}
    />
  )
}
