import { useState } from 'react'
import { SectionHeading } from './SectionHeading'
import { ProjectCard } from './ProjectCard'

export function ProjectsSection({ projects, section }) {
  const [openProjectTitle, setOpenProjectTitle] = useState(null)

  const toggleProject = (title) => {
    setOpenProjectTitle((currentTitle) => (currentTitle === title ? null : title))
  }

  return (
    <section className="content-section" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow={section.eyebrow}
          heading={section.heading}
          paragraph={section.paragraph}
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              section={section}
              isOpen={openProjectTitle === project.title}
              onToggle={() => toggleProject(project.title)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
