import React, { useState } from "react";

type Props = {
  // Optional: pass your own subscribe handler. If not provided, it will POST to /api/newsletter
  onSubscribe?: (email: string) => Promise<void>;
  className?: string;
};

const EMAIL_RX =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Newsletter({ onSubscribe, className = "" }: Props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function defaultSubscribe(e: string) {
    // Default POST to your backend (adjust path if needed)
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: e }),
    });
    if (!res.ok) {
      const t = await res.text().catch(() => "");
      throw new Error(t || "Failed to subscribe");
    }
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    setMessage("");
    if (!EMAIL_RX.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    try {
      setLoading(true);
      await (onSubscribe ? onSubscribe(email) : defaultSubscribe(email));
      setStatus("success");
      setMessage("You're in! Check your inbox for the 10% off code. 🎉");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={`my-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-10 shadow-sm">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold">
              Newsletter
            </div>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Get <span className="text-pink-600">10% Off</span> Your First Custom Gift!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Join our list for new arrivals, festive bundles, and exclusive deals.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
              noValidate
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full sm:w-[360px] rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-pink-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                aria-invalid={status === "error"}
                aria-describedby="newsletter-help"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-[44px] items-center justify-center rounded-xl bg-pink-600 px-5 text-sm font-semibold text-white shadow-sm hover:bg-pink-700 disabled:opacity-60"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>

            <div id="newsletter-help" className="mt-2 min-h-[1.25rem] text-sm">
              {status === "success" && (
                <span className="text-green-600">{message}</span>
              )}
              {status === "error" && (
                <span className="text-red-600">{message}</span>
              )}
            </div>

            <p className="mt-3 text-[11px] text-gray-500">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
