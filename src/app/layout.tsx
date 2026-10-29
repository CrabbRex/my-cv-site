// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import ThemeProvider from "./utils/ThemeProvider";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Navbar from "./components/navbar";
import { Space_Grotesk } from "next/font/google";
import { ActiveTabProvider } from "./components/ActiveTabContext";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "My CV",
  description: "Personal portfolio website",
  icons: {
    icon: "/favicon.ico",
  },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`relative font-sans ${spaceGrotesk.variable}`}>
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <ActiveTabProvider>
            <Navbar />
            <ThemeSwitcher />
            {children}
          </ActiveTabProvider>
        </ThemeProvider>

        <footer className="mt-16 border-t border-[var(--color-line)]">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-6 text-center font-mono text-xs tracking-wide">
            <p className="opacity-70">© {new Date().getFullYear()} CrabbRex. All rights reserved.</p>
            <p className="opacity-50">
              Built with{" "}
              <Link
                href="https://nextjs.org"
                className="text-[var(--color-box)] transition hover:text-[var(--color-box-hover)]"
                target="_blank"
              >
                Next.js
              </Link>{" "}
              &{" "}
              <Link
                href="https://tailwindcss.com"
                className="text-[var(--color-box)] transition hover:text-[var(--color-box-hover)]"
                target="_blank"
              >
                Tailwind CSS
              </Link>{" "}
              · Deployed with{" "}
              <Link
                href="https://vercel.com"
                className="text-[var(--color-box)] transition hover:text-[var(--color-box-hover)]"
                target="_blank"
              >
                Vercel
              </Link>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
