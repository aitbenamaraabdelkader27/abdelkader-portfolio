export function Hero({ hero }) {
  return (
    <section className="hero hero-section scroll-mt-28 md:scroll-mt-32" id="top">
      <div className="container hero-grid hero__grid">
        <div className="hero-copy hero__copy">
          <p className="hero-kicker hero__kicker">{hero.name}</p>
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero-subtitle hero__subtitle">{hero.subtitle}</p>
          <div className="hero-actions hero__actions">
            <a className="button button-primary" href={hero.primaryAction.href}>
              {hero.primaryAction.label}
            </a>
            <a className="button button-secondary" href={hero.secondaryAction.href}>
              {hero.secondaryAction.label}
            </a>
          </div>
          <div className="hero-stats hero__stats" aria-label="Portfolio highlights">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="stat-card hero__stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual hero__visual">
          <div className="portrait-card hero__portrait">
            <img src={hero.profileImage} alt="Placeholder portrait" />
            <div className="portrait-caption hero__portrait-caption">
              <span>Student profile</span>
              <strong>Focused on clean engineering and cybersecurity growth.</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
