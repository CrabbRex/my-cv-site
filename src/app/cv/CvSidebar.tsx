// File: src/app/cv/CvSidebar.tsx
import React from 'react';
import { contact, experience, projects, role } from './cv-data';

// Section ids match the <Section> ids in CvSheet.
export const cvSections = [
  { id: 'sx-about', label: 'About me' },
  { id: 'sx-exp', label: 'Experience', count: experience.length },
  { id: 'sx-proj', label: 'Projects', count: projects.length },
  { id: 'sx-edu', label: 'Education' },
  { id: 'sx-skills', label: 'Skills' },
  { id: 'sx-str', label: 'Strengths' },
  { id: 'sx-how', label: 'How I work' },
];

const CvSidebar = () => (
  <aside className="flex min-w-0 flex-col gap-7 md:sticky md:top-24">
    <div>
      <h1 className="text-4xl font-bold leading-tight md:text-[40px]">Rex Crabb</h1>
      <p className="mt-2.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] opacity-70">{role}</p>
    </div>

    {/* Plain anchors so the menu works without JS; step 4 adds the scroll highlight. */}
    <nav aria-label="CV sections">
      <ol className="-mx-1 flex gap-0.5 overflow-x-auto px-1 pb-1 md:mx-0 md:flex-col md:overflow-visible md:p-0">
        {cvSections.map(({ id, label, count }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="flex min-h-10 items-center justify-between gap-2 whitespace-nowrap rounded-[10px] px-3.5 font-semibold transition hover:bg-[var(--color-pad)]"
            >
              {label}
              {count !== undefined && <span className="font-mono text-xs font-medium opacity-70">{count}</span>}
            </a>
          </li>
        ))}
      </ol>
    </nav>

    <div>
      <h2 className="mb-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] opacity-70">Contact</h2>
      <dl className="text-sm">
        {contact.map(({ key, value, href }) => (
          <div key={key} className="flex flex-col border-b border-dashed border-[var(--color-line)] py-1.5 last:border-b-0">
            <dt className="font-mono text-[11px] uppercase tracking-[0.1em] opacity-70">{key}</dt>
            <dd className="font-medium [overflow-wrap:anywhere]">
              {href ? (
                <a
                  href={href}
                  {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="text-[var(--color-box-hover)] underline-offset-4 hover:underline"
                >
                  {value}
                </a>
              ) : (
                value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </aside>
);

export default CvSidebar;
