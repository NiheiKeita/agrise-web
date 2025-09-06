"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

interface SharedHeaderProps {
  scrollY?: number
  scrollDirection?: 'up' | 'down'
}

export function SharedHeader({ scrollY = 0, scrollDirection = 'up' }: SharedHeaderProps) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    // Close mobile menu on route change
    setMobileOpen(false)
  }, [pathname])
  
  // ヘッダーを隠すかどうかの判定
  const shouldHideHeader = !mobileOpen && scrollDirection === 'down' && scrollY > 100

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

          {/* Desktop nav */}
          <div className="hidden items-center space-x-6 md:flex">
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

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden">
          <div className="mx-auto max-w-7xl px-4 pb-4 pt-2">
            <div className="space-y-1 rounded-lg border border-gray-200 bg-white p-2 shadow-sm">
              <Link
                href={"/"}
                className={`block rounded-md px-3 py-2 font-inter text-sm ${pathname === '/' ? 'bg-gray-50 text-gray-900' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}
              >
                TOP
              </Link>
              <Link
                href={"/about"}
                className={`block rounded-md px-3 py-2 font-inter text-sm ${pathname === '/about' ? 'bg-gray-50 text-gray-900' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}
              >
                ABOUT
              </Link>
              <Link
                href={"/service"}
                className={`block rounded-md px-3 py-2 font-inter text-sm ${pathname === '/service' ? 'bg-gray-50 text-gray-900' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}
              >
                SERVICE
              </Link>
              <Link
                href={"/contact"}
                className={`block rounded-md px-3 py-2 font-inter text-sm ${pathname === '/contact' ? 'bg-gray-50 text-gray-900' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
