// File: src/app/cv/page.tsx
import React from 'react';
import LinkSVG from '../components/LinkSVG';

const cv = () => {
  return (
    <main>
      <div className="max-w-5xl mx-auto p-6 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Rex Crabb</h1>
              <p className="text-[var(--color-linkText)]">Software & Web Developer | Internship Seeking</p>
              <p className="text-sm">Versatile IT student with strengths in both frontend development and core software engineering. Experienced in React/Next.js, Flutter, and Firebase, with strong academic results in data structures, algorithms, and distributed systems. Passionate about building clean UIs and scalable software.</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold border-b pb-1">Contact</h2>
              <ul className="ml-2 text-base">
                <li>Location: Sydney</li>
                <li>Phone: 0411 744 688</li>
                <li>Email: Crabbrex@gmail.com</li>
                <li className="flex items-center gap-1">
                  GitHub:
                  <a
                    href="https://github.com/CrabbRex/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                    <LinkSVG className="size-5" />
                  </a>
                </li>

                {/* <li><a href="https://github.com/CrabbRex" className="text-[var(--color-linkText)] hover:underline">GitHub</a></li> */}
              </ul>
            </div>

            <section className="space-y-4  mb-5">
              <h2 className="text-2xl font-semibold border-b pb-1">Skills</h2>
              <section className="ml-2">
                <h3 className="text-lg font-semibold">Programming Languages</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>JavaScript</li>
                  <li>HTML, CSS</li>
                  <li>TypeScript, Tailwind CSS</li>
                  <li>Java</li>
                  <li>Python</li>
                  <li>SQL</li>
                </ul>
              </section>
              <section className="ml-2">
                <h3 className="text-lg font-semibold">Tools/Frameworks</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>GitHub</li>
                  <li>React/Next.js</li>
                  <li>Flutter</li>
                  <li>Motion</li>
                  <li>Firebase Auth and Database</li>
                  <li>MongoDB Atlas</li>
                  <li>UX Research & Figma</li>
                </ul>
              </section>
              <section className="ml-2">
                <h3 className="text-lg font-semibold">Software Engineering</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>Data Structures & Algorithms</li>
                  <li>Object-Oriented Programming</li>
                  <li>Agile Methodologies</li>
                  <li>Unit & Integration Testing</li>
                </ul>
              </section>
              <section className="ml-2">
                <h3 className="text-lg font-semibold">Additional</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>Strong problem-solving skills and attention to detail.</li>
                  <li>Collaborative team member with experience working in university projects using the Agile Methodology.</li>
                  <li>Self-taught in front-end development beyond coursework.</li>
                </ul>
              </section>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-6 text-[var(--color-secondary)">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[var(--color-secondary) border-b pb-1">Education</h2>
              <div className="ml-2">

                <div>
                  <h3 className="text-lg font-semibold">Bachelor of Information Technology</h3>
                  <p className="text-sm">
                    Double major: Software Development and Web & Mobile Application Development.
                  </p>
                  <p className="text-sm">Macquarie University | Current WAM: 83.625 | Expected 2026 graduation.</p>
                  <h3 className="pt-3 text-lg font-semibold">Relevant Coursework</h3>
                  <div className="text-sm space-y-1">
                    <p></p>
                    <p>
                      Consistently achieved High Distinctions and Distinctions in core programming, web, and software engineering units:
                    </p>
                    <ul className="list-disc list-inside pl-4">
                      <li>Web Technology (85), Interactive Web Design (78).</li>
                      <li>Mobile App Development with Flutter & Firebase (83).</li>
                      <li>Distributed Systems (85), Algorithms & Data Structures (87), Systems Programming (78).</li>
                      <li>Database Design (82), Statistics (99), OOP (83).</li>
                    </ul>
                  </div>
                </div>
                <div className="pt-3">
                  <h3 className="text-lg font-semibold">HSC - Cranbrook School</h3>
                  <p className="text-sm">Graduated in 2021 with a HSC from Cranbrook.</p>
                </div>
              </div>
            </section>
            {/* Projects */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold border-b pb-1">Projects</h2>
              {/* 1 */}
              <div className="ml-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">Visual Social Media Calendar</h3>
                  {/* No GitHub link because the repository is private */}
                  <span className="text-xs text-gray-500">(Private Client Project)</span>
                </div>
                <p className="text-sm">
                  Collaborated with a small team to build a visual, interative social media calendar for a Client focusing on UX. Used Django, MongoDB and JavaScript, featuring drag-and-drop post scheduling, PDF exports and full CRUD. Contributed to both backend API design and frontend functionality within an Agile workflow.
                </p>
              </div>
              {/* 2 */}
              <div className="ml-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">Personal Portfolio Website</h3>
                  <a
                    href="https://github.com/CrabbRex/my-cv-site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-secondary) hover:text-blue-600"
                  >
                    <LinkSVG className="size-5" />
                  </a>
                </div>
                <p className="text-sm">
                  Designed and built a fully responsive portfolio using Next.js and Tailwind CSS to showcase academic and personal projects. Implemented custom animations with Framer Motion and deployed via Vercel.
                </p>
              </div>
              {/* 3 */}
              <div className="ml-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">Mobile Application Development MVP</h3>
                  <a
                    href="https://github.com/CrabbRex/quietStudySpaces"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-secondary) hover:text-blue-600"
                  >
                    <LinkSVG className="size-5" />
                  </a>
                </div>
                <p className="text-sm">
                  Built a cross-platform study-space discovery app using Flutter, implementing Firebase Auth and Firestore for secure user data management and real time updates.
                </p>
              </div>
              {/* 4 */}
              <div className="ml-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">Figma Mockups</h3>
                  <a
                    href="https://www.figma.com/proto/Nnk0JO6vUjjqa3MYTWkzao/Assignment-2?node-id=42-121&t=r8UUncsNzLgfUBkq-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-secondary) hover:text-blue-600"
                  >
                    <LinkSVG className="size-5" />
                  </a>
                </div>
                <p className="text-sm">
                  Created low and high-fidelity wireframes in Figma for a dog-care app with two user roles. Translated user research into an interactive storyboard prototype.
                </p>
              </div>
            </section>
          </div>
        </div>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-1">Experience</h2>
          <div className="ml-2">
            <ul className="list-disc list-outside ml-3.5 text-sm">
              <li>Developed and maintained web and mobile apps using Vercel and GitHub Actions CI/CD pipelines for automated builds, deployments and APK generation.</li>
              <li>Applied Agile principles in university and client projects, iterating on deliverables and collaborating with a small team.</li>
              <li>Built interactive Figma prototypes, translating user research into actionable user experience improvements.</li>
              <li>Collaborated with a client to deliver a visual social media calendar, contributing to frontend and backend development with Django, MongoDB and JavaScript.</li>
              <li>Implemented unit and integration tests to ensure reliability of software projects.</li>
              <li>Used Git feature branch workflows and pull requests to manage code and track changes across prjects.</li>
              <li>Collaborated with peers to create mobile application solutions.</li>
              <li>Consistently achieved high academic results while managing personal health challenges.</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}

export default cv