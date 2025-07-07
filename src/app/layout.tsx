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
    </html>
  );
}
