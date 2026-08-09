// File: src/app/projects/projects.ts
import type { StaticImageData } from "next/image";
import { Github, Smartphone, Figma, Map, type LucideIcon } from "lucide-react";
import cvSiteImg from "../../../public/projects/CVSite.png";
import quietStudySpacesImg from "../../../public/projects/QuietStudySpaces.png";
import figmaImg from "../../../public/projects/Figma.png";
import f1Img from "../../../public/projects/F1.png";

import pomoCDImg from "../../../public/projects/PomoCD.png";
export type Project = {
  title: string;
  date: string;
  tech: string;
  description: string;
  link: string;
  button: string;
  /** Optional live deployment, shown as the primary action alongside the repo. */
  liveLink?: string;
  liveButton?: string;
  icon: LucideIcon;
  /** What the project shipped to — picks the frame the screenshot sits in. */
  medium: "web" | "mobile";
  /** Shown in the browser chrome address bar. Web projects only. */
  urlLabel?: string;
  /** CSS custom property reference used to tint the media panel. */
  accent: string;
  image?: StaticImageData;
};

export const projects: Project[] = [
  {
    title: "PomoCD",
    date: "June 2026 - Ongoing",
    tech: "SvelteKit | Svelte 5 | Tailwind CSS | daisyUI | TypeScript | YouTube API",
    description:
      "A CD-player-themed Pomodoro study timer. Pick a YouTube playlist and a spinning CD showing the album's real artwork plays alongside the timer — the disc and the music pause when the timer does. Built with SvelteKit and Svelte 5 runes, styled with Tailwind CSS and a custom daisyUI theme, with album art pulled server-side from the iTunes Search API and playback driven by the YouTube IFrame Player API. Tested with Vitest and Playwright.",
    link: "https://github.com/CrabbRex/PomoCD",
    button: "View on GitHub",
    liveLink: "https://pomocd.org",
    liveButton: "Open PomoCD",
    icon: Github,
    medium: "web",
    urlLabel: "pomocd.org",
    accent: "var(--color-accent-violet)",
    image: pomoCDImg,
  },
  {
    title: "Portfolio Website",
    date: "June 2025 - Ongoing",
    tech: "Next.js | Tailwind.css | GitHub | Animations",
    description:
      "A personal portfolio website showcasing my projects and skills, built with Next.js and Tailwind CSS. This project is still ongoing and will be updated with new projects and features as I learn and grow as a developer.",
    link: "https://github.com/CrabbRex/my-cv-site",
    button: "View on GitHub",
    icon: Github,
    medium: "web",
    urlLabel: "github.com/CrabbRex/my-cv-site",
    accent: "var(--color-linkText)",
    image: cvSiteImg,
  },
  {
    title: "Quiet Study Spaces MVP",
    date: "February 2025 - June 2025",
    tech: "Flutter | Dart | Firebase | GitHub | CI/CD",
    description:
      "A mobile application MVP that helps students find quiet study spaces. This Project helped me develop skills with Flutter and Firebase, as well as GitHub for version control and CI/CD.",
    link: "https://github.com/CrabbRex/quietStudySpaces",
    button: "View on GitHub",
    icon: Smartphone,
    medium: "mobile",
    accent: "var(--color-primary)",
    image: quietStudySpacesImg,
  },
  {
    title: "Figma Mockups",
    date: "February 2025 - June 2025",
    tech: "Figma | StoryBoarding",
    description:
      "A Figma mockup created for a university project, guided by detailed design specifications. It highlights my skills in visual design and UX research. The feedback from this project deepened my understanding of the vital role user experience plays in effective software development.",
    link: "https://www.figma.com/proto/Nnk0JO6vUjjqa3MYTWkzao/Assignment-2?node-id=42-121&t=r8UUncsNzLgfUBkq-1",
    button: "View as Storyboard",
    icon: Figma,
    medium: "mobile",
    accent: "var(--color-highlight)",
    image: figmaImg,
  },
  {
    title: "Interactive F1 Map",
    date: "August 2024 - November 2024",
    tech: "jQuery | HTML | Responsive Design",
    description:
      "An interactive map of F1 circuits, built with jQuery and made for webpages. This project helped me develop skills in DOM traversal and manipulation, as well as responsive design.",
    link: "https://github.com/CrabbRex/IteractiveF1Map",
    button: "View on GitHub",
    icon: Map,
    medium: "web",
    urlLabel: "github.com/CrabbRex/IteractiveF1Map",
    accent: "var(--color-accent-red)",
    image: f1Img,
  },
];
