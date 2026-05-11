import { SectionHeading } from './SectionHeading'

export function ReflectiveSection({ section }) {
  return (
    <section className="content-section reflective-section learning-section scroll-mt-28 md:scroll-mt-32" id={section.id}>
      <div className="container">
        <SectionHeading eyebrow={section.eyebrow} heading={section.heading} />

        <div className="reflective-card learning-section__card">
          <div className="reflective-copy learning-section__copy">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="reflective-quote learning-section__quote">
            <p>{section.quote}</p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
