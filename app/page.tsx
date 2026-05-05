export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          For Discord Bot Developers
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Monetize Your Discord Bot<br />
          <span className="text-[#58a6ff]">Without Rewriting It</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          BotGate wraps your existing bot with Stripe-powered usage tracking and premium command gating.
          Intercept commands via webhook middleware — no refactor needed.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start for $29/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">Cancel anytime. Works with any Discord bot framework.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "⚡", title: "Webhook Middleware", body: "Drop-in proxy intercepts every command before your bot sees it." },
            { icon: "💳", title: "Stripe Subscriptions", body: "Usage limits sync automatically with active Stripe subscriptions." },
            { icon: "🔒", title: "Command Gating", body: "Free users hit limits; premium users unlock commands instantly." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">/month per bot</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited servers",
              "Stripe subscription sync",
              "Per-command usage limits",
              "Webhook middleware SDK",
              "Real-time usage dashboard",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-sm hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Do I need to rewrite my bot?",
              a: "No. BotGate works as a webhook proxy. Point your Discord interactions endpoint at our middleware URL and we handle the rest."
            },
            {
              q: "Which bot frameworks are supported?",
              a: "Any framework that uses Discord's Interactions API — discord.js, Sapphire, Pycord, disnake, and more. If it receives webhooks, it works."
            },
            {
              q: "What happens when a user hits their limit?",
              a: "BotGate returns a friendly ephemeral message with an upgrade link. Your bot code never executes, keeping your infrastructure costs low."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} BotGate. Built for Discord bot developers.
      </footer>
    </main>
  );
}
