// src/app/about/page.tsx
import React from 'react'
import Image from 'next/image'

const about = () => {
  return (
    <main>
      <h1 className="text-6xl md:text-8xl pt-44 font-bold mb-4 justify-center text-center">I&apos;m Rex</h1>
      
      <section className="pt-10 px-6 flex flex-col md:flex-row gap-12 text-center items-center justify-center md:text-left">
        {/* Left */}
        <div>
          <Image 
            src="/about.jpg"
            alt="Rex Crabb"
            width={300}
            height={450}
            className="rounded-2xl shadow-lg border-4 border-[var(--color-foreground)] object-cover transform transition-transform duration-300 hover:scale-105"
            priority
          />
        </div>
        {/* Right */}
        <div className="text-center md:text-left space-y-6 max-w-lg">
          <p className="text-ld md:text-xl text-[var(--color-foreground)] leading-relaxed">I'm an IT student at Macquarie University who's interested in Web Development and Software Development.</p>
          <p className="text-ld md:text-xl text-[var(--color-foreground)] leading-relaxed">My personal hobbies include reading Science Fiction, Fantasy and Philosophy. I also enjoy exercising, guitar/Rock music and AFL.</p>
        </div>
      </section>

      <h1 className="text-5xl pt-30 font-bold mb-4 justify-center text-center">Contact Me:</h1>
      <section className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center pb-20 pt-10 px-4">
        <div className="bg-[var(--color-pad)] hover:bg-[var(--color-pad-hover)] rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 mt-5 flex flex-col justify-between">
          <h2><a href="mailto:Crabbrex@gmail.com" className="hover:cursor-pointer hover:underline">Crabbrex@gmail.com</a></h2>
        </div>
        <div className="bg-[var(--color-pad)] hover:bg-[var(--color-pad-hover)] rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 mt-5 flex flex-col justify-between">
          <h2>0411 744 688</h2>
        </div>
      </section>
    </main>
  )
}

export default about