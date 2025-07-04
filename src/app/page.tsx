// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex h-screen pt-20">
      {/* Left Side - Text Box */}
      <section className="w-1/2 flex items-center justify-center bg-[var(--color-background)] p-12 overflow-auto">
        <div className="max-w-md min-h-[60%] text-left bg-[var(--color-box)] text-[var(--color-secondary)] rounded-md p-10 [box-shadow:10px_10px_20px_rgba(0,0,0,0.25)]">
          <h1 className="text-4xl font-bold mb-4">Hello, I’m Rex Crabb</h1>
          <p className="text-lg">
            I am a motivated and resilient Information Technology student with a strong academic record and
            growing portfolio of personal and academic web development projects.
          </p>
        </div>
      </section>
      
      {/* Right Side - Photo */}
      <section className="w-1/2 flex items-center justify-center">
        <Image 
          src="https://dummyimage.com/300x450/000/fff.png"
          alt="Rex Crabb"
          width={300}
          height={450}
          className="object-cover"
          priority
        />
      </section>
    </main>
  );
}
