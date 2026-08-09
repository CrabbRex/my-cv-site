// File: src/app/projects/DeviceFrame.tsx
import Image, { type StaticImageData } from 'next/image';

type DeviceFrameProps = {
  image: StaticImageData;
  alt: string;
  urlLabel?: string;
  priority?: boolean;
};

/**
 * Browser chrome for projects that shipped to the web. The screenshot keeps its
 * native aspect ratio and the frame supplies the crop, so nothing is cut off.
 */
export function BrowserFrame({ image, alt, urlLabel, priority }: DeviceFrameProps) {
  return (
    <div className="w-full max-w-[440px] overflow-hidden rounded-xl bg-[#22252a] shadow-2xl ring-1 ring-black/20">
      <div className="flex items-center gap-1.5 bg-[#31353c] px-3 py-2">
        <span className="size-2 shrink-0 rounded-full bg-[#ff5f57]" />
        <span className="size-2 shrink-0 rounded-full bg-[#febc2e]" />
        <span className="size-2 shrink-0 rounded-full bg-[#28c840]" />
        {urlLabel && (
          <span className="ml-2 min-w-0 flex-1 truncate rounded bg-black/30 px-2 py-0.5 text-[10px] leading-4 text-white/55">
            {urlLabel}
          </span>
        )}
      </div>
      <Image
        src={image}
        alt={alt}
        sizes="(max-width: 768px) 90vw, 440px"
        className="h-auto w-full"
        priority={priority}
      />
    </div>
  );
}

/** Phone bezel for projects that shipped to a handset. */
export function PhoneFrame({ image, alt, priority }: DeviceFrameProps) {
  return (
    <div className="relative rounded-[2rem] border-[7px] border-[#22252a] bg-[#22252a] shadow-2xl">
      <div className="absolute left-1/2 top-0 z-10 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-[#22252a]" />
      <Image
        src={image}
        alt={alt}
        sizes="(max-width: 768px) 40vw, 200px"
        className="h-[240px] w-auto rounded-[1.5rem] md:h-[320px]"
        priority={priority}
      />
    </div>
  );
}
