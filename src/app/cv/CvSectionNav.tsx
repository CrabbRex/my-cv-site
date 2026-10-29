// File: src/app/cv/CvSectionNav.tsx
"use client";
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { cvSections } from './cv-data';

export default function CvSectionNav() {
  const [current, setCurrent] = useState(cvSections[0].id);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // A section counts as current while its top edge is in a band 20-30% down the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrent(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    cvSections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    // The last sections are short and can never reach that band, so light the last one at the bottom of the page.
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        setCurrent(cvSections[cvSections.length - 1].id);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <nav aria-label="CV sections">
      <ol className="-mx-1 flex gap-0.5 overflow-x-auto px-1 pb-1 md:mx-0 md:flex-col md:overflow-visible md:p-0">
        {cvSections.map(({ id, label, count }) => {
          const isCurrent = current === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setCurrent(id)}
                aria-current={isCurrent ? 'true' : undefined}
                className={`relative flex min-h-10 items-center justify-between gap-2 whitespace-nowrap rounded-[10px] px-3.5 font-semibold transition-colors ${
                  isCurrent ? '' : 'hover:bg-[var(--color-pad)]'
                }`}
              >
                {isCurrent && (
                  <motion.span
                    layoutId="cv-section-bubble"
                    className="absolute inset-0 rounded-[10px] bg-[var(--color-oppositeBackground)]"
                    transition={reduceMotion ? { duration: 0 } : { type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className={`relative ${isCurrent ? 'text-[var(--color-background)]' : ''}`}>{label}</span>
                {count !== undefined && (
                  <span
                    className={`relative font-mono text-xs font-medium ${
                      isCurrent ? 'text-[var(--color-background)] opacity-80' : 'opacity-70'
                    }`}
                  >
                    {count}
                  </span>
                )}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
