// File: src/app/projects/page.tsx
import React from 'react'
import Link from 'next/link';

export default function Projects() {
  return (
    <main className="flex min-h-screen mx-auto px-2 items-center flex-col py-24">
      <h1 className="text-4xl font-bold mb-8 text-[var(--color-foreground)] border-b pb-1">Projects</h1>
      <div className="w-screen border-t border-b">
        <p className="pt-5 pb-5 px-4 md:px-5 max-w-4xl mx-auto text-center text-sm text-[var(--color-foreground)]">
          Here are some of the projects I have worked on, showcasing my skills in web development, mobile app development, and design.
        </p>
      </div>
      
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-5">
        
        <div className="bg-[var(--color-pad)] text-zinc-950 hover:bg-[var(--color-pad-hover)] rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 mt-5 flex flex-col justify-between">
          <h2 className="text-xl font-bold mb-1">Portfolio Website</h2>
          <p className="text-sm p-3">June 2025 - Ongoing</p>
          <p className="text-sm p-3">Next.js | Tailwind.css | GitHub | Animations</p>
          <p className="p-3 text-sm mb-4">
            A personal portfolio website showcasing my projects and skills, built with Next.js and Tailwind CSS. <br/>
            This project is still ongoing and will be updated with new projects and features as I learn and grow as a developer.
          </p>
          <Link href="https://github.com/CrabbRex/my-cv-site" target="_blank">
            <button className="self-start text-sm font-semibold border border-[var(--color-foreground)] px-4 py-2 rounded-3xl hover:bg-blue-600 hover:border-blue-600 hover:text-[var(--color-background)] transition cursor-pointer">
              View on GitHub
            </button>
          </Link>
        </div>

        <div className="bg-[var(--color-pad)] text-zinc-950 hover:bg-[var(--color-pad-hover)] rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 mt-5 flex flex-col justify-between">
          <h2 className="text-xl font-bold mb-1">Quiet Study Spaces MVP</h2>
          <p className="text-sm p-3">Febuary 2025 - June 2025</p>
          <p className="text-sm p-3">Flutter | Dart | Firebase | GitHub</p>
          <p className="p-3 text-sm mb-4">
            A mobile application MVP that helps students find quiet study spaces. <br/>
            This Project helped me develop skills with Flutter and Firebase, as well as GitHub for version control.
          </p>
          <Link href="https://github.com/CrabbRex/quietStudySpaces" target="_blank">
            <button className="self-start text-sm font-semibold border border-[var(--color-foreground)] px-4 py-2 rounded-3xl hover:bg-blue-600 hover:border-blue-600 hover:text-[var(--color-background)] transition cursor-pointer">
              View on GitHub
            </button>
          </Link>
        </div>

        <div className="bg-[var(--color-pad)] text-zinc-950 hover:bg-[var(--color-pad-hover)] rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 mt-5 flex flex-col justify-between">
          <h2 className="text-xl font-bold mb-1">Figma Mockups</h2>
          <p className="text-sm p-3">Febuary 2025 - June 2025</p>
          <p className="text-sm p-3">Figma | StoryBoarding</p>
          <p className="p-3 text-sm mb-4">
            A collection of Figma mockups a university project, showcasing my design skills and UX research. <br/>
            The feedback from this project helped me understand the importance of user experience and design in software development.
          </p>
          <Link href="https://www.figma.com/proto/Nnk0JO6vUjjqa3MYTWkzao/Assignment-2?node-id=42-121&t=r8UUncsNzLgfUBkq-1" target="_blank">
            <button className="self-start text-sm font-semibold border border-[var(--color-foreground)] px-4 py-2 rounded-3xl hover:bg-blue-600 hover:border-blue-600 hover:text-[var(--color-background)] transition cursor-pointer">
              View as Storyboard
            </button>
          </Link>
        </div>

        <div className="bg-[var(--color-pad)] text-zinc-950 hover:bg-[var(--color-pad-hover)] rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 mt-5 flex flex-col justify-between">
          <h2 className="text-xl font-bold mb-1">Interactive F1 Map</h2>
          <p className="text-sm p-3">August 2024 - November 2024</p>
          <p className="text-sm p-3">jQuery | HTML | Responsive Design</p>
          <p className="p-3 text-sm mb-4">
            An interactive map of F1 circuits, built with jQuery and made for webpages.<br/>
            This project helped me develop skills in DOM traversal and manipulation, as well as responsive design.
          </p>
          <Link href="https://github.com/CrabbRex/IteractiveF1Map" target="_blank">
            <button className="self-start text-sm font-semibold border border-[var(--color-foreground)] px-4 py-2 rounded-3xl hover:bg-blue-600 hover:border-blue-600 hover:text-[var(--color-background)] transition cursor-pointer">
              View on GitHub
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}