// File: src/app/components/navbar.tsx
"use client"
import Link from 'next/link';
import { motion } from "motion/react";
import { useActiveTab } from "./ActiveTabContext";

const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/projects', label: 'Projects' },
        { href: '/cv', label: 'CV' },
        { href: '/about', label: 'About' }
    ]


export default function Navbar() {
    const { activeTab, setActiveTab } = useActiveTab();
    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-center">
            <div className="flex space-x-1 rounded-3xl px-4 py-2 mt-4 backdrop-blur-md">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setActiveTab(link.href)}
                        className={`relative rounded-full px-3 py-1.5 text-sm font-medium outline-sky-400 transition focus-visible:outline-2
                            ${activeTab === link.href 
                                ? "text-white" 
                                : 'border border-transparent hover:border hover:border-[var(--color-foreground)]'
                                }`}
                                style={{
                                    WebkitTapHighlightColor: 'transparent',
                                }}
                    >
                        {activeTab === link.href && (
                            <motion.span
                                key={link.href}
                                layoutId="bubble"
                                className="absolute inset-0 z-10 bg-[var(--color-oppositeBackground)] rounded-full"
                                style={{ borderRadius: 9999 }}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className={`relative z-20 ${activeTab === link.href ? "text-[var(--color-background)]" : ""}`}>
                            {link.label}
                        </span>
                    </Link>
                ))}
                {/* <ThemeSwitcher /> */}
            </div>
        </header>
    )
}