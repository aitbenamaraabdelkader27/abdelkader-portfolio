function NavIcon({ href }) {
  const icons = {
    '#about': (
      <path d="M12 12.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Zm-5.5 5.25a5.5 5.5 0 0 1 11 0" />
    ),
    '#projects': <path d="M5.75 7.25h12.5v9.5H5.75zm3-2.5h6.5v2.5h-6.5z" />,
    '#journey': <path d="M6.5 17.5 10 14l2.25 2.25 5.25-6.5" />,
    '#growth-learning': <path d="M7 16.5 10.25 12l2.5 2 4.25-6" />,
    '#beyond-projects': <path d="m8 8.25 4-2.5 4 2.5-4 2.5-4-2.5Zm0 3.5 4 2.5 4-2.5M8 15.25l4 2.5 4-2.5" />,
    '#skills': <path d="m8 16 3.25-8h1.5L16 16m-6.5-2.5h5" />,
    '#contact': <path d="M5.75 7.5h12.5v9h-12.5zm.75.75 5.5 4.5 5.5-4.5" />,
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {icons[href] ?? <circle cx="12" cy="12" r="4.5" />}
    </svg>
  )
}

export function Navbar({ links, locale, onLocaleChange, ui, isCompact }) {
  return (
    <header className={`site-header navbar-shell${isCompact ? ' is-compact' : ''}`}>
      <nav
        className={`navbar${isCompact ? ' is-compact' : ''} ${isCompact ? 'navbar--compact' : ''}`}
        aria-label={ui.navigationLabel}
      >
        <a className="brand-mark navbar__brand" href="#top" aria-label={ui.goToTopLabel}>
          AA
        </a>

        <div className="nav-controls navbar__controls">
          <div className="nav-links navbar__links">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={link.label}
                className="navbar__link scroll-mt-28 md:scroll-mt-32"
              >
                <span className="nav-link-icon navbar__link-icon">
                  <NavIcon href={link.href} />
                </span>
                <span className="nav-link-label navbar__link-label">{link.label}</span>
              </a>
            ))}
          </div>

          <div
            className="language-switcher navbar__language-switcher"
            aria-label={ui.languageSwitcherLabel}
            role="group"
          >
            {Object.entries(ui.languageOptions).map(([optionLocale, label]) => (
              <button
                key={optionLocale}
                type="button"
                className={`language-button navbar__language-button${
                  locale === optionLocale ? ' is-active' : ''
                }`}
                onClick={() => onLocaleChange(optionLocale)}
                aria-pressed={locale === optionLocale}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
