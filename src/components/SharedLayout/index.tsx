"use client"

import { ReactNode, useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BrandLogo } from "~/components/BrandLogo"
import { SharedHeader } from "~/components/SharedHeader"

interface SharedLayoutProps {
  children: ReactNode
}

export function SharedLayout({ children }: SharedLayoutProps) {
  const [scrollY, setScrollY] = useState(0)
  const [prevScrollY, setPrevScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > prevScrollY) {
        setScrollDirection('down')
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection('up')
      }

      setPrevScrollY(currentScrollY)
      setScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollY])

  // ページごとのmainクラスを決定
  const getMainClasses = () => {
    if (pathname === '/') {
      return "mx-auto max-w-6xl px-6 py-12 pt-28 sm:px-8 lg:px-10"
    }

    return "mx-auto max-w-4xl px-6 py-14 pt-28 sm:px-8 lg:px-10"
  }

  return (
    <div className="min-h-screen bg-white">
      <SharedHeader scrollY={scrollY} scrollDirection={scrollDirection} />

      <main className={getMainClasses()}>
        {children}
      </main>

      <footer className="mt-20 bg-slate-950 text-white/80">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="text-center md:text-left">
              <div className="flex flex-col items-center gap-4 md:items-start">
                <BrandLogo size="lg" />
                <div>
                  <h3 className="font-playfair text-lg font-bold text-white">株式会社アグライズ</h3>
                  <p className="mt-2 text-sm text-white/70">なりたい自分に、もっと近く。</p>
                </div>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h4 className="mb-3 font-inter text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Site</h4>
              <nav className="flex flex-col items-center space-y-2 text-sm md:items-start">
                <Link href="/" className="text-white/70 transition hover:text-white">TOP</Link>
                <Link href="/about" className="text-white/70 transition hover:text-white">ABOUT</Link>
                <Link href="/service" className="text-white/70 transition hover:text-white">SERVICE</Link>
                <Link href="/contact" className="text-white/70 transition hover:text-white">CONTACT</Link>
              </nav>
            </div>

            <div className="text-center md:text-left">
              <h4 className="mb-3 font-inter text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Legal</h4>
              <div className="flex flex-col items-center space-y-2 text-sm md:items-start">
                <Link href="/privacy" className="text-white/70 transition hover:text-white">Privacy Policy</Link>
                <Link href="/terms" className="text-white/70 transition hover:text-white">Terms of Use</Link>
                <a className="text-white/70 transition hover:text-white" href="mailto:agrise8@gmail.com">Contact</a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center font-inter text-xs text-white/50">
            <p>&copy; 2025 株式会社アグライズ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
