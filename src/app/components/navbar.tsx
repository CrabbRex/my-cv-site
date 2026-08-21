// File: src/app/components/navbar.tsx
"use client"
import Link from 'next/link';
import { motion } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";
import { useActiveTab } from "./ActiveTabContext";

const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/projects', label: 'Projects' },
        { href: '/cv', label: 'CV' },
        { href: '/about', label: 'About' }
    ]


export default function Navbar() {
    const { activeTab, setActiveTab } = useActiveTab();
    const containerRef = useRef<HTMLDivElement>(null);
    const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
    const [pill, setPill] = useState<{ left: number; top: number; width: number; height: number } | null>(null);

    const isActive = (href: string) =>
        href === '/' ? activeTab === '/' : activeTab.startsWith(href);

    const activeHref = navLinks.find((link) => isActive(link.href))?.href;

    // Measured directly off the link's own rect rather than Framer Motion's
    // layout/layoutId projection, since that system's scroll correction
    // assumes elements move with the page — this header is `fixed`, so its
    // links never do, and the correction alone was throwing the pill's
    // start position off by however far the page had scrolled.
    useLayoutEffect(() => {
        const container = containerRef.current;
        const activeLink = activeHref ? linkRefs.current[activeHref] : null;
        if (!container || !activeLink) {
            setPill(null);
            return;
        }

        const measure = () => {
            const containerRect = container.getBoundingClientRect();
            const linkRect = activeLink.getBoundingClientRect();
            setPill({
                left: linkRect.left - containerRect.left,
                top: linkRect.top - containerRect.top,
                width: linkRect.width,
                height: linkRect.height,
            });
        };

        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, [activeHref]);

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-center">
            <div ref={containerRef} className="relative flex space-x-1 rounded-3xl px-4 py-2 mt-4 backdrop-blur-md">
                {pill && (
                    <motion.span
                        className="absolute z-10 bg-[var(--color-oppositeBackground)] rounded-full"
                        style={{ borderRadius: 9999, top: pill.top, height: pill.height }}
                        animate={{ left: pill.left, width: pill.width }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                )}
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        ref={(el) => { linkRefs.current[link.href] = el; }}
                        href={link.href}
                        onClick={() => setActiveTab(link.href)}
                        className={`relative rounded-full px-3 py-1.5 text-sm font-medium outline-sky-400 transition focus-visible:outline-2
                            ${isActive(link.href)
                                ? "text-white"
                                : 'border border-transparent hover:border hover:border-[var(--color-foreground)]'
                                }`}
                                style={{
                                    WebkitTapHighlightColor: 'transparent',
                                }}
                    >
                        <span className={`relative z-20 ${isActive(link.href) ? "text-[var(--color-background)]" : ""}`}>
                            {link.label}
                        </span>
                    </Link>
                ))}
                {/* <ThemeSwitcher /> */}
            </div>
        </header>
    )
}
