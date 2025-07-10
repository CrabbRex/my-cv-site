// src/app/about/page.tsx
import React from 'react'
import Image from 'next/image'

const about = () => {
  return (
    <main >
      <h1 className="text-8xl pt-44 font-bold mb-4 justify-center text-center">I'm Rex</h1>
      
      <section className="pt-10 px-6 flex flex-col md:flex-row gap-12 text-center items-center justify-center md:text-left">
        {/* Left */}
        <div>
          <Image 
            src="/Profile.jpg"
            alt="Rex Crabb"
            width={300}
            height={450}
            className="rounded-2xl shadow-lg border-4 border-[var(--color-foreground)] object-cover"
            priority
          />
        </div>
        {/* Right */}
        <div>
          <p className="pt-20 max-w-xl">I'm an IT student at Macquarie University who's interested in Web Development and Software Development.</p>
          <p className="pt-20 max-w-xl">My personal hobbies include reading Science Fiction, Fantasy and Philosophy. I also enjoy exercising, guitar/Rock music and AFL.</p>
        </div>
      </section>

      <h1 className="text-8xl pt-30 font-bold mb-4 justify-center text-center">Contact Me:</h1>
      <section className="max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-6 items-center text-center pb-20 pt-10">
        <div>
          <a
            href=""
            target="_blank"
            className="block p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <h2>Email</h2>
          </a>
        </div>
        <div>
          <a
            href=""
            target="_blank"
            className="block p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <h2>Phone</h2>
          </a>
        </div>
      </section>
    </main>
  )
}

export default about