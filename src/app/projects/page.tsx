// File: src/app/projects/page.tsx
import React from 'react'
import Link from 'next/link';

export default function Projects() {
  return (
    <main className="max-w-5xl mx-auto px-2 py-24">
      <h1 className="text-4xl font-bold mb-8 text-[var(--color-foreground)] border-b pb-1">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        <Link href="/projects/cv-website" className="hover:underline">
          <div className="rounded-xl bg-[var(--color-surface)] backdrop-blur-md p-6 border border-white/20 shadow hover:shadlow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Portfolio Website</h2>
            <p className="text-sm mb-4">
              A personal portfolio website showcasing my projects and skills, built with Next.js and Tailwind CSS.
            </p>
          </div>
        </Link>

        <Link href="/projects/quiet-study-spaces" className="hover:underline">
          <div className="rounded-xl bg-[var(--color-surface)] backdrop-blur-md p-6 border border-white/20 shadow hover:shadlow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Quiet Study Spaces MVP</h2>
            <p className="text-sm mb-4">
              A mobile application MVP that helps students find quiet study spaces, built with Flutter and Firebase.
            </p>
          </div>
        </Link>

        <Link href="/projects/figma" className="hover:underline">
          <div className="rounded-xl bg-[var(--color-surface)] backdrop-blur-md p-6 border border-white/20 shadow hover:shadlow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Figma Mockups</h2>
            <p className="text-sm mb-4">
              A collection of Figma mockups for various projects, showcasing my design skills and UX research.
            </p>
          </div>
        </Link>

        <Link href="/projects/figma" className="hover:underline">
          <div className="rounded-xl bg-[var(--color-surface)] backdrop-blur-md p-6 border border-white/20 shadow hover:shadlow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Interactive F1 Map</h2>
            <p className="text-sm mb-4">
              An interactive map of F1 circuits, built with jQuery and made for webpages.
            </p>
          </div>
        </Link>

        

      </div>
    </main>
  )
}