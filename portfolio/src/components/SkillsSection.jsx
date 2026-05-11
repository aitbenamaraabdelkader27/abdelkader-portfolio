import { SectionHeading } from './SectionHeading'

function SkillGroup({ group }) {
  return (
    <article className="skill-group">
      <h3>{group.title}</h3>
      <div className="skill-tags">
        {group.items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>
  )
}

export function SkillsSection({ skillGroups, section }) {
  return (
    <section className="content-section" id="skills">
      <div className="container">
        <SectionHeading eyebrow={section.eyebrow} heading={section.heading} />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  )
}
