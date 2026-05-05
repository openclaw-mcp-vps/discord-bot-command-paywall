import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BotGate — Monetize Discord Bot Commands",
  description: "Wrap your Discord bot with Stripe-powered usage limits and premium command gating. Start monetizing in minutes."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="756125ae-96f5-448f-95ee-906d9d6f2156"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
