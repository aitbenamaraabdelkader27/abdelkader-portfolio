export function SectionHeading({ eyebrow, heading, paragraph }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2>{heading}</h2>
      {paragraph ? <p className="section-paragraph">{paragraph}</p> : null}
    </div>
  )
}
