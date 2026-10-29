// File: src/app/cv/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import CvSheet from './CvSheet';
import CvSidebar from './CvSidebar';
import CvTimeline from './CvTimeline';

export const metadata: Metadata = {
  title: 'CV | Rex Crabb',
  description:
    'CV of Rex Crabb, a software and web developer in Sydney graduating from Macquarie University in November 2026: experience, projects, education and skills, plus a timeline of everything he has worked on.',
};

const views = [
  { id: 'cv', label: 'CV', href: '/cv' },
  { id: 'timeline', label: 'Timeline', href: '/cv?view=timeline' },
];

// The view lives in the URL so /cv?view=timeline can be shared and the back button works.
const cv = async ({ searchParams }: { searchParams: Promise<{ view?: string | string[] }> }) => {
  const { view } = await searchParams;
  const current = view === 'timeline' ? 'timeline' : 'cv';

  return (
    <main className="px-4 pb-20 pt-28 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <nav
            aria-label="CV view"
            className="inline-flex gap-1 rounded-[14px] border border-[var(--color-line)] bg-[var(--color-pad)] p-1"
          >
            {views.map(({ id, label, href }) => (
              <Link
                key={id}
                href={href}
                scroll={false}
                aria-current={current === id ? 'page' : undefined}
                className={cn(
                  'inline-flex min-h-11 items-center rounded-[10px] px-5 font-semibold transition-colors',
                  current === id
                    ? 'bg-[var(--color-oppositeBackground)] text-[var(--color-background)]'
                    : 'hover:bg-[var(--color-pad-hover)]'
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
          <a
            href="/RexCrabbCV2026.pdf"
            download
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[var(--color-oppositeBackground)] px-5 font-semibold text-[var(--color-background)] transition hover:opacity-85"
          >
            <Download aria-hidden className="size-[18px]" />
            Download CV
          </a>
        </div>

        {current === 'timeline' ? (
          <div className="mx-auto w-full max-w-4xl">
            <CvTimeline />
          </div>
        ) : (
          <div className="grid items-start gap-5 md:grid-cols-[250px_minmax(0,1fr)] md:gap-9">
            <CvSidebar />
            <CvSheet />
          </div>
        )}
      </div>
    </main>
  );
};

export default cv;
