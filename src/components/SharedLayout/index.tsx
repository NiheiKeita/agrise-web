"use client"

import { ReactNode, useState, useEffect } from "react"
import { usePathname } from "next/navigation"
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
      return "mx-auto max-w-5xl px-4 py-8 pt-28 sm:px-6 lg:px-8"
    }

    return "mx-auto max-w-4xl px-4 py-12 pt-28 sm:px-6 lg:px-8"
  }

  return (
    <div className="min-h-screen bg-white">
      <SharedHeader scrollY={scrollY} scrollDirection={scrollDirection} />

      <main className={getMainClasses()}>
        {children}
      </main>

      <footer className="mt-16 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center font-inter text-gray-600">
            <p>&copy; 2025 株式会社AGRISE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
