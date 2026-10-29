// File: src/app/cv/CvSidebar.tsx
import React from 'react';
import { contact, role } from './cv-data';
import CvSectionNav from './CvSectionNav';

const CvSidebar = () => (
  <aside className="flex min-w-0 flex-col gap-7 md:sticky md:top-24">
    <div>
      <h1 className="text-4xl font-bold leading-tight md:text-[40px]">Rex Crabb</h1>
      <p className="mt-2.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] opacity-70">{role}</p>
    </div>

    <CvSectionNav />

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
