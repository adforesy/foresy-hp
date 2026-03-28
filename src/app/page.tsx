import Link from "next/link";
import { Container } from "@/components/Container";

const services = [
  {
    title: "Google広告運用代行",
    description:
      "検索・ディスプレイなど、目的に合わせたキャンペーン設計から日々の最適化まで一貫してサポートします。",
  },
  {
    title: "Looker Studioレポート",
    description:
      "広告・サイトの成果を見える化。経営判断と現場の両方で使えるダッシュボードを構築します。",
  },
  {
    title: "GTM / GA4設定",
    description:
      "タグ設計から計測の実装まで。正確なデータ取得を土台に、改善サイクルを回せる状態をつくります。",
  },
];

const strengths = [
  {
    title: "先見性のある提案",
    description:
      "数字だけでなく市場の動きを読み、中長期で効く打ち手をご提案します。",
  },
  {
    title: "丁寧なコミュニケーション",
    description:
      "専門用語に頼らず、状況と次の一手が共有できる報告・相談体制を大切にしています。",
  },
  {
    title: "スクリプトによる自動化",
    description:
      "繰り返し作業を自動化し、運用工数を削減。人の時間を戦略とクリエイティブに振り向けます。",
  },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-border bg-white">
        <Container className="py-16 sm:py-24 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">
              Digital Advertising Partner
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              成果につながる広告と計測を、
              <br className="hidden sm:block" />
              わかりやすく。
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              Foresy（フォレジー）は、Google広告の運用からLooker
              Studioによる可視化、GTM/GA4による計測設計までをワンストップで支援する広告代理店です。
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
              >
                無料で相談する
              </Link>
              <Link
                href="/company"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-slate-50"
              >
                会社概要を見る
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20" id="services">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              サービス
            </h2>
            <p className="mt-3 text-muted">
              デジタルマーケティングの実行と可視化を、実務に根ざして支援します。
            </p>
          </div>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-y border-border bg-white py-16 sm:py-20" id="strengths">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              私たちの強み
            </h2>
            <p className="mt-3 text-muted">
              クライアント様と同じ目線で、持続的に成果を積み上げることを目指しています。
            </p>
          </div>
          <ol className="mt-12 space-y-8">
            {strengths.map((item, index) => (
              <li
                key={item.title}
                className="flex gap-4 sm:gap-6"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-2xl bg-slate-900 px-6 py-12 text-center sm:px-12 sm:py-16">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              課題整理から、まずお聞かせください
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              現状の広告アカウントや計測の状態に合わせて、最適な支援内容をご提案します。
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              お問い合わせフォームへ
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
