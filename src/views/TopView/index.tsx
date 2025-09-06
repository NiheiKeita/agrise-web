"use client"

import Link from "next/link"

export default function TopView() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100 px-6 py-16 sm:px-10 md:py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-indigo-100 opacity-40 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-amber-100 opacity-40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <h1 className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text font-playfair text-5xl font-bold leading-tight text-transparent sm:text-6xl">
          なりたい自分に、もっと近く。
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-700">
          株式会社AGRISEは、キャリア育成と不動産を軸に、関わるすべての人が自分らしい人生を歩める社会を目指しています。
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/service"
            className="rounded-md bg-gray-900 px-5 py-3 font-inter text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
          >
            サービスを見る
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-gray-300 bg-white px-5 py-3 font-inter text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
          >
            お問い合わせ
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-600">
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1">キャリア育成</span>
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1">営業代行</span>
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1">販売代行</span>
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1">WEBプロモーション</span>
        </div>
      </div>
    </section>
  )
}
