import type { Metadata } from "next"
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google"
import React from "react"
import { SharedLayout } from "~/components/SharedLayout"
import "./globals.css"

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: 'swap',
})

export const metadata: Metadata = {
  title: "株式会社AGRISE | AGRISE Co., Ltd.",
  description: "キャリア育成と不動産を軸に、関わるすべての人が自分らしい人生を歩める社会を目指す株式会社AGRISEのコーポレートサイト",
  verification: {
    google: "Fq6arPWMgqt3Ymc0j24MA9Nnt-2WDFyCbBMQsJRSRTg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${playfairDisplay.variable} ${inter.variable} ${cormorantGaramond.variable}`}>
      <body className="font-inter antialiased">
        <SharedLayout>{children}</SharedLayout>
      </body>
    </html>
  )
}
