// File: src/app/cv/CvTimeline.tsx
"use client";
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { timeline, type TimelineKind } from './cv-data';

type Filter = 'all' | TimelineKind;

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'work', label: 'Work' },
  { id: 'project', label: 'Projects' },
  { id: 'study', label: 'Study' },
];

const kindLabel: Record<TimelineKind, string> = { work: 'Work', project: 'Project', study: 'Study' };

const dotColor: Record<TimelineKind, string> = {
  work: 'bg-[var(--color-foreground)]',
  project: 'bg-[var(--color-box)]',
  study: 'bg-[var(--color-foreground)]/45',
};

export default function CvTimeline() {
  const [filter, setFilter] = useState<Filter>('all');
  const items = timeline.filter(([kind]) => filter === 'all' || kind === filter);

  return (
    <section aria-labelledby="timeline-heading" className="flex flex-col gap-6">
      <div>
        <h1 id="timeline-heading" className="text-4xl font-bold leading-tight md:text-[44px]">
          Timeline
        </h1>
        <p className="mt-2 max-w-[60ch] text-[17px] leading-relaxed opacity-70">
          Everything I&apos;ve worked on, newest first: jobs, projects and study in one place.
        </p>
      </div>

      <div role="group" aria-label="Filter timeline" className="flex flex-wrap gap-1.5 border-b border-[var(--color-line)] pb-4">
        {filters.map(({ id, label }) => {
          const isActive = filter === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              aria-pressed={isActive}
              className={cn(
                'min-h-11 cursor-pointer rounded-full border px-4 text-sm font-semibold transition-colors',
                isActive
                  ? 'border-[var(--color-oppositeBackground)] bg-[var(--color-oppositeBackground)] text-[var(--color-background)]'
                  : 'border-[var(--color-line)] bg-[var(--color-pad)] hover:bg-[var(--color-pad-hover)]'
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      <ol>
        {items.map(([kind, entry]) => (
          <li key={entry.id} className="grid gap-x-[18px] md:grid-cols-[140px_28px_minmax(0,1fr)]">
            <p className="mb-1.5 font-mono text-[13px] tabular-nums opacity-70 md:mb-0 md:pt-[22px] md:text-right">
              {entry.short}
            </p>

            <div aria-hidden className="relative hidden justify-center md:flex">
              <div className="absolute inset-y-0 w-0.5 bg-[var(--color-line)]" />
              <div className={cn('relative mt-6 size-3.5 rounded-full border-[3px] border-[var(--color-background)]', dotColor[kind])} />
            </div>

            <article className="mb-[22px] min-w-0 rounded-[14px] border border-[var(--color-line)] bg-[var(--color-pad)] px-[22px] py-[18px]">
              <p className="mb-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] opacity-70">{kindLabel[kind]}</p>
              <h3 className="text-[19px] font-semibold leading-snug">
                {entry.title}
                {entry.org && <span className="font-normal opacity-70"> · {entry.org}</span>}
              </h3>
              <ul className="mt-2.5 list-disc space-y-1 pl-[18px]">
                {entry.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {(entry.tags.length > 0 || entry.href) && (
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2.5">
                  <ul className="flex flex-wrap gap-1.5">
                    {entry.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md bg-[var(--color-box)]/12 px-2 py-0.5 font-mono text-xs text-[var(--color-box-hover)]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {entry.href && (
                    <a
                      href={entry.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center font-mono text-[13px] font-semibold text-[var(--color-box-hover)] underline-offset-4 hover:underline"
                    >
                      {entry.linkLabel} ↗
                    </a>
                  )}
                </div>
              )}
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
