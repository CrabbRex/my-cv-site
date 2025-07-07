// File: src/app/projects/page.tsx
import React from 'react'
import Link from 'next/link';

export default function Projects() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-8 text-[var(--color-secondary)]">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl bg-white/80 dark:bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow hover:shadlow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Portfolio Website</h2>
          <p className="text-sm mb-4">
            A personal portfolio website showcasing my projects and skills, built with Next.js and Tailwind CSS.
          </p>
          <Link href="https://github.com/CrabbRex/my-cv-site" target="_blank" className="text-blue-600 hover:underline">View on GitHub →</Link>
        </div>

        <div className="rounded-xl bg-white/80 dark:bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow hover:shadlow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Portfolio Website</h2>
          <p className="text-sm mb-4">
            A personal portfolio website showcasing my projects and skills, built with Next.js and Tailwind CSS.
          </p>
          <Link href="https://github.com/CrabbRex/my-cv-site" target="_blank" className="text-blue-600 hover:underline">View on GitHub →</Link>
        </div>

        <div className="rounded-xl bg-white/80 dark:bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow hover:shadlow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Portfolio Website</h2>
          <p className="text-sm mb-4">
            A personal portfolio website showcasing my projects and skills, built with Next.js and Tailwind CSS.
          </p>
          <Link href="https://github.com/CrabbRex/my-cv-site" target="_blank" className="text-blue-600 hover:underline">View on GitHub →</Link>
        </div>

      </div>
    </main>
  )
}