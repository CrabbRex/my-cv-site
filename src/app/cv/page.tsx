import React from 'react'

const cv = () => {
  return (
    <main>
      <div className="max-w-5xl mx-auto p-6 mt-20 text-[var(--color-secondary)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Rex Crabb</h1>
              <p className="text-blue-600 dark:text-blue-400">Web Developer (Internship Seeking)</p>
            </div>
            <div className="space-y-4">
              <h2 className="font-semibold border-b pb-1">Contact</h2>
              <ul className="text-sm">
                <li>📍 Bondi, Sydney</li>
                <li>📞 0411 744 688</li>
                <li>📧 crabbrex@gmail.com</li>
                <li>🐙 <a href="https://github.com/CrabbRex" className="text-blue-600">GitHub</a></li>
              </ul>
            </div>
            <section className="space-y-4">
              <h2 className="font-semibold border-b pb-1">Skills</h2>
              <section>                
                <h3 className="text-lg font-semibold">Programming Languages</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>JavaScript</li>
                  <li>HTML, CSS</li>
                  <li>TypeScript, Tailwind CSS</li>
                  <li>Java</li>
                  <li>Python</li>
                  <li>SQL</li>
                  <li>Object Oriented Practices</li>
                </ul>
              </section>
              <section>                
                <h3 className="text-lg font-semibold">Tools/Frameworks</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>GitHub</li>
                  <li>React</li>
                  <li>Flutter</li>
                  <li>Firebase Auth and Database</li>
                  <li>UX Research & Figma</li>
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
                  <h3 className="text-lg font-semibold">HSC - Cranbrook School</h3>
                  <p className="text-sm">Graduated in 2021 with a HSC from Cranbrook.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Macquarie University</h3>
                  <p className="text-s">
                    Currently pursuing a Bachelor of Information Technology with a double major in Software Development and Web &
                    Mobile Application Development. Expected to graduate in 2026.
                  </p>
                  <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                    <li>Current WAM: 83.692</li>
                    <li>Key Subjects: </li>
                    <ul className="list-disc list-inside pl-4">
                      <li>Web Technology</li>
                      <li>Interactive Web Design</li>
                      <li>Database Design and Management</li>
                      <li>Algorithms and Data Structure</li>
                      <li>Object-Oriented Programming</li>
                    </ul>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <h2 className="font-semibold border-b pb-1">Projects</h2>
              <p className="text-sm">
              </p>
            </section>
          </div>
        </div>
      </div>

    </main>
  )
}

export default cv