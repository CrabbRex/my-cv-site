// File: src/app/cv/cv-data.ts
// Single source for the CV page: both the CV sheet and the timeline read from here.

export type Entry = {
  id: string;
  title: string;
  /** Employer or institution. Shown under the title when there is no link. */
  org?: string;
  /** Extra detail shown after the org, e.g. "Private client project". */
  note?: string;
  /** Date range for the CV sheet. */
  long: string;
  /** Shorter date range for the timeline. */
  short: string;
  href?: string;
  linkLabel?: string;
  tags: string[];
  points: string[];
};

export type ContactItem = {
  key: string;
  value: string;
  href?: string;
};

export type TimelineKind = "work" | "project" | "study";

export const role = "Software & Web Developer · Graduating Nov 2026";

export const about: string[] = [
  "I'm a final year Information Technology student specialising in software development and web/mobile applications, with hands on experience building and deploying real world projects. My strengths sit across both front end development and core software engineering, backed by strong results in data structures, algorithms and distributed systems.",
  "I enjoy turning ideas into functional, user focused products, from Minimum Viable Product mobile apps to full-stack web applications. I care about clean interfaces and maintainable software, and thrive in collaborative environments where I can learn quickly and contribute from day one.",
];

export const contact: ContactItem[] = [
  { key: "Location", value: "Sydney, NSW" },
  { key: "Phone", value: "0411 744 688", href: "tel:+61411744688" },
  { key: "Email", value: "Crabbrex@gmail.com", href: "mailto:Crabbrex@gmail.com" },
  { key: "GitHub", value: "github.com/CrabbRex", href: "https://github.com/CrabbRex" },
  { key: "LinkedIn", value: "linkedin.com/in/rex-crabb", href: "https://www.linkedin.com/in/rex-crabb-b94501404" },
];

export const experience: Entry[] = [
  {
    id: "exp-freelance",
    title: "Freelance Web Developer",
    org: "Self Employed",
    long: "Sep 2026 \u2013 Present",
    short: "Sep 2026 \u2013 now",
    tags: ["GitHub", "Netlify", "CI/CD", "DNS"],
    points: [
      "Run client facing meetings to gather requirements, scope work and agree staged delivery and invoicing.",
      "Audited and migrated an existing codebase from a previous developer to client owned GitHub, Netlify and DNS.",
      "Set up a CI/CD workflow with branch based staging previews and automatic production deploys on merge.",
      "Built a data driven page fed by a client managed spreadsheet, letting non technical staff update site content themselves, with no code changes or redeploys needed.",
    ],
  },
  {
    id: "exp-rm",
    title: "Developer Placement",
    org: "Robotic Marketer",
    note: "Private client project",
    long: "Jul 2025 \u2013 Dec 2025",
    short: "Jul \u2013 Dec 2025",
    tags: ["Django", "MongoDB", "JavaScript", "Agile"],
    points: [
      "Collaborated within a small Agile team to design and build an interactive social media calendar, improving user experience for client content planning.",
      "Developed full-stack functionality using Django, MongoDB and JavaScript, including drag and drop post scheduling, PDF export and full CRUD.",
      "Contributed to both back end API design and front end development, ensuring seamless integration across the platform.",
      "Delivered features aligned to client requirements, balancing usability with technical performance.",
    ],
  },
];

export const projects: Entry[] = [
  {
    id: "proj-pomocd",
    title: "PomoCD",
    long: "Jun 2026 \u2013 Ongoing",
    short: "Jun 2026 \u2013 now",
    href: "https://pomocd.org",
    linkLabel: "pomocd.org",
    tags: ["SvelteKit", "Svelte 5", "TypeScript", "Tailwind CSS", "daisyUI", "Vitest", "Playwright"],
    points: [
      "Designed and built a CD-player-themed Pomodoro study timer: pick a YouTube playlist and a spinning CD with the album\u2019s real artwork plays alongside the timer.",
      "Drove playback through the YouTube IFrame Player API so the disc and music pause with the timer, with album art pulled server-side from the iTunes Search API.",
      "Tested with Vitest unit tests and Playwright end to end tests.",
    ],
  },
  {
    id: "proj-qss",
    title: "Mobile Application Development MVP",
    long: "Feb 2025 \u2013 Jun 2025",
    short: "Feb \u2013 Jun 2025",
    href: "https://github.com/CrabbRex/quietStudySpaces",
    linkLabel: "GitHub",
    tags: ["Flutter", "Dart", "Firebase", "GitHub Actions", "Figma"],
    points: [
      "Designed interactive mockups in Figma, then built a cross-platform Flutter MVP to help users discover and save study locations.",
      "Integrated Firebase Auth and Firestore for secure user data management and real time updates.",
      "Implemented device features including camera integration, and wrote unit, widget and integration tests to keep the app reliable as features were added.",
      "Set up a GitHub Actions CI/CD pipeline to automate builds and APK generation, delivering the app end to end from concept to deployment.",
    ],
  },
  {
    id: "proj-portfolio",
    title: "Personal Portfolio Website",
    long: "Jun 2025 \u2013 Ongoing",
    short: "Jun 2025 \u2013 now",
    href: "https://github.com/CrabbRex/my-cv-site",
    linkLabel: "GitHub",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion", "Vercel"],
    points: [
      "Designed and built a fully responsive portfolio with Next.js and Tailwind CSS, with continuous deployment via Vercel.",
      "Implemented custom animations with Motion and light and dark themes built on CSS variables.",
    ],
  },
  {
    id: "proj-dogcare",
    title: "Dog-Care App Prototype",
    long: "Feb 2025 \u2013 Jun 2025",
    short: "Feb \u2013 Jun 2025",
    href: "https://www.figma.com/proto/Nnk0JO6vUjjqa3MYTWkzao/Assignment-2?node-id=42-121&t=r8UUncsNzLgfUBkq-1",
    linkLabel: "Figma",
    tags: ["Figma", "UX research", "Storyboarding"],
    points: [
      "Created low and high fidelity wireframes in Figma for a dog-care app with two user roles, translating user research into an interactive storyboard prototype.",
    ],
  },
  {
    id: "proj-f1",
    title: "Interactive F1 Map",
    long: "Aug 2024 \u2013 Nov 2024",
    short: "Aug \u2013 Nov 2024",
    href: "https://github.com/CrabbRex/IteractiveF1Map",
    linkLabel: "GitHub",
    tags: ["jQuery", "HTML", "CSS"],
    points: [
      "Built an interactive map of F1 circuits with jQuery, developing DOM traversal, manipulation and responsive design skills.",
    ],
  },
];

