// All portfolio content lives here. Replace example links before launch.
export const site = {
  name: 'Zeeshan Mursleen', initials: 'ZM', role: 'AI Developer & Software Engineer',
  location: 'Pakistan',
  headline: 'Building the future with AI & Code.',
  tagline: 'I build thoughtful software, explore artificial intelligence, and turn complex workflows into practical automation.',
  bio: [
    'I’m a BS Artificial Intelligence student at UET Lahore, currently in my third semester. I’m interested in building software that connects strong engineering fundamentals with real-world AI applications.',
    'My projects include a C++ online shopping system and Trend Setters, a Python-based affiliate workflow in development. I also follow cryptocurrency markets and fintech, with an interest in how software and data shape financial products.'
  ],
  portrait: '/zeeshan-portrait.webp',
  email: 'zeeshanmursleen0@gmail.com',
  social: { github: 'https://github.com/zeeshanmursleen0-code', linkedin: 'https://www.linkedin.com/in/zeeshan-mursleen-55994244b/', x: '' },
  availability: 'Open to internships, freelance work, full-time opportunities, and collaborations',
  stats: [{ value: 2, suffix: '+', label: 'Featured projects' }, { value: 3, suffix: 'rd', label: 'University semester' }, { value: 6, suffix: '', label: 'Programming & web languages' }],
  skills: [
    { group: 'Programming', items: ['C', 'C++', 'Python', 'JavaScript'] },
    { group: 'AI & Foundations', items: ['Artificial Intelligence (studying)', 'Data Structures', 'Algorithms', 'Machine Learning (exploring)'] },
    { group: 'Web & Engineering', items: ['HTML', 'CSS', 'Object-Oriented Programming', 'API Integration', 'Python Automation'] },
    { group: 'Interests', items: ['Cryptocurrency Markets', 'Fintech'] }
  ],
  projects: [
    { slug: 'trend-setters', title: 'Trend Setters', category: 'Automation', summary: 'An evolving Python workflow for affiliate product discovery, data preparation, and Pinterest publishing.', details: 'Integrates affiliate product collection and prepares structured product data for downstream publishing. The Pinterest publishing workflow is still in development; this is not presented as a fully deployed service.', stack: ['Python', 'AliExpress API', 'CSV', 'Automation'], github: '', live: '', image: '/projects/trend-setters.svg', featured: true },
    { slug: 'online-shopping-system', title: 'Online Shopping System', category: 'Software', summary: 'A C++ object-oriented shopping application modeling products, customers, carts, and orders.', details: 'Academic software engineering project designed around core object-oriented principles including encapsulation, abstraction, inheritance, and class relationships.', stack: ['C++', 'OOP', 'Software Design'], github: '', live: '', image: '/projects/shopping-system.svg', featured: true }
  ],
  timeline: [
    { period: '2025 — 2029 (expected)', title: 'BS Artificial Intelligence', organization: 'University of Engineering and Technology, Lahore', description: 'Studying programming, data structures, computer systems, and the foundations of artificial intelligence.' },
    { period: 'Project work', title: 'Python Automation & C++ Development', organization: 'Independent and academic projects', description: 'Building practical systems with object-oriented design, data pipelines, and third-party APIs.' }
  ]
};