// File: src/app/cv/CvSheet.tsx
import React from 'react';
import { cn } from '@/lib/utils';
import LinkSVG from '../components/LinkSVG';
import {
  about,
  degree,
  experience,
  howIWork,
  hsc,
  marks,
  projects,
  skills,
  strengths,
  type Entry,
} from './cv-data';

// Small slate text (link icons, tech tags) uses --color-box-hover: plain --color-box is too
// faint on the light sheet for text this size.
const slateText = 'text-[var(--color-box-hover)]';
const metaText = 'text-[13.5px] opacity-70';
const monoLabel = 'font-mono text-[11px] uppercase tracking-[0.1em] opacity-70';

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-28 py-9 first:pt-1 last:pb-0">
    <h2 id={`${id}-heading`} className="mb-5 text-2xl font-bold">
      {title}
    </h2>
    {children}
  </section>
);

// Dates sit in their own column so they line up down the page.
const EntryRow = ({ entry }: { entry: Entry }) => (
  <div id={entry.id} className="grid scroll-mt-28 gap-x-7 gap-y-1.5 sm:grid-cols-[128px_minmax(0,1fr)]">
    <p className="font-mono text-[13px] tabular-nums opacity-70 sm:pt-0.5">{entry.long}</p>
    <div className="flex min-w-0 flex-col gap-1.5">
      <div className="flex items-center gap-1.5">
        <h3 className="text-[17px] font-bold leading-snug">{entry.title}</h3>
        {entry.href && (
          <a
            href={entry.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${entry.title} on ${entry.linkLabel}`}
            title={entry.linkLabel}
            className={cn(slateText, 'inline-flex size-8 shrink-0 items-center justify-center rounded-md transition hover:bg-[var(--color-pad-hover)]')}
          >
            <LinkSVG className="size-5" />
          </a>
        )}
      </div>
      {entry.org && (
        <p className="text-sm opacity-70">
          {entry.org}
          {entry.note && ` · ${entry.note}`}
        </p>
      )}
      <ul className="list-disc space-y-1 pl-[18px]">
        {entry.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      {entry.tags.length > 0 && (
        <ul aria-label="Tech used" className="mt-1 flex flex-wrap gap-1.5">
          {entry.tags.map((tag) => (
            <li key={tag} className={cn('rounded-md bg-[var(--color-box)]/12 px-2 py-0.5 font-mono text-xs', slateText)}>
              {tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const EntryList = ({ entries }: { entries: Entry[] }) => (
  <div className="flex flex-col gap-7">
    {entries.map((entry) => (
      <EntryRow key={entry.id} entry={entry} />
    ))}
  </div>
);

// No panel behind the sheet: the content sits straight on the fixed dot-grid background,
// like the About and Projects pages, so the background stays still while the CV scrolls.
const CvSheet = () => (
  <article aria-label="CV" className="flex min-w-0 flex-col divide-y divide-[var(--color-line)] text-[15px] leading-relaxed">
    <Section id="sx-about" title="About me">
      <div className="space-y-2.5">
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>

    <Section id="sx-exp" title="Experience">
      <EntryList entries={experience} />
    </Section>

    <Section id="sx-proj" title="Projects">
      <EntryList entries={projects} />
    </Section>

    <Section id="sx-edu" title="Education">
      <div className="grid gap-x-10 gap-y-4 md:grid-cols-2">
        <div className="flex flex-col gap-2.5">
          <div>
            <h3 className="text-base font-bold">{degree.title}</h3>
            {degree.meta.map((line) => (
              <p key={line} className={metaText}>
                {line}
              </p>
            ))}
          </div>
          <p className="flex items-baseline justify-between gap-3 border-b border-[var(--color-line)] py-1.5">
            <span className={monoLabel}>Current WAM</span>
            <span className="text-2xl font-bold tabular-nums">{degree.wam}</span>
          </p>
          <p className={metaText}>{degree.marksIntro}</p>
          <div>
            <h3 className="text-base font-bold">{hsc.title}</h3>
            <p className={metaText}>{hsc.meta}</p>
          </div>
        </div>
        <ul className="text-[13.5px]">
          {marks.map(({ unit, mark }) => (
            <li
              key={unit}
              className="flex justify-between gap-3 border-b border-dotted border-[var(--color-line)] py-1.5 last:border-b-0"
            >
              <span>{unit}</span>
              <span className="font-mono font-bold tabular-nums">{mark}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>

    <Section id="sx-skills" title="Skills">
      <dl className="flex flex-col gap-2.5">
        {skills.map(({ group, items }) => (
          <div key={group} className="grid gap-x-4 sm:grid-cols-[150px_minmax(0,1fr)]">
            <dt className="font-bold">{group}</dt>
            <dd>{items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>

    <Section id="sx-str" title="Strengths">
      <ul className="list-disc space-y-1.5 pl-[18px]">
        {strengths.map(({ name, detail }) => (
          <li key={name}>
            <strong>{name}:</strong> {detail}
          </li>
        ))}
      </ul>
    </Section>

    <Section id="sx-how" title="How I work">
      <ul className="list-disc space-y-1.5 pl-[18px]">
        {howIWork.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </Section>
  </article>
);

export default CvSheet;
