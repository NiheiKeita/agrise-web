"use client"

export default function AboutView() {
  return (
    <section className="space-y-6">
      <h1 className="font-playfair text-3xl font-bold text-gray-900 text-center">ABOUT</h1>

      <div className="relative mx-auto max-w-3xl rounded-2xl p-6 sm:p-8">
        {/* 装飾（淡いブロブ） */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-8 -right-6 size-32 rounded-full bg-indigo-100 opacity-40 blur-2xl" />
          <div className="absolute -bottom-10 -left-8 size-36 rounded-full bg-amber-100 opacity-40 blur-2xl" />
        </div>

        <div className="space-y-3 px-2 text-gray-800">
          <div className="flex items-start justify-center gap-4">
            <span className="w-28 shrink-0 text-gray-500">社名</span>
            <span className="w-1/2 break-words">株式会社AGRISE（Agrise Co., Ltd.）</span>
          </div>
          <div className="flex items-start justify-center gap-4">
            <span className="w-28 shrink-0 text-gray-500">代表者</span>
            <span className="w-1/2 break-words">小﨑 魁</span>
          </div>
          <div className="flex items-start justify-center gap-4">
            <span className="w-28 shrink-0 text-gray-500">資本金</span>
            <span className="w-1/2 break-words">１０万</span>
          </div>
          <div className="flex items-start justify-center gap-4">
            <span className="w-28 shrink-0 text-gray-500">設立日</span>
            <span className="w-1/2 break-words">２０２５年６月１１日</span>
          </div>
          <div className="flex items-start justify-center gap-4">
            <span className="w-28 shrink-0 text-gray-500">所在地</span>
            <span className="w-1/2 break-words">埼玉県川口市里１０２１</span>
          </div>
          <div className="flex items-start justify-center gap-4">
            <span className="w-28 shrink-0 text-gray-500">事業所</span>
            <span className="w-1/2 break-words">神奈川県茅ヶ崎市共恵２－３－３３</span>
          </div>
          <div className="flex items-start justify-center gap-4">
            <span className="w-28 shrink-0 text-gray-500">事業内容</span>
            <span className="w-1/2 break-words leading-7">①キャリア育成サービス<br />②営業代行サービス<br />③販売代行サービス<br />④WEBプロモーションサービス</span>
          </div>
        </div>
      </div>
    </section>
  )
}
