// je range la data du portfolio ici pour le séparer de l'ux
const portfolioContent = {
  en: {
    meta: {
      pageTitle: 'Abdelkader Ait Benamara | Portfolio',
      documentLanguage: 'en',
    },
    navigation: [
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Journey', href: '#journey' },
      { label: 'Growth', href: '#growth-learning' },
      { label: 'Beyond', href: '#beyond-projects' },
      { label: 'Skills', href: '#skills' },
      { label: 'Contact', href: '#contact' },
    ],
    hero: {
      name: 'Abdelkader Ait Benamara',
      title: 'EPITECH Student - Building Reliable & Secure Systems',
      subtitle:
        'I build robust applications, explore security challenges, and continuously improve through hands-on projects.',
      primaryAction: {
        label: 'View Projects',
        href: '#projects',
      },
      secondaryAction: {
        label: 'Contact',
        href: '#contact',
      },
      profileImage: '/profile-placeholder.png',
      stats: [
        { value: '6', label: 'Selected projects' },
        { value: '3', label: 'Core fields explored' },
        { value: '1st', label: 'Year at EPITECH' },
      ],
      portrait: {
        alt: 'Placeholder portrait of Abdelkader Ait Benamara',
        label: 'Student profile',
        text: 'Focused on clean engineering and cybersecurity growth.',
      },
    },
    about: {
      eyebrow: 'About',
      heading: 'Building strong technical foundations with a clear security focus.',
      text: 'I am currently studying at EPITECH and developing a solid technical profile through projects in web development, machine learning, and cybersecurity. I am looking for an internship opportunity where I can contribute, keep learning quickly, and continue moving toward a long-term career in cybersecurity engineering.',
    },
    projectsSection: {
      eyebrow: 'Featured Projects',
      heading: 'Projects that reflect both technical range and steady progression.',
      paragraph:
        'Each project contributed something different: backend structure, security thinking, data work, or model evaluation.',
      cardEyebrow: 'Featured Project',
      learningLabel: 'What I learned',
      highlightsAriaLabel: 'Project highlights',
      viewDetailsLabel: 'View details',
      hideDetailsLabel: 'Hide details',
    },
    projects: [
      {
        title: 'e-todo - Fullstack Task Management API',
        description:
          'Development of a fullstack task management application with an authentication system. Built a REST API using Node.js and Express, with secure authentication using JWT and password hashing. Implemented a MySQL database and Docker environment.',
        highlights: [
          'REST API (Node.js / Express)',
          'JWT authentication',
          'MySQL database',
          'Docker setup',
          'Error handling & debugging',
        ],
        learning:
          'This project helped me understand backend architecture, authentication flows, and how to debug real-world issues in a fullstack environment.',
      },
      {
        title: 'OWASP Juice Shop - Security Challenges & Exploitation',
        description:
          'Solved multiple security challenges on the OWASP Juice Shop platform, focusing on common web vulnerabilities such as injection, broken authentication, and access control.',
        highlights: [
          'Burp Suite (Intercept / Repeater)',
          'Input validation bypass',
          'Authentication flaws exploitation',
          'Directory discovery with ffuf',
          'Data exposure analysis',
        ],
        learning:
          'This project introduced me to real-world security vulnerabilities and offensive security techniques, strengthening my interest in cybersecurity.',
      },
      {
        title: 'TARDIS - Data Analysis & Machine Learning Dashboard',
        description:
          'Worked on a machine learning project involving data preprocessing, model training (Random Forest), and integration into a Streamlit dashboard.',
        highlights: [
          'Data cleaning & preprocessing',
          'Feature engineering',
          'Random Forest model',
          'Streamlit dashboard',
          'Team collaboration',
        ],
        learning:
          'I learned how to build a complete ML pipeline, from raw data to a usable interface.',
      },
      {
        title: 'NextBuy - Product Reorder Prediction',
        description:
          'Developed a machine learning model to predict whether a product will be reordered based on user behavior and historical data.',
        highlights: [
          'Logistic Regression / Random Forest',
          'Feature engineering',
          'Large dataset handling',
          'Model evaluation',
        ],
        learning:
          'This project improved my ability to handle large datasets and evaluate model performance.',
      },
      {
        title: 'FinSight / ELIZA — Finance-Oriented Chatbot',
        description:
          'Development of a finance-oriented chatbot designed to assist users through both Discord and a dedicated web interface. FinSight combines conversational AI, Discord integration, and a complete web platform with login, register, and chat history management to deliver a more professional chatbot experience.',
        highlights: [
          'Discord chatbot integration',
          'Web interface',
          'Login / Register system',
          'Chat history',
          'Fullstack product thinking',
          'AI-oriented project design',
        ],
        learning:
          'This project helped me understand how to design a complete chatbot experience across multiple platforms while thinking about both technical implementation and user experience.',
      },
      {
        title: 'Alice in Wonderland — Intelligent Library Search & NLP System',
        description:
          'Development of a machine learning and NLP system capable of processing a book database to retrieve relevant books, generate personalized search results, and provide summaries. The project connects data processing with a Streamlit front-end, making the library exploration experience simple and interactive.',
        highlights: [
          'Machine learning / NLP pipeline',
          'Book database processing',
          'Personalized search',
          'Text summarization',
          'Streamlit interface',
          'Data exploration',
        ],
        learning:
          'This project helped me better understand how to build an NLP-oriented system, connect data processing to a usable interface, and create a more user-friendly experience through Streamlit.',
      },
    ],
    learningJourney: {
      eyebrow: 'Learning Journey',
      heading: 'A year of fast progression, stronger methods, and growing autonomy.',
      items: [
        'Learning new tools and concepts quickly through project-based practice.',
        'Improving debugging habits by investigating issues methodically and documenting fixes.',
        'Structuring projects more clearly, with better separation of concerns and cleaner code.',
        'Building confidence in backend development, authentication, and API design.',
        'Developing practical data analysis skills and understanding full ML workflows.',
        'Becoming more autonomous, rigorous, and reliable in team and individual work.',
      ],
    },
    growthLearning: {
      id: 'growth-learning',
      eyebrow: 'Growth & Learning',
      heading: 'Growth & Learning',
      paragraphs: [
        'Throughout this year at EPITECH, I significantly improved my ability to learn, adapt, and solve technical problems independently.',
        'At the beginning, I mainly focused on understanding programming fundamentals. As projects became more complex, I learned how to structure my code more clearly, debug issues more efficiently, and work with new technologies in a short amount of time.',
        'One of my biggest improvements was becoming more rigorous in the way I approach projects: breaking problems into smaller parts, testing progressively, and documenting what I build.',
      ],
      quote:
        '“EPITECH helped me move from simply writing code to understanding how to build, debug, and improve complete projects.”',
    },
    beyondProjects: {
      id: 'beyond-projects',
      eyebrow: 'Beyond Projects',
      heading: 'Beyond Projects',
      paragraphs: [
        'Outside school projects, I continued developing my technical profile through personal practice, research, and experimentation.',
        'I explored cybersecurity concepts through web vulnerability challenges, improved my development workflow with Git, Docker, and Linux, and kept building habits that help me work more independently.',
        'These experiences helped me become more confident, curious, and better prepared for real-world technical environments.',
      ],
      quote:
        '“Beyond the projects themselves, this year helped me build autonomy, discipline, and a stronger problem-solving mindset.”',
    },
    skillsSection: {
      eyebrow: 'Skills',
      heading: 'Technical areas I am actively developing through projects and practice.',
    },
    skills: [
      {
        title: 'Web Development',
        items: [
          'JavaScript',
          'React',
          'Node.js',
          'Express',
          'REST APIs',
          'Authentication',
          'MySQL',
        ],
      },
      {
        title: 'Data & Machine Learning',
        items: [
          'Python',
          'Pandas',
          'Scikit-learn',
          'Data preprocessing',
          'Model evaluation',
        ],
      },
      {
        title: 'Cybersecurity',
        items: [
          'OWASP Top 10',
          'Burp Suite',
          'Web vulnerability analysis',
          'Security mindset',
        ],
      },
      {
        title: 'Tools & Workflow',
        items: ['Git / GitHub', 'Docker', 'Linux', 'VS Code', 'Team collaboration'],
      },
    ],
    contact: {
      eyebrow: 'Contact',
      heading: 'Open to internship opportunities and meaningful technical collaboration.',
      text: 'If you are looking for a motivated EPITECH student with strong curiosity, growing technical range, and a clear interest in cybersecurity, I would be glad to connect.',
      email: 'aitbenamaraabdelkader27@gmail.com',
      github: 'https://github.com/aitbenamaraabdelkader27',
      linkedin: 'https://linkedin.com/in/abdelkader-ait-benamara-251b54396',
      cvLink: '/Abdelkader-Ait-Benamara-CV.pdf',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      downloadLabel: 'Download CV',
      form: {
        showFormLabel: 'Write',
        hideFormLabel: 'Close',
        closeLabel: 'Close',
        intro: 'Send a short message and your mail client will prepare the email.',
        nameLabel: 'Name',
        emailLabel: 'Email',
        subjectLabel: 'Subject',
        messageLabel: 'Message',
        sendLabel: 'Send message',
        defaultSubject: 'Portfolio contact',
      },
    },
    ui: {
      navigationLabel: 'Main navigation',
      goToTopLabel: 'Go to top',
      languageSwitcherLabel: 'Choose portfolio language',
      languageOptions: {
        en: 'EN',
        fr: 'FR',
      },
      heroStatsLabel: 'Portfolio highlights',
    },
  },
  fr: {
    meta: {
      pageTitle: 'Abdelkader Ait Benamara | Portfolio',
      documentLanguage: 'fr',
    },
    navigation: [
      { label: 'À propos', href: '#about' },
      { label: 'Projets', href: '#projects' },
      { label: 'Parcours', href: '#journey' },
      { label: 'Progression', href: '#growth-learning' },
      { label: 'Au-delà', href: '#beyond-projects' },
      { label: 'Compétences', href: '#skills' },
      { label: 'Contact', href: '#contact' },
    ],
    hero: {
      name: 'Abdelkader Ait Benamara',
      title: 'Étudiant à EPITECH - Conception de systèmes fiables et sécurisés',
      subtitle:
        "Je conçois des applications solides, j'explore des problématiques de sécurité et je progresse en continu grâce à des projets concrets.",
      primaryAction: {
        label: 'Voir les projets',
        href: '#projects',
      },
      secondaryAction: {
        label: 'Me contacter',
        href: '#contact',
      },
      profileImage: '/profile-placeholder.png',
      stats: [
        { value: '6', label: 'Projets sélectionnés' },
        { value: '3', label: 'Domaines principaux explorés' },
        { value: '1re', label: 'Année à EPITECH' },
      ],
      portrait: {
        alt: "Portrait d'illustration d'Abdelkader Ait Benamara",
        label: 'Profil étudiant',
        text: "Axé sur une ingénierie propre et une progression continue en cybersécurité.",
      },
    },
    about: {
      eyebrow: 'À propos',
      heading: 'Construire des bases techniques solides avec un cap clair vers la sécurité.',
      text: "Je suis actuellement étudiant à EPITECH et je développe un profil technique solide à travers des projets en développement web, machine learning et cybersécurité. Je recherche une opportunité de stage dans laquelle je peux contribuer, apprendre rapidement et continuer à avancer vers une carrière d'ingénieur en cybersécurité.",
    },
    projectsSection: {
      eyebrow: 'Projets phares',
      heading: 'Des projets qui montrent à la fois ma polyvalence technique et ma progression.',
      paragraph:
        'Chaque projet m’a apporté quelque chose de différent : structure backend, logique sécurité, traitement de données ou évaluation de modèles.',
      cardEyebrow: 'Projet phare',
      learningLabel: "Ce que j'ai appris",
      highlightsAriaLabel: 'Points clés du projet',
      viewDetailsLabel: 'Voir les détails',
      hideDetailsLabel: 'Masquer les détails',
    },
    projects: [
      {
        title: 'e-todo - API fullstack de gestion de tâches',
        description:
          "Développement d'une application fullstack de gestion de tâches avec système d'authentification. Conception d'une API REST avec Node.js et Express, avec authentification sécurisée via JWT et hashage des mots de passe. Mise en place d'une base MySQL et d'un environnement Docker.",
        highlights: [
          'API REST (Node.js / Express)',
          'Authentification JWT',
          'Base de données MySQL',
          'Environnement Docker',
          "Gestion d'erreurs et débogage",
        ],
        learning:
          "Ce projet m'a permis de mieux comprendre l'architecture backend, les flux d'authentification et le débogage de problèmes concrets dans un environnement fullstack.",
      },
      {
        title: 'OWASP Juice Shop - Challenges de sécurité et exploitation',
        description:
          "Résolution de plusieurs challenges de sécurité sur la plateforme OWASP Juice Shop, avec un focus sur des vulnérabilités web courantes comme l'injection, les défauts d'authentification et les problèmes de contrôle d'accès.",
        highlights: [
          'Burp Suite (Intercept / Repeater)',
          'Contournement de validation',
          "Exploitation de failles d'authentification",
          'Découverte de répertoires avec ffuf',
          "Analyse d'exposition de données",
        ],
        learning:
          "Ce projet m'a exposé à des vulnérabilités réelles et à des techniques de sécurité offensive, ce qui a renforcé mon intérêt pour la cybersécurité.",
      },
      {
        title: 'TARDIS - Tableau de bord data et machine learning',
        description:
          "Participation à un projet de machine learning couvrant le prétraitement des données, l'entraînement de modèles (Random Forest) et leur intégration dans un tableau de bord Streamlit.",
        highlights: [
          'Nettoyage et prétraitement des données',
          'Feature engineering',
          'Modèle Random Forest',
          'Dashboard Streamlit',
          "Travail d'équipe",
        ],
        learning:
          "J'ai appris à construire une chaîne ML complète, depuis les données brutes jusqu'à une interface exploitable.",
      },
      {
        title: 'NextBuy - Prédiction de réachat produit',
        description:
          "Développement d'un modèle de machine learning pour prédire si un produit sera commandé à nouveau à partir du comportement utilisateur et des données historiques.",
        highlights: [
          'Régression logistique / Random Forest',
          'Feature engineering',
          'Gestion de gros volumes de données',
          'Évaluation de modèles',
        ],
        learning:
          "Ce projet a renforcé ma capacité à traiter de grands jeux de données et à évaluer les performances d'un modèle.",
      },
      {
        title: 'FinSight / ELIZA — Chatbot orienté finance',
        description:
          "Développement d'un chatbot orienté finance conçu pour accompagner les utilisateurs à la fois via Discord et à travers une interface web dédiée. FinSight combine IA conversationnelle, intégration Discord et plateforme web complète avec connexion, inscription et gestion de l'historique de chat pour proposer une expérience plus professionnelle.",
        highlights: [
          'Intégration chatbot Discord',
          'Interface web',
          'Système Login / Register',
          'Historique de chat',
          'Vision produit fullstack',
          'Conception orientée IA',
        ],
        learning:
          "Ce projet m'a aidé à comprendre comment concevoir une expérience chatbot complète sur plusieurs plateformes, tout en prenant en compte l'implémentation technique et l'expérience utilisateur.",
      },
      {
        title: 'Alice in Wonderland — Recherche intelligente de livres et système NLP',
        description:
          "Développement d'un système de machine learning et NLP capable de traiter une base de livres pour retrouver des ouvrages pertinents, générer des résultats de recherche personnalisés et produire des résumés. Le projet relie le traitement des données à une interface Streamlit simple et interactive pour rendre l'exploration de la bibliothèque plus accessible.",
        highlights: [
          'Pipeline machine learning / NLP',
          'Traitement de base de livres',
          'Recherche personnalisée',
          'Résumé automatique',
          'Interface Streamlit',
          'Exploration de données',
        ],
        learning:
          "Ce projet m'a permis de mieux comprendre comment construire un système orienté NLP, connecter le traitement de données à une interface utilisable et créer une expérience plus claire avec Streamlit.",
      },
    ],
    learningJourney: {
      eyebrow: 'Parcours',
      heading: 'Une année de progression rapide, de méthodes plus solides et d’autonomie grandissante.',
      items: [
        'Apprentissage rapide de nouveaux outils et concepts grâce à une pratique orientée projet.',
        'Amélioration de mes habitudes de débogage avec une investigation plus méthodique et une meilleure documentation des correctifs.',
        'Structuration plus claire des projets, avec une meilleure séparation des responsabilités et un code plus propre.',
        "Montée en compétence en backend, en authentification et en conception d'API.",
        'Développement de compétences concrètes en analyse de données et compréhension des workflows ML complets.',
        'Autonomie, rigueur et fiabilité renforcées dans le travail individuel comme en équipe.',
      ],
    },
    growthLearning: {
      id: 'growth-learning',
      eyebrow: 'Progression & apprentissage',
      heading: 'Progression & apprentissage',
      paragraphs: [
        'Au cours de cette année à EPITECH, j’ai nettement renforcé ma capacité à apprendre, à m’adapter et à résoudre des problèmes techniques de manière autonome.',
        'Au début, je me concentrais surtout sur les fondamentaux de la programmation. À mesure que les projets sont devenus plus complexes, j’ai appris à mieux structurer mon code, à déboguer plus efficacement et à prendre en main de nouvelles technologies dans des délais courts.',
        'L’une de mes plus grandes progressions a été de devenir plus rigoureux dans ma manière d’aborder les projets : découper les problèmes, tester progressivement et documenter ce que je construis.',
      ],
      quote:
        '« EPITECH m’a aidé à passer du simple fait d’écrire du code à une vraie compréhension de la manière de construire, corriger et améliorer des projets complets. »',
    },
    beyondProjects: {
      id: 'beyond-projects',
      eyebrow: 'Au-delà des projets',
      heading: 'Au-delà des projets',
      paragraphs: [
        'En dehors des projets scolaires, j’ai continué à développer mon profil technique à travers la pratique personnelle, la recherche et l’expérimentation.',
        'J’ai exploré des concepts de cybersécurité via des challenges de vulnérabilités web, amélioré mon workflow de développement avec Git, Docker et Linux, et consolidé des habitudes qui me rendent plus autonome.',
        'Ces expériences m’ont permis de gagner en confiance, en curiosité et d’être mieux préparé à des environnements techniques concrets.',
      ],
      quote:
        '« Au-delà des projets eux-mêmes, cette année m’a permis de construire davantage d’autonomie, de discipline et un état d’esprit plus solide face à la résolution de problèmes. »',
    },
    skillsSection: {
      eyebrow: 'Compétences',
      heading: 'Les domaines techniques que je développe activement à travers les projets et la pratique.',
    },
    skills: [
      {
        title: 'Développement web',
        items: [
          'JavaScript',
          'React',
          'Node.js',
          'Express',
          'API REST',
          'Authentification',
          'MySQL',
        ],
      },
      {
        title: 'Data et machine learning',
        items: [
          'Python',
          'Pandas',
          'Scikit-learn',
          'Prétraitement des données',
          'Évaluation de modèles',
        ],
      },
      {
        title: 'Cybersécurité',
        items: [
          'OWASP Top 10',
          'Burp Suite',
          'Analyse de vulnérabilités web',
          'Approche sécurité',
        ],
      },
      {
        title: 'Outils et workflow',
        items: ['Git / GitHub', 'Docker', 'Linux', 'VS Code', "Travail d'équipe"],
      },
    ],
    contact: {
      eyebrow: 'Contact',
      heading: 'Ouvert aux opportunités de stage et aux collaborations techniques sérieuses.',
      text: 'Si vous recherchez un étudiant EPITECH motivé, curieux, en progression technique constante et avec un intérêt clair pour la cybersécurité, je serais ravi d’échanger.',
      email: 'aitbenamaraabdelkader27@gmail.com',
      github: 'https://github.com/aitbenamaraabdelkader27',
      linkedin: 'https://linkedin.com/in/abdelkader-ait-benamara-251b54396',
      cvLink: '/Abdelkader-Ait-Benamara-CV.pdf',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      downloadLabel: 'Télécharger le CV',
      form: {
        showFormLabel: 'Écrire',
        hideFormLabel: 'Fermer',
        closeLabel: 'Fermer',
        intro: 'Envoyez un court message et votre client mail préparera l’email.',
        nameLabel: 'Nom',
        emailLabel: 'Email',
        subjectLabel: 'Sujet',
        messageLabel: 'Message',
        sendLabel: 'Envoyer',
        defaultSubject: 'Contact portfolio',
      },
    },
    ui: {
      navigationLabel: 'Navigation principale',
      goToTopLabel: 'Revenir en haut',
      languageSwitcherLabel: 'Choisir la langue du portfolio',
      languageOptions: {
        en: 'EN',
        fr: 'FR',
      },
      heroStatsLabel: 'Points forts du portfolio',
    },
  },
}

export const defaultLocale = 'en'
export const supportedLocales = Object.keys(portfolioContent)

export function getPortfolioData(locale) {
  return portfolioContent[locale] ?? portfolioContent[defaultLocale]
}
