import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ThemeProvider from "./utils/ThemeProvider";
import ThemeSwitcher from "./components/ThemeSwitcher";

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
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <header className="bg-white dark:bg-black shadow-md mb-8">
           
            <nav className="flex gap-4 p-4 justify-center relative">
              
              
              <Link href="/" className="px-3 py-1 rounded transition hover:outline-2 hover:outline-white">Home</Link>
              <Link href="/projects" className="px-3 py-1 rounded transition hover:outline-2 hover:outline-white">Projects</Link>
              <Link href="/cv" className="px-3 py-1 rounded transition hover:outline-2 hover:outline-white">CV</Link>
              <Link href="/about" className="px-3 py-1 rounded transition hover:outline-2 hover:outline-white">About</Link>
              <ThemeSwitcher />
            </nav>
          </header>
          
          {children}
          
        </ThemeProvider>
      </body>
    </html>
  );
}
