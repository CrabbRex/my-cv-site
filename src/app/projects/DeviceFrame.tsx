// File: src/app/projects/DeviceFrame.tsx
import Image, { type StaticImageData } from 'next/image';

type DeviceFrameProps = {
  image: StaticImageData;
  alt: string;
  urlLabel?: string;
  priority?: boolean;
};

/**
 * Screenshot panel for projects that shipped to the web. No OS-chrome
 * mimicry — a plain bordered frame with the URL as a mono spec-label
 * underneath, matching the spec-value language used on the CV and catalog.
 */
export function BrowserFrame({ image, alt, urlLabel, priority }: DeviceFrameProps) {
  return (
    <div className="w-full max-w-[440px]">
      <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-pad)]">
        <Image
          src={image}
          alt={alt}
          sizes="(max-width: 768px) 90vw, 440px"
          className="h-auto w-full"
          priority={priority}
        />
      </div>
      {urlLabel && (
        <div className="mt-2 flex min-w-0 items-center gap-2 px-1 font-mono text-[11px] opacity-70">
          <span className="size-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
          <span className="truncate">{urlLabel}</span>
        </div>
      )}
    </div>
  );
}

/**
 * Same quiet panel for projects that shipped to a handset — no URL to
 * label. Height-capped, not width-capped: mobile screenshots are tall
 * portrait images, so sizing by width alone would make the panel enormous.
 */
export function PhoneFrame({ image, alt, priority }: DeviceFrameProps) {
  return (
    <div className="h-[240px] overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-pad)] md:h-[320px]">
      <Image
        src={image}
        alt={alt}
        sizes="(max-width: 768px) 40vw, 200px"
        className="h-full w-auto"
        priority={priority}
      />
    </div>
  );
}
