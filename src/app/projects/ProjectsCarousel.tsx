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
              <CarouselItem key={project.title} className="px-1 sm:px-2 md:px-4">
                <article className="flex h-full min-h-[420px] flex-col overflow-hidden rounded-2xl bg-[var(--color-pad)] text-[var(--color-foreground)] shadow-md transition-shadow duration-300 hover:shadow-xl md:flex-row">
                  {/* Screenshot, framed by the medium the project shipped to */}
                  <div
                    className="flex w-full shrink-0 items-center justify-center p-4 sm:p-6 md:w-[45%] md:p-8"
                    style={{ background: `color-mix(in srgb, ${project.accent} 20%, var(--color-background))` }}
                  >
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
                      <p className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] opacity-70">
                        <span
                          aria-hidden
                          className="h-[3px] w-8 shrink-0 rounded-full"
                          style={{ background: project.accent }}
                        />
                        {project.date}
                      </p>

                      <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
                        {project.title}
                      </h2>

                      <ul className="mb-4 flex flex-wrap gap-2">
                        {tech.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-[var(--color-foreground)]/20 px-2.5 py-1 text-xs"
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
                        className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-foreground)] px-4 py-2 text-sm font-semibold transition hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] motion-reduce:transition-none"
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
          <CarouselPrevious className="static translate-y-0 border-[var(--color-foreground)]/20 bg-[var(--color-pad)] text-[var(--color-foreground)] hover:bg-[var(--color-pad-hover)]" />

          <span className="text-xs tabular-nums tracking-[0.18em] opacity-70">
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
                className="h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-foreground)] motion-reduce:transition-none"
                style={{
                  width: index === selected ? '1.75rem' : '0.5rem',
                  background: index === selected ? project.accent : 'var(--color-foreground)',
                  opacity: index === selected ? 1 : 0.25,
                }}
              />
            ))}
          </div>

          <CarouselNext className="static translate-y-0 border-[var(--color-foreground)]/20 bg-[var(--color-pad)] text-[var(--color-foreground)] hover:bg-[var(--color-pad-hover)]" />
        </div>
      </Carousel>
    </div>
  );
}
