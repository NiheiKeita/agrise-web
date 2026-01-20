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

const siteUrl = "https://niheikeita.github.io/agrise-web"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "株式会社アグライズ",
  description: "キャリア育成と不動産を軸に、関わるすべての人が自分らしい人生を歩める社会を目指す株式会社アグライズのコーポレートサイト",
  applicationName: "株式会社アグライズ",
  icons: {
    icon: "favicon.ico",
    shortcut: "favicon.ico",
    apple: "favicon.ico",
  },
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "株式会社アグライズ",
    description: "キャリア育成と不動産を軸に、関わるすべての人が自分らしい人生を歩める社会を目指す株式会社アグライズのコーポレートサイト",
    siteName: "株式会社アグライズ",
    url: "/",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "logo.png",
        width: 1200,
        height: 1200,
        alt: "株式会社アグライズ",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "株式会社アグライズ",
    description: "キャリア育成と不動産を軸に、関わるすべての人が自分らしい人生を歩める社会を目指す株式会社アグライズのコーポレートサイト",
    images: ["logo.png"],
  },
  verification: {
    google: "Fq6arPWMgqt3Ymc0j24MA9Nnt-2WDFyCbBMQsJRSRTg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "株式会社アグライズ",
    url: siteUrl,
    publisher: {
      "@type": "Organization",
      name: "株式会社アグライズ",
      logo: `${siteUrl}/logo.png`,
    },
  }

  return (
    <html lang="ja" className={`${playfairDisplay.variable} ${inter.variable} ${cormorantGaramond.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-inter antialiased">
        <SharedLayout>{children}</SharedLayout>
      </body>
    </html>
  )
}
