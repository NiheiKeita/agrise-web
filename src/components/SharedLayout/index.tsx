"use client"

import { ReactNode, useState, useEffect } from "react"
import Link from "next/link"
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

      <footer className="mt-16 border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div>
              <h3 className="font-playfair text-xl font-bold text-gray-900">株式会社AGRISE</h3>
              <p className="mt-2 text-sm text-gray-600">なりたい自分に、もっと近く。</p>
            </div>

            <div>
              <h4 className="mb-3 font-inter text-sm font-semibold text-gray-900">NAVIGATION</h4>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link href="/" className="text-gray-600 hover:text-gray-900">TOP</Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">ABOUT</Link>
                <Link href="/service" className="text-gray-600 hover:text-gray-900">SERVICE</Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">CONTACT</Link>
              </nav>
            </div>

            <div>
              <h4 className="mb-3 font-inter text-sm font-semibold text-gray-900">CONTACT</h4>
              <p className="text-sm text-gray-600">メールアドレス: <a className="text-indigo-600 hover:underline" href="mailto:agrise8@gmail.com">agrise8@gmail.com</a></p>
              {/* <p className="mt-2 text-xs text-gray-500">メール本文に「姓名・返信用メールアドレス・電話番号（任意）・お問い合わせ内容」をご記載ください。</p> */}
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6 text-center font-inter text-gray-600">
            <p>&copy; 2025 株式会社AGRISE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
