// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen pt-24 px-6 flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
      {/* Left Side - Text Box */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold mb-4">Hello, I’m Rex Crabb</h1>
        <p className="text-xl">
          I am a motivated and resilient Information Technology student with a strong academic record and
          growing portfolio of personal and academic web development projects.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
          <Link href="/projects" className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">Projects</Link>
          <Link href="/cv" className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition">CV</Link>
        </div>
      </div>
      
    {/* Right Side - Photo */}
      <Image 
        src="/Profile.jpg"
        alt="Rex Crabb"
        width={300}
        height={450}
        className="rounded-2xl shadow-lg border-4 border-[var(--color-foreground)] object-cover"
        priority
      />
    </main>
  );
}