export const degree = {
  title: "Bachelor of Information Technology",
  meta: [
    "Macquarie University · Feb 2022 \u2013 Nov 2026",
    "Double major in Software Development and Web & Mobile Application Development",
  ],
  wam: "82.105",
  marksIntro: "High Distinctions and Distinctions across core programming, web and software engineering units:",
};

export const hsc = { title: "HSC · Cranbrook School", meta: "Graduated 2021" };

export const marks: { unit: string; mark: number }[] = [
  { unit: "Statistics", mark: 99 },
  { unit: "Algorithms & Data Structures", mark: 87 },
  { unit: "Web Technology", mark: 85 },
  { unit: "Distributed Systems", mark: 85 },
  { unit: "Object Oriented Programming", mark: 83 },
  { unit: "Mobile App Development (Flutter & Firebase)", mark: 83 },
  { unit: "Database Design", mark: 82 },
  { unit: "Interactive Web Design", mark: 78 },
  { unit: "Systems Programming", mark: 78 },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "Dart", "Java", "Python", "SQL", "HTML/CSS"] },
  { group: "Frameworks", items: ["React", "Next.js", "SvelteKit", "Flutter", "Django", "Tailwind CSS", "Motion"] },
  { group: "Data & back end", items: ["Firebase Auth", "Firestore", "MongoDB Atlas", "REST APIs"] },
  { group: "Tools", items: ["Git & GitHub", "GitHub Actions", "Vercel", "Netlify", "Figma"] },
  {
    group: "Engineering",
    items: ["Data Structures & Algorithms", "OOP", "Agile", "Unit & integration testing", "Responsive design", "UX research"],
  },
];

export const strengths: { name: string; detail: string }[] = [
  { name: "Problem solving", detail: "break down complex problems and deliver clean, functional solutions, with close attention to detail." },
  { name: "Collaboration", detail: "Agile teams at university and with clients, contributing across front end and back end." },
  { name: "Learning agility", detail: "quickly pick up new tools and frameworks, and self-taught in front end development beyond coursework." },
  { name: "Client communication", detail: "run requirements meetings, scope work and agree staged delivery." },
];

export const howIWork: string[] = [
  "Git feature branch workflows and pull requests to manage code and track changes across projects.",
  "CI/CD with GitHub Actions, Vercel and Netlify for automated builds, previews, deploys and APK generation.",
  "Unit, widget and integration tests to keep projects reliable as features are added.",
  "Interactive Figma prototypes that turn user research into concrete UX improvements.",
];

/** Study entries only appear on the timeline; the CV sheet uses `degree`, `hsc` and `marks`. */
export const study: Entry[] = [
  {
    id: "study-bit",
    title: "Bachelor of Information Technology",
    org: "Macquarie University",
    long: "Feb 2022 \u2013 Nov 2026",
    short: "Feb 2022 \u2013 Nov 2026",
    tags: [],
    points: [
      "Double major in Software Development and Web & Mobile Application Development. Current WAM 82.105.",
      "Top results: Statistics (99), Algorithms & Data Structures (87), Web Technology (85), Distributed Systems (85).",
    ],
  },
  {
    id: "study-hsc",
    title: "HSC",
    org: "Cranbrook School",
    long: "2021",
    short: "2021",
    tags: [],
    points: ["Graduated with a HSC from Cranbrook School."],
  },
];

/** Newest first. */
export const timeline: [TimelineKind, Entry][] = [
  ["work", experience[0]],
  ["project", projects[0]],
  ["work", experience[1]],
  ["project", projects[2]],
  ["project", projects[1]],
  ["project", projects[3]],
  ["project", projects[4]],
  ["study", study[0]],
  ["study", study[1]],
];

/** Sidebar menu. Ids match the section ids in CvSheet. */
export const cvSections: { id: string; label: string; count?: number }[] = [
  { id: "sx-about", label: "About me" },
  { id: "sx-exp", label: "Experience", count: experience.length },
  { id: "sx-proj", label: "Projects", count: projects.length },
  { id: "sx-edu", label: "Education" },
  { id: "sx-skills", label: "Skills" },
  { id: "sx-str", label: "Strengths" },
  { id: "sx-how", label: "How I work" },
];
