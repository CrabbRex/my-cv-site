// File: src/app/projects/page.tsx
import React from 'react'
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      date: "June 2025 - Ongoing",
      tech: "Next.js | Tailwind.css | GitHub | Animations",
      description: "A personal portfolio website showcasing my projects and skills, built with Next.js and Tailwind CSS. This project is still ongoing and will be updated with new projects and features as I learn and grow as a developer.",
      link: "https://github.com/CrabbRex/my-cv-site",
      button: "View on GitHub",
    },
    {
      title: "Quiet Study Spaces MVP",
      date: "February 2025 - June 2025",
      tech: "Flutter | Dart | Firebase | GitHub | CI/CD",
      description: "A mobile application MVP that helps students find quiet study spaces. This Project helped me develop skills with Flutter and Firebase, as well as GitHub for version control and CI/CD.",
      link: "https://github.com/CrabbRex/quietStudySpaces",
      button: "View on GitHub",
    },
    {
      title: "Figma Mockups",
      date: "February 2025 - June 2025",
      tech: "Figma | StoryBoarding",
      description: "A Figma mockup created for a university project, guided by detailed design specifications. It highlights my skills in visual design and UX research. The feedback from this project deepened my understanding of the vital role user experience plays in effective software development.",
      link: "https://www.figma.com/proto/Nnk0JO6vUjjqa3MYTWkzao/Assignment-2?node-id=42-121&t=r8UUncsNzLgfUBkq-1",
      button: "View as Storyboard",
    },
    {
      title: "Interactive F1 Map",
      date: "August 2024 - November 2024",
      tech: "jQuery | HTML | Responsive Design",
      description: "An interactive map of F1 circuits, built with jQuery and made for webpages. This project helped me develop skills in DOM traversal and manipulation, as well as responsive design.",
      link: "https://github.com/CrabbRex/IteractiveF1Map",
      button: "View on GitHub",
    },
  ]

  return (
    <main className="flex mx-auto px-2 items-center flex-col py-24 w-full">
      <h1 className="text-4xl font-bold mb-8 text-[var(--color-foreground)] border-b pb-1">
        Projects
      </h1>
      <div className="w-full border-t border-b">
         <p className="pt-5 pb-5 px-4 md:px-5 max-w-4xl mx-auto text-center text-sm text-[var(--color-foreground)]">
           Here are some of the projects I have worked on, showcasing my skills in web development, mobile app development, and design.
         </p>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-5xl mt-10 px-10 md:px-16">
        <Carousel>
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="px-4 md:px-6">
                <div className="bg-[var(--color-pad)] hover:bg-[var(--color-pad-hover)] text-zinc-950 rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col justify-between min-h-[350px]">
                  <div>
                    <h2 className="text-xl font-bold mb-1">{project.title}</h2>
                    <p className="text-sm p-1">{project.date}</p>
                    <p className="text-sm p-1">{project.tech}</p>
                    <p className="text-sm p-1 mb-4">{project.description}</p>
                  </div>
                  <Link href={project.link} target="_blank">
                    <button className="self-start text-sm font-semibold border border-[var(--color-foreground)] px-4 py-2 rounded-3xl hover:bg-blue-600 hover:border-blue-600 hover:text-[var(--color-background)] transition cursor-pointer">
                      {project.button}
                    </button>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>

    </main>
  )
}