// File: src/app/projects/ProjectsCarousel.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { Globe } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { BrowserFrame, PhoneFrame } from './DeviceFrame';
import { projects } from './projects';

export default function ProjectsCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className="w-full max-w-5xl px-4 sm:px-6 md:px-8">
      <Carousel opts={{ loop: true }} setApi={setApi}>
        <CarouselContent>
          {projects.map((project, index) => {
            const Icon = project.icon;
            const tech = project.tech.split('|').map((t) => t.trim()).filter(Boolean);

            return (
              <CarouselItem key={project.title} className="pb-2 pr-2 sm:pr-3 md:pr-4">
                <article className="flex h-full min-h-[420px] flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-pad)] text-[var(--color-foreground)] shadow-[6px_6px_0_var(--color-oppositeBackground)] md:flex-row">
                  {/* Screenshot, framed by the medium the project shipped to */}
                  <div className="flex w-full shrink-0 items-center justify-center border-b border-[var(--color-line)] p-4 sm:p-6 md:w-[45%] md:border-b-0 md:border-r md:p-8">
                    {project.image ? (
                      project.medium === 'web' ? (
                        <BrowserFrame
                          image={project.image}
                          alt={`Screenshot of ${project.title}`}
                          urlLabel={project.urlLabel}
                          priority={index === 0}
                        />
                      ) : (
                        <PhoneFrame
                          image={project.image}
                          alt={`Screenshot of ${project.title}`}
                          priority={index === 0}
                        />
                      )
                    ) : (
                      <Icon className="size-16 opacity-40" strokeWidth={1.5} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between gap-6 p-5 sm:p-6 md:p-8">
                    <div>
                      <p className="mb-3 flex items-center gap-3 font-mono text-xs opacity-70">
                        {project.date}
                      </p>

                      <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
                        {project.title}
                      </h2>

                      <ul className="mb-4 flex flex-wrap gap-2">
                        {tech.map((item) => (
                          <li
                            key={item}
                            className="rounded-md border border-[var(--color-line)] px-2.5 py-1 text-xs text-[var(--color-box-hover)]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>

                      <p className="max-w-prose text-sm leading-relaxed opacity-80">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      {project.liveLink && (
                        <Link
                          href={project.liveLink}
                          target="_blank"
                          className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-foreground)] px-4 py-2 text-sm font-semibold text-[var(--color-background)] transition hover:opacity-85 motion-reduce:transition-none"
                        >
                          <Globe className="size-4" strokeWidth={2} />
                          {project.liveButton ?? "Open live site"}
                        </Link>
                      )}
                      <Link
                        href={project.link}
                        target="_blank"
                        className="inline-flex w-fit items-center gap-2 rounded-full border-[1.5px] border-[var(--color-foreground)] px-4 py-2 text-sm font-semibold transition hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] motion-reduce:transition-none"
                      >
                        <Icon className="size-4" strokeWidth={2} />
                        {project.button}
                      </Link>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        {/* Controls sit in the flow below the card at every width, so they can
            never overflow the viewport the way negatively-offset arrows do. */}
        <div className="mt-6 flex items-center justify-center gap-3 md:gap-4">
          <CarouselPrevious className="static translate-y-0 border-[var(--color-line)] bg-[var(--color-pad)] text-[var(--color-foreground)] hover:bg-[var(--color-pad-hover)]" />

          <span className="font-mono text-xs tabular-nums tracking-[0.18em] text-[var(--color-box-hover)]">
            {String(selected + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>

          <div className="flex items-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to ${project.title}`}
                aria-current={index === selected}
                className="h-2 cursor-pointer rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-foreground)] motion-reduce:transition-none"
                style={{
                  width: index === selected ? '1.75rem' : '0.5rem',
                  background: index === selected ? 'var(--color-box)' : 'var(--color-foreground)',
                  opacity: index === selected ? 1 : 0.25,
                }}
              />
            ))}
          </div>

          <CarouselNext className="static translate-y-0 border-[var(--color-line)] bg-[var(--color-pad)] text-[var(--color-foreground)] hover:bg-[var(--color-pad-hover)]" />
        </div>
      </Carousel>

      {/* Compact index — quick-jump list beneath the carousel */}
      <div className="mx-auto mt-10 max-w-3xl border-t border-[var(--color-line)]">
        {projects.map((project, index) => {
          const isSelected = index === selected;
          return (
            <button
              key={project.title}
              type="button"
              onClick={() => api?.scrollTo(index)}
              aria-current={isSelected}
              className="grid w-full cursor-pointer grid-cols-[40px_1fr_auto] items-center gap-4 border-b border-[var(--color-line)] px-2 py-3 text-left transition hover:bg-[var(--color-pad)]"
              style={{
                backgroundColor: isSelected ? 'var(--color-pad)' : 'transparent',
              }}
            >
              <span
                className={`font-mono text-sm font-semibold ${
                  isSelected ? 'text-[var(--color-box-hover)]' : 'text-[var(--color-foreground)] opacity-50'
                }`}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="truncate text-sm font-medium">{project.title}</span>
              <span className="rounded-md border border-[var(--color-line)] px-2.5 py-1 text-[11px] text-[var(--color-box-hover)]">
                {project.medium === 'web' ? 'Web' : 'Mobile'}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
