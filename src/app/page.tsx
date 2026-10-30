// app/page.tsx
import Image from 'next/image';
import ActiveNavButtons from './components/ActiveNavButtons';

export default function Home() {
  return (
    <main className="min-h-screen pt-24 px-6 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Left Side - Text Box */}
      <div className="max-w-xl md:text-left">
        <h1 className="text-5xl font-bold mb-4">Hello, I&apos;m Rex Crabb</h1>
        <p className="text-xl">
          I am a motivated and resilient Information Technology student with a strong academic record and
          growing portfolio of personal and academic web development projects.
        </p>
        <ActiveNavButtons />
      </div>
      
    {/* Right Side - Photo */}
      <Image
        src="/Profile.jpg"
        alt="Rex Crabb"
        width={300}
        height={450}
        className="rounded-2xl border border-[var(--color-line)] object-cover shadow-[6px_6px_0_var(--color-oppositeBackground)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_var(--color-oppositeBackground)] motion-reduce:transform-none mb-5"
        priority
      />
    </main>
  );
}
