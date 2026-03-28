import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "Foresy（フォレジー）へのお問い合わせフォーム。Google広告・Looker Studio・GTM/GA4に関するご相談はこちら。",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <header className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            お問い合わせ
          </h1>
          <p className="mt-4 text-muted">
            ご相談・お見積り・サービスに関するご質問は、下記フォームよりお送りください。通常、数営業日以内にご返信いたします。
          </p>
        </header>

        <div className="mt-12 max-w-xl rounded-xl border border-border bg-white p-6 shadow-sm sm:p-8">
          <ContactForm />
        </div>
      </Container>
    </div>
  );
}
