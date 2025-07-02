// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Hello, I’m Rex Crabb</h1>
      <p>Welcome to my portfolio site.</p>
      <div>
        <Link href="/projects">Projects</Link>
      </div>
      <div>
        <Link href="/cv">CV</Link>
      </div>
      <div>
        <Link href="/about">About</Link>
      </div>
      
    </main>
  );
}
