import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
    <html lang="en">
      <body>
        <header style={{ marginBottom: '2rem' }}>
          <nav>
            <Link href="/">Home</Link> |{' '}
            <Link href="/projects">Projects</Link> |{' '}
            <Link href="/cv">CV</Link> |{' '}
            <Link href="/about">About</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
