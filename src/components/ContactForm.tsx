"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      body: String(fd.get("body") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "送信に失敗しました。時間をおいて再度お試しください。");
        return;
      }

      setStatus("success");
      setMessage("お問い合わせを受け付けました。担当より折り返しご連絡いたします。");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("送信に失敗しました。ネットワーク環境をご確認ください。");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          お名前 <span className="text-red-600">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground shadow-sm outline-none ring-accent/20 transition focus:border-accent focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          メールアドレス <span className="text-red-600">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground shadow-sm outline-none ring-accent/20 transition focus:border-accent focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-foreground">
          会社名
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground shadow-sm outline-none ring-accent/20 transition focus:border-accent focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="body" className="block text-sm font-medium text-foreground">
          お問い合わせ内容 <span className="text-red-600">*</span>
        </label>
        <textarea
          id="body"
          name="body"
          required
          rows={6}
          className="mt-2 w-full resize-y rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground shadow-sm outline-none ring-accent/20 transition focus:border-accent focus:ring-2"
        />
      </div>

      {message ? (
        <p
          role={status === "error" ? "alert" : "status"}
          className={`text-sm ${status === "success" ? "text-accent" : "text-red-600"}`}
        >
          {message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? "送信中…" : "送信する"}
      </button>
    </form>
  );
}
