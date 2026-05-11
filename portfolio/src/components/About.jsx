import { SectionHeading } from './SectionHeading'

export function About({ about }) {
  return (
    <section className="content-section" id="about">
      <div className="container">
        <SectionHeading eyebrow={about.eyebrow} heading={about.heading} paragraph={about.text} />
      </div>
    </section>
  )
}
