import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "リクエストの形式が正しくありません。" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "リクエストの形式が正しくありません。" }, { status: 400 });
  }

  const { name, email, company, body: messageBody } = body as Record<string, unknown>;

  const nameStr = typeof name === "string" ? name.trim() : "";
  const emailStr = typeof email === "string" ? email.trim() : "";
  const companyStr = typeof company === "string" ? company.trim() : "";
  const bodyStr = typeof messageBody === "string" ? messageBody.trim() : "";

  if (!nameStr || !emailStr || !bodyStr) {
    return NextResponse.json(
      { error: "お名前・メールアドレス・お問い合わせ内容は必須です。" },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      { error: "メール送信の設定が完了していません。管理者にお問い合わせください。" },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const html = `
    <p><strong>お名前</strong><br />${escapeHtml(nameStr)}</p>
    <p><strong>メールアドレス</strong><br />${escapeHtml(emailStr)}</p>
    <p><strong>会社名</strong><br />${companyStr ? escapeHtml(companyStr) : "（未入力）"}</p>
    <p><strong>お問い合わせ内容</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit;">${escapeHtml(bodyStr)}</pre>
  `;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: emailStr,
    subject: `[Foresy] お問い合わせ: ${nameStr}`,
    html,
  });

  if (error) {
    return NextResponse.json(
      { error: "メールの送信に失敗しました。しばらく経ってから再度お試しください。" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
