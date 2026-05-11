import { useEffect, useState } from 'react'
import { defaultLocale, getPortfolioData, supportedLocales } from './data/portfolioData'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { ProjectsSection } from './components/ProjectsSection'
import { JourneySection } from './components/JourneySection'
import { ReflectiveSection } from './components/ReflectiveSection'
import { SkillsSection } from './components/SkillsSection'
import { ContactSection } from './components/ContactSection'

const languageStorageKey = 'portfolio-language'

function getInitialLocale() {
  if (typeof window === 'undefined') {
    return defaultLocale
  }

  const savedLocale = window.localStorage.getItem(languageStorageKey)

  if (savedLocale && supportedLocales.includes(savedLocale)) {
    return savedLocale
  }

  const browserLocale = window.navigator.language.slice(0, 2).toLowerCase()

  if (supportedLocales.includes(browserLocale)) {
    return browserLocale
  }

  return defaultLocale
}

function App() {
  const [locale, setLocale] = useState(getInitialLocale)
  const [isNavCompact, setIsNavCompact] = useState(false)
  const portfolioData = getPortfolioData(locale)

  useEffect(() => {
    window.localStorage.setItem(languageStorageKey, locale)
    document.documentElement.lang = portfolioData.meta.documentLanguage
    document.title = portfolioData.meta.pageTitle
  }, [locale, portfolioData.meta.documentLanguage, portfolioData.meta.pageTitle])

  useEffect(() => {
    const handleScroll = () => {
      setIsNavCompact(window.scrollY > 72)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="page-shell">
      {/* Soft background  */}
      <div className="background-glow background-glow-left" aria-hidden="true" />
      <div className="background-glow background-glow-right" aria-hidden="true" />
      <Navbar
        links={portfolioData.navigation}
        locale={locale}
        onLocaleChange={setLocale}
        ui={portfolioData.ui}
        isCompact={isNavCompact}
      />
      <main className="page-main">
        <Hero hero={portfolioData.hero} ui={portfolioData.ui} />
        <About about={portfolioData.about} />
        <ProjectsSection projects={portfolioData.projects} section={portfolioData.projectsSection} />
        <JourneySection journey={portfolioData.learningJourney} />
        <ReflectiveSection section={portfolioData.growthLearning} />
        <ReflectiveSection section={portfolioData.beyondProjects} />
        <SkillsSection skillGroups={portfolioData.skills} section={portfolioData.skillsSection} />
        <ContactSection contact={portfolioData.contact} />
      </main>
    </div>
  )
}

export default App
