import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "Foresy（フォレジー）の会社情報。デジタル広告と計測を専門とする広告代理店です。",
};

const rows = [
  { label: "会社名", value: "Foresy（フォレジー）" },
  {
    label: "事業内容",
    value:
      "Google広告運用代行、Looker Studioレポート構築、GTM/GA4設定・計測支援、デジタルマーケティングコンサルティング",
  },
];

export default function CompanyPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <header className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            会社概要
          </h1>
          <p className="mt-4 text-muted">
            広告運用とデータの両面から、ビジネスの成長を支えるパートナーを目指しています。
          </p>
        </header>

        <div className="mt-12 overflow-hidden rounded-xl border border-border bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-0">
                  <th
                    scope="row"
                    className="w-36 shrink-0 bg-slate-50 px-4 py-4 font-medium text-foreground sm:w-48 sm:px-6"
                  >
                    {row.label}
                  </th>
                  <td className="px-4 py-4 text-muted sm:px-6">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mt-16 max-w-2xl">
          <h2 className="text-xl font-semibold text-foreground">ミッション</h2>
          <p className="mt-4 leading-relaxed text-muted">
            複雑になりがちなデジタル広告とアナリティクスを、意思決定に使える形へ整理すること。
            それが私たちの仕事です。クライアント様の事業フェーズに合わせ、無理のないペースで改善を重ねます。
          </p>
        </section>

        <p className="mt-12">
          <Link
            href="/contact"
            className="font-medium text-accent underline-offset-4 hover:underline"
          >
            お問い合わせはこちら
          </Link>
        </p>
      </Container>
    </div>
  );
}
