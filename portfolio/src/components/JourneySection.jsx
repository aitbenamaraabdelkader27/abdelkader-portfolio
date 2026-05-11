import { SectionHeading } from './SectionHeading'

export function JourneySection({ journey }) {
  return (
    <section className="content-section section-muted" id="journey">
      <div className="container">
        <SectionHeading eyebrow={journey.eyebrow} heading={journey.heading} />

        <div className="journey-grid">
          {journey.items.map((item, index) => (
            <article key={item} className="journey-card">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
