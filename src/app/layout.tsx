// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ThemeProvider from "./utils/ThemeProvider";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Navbar from "./components/navbar";
import { Space_Grotesk } from "next/font/google";

export const metadata: Metadata = {
  title: 'My CV',
  description: 'Personal portfolio website'
};

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={spaceGrotesk.variable}>
      <body className="relative font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
        <Navbar />
        <ThemeSwitcher />
        {children}
          
        </ThemeProvider>
      </body>
      <footer>
        <div className="max-w-5xl mx-auto px-6 py-4 text-center text-sm text-[var(--color-secondary)">
          <p>
            © {new Date().getFullYear()} CrabbRex. All rights reserved.
          </p>
          <p>
            Built with <Link href="https://nextjs.org" className="text-blue-600 hover:underline">Next.js</Link> and <Link href="https://tailwindcss.com" className="text-blue-600 hover:underline">Tailwind CSS</Link>.
          </p>
        </div>
      </footer>
    </html>
  );
}
