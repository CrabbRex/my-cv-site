// File: src/app/projects/page.tsx
import React from 'react';
import ProjectsCarousel from './ProjectsCarousel';
import { projects } from './projects';

export default function Projects() {
  return (
    <main className="mx-auto flex w-full flex-col items-center px-2 py-20 md:py-24">
      <header className="mb-10 max-w-2xl px-4 text-center md:mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--color-foreground)] md:text-5xl">
          Projects
        </h1>
        <div
          aria-hidden
          className="mx-auto my-5 h-px w-24 bg-[var(--color-foreground)]/25"
        />
        <p className="text-sm leading-relaxed opacity-80">
          {projects.length} projects across web development, mobile apps and design.
          Each one shows the tools I used and what I took away from it.
        </p>
      </header>

      <ProjectsCarousel />
    </main>
  );
}
