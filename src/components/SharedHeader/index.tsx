"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import logo from "~/app/logo.png"

interface SharedHeaderProps {
  scrollY?: number
  scrollDirection?: 'up' | 'down'
}

export function SharedHeader({ scrollY = 0, scrollDirection = 'up' }: SharedHeaderProps) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const isActive = (href: string) => pathname === href || pathname === `${href}/`

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
        : 'bg-white/90'
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
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="株式会社アグライズ ロゴ"
                width={44}
                height={44}
                priority
                className="size-10 object-cover sm:size-11"
              />
              <div className="shrink-0">
                <h1 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text font-playfair text-2xl font-bold text-transparent sm:text-3xl">株式会社アグライズ</h1>
                <p className="font-inter text-[10px] tracking-[0.25em] text-gray-600 sm:text-xs">コーポレートサイト</p>
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center space-x-6 md:flex">
            <Link
              href={"/"}
              className={`border-b-2 font-inter text-sm font-medium transition-colors duration-200 ${isActive('/') ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-900'}`}
            >
              TOP
            </Link>
            <Link
              href={"/about"}
              className={`border-b-2 font-inter text-sm font-medium transition-colors duration-200 ${isActive('/about') ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-900'}`}
            >
              ABOUT
            </Link>
            <Link
              href={"/service"}
              className={`border-b-2 font-inter text-sm font-medium transition-colors duration-200 ${isActive('/service') ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-900'}`}
            >
              SERVICE
            </Link>
            <Link
              href={"/contact"}
              className={`border-b-2 font-inter text-sm font-medium transition-colors duration-200 ${isActive('/contact') ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-900'}`}
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
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
                className={`block rounded-md px-3 py-2 font-inter text-sm ${isActive('/') ? 'bg-gray-50 text-gray-900' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}
              >
                TOP
              </Link>
              <Link
                href={"/about"}
                className={`block rounded-md px-3 py-2 font-inter text-sm ${isActive('/about') ? 'bg-gray-50 text-gray-900' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}
              >
                ABOUT
              </Link>
              <Link
                href={"/service"}
                className={`block rounded-md px-3 py-2 font-inter text-sm ${isActive('/service') ? 'bg-gray-50 text-gray-900' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}
              >
                SERVICE
              </Link>
              <Link
                href={"/contact"}
                className={`block rounded-md px-3 py-2 font-inter text-sm ${isActive('/contact') ? 'bg-gray-50 text-gray-900' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}
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
