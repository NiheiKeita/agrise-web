export default function ContactView() {
  return (
    <section className="space-y-4">
      <div className="space-y-8">
        <h1 className="font-playfair text-3xl font-bold text-gray-900 text-center">CONTACT</h1>
        <p className="text-gray-700">お問合せは以下のメールアドレスまでご連絡ください。</p>
        <p>
          <a
            href="mailto:agrise8@gmail.com"
            className="text-lg font-semibold text-indigo-600 underline underline-offset-4 hover:text-indigo-500"
          >
            agrise8@gmail.com
          </a>
        </p>
        <p className="text-sm text-gray-600">
          メール本文に「姓名・返信用メールアドレス・電話番号（任意）・お問合せ内容」をご記載ください。
        </p>
      </div>
    </section>
  )
}
