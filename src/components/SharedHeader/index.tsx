"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface SharedHeaderProps {
  scrollY?: number
  scrollDirection?: 'up' | 'down'
}

export function SharedHeader({ scrollY = 0, scrollDirection = 'up' }: SharedHeaderProps) {
  const pathname = usePathname()
  
  // ヘッダーを隠すかどうかの判定
  const shouldHideHeader = scrollDirection === 'down' && scrollY > 100

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 p-2 transition-all duration-300 sm:px-4 lg:px-6 ${scrollY > 50
        ? 'border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur-md'
        : 'bg-transparent'
        }`}
      style={{
        transform: shouldHideHeader ? 'translateY(-100%)' : 'translateY(0%)',
      }}
    >
      <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href={"/"}
            className="font-playfair text-xl font-bold text-gray-900 transition-colors duration-200 hover:text-gray-600"
          >
            <div className="shrink-0">
              <h1 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text font-playfair text-2xl font-bold text-transparent sm:text-3xl">株式会社AGRISE</h1>
              <p className="font-inter text-[10px] tracking-[0.25em] text-gray-600 sm:text-xs">AGRiSE Co., Ltd.</p>
            </div>
          </Link>

          <div className="flex space-x-4 sm:space-x-8">
            <Link
              href={"/"}
              className={`font-inter text-sm font-medium transition-colors duration-200 ${pathname === '/' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
            >
              TOP
            </Link>
            <Link
              href={"/about"}
              className={`font-inter text-sm font-medium transition-colors duration-200 ${pathname === '/about' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
            >
              ABOUT
            </Link>
            <Link
              href={"/service"}
              className={`font-inter text-sm font-medium transition-colors duration-200 ${pathname === '/service' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
            >
              SERVICE
            </Link>
            <Link
              href={"/contact"}
              className={`font-inter text-sm font-medium transition-colors duration-200 ${pathname === '/contact' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
