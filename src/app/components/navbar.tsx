// File: src/app/components/navbar.tsx
"use client"
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const linkClasses = (href: string) => {
        const isActive = pathname === href;
        return `px-3 py-1 rounded-4xl transition border-2 
            ${isActive 
                ? 'border-[var(--color-nav-base)] bg-[var(--color-background)]' 
                : 'border-[var(--color-nav-highlight)] hover:border-transparent'}`;
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-center">
            <div
                className={`rounded-3xl px-4 py-2 mt-4 transition-all duration-300 backdrop-blur-md`}
            >
                <nav className="max-w-5xl mx-auto flex gap-4 justify-center">
                    <Link href="/" className={linkClasses('/')}>Home</Link>
                    <Link href="/projects" className={linkClasses('/projects')}>Projects</Link>
                    <Link href="/cv" className={linkClasses('/cv')}>CV</Link>
                    <Link href="/about" className={linkClasses('/about')}>About</Link>

                </nav>
            </div>
        </header>
    );
}