"use client"
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-center">
            <div
                className={`rounded-3xl px-4 py-2 mt-4 transition-all duration-300 backdrop-blur-md`}
            >
                <nav className="max-w-5xl mx-auto flex gap-4 justify-center">
                    <Link href="/" className="px-3 py-1 rounded-4xl transition border-2 hover:border-transparent hover:bg-[var(--color-background)]">Home</Link>
                    <Link href="/projects" className="px-3 py-1 rounded-4xl transition border-2 hover:border-transparent hover:bg-[var(--color-box-hover)">Projects</Link>
                    <Link href="/cv" className="px-3 py-1 rounded-4xl transition border-2 hover:border-transparent hover:bg-[var(--color-box-hover)">CV</Link>
                    <Link href="/about" className="px-3 py-1 rounded-4xl transition border-2 hover:border-transparent hover:bg-[var(--color-box-hover)">About</Link>

                </nav>
            </div>
        </header>
    );
}