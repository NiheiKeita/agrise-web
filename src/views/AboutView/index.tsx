"use client"

export default function AboutView() {
  return (
    <section className="space-y-4">
      <h1 className="font-playfair text-3xl font-bold text-gray-900">ABOUT</h1>
      <div className="space-y-3 text-gray-800">
        <div className="flex items-start gap-2">
          <span className="w-28 shrink-0 text-gray-500">社名</span>
          <span className="flex-1">株式会社AGRISE（Agrise Co., Ltd.）</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="w-28 shrink-0 text-gray-500">代表者</span>
          <span className="flex-1">小﨑 魁</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="w-28 shrink-0 text-gray-500">資本金</span>
          <span className="flex-1">１０万</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="w-28 shrink-0 text-gray-500">設立日</span>
          <span className="flex-1">２０２５年６月１１日</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="w-28 shrink-0 text-gray-500">所在地</span>
          <span className="flex-1">埼玉県川口市里１０２１</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="w-28 shrink-0 text-gray-500">事業所</span>
          <span className="flex-1">神奈川県茅ヶ崎市共恵２－３－３３</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="w-28 shrink-0 text-gray-500">事業内容</span>
          <span className="flex-1 leading-7">①キャリア育成サービス<br />②営業代行サービス<br />③販売代行サービス<br />④WEBプロモーションサービス</span>
        </div>
      </div>
    </section>
  )
}
