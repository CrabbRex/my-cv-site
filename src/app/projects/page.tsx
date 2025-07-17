// File: src/app/projects/page.tsx
import React from 'react'
import Link from 'next/link';

export default function Projects() {
  return (
    <main className="flex min-h-screen mx-auto px-2 items-center flex-col py-24">
      <h1 className="text-4xl font-bold mb-8 text-[var(--color-foreground)] border-b pb-1">Projects</h1>
      <div>
        <p className="pt-5 pb-5 border-t border-b w-screen items-center justidy-center text-center text-sm text-[var(--color-foreground)]">
          Here are some of the projects I have worked on, showcasing my skills in web development, mobile app development, and design.
          Click on the project titles to learn more about each project.
        </p>
      </div>
      
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-5">
        
        <div className="bg-[var(--color-pad)] text-zinc-950 rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 mt-5 flex flex-col justify-between">
          <h2 className="text-xl font-bold mb-1">Portfolio Website</h2>
          <p className="text-sm p-3 pb-0 mb-3">June 2025 - Ongoing</p>
          <p className="text-sm p-3 pb-0 mb-3">Next.js | Tailwind.css | GitHub | Animations</p>
          <p className="text-sm mb-3 flex-grow">
            A personal portfolio website showcasing my projects and skills, built with Next.js and Tailwind CSS.
            This is still an ongoin project, with features being added periodically.
          </p>
          <Link href="https://github.com/CrabbRex/my-cv-site">
            <button className="self-start text-sm font-semibold border border-[var(--color-foreground)] px-4 py-2 rounded-3xl hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition cursor-pointer">
              View on GitHub
            </button>
          </Link>
        </div>

        <div className="bg-[var(--color-pad)] text-zinc-950 rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 mt-5 flex flex-col justify-between">
          <h2 className="text-xl font-bold mb-1">Quiet Study Spaces MVP</h2>
          <p className="text-sm p-3 pb-0 mb-3">Febuary 2025 - June 2025</p>
          <p className="text-sm p-3 pb-0 mb-3">Flutter | Dart | Firebase | GitHub</p>
          <p className="text-sm mb-3 flex-grow"></p>
          <p className="p-3 text-sm mb-4">
            A mobile application MVP that helps students find quiet study spaces, built with Flutter and Firebase.
          </p>
          <Link href="https://github.com/CrabbRex/quietStudySpaces">
            <button className="self-start text-sm font-semibold border border-[var(--color-foreground)] px-4 py-2 rounded-3xl hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition cursor-pointer">
              View on GitHub
            </button>
          </Link>
        </div>

        <div className="bg-[var(--color-pad)] text-zinc-950 rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 mt-5 flex flex-col justify-between">
          <h2 className="text-xl font-bold mb-1">Figma Mockups</h2>
          <p className="text-sm p-3 pb-0 mb-3">Febuary 2025 - June 2025</p>
          <p className="text-sm p-3 pb-0 mb-3">Figma | StoryBoarding</p>
          <p className="p-3 text-sm mb-4">
            A collection of Figma mockups for various projects, showcasing my design skills and UX research.
          </p>
          <Link href="https://github.com/CrabbRex/IteractiveF1Map">
            <button className="self-start text-sm font-semibold border border-[var(--color-foreground)] px-4 py-2 rounded-3xl hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition cursor-pointer">
              View on GitHub
            </button>
          </Link>
        </div>

        <div className="bg-[var(--color-pad)] text-zinc-950 rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 mt-5 flex flex-col justify-between">
          <h2 className="text-xl font-bold mb-1">Interactive F1 Map</h2>
          <p className="text-sm p-3 pb-0 mb-3">August 2024 - November 2024</p>
          <p className="text-sm p-3 pb-0 mb-3">jQuery | HTML | Responsive Design</p>
          <p className="p-3 text-sm mb-4">
            An interactive map of F1 circuits, built with jQuery and made for webpages.
            The GitHub can be found here:
          </p>
          <Link href="https://www.figma.com/proto/Nnk0JO6vUjjqa3MYTWkzao/Assignment-2?node-id=42-121&t=r8UUncsNzLgfUBkq-1">
            <button className="self-start text-sm font-semibold border border-[var(--color-foreground)] px-4 py-2 rounded-3xl hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition cursor-pointer">
              View on GitHub
            </button>
          </Link>
        </div>

        {/* <Link href="/projects/cv-website" className="hover:underline">
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
        </Link> */}

        

      </div>
    </main>
  )
}