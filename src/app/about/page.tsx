// src/app/about/page.tsx
import React from 'react'
import Image from 'next/image'

const about = () => {
  return (
    <main className="px-6 pb-20 pt-28">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        {/* Left */}
        <div>
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">I&apos;m Rex</h1>
          <div className="space-y-5">
            <p className="text-lg leading-relaxed opacity-80">I&apos;m an IT student at Macquarie University who&apos;s interested in Web Development and Software Development.</p>
            <p className="text-lg leading-relaxed opacity-80">My personal hobbies include reading Science Fiction, Fantasy and Philosophy. I also enjoy exercising, guitar/rock music and AFL.</p>
            <p className="text-lg leading-relaxed opacity-80">I have also really enjoy making small Game Development projects, mainly on PICO-8 and Love2D</p>
          </div>
        </div>

        {/* Right */}
        <div className="mx-auto w-full max-w-[300px]">
          <Image
            src="/about.jpg"
            alt="Rex Crabb"
            width={300}
            height={450}
            className="w-full rounded-2xl border border-[var(--color-line)] object-cover shadow-[6px_6px_0_var(--color-oppositeBackground)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_var(--color-oppositeBackground)] motion-reduce:transform-none"
            priority
          />
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-5xl border-t border-[var(--color-line)] pt-10">
        <h2 className="mb-6 flex items-center gap-2 text-sm font-bold">
          <span className="size-1.5 rounded-full bg-[var(--color-box)]" />
          Contact Me:
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <a
            href="mailto:Crabbrex@gmail.com"
            className="group block cursor-pointer rounded-xl border border-[var(--color-line)] bg-[var(--color-pad)] p-5 shadow-[6px_6px_0_var(--color-oppositeBackground)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_var(--color-oppositeBackground)]"
          >
            <p className="mb-1 text-xs opacity-60">Email</p>
            <p className="font-mono text-lg font-semibold transition-colors group-hover:text-[var(--color-box-hover)]">
              Crabbrex@gmail.com
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/rex-crabb-b94501404"
            target="_blank"
            rel="noopener noreferrer"
            className="group block cursor-pointer rounded-xl border border-[var(--color-line)] bg-[var(--color-pad)] p-5 shadow-[6px_6px_0_var(--color-oppositeBackground)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_var(--color-oppositeBackground)]"
          >
            <p className="mb-1 text-xs opacity-60">LinkedIn</p>
            <p className="font-mono text-lg font-semibold transition-colors group-hover:text-[var(--color-box-hover)]">
              Rex Crabb
            </p>
          </a>
        </div>
      </div>
    </main>
  )
}

export default about
