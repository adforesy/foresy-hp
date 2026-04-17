import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "Foresy（フォレジー）のプライバシーポリシー。お問い合わせで取得する情報の取り扱いについて。",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <header className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            プライバシーポリシー
          </h1>
          <p className="mt-4 text-muted">
            Foresy（フォレジー）（以下「当社」）は、お客様の個人情報を適切に取り扱います。
          </p>
        </header>

        <div className="mt-12 max-w-2xl space-y-12">
          <section>
            <h2 className="text-xl font-semibold text-foreground">取得する情報</h2>
            <p className="mt-4 leading-relaxed text-muted">
              お問い合わせフォームから、氏名・メールアドレス・お問い合わせ内容を取得します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">利用目的</h2>
            <p className="mt-4 leading-relaxed text-muted">
              取得した情報は、お問い合わせへの回答およびサービス提供のために利用します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">第三者提供</h2>
            <p className="mt-4 leading-relaxed text-muted">
              法令に基づく場合を除き、第三者への提供は行いません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Google Ads APIについて</h2>
            <p className="mt-4 leading-relaxed text-muted">
              クライアントの広告データは、レポート作成目的にのみ使用します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">お問い合わせ先</h2>
            <p className="mt-4 leading-relaxed text-muted">
              個人情報の取り扱いに関するお問い合わせは、次のメールアドレスまでご連絡ください。
            </p>
            <p className="mt-2 text-muted">
              <a
                href="mailto:adforesy@gmail.com"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                adforesy@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">制定日</h2>
            <p className="mt-4 leading-relaxed text-muted">2026年4月</p>
          </section>
        </div>
      </Container>
    </div>
  );
}
