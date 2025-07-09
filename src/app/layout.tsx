// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ThemeProvider from "./utils/ThemeProvider";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: 'My CV',
  description: 'Personal portfolio website'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="relative">
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
