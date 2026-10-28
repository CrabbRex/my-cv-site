"use client";

import Link from "next/link";
import { useActiveTab } from "./ActiveTabContext";

export default function ActiveNavButtons() {
  const { setActiveTab } = useActiveTab();

  return (
    <div className="mt-6 flex flex-col gap-4 items-start">
      <div className="flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="bg-[var(--color-secondary)] text-[var(--color-background)] px-6 py-2 rounded-xl font-semibold hover:opacity-85 transition"
          onClick={() => setActiveTab("/projects")}
        >
          Projects
        </Link>
        <Link
          href="/cv"
          className="border-[1.5px] border-[var(--color-foreground)] px-6 py-2 rounded-xl font-semibold hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition"
          onClick={() => setActiveTab("/cv")}
        >
          CV
        </Link>
      </div>
      <Link
        href="https://pomocd.org"
        target="_blank"
        className="border-[1.5px] border-[var(--color-foreground)] px-6 py-2 rounded-xl font-semibold hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition"
      >
        PomoCD
      </Link>
    </div>
  );
}
