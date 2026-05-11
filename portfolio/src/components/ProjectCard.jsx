export function ProjectCard({ project, section, isOpen, onToggle }) {
  const detailsId = `project-details-${project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')}`

  return (
    <article
      className={`project-card${isOpen ? ' is-open project-card--expanded' : ''}`}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      aria-controls={detailsId}
      onClick={onToggle}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onToggle()
        }
      }}
    >
      <div className="project-card-top project-card__top">
        <div className="project-card__content">
          <p className="card-label project-card__eyebrow">{section.cardEyebrow}</p>
          <h3 className="project-card__title">{project.title}</h3>
        </div>
        <span className="project-card-indicator project-card__indicator" aria-hidden="true">
          <span>{isOpen ? section.hideDetailsLabel : section.viewDetailsLabel}</span>
          <span className="project-card-arrow project-card__arrow" />
        </span>
      </div>

      <p className="project-description project-card__description">{project.description}</p>

      <div className="project-card-details project-card__details" id={detailsId} aria-hidden={!isOpen}>
        <div className="project-card-details-inner project-card__details-inner">
          <ul
            className="project-highlights project-card__highlights"
            aria-label={`${project.title} ${section.highlightsAriaLabel}`}
          >
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <div className="learning-note project-card__learning-note">
            <span className="project-card__learning-label">{section.learningLabel}</span>
            <p>{project.learning}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
