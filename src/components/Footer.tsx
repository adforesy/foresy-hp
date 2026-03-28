import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-white py-10">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-base font-semibold text-foreground">Foresy（フォレジー）</p>
            <p className="mt-1 max-w-sm text-sm text-muted">
              デジタル広告と計測を支える広告代理店です。
            </p>
          </div>
          <nav className="flex flex-col gap-2 text-sm sm:text-right" aria-label="フッターリンク">
            <Link href="/company" className="text-muted hover:text-foreground">
              会社概要
            </Link>
            <Link href="/contact" className="text-muted hover:text-foreground">
              お問い合わせ
            </Link>
          </nav>
        </div>
        <p className="mt-8 border-t border-border pt-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} Foresy. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
