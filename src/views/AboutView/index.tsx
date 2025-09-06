"use client"

export default function AboutView() {
  return (
    <section className="space-y-4">
      <h1 className="font-playfair text-3xl font-bold text-gray-900">ABOUT</h1>
      <div className="space-y-3 text-gray-800">
        <p><span className="inline-block w-28 text-gray-500">社名</span>：株式会社AGRISE（Agrise Co., Ltd.）</p>
        <p><span className="inline-block w-28 text-gray-500">代表者</span>：小﨑 魁</p>
        <p><span className="inline-block w-28 text-gray-500">資本金</span>：１０万</p>
        <p><span className="inline-block w-28 text-gray-500">設立日</span>：２０２５年６月１１日</p>
        <p><span className="inline-block w-28 text-gray-500">所在地</span>：埼玉県川口市里１０２１</p>
        <p><span className="inline-block w-28 text-gray-500">事業所</span>：神奈川県茅ヶ崎市共恵２－３－３３</p>
        <p className="leading-7">
          <span className="inline-block w-28 text-gray-500">事業内容</span>：①キャリア育成サービス、②営業代行サービス、③販売代行サービス、④WEBプロモーションサービス
        </p>
      </div>
    </section>
  )
}

