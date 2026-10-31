// ─── Personal Information ─────────────────────────────────────────────────────
export const PERSONAL = {
  name: 'Amrendra Singh',
  role: 'Software Engineer & AI Researcher',
  tagline: 'B.Tech CSE (AI) · KIET Group of Institutions',
  headline: 'I build software that thinks.',
  subheadline:
    'Undergraduate engineer exploring the intersection of software systems, machine learning, and cloud architecture. I learn by building—and research by asking questions that need code to answer.',
  email: 'singhamrendra1299@gmail.com',
  github: 'https://github.com/Amrendra21',
  linkedin: 'https://linkedin.com/in/amrendra21',
  leetcode: 'https://leetcode.com/_amrendra21',
  location: 'Ghaziabad, Uttar Pradesh, India',
};

// ─── About Text ───────────────────────────────────────────────────────────────
export const ABOUT = {
  paragraphs: [
    "I'm Amrendra Singh, a second-year B.Tech student specialising in Artificial Intelligence at KIET Group of Institutions, affiliated with Dr. A.P.J. Abdul Kalam Technical University. My current CGPA is 9.12/10.",
    "My journey started with programming fundamentals—mastering data structures and algorithms in C++ before expanding into full-stack web development, machine learning, and cloud systems. Today I'm researching graph neural networks and molecular graph analysis alongside building practical software projects.",
    "I identify most as a builder who learns by implementing, debugging, and questioning. Every project is an attempt to understand a complete system—not just the code, but the architecture, data flow, and infrastructure around it.",
  ],
  identity: [
    { label: 'The Builder', desc: 'Converting ideas into functional applications—end to end.' },
    { label: 'The Problem-Solver', desc: 'Strengthening fundamentals through algorithms, debugging, and experimentation.' },
    { label: 'The Researcher', desc: 'Investigating AI and graph-based systems through rigorous technical exploration.' },
  ],
};

// ─── Academic Background ──────────────────────────────────────────────────────
export const ACADEMICS = [
  {
    degree: 'B.Tech — Computer Science & Engineering (AI)',
    institution: 'KIET Group of Institutions, Ghaziabad',
    university: 'Dr. A.P.J. Abdul Kalam Technical University',
    timeline: '2024 – 2028',
    cgpa: '9.12 / 10',
    highlight: true,
  },
  {
    degree: 'Class 12 (PCM)',
    institution: 'Mount Litera Zee School, Unnao',
    score: '92%',
  },
  {
    degree: 'Class 10',
    institution: 'Mount Litera Zee School, Unnao',
    score: '95%',
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export const SKILL_CATEGORIES = [
  {
    title: 'Programming Languages',
    note: 'Ordered by proficiency',
    skills: [
      { name: 'C++', note: 'Primary · DSA & problem-solving' },
      { name: 'C', note: 'Strong fundamentals' },
      { name: 'JavaScript', note: 'Full-stack development' },
      { name: 'Python', note: 'ML, scripting & analysis' },
      { name: 'Java', note: 'OOP concepts' },
      { name: 'SQL', note: 'Data querying' },
    ],
  },
  {
    title: 'Core CS',
    skills: [
      { name: 'Data Structures & Algorithms' },
      { name: 'Object-Oriented Programming' },
      { name: 'Operating Systems' },
      { name: 'Database Management Systems' },
      { name: 'Computer Networks' },
    ],
  },
  {
    title: 'Full-Stack Development',
    skills: [
      { name: 'React.js' },
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'MongoDB' },
      { name: 'MySQL' },
      { name: 'REST APIs' },
      { name: 'FastAPI' },
      { name: 'HTML & CSS' },
      { name: 'Docker' },
    ],
  },
  {
    title: 'Cloud & Data Engineering',
    skills: [
      { name: 'AWS IAM' },
      { name: 'Amazon S3' },
      { name: 'AWS Lambda' },
      { name: 'AWS Glue' },
      { name: 'Amazon Athena' },
      { name: 'Amazon Redshift' },
      { name: 'Amazon Kinesis' },
      { name: 'Cloud Architecture' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'Scikit-learn' },
      { name: 'Graph Neural Networks' },
      { name: 'NLP Research' },
      { name: 'Exploratory Data Analysis' },
      { name: 'Feature Engineering' },
      { name: 'Molecular Graph Analysis' },
      { name: 'RAG Concepts' },
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 'ragify',
    name: 'RAGify',
    subtitle: 'Semantic Vector Engine',
    status: 'Live',
    statusColor: 'live',
    description:
      'A semantic vector-search and Retrieval-Augmented Generation engine combining multiple search algorithms, document processing, and local AI integration.',
    tech: ['Python', 'FastAPI', 'Ollama', 'HNSW', 'React', 'Docker'],
    highlights: [
      'HNSW, KD-Tree & brute-force vector search algorithms',
      'Cosine, Euclidean & Manhattan distance metrics',
      'Document upload, chunking, embedding & retrieval pipeline',
      'RAG pipeline with cited answer generation',
      'Interactive web interface with analytics',
      'Local AI integration via Ollama',
    ],
    github: 'https://github.com/Amrendra21',
    category: 'Systems & AI',
    gradient: 'from-violet-900/30 to-indigo-900/20',
  },
  {
    id: 'greenlink',
    name: 'GreenLink Delhi',
    subtitle: 'Urban Green Corridor Optimizer',
    status: 'Building',
    statusColor: 'building',
    description:
      'An AI-powered urban planning platform that identifies disconnected green spaces and recommends sustainable corridor networks under real budget constraints.',
    tech: ['Python', 'React', 'Geospatial APIs', 'Optimization', 'Node.js'],
    highlights: [
      'Multi-objective geospatial optimization',
      'Budget-constrained corridor planning',
      'Urban heat-priority area detection',
      'Interactive map with comparison charts',
      'Budget slider with dynamic network updates',
      'Feasibility indicator scoring',
    ],
    github: 'https://github.com/Amrendra21',
    category: 'AI & Urban Planning',
    gradient: 'from-emerald-900/30 to-teal-900/20',
  },
  {
    id: 'contextflowgnn',
    name: 'ContextFlowGNN',
    subtitle: 'Published Research · RAIST 2026',
    status: 'Published',
    statusColor: 'research',
    description:
      'A novel Graph Neural Network architecture for dynamic contextual flow analysis in NLP—published at RAIST 2026 through Atlantis Press.',
    tech: ['Graph Neural Networks', 'NLP', 'Python', 'PyTorch', 'Atlantis Press'],
    highlights: [
      'Discourse coherence prediction using dynamic graphs',
      'Multi-granular contextual dependency modelling',
      'Novel GNN architecture for sequential NLP tasks',
      'Automated essay scoring application',
      'Published at RAIST 2026 — Atlantis Highlights in IS',
    ],
    doi: 'https://doi.org/10.2991/978-94-6239-707-1_23',
    github: null,
    category: 'Research · NLP',
    gradient: 'from-amber-900/30 to-orange-900/20',
    isResearch: true,
  },
  {
    id: 'dual-axis-ood',
    name: 'Dual-Axis OOD Detection',
    subtitle: 'Molecular Graphs Research',
    status: 'Research',
    statusColor: 'research',
    description:
      'An ongoing research project proposing a two-axis framework for out-of-distribution detection in molecular graph models—separating structural validity from semantic novelty.',
    tech: ['Graph Neural Networks', 'Python', 'Molecular Graphs', 'PyTorch'],
    highlights: [
      'Axis 1: Validity score — chemically impossible structures',
      'Axis 2: Novelty score — valid but out-of-distribution molecules',
      'Curated benchmark separating both axes',
      'Scaffold distribution analysis & corruption strategies',
      'Independent evaluation audit framework',
    ],
    github: null,
    category: 'Research · Molecular ML',
    gradient: 'from-rose-900/30 to-pink-900/20',
    isResearch: true,
    wip: true,
  },
  {
    id: 'fasal-gyan',
    name: 'Fasal Gyan',
    subtitle: 'AI Smart Agriculture Platform',
    status: 'Building',
    statusColor: 'building',
    description:
      'An AI-powered agricultural advisory platform delivering soil analysis, crop recommendations, and weather-integrated farming guidance to rural communities.',
    tech: ['Python', 'Scikit-learn', 'React', 'Node.js', 'MongoDB'],
    highlights: [
      'Soil properties analysis & crop prediction',
      'Weather-aware farming recommendations',
      'Multi-language advisory support',
    ],
    github: 'https://github.com/Amrendra21',
    category: 'AI & AgriTech',
    gradient: 'from-lime-900/30 to-green-900/20',
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────
export const CERTIFICATIONS = [
  {
    id: 'aws-data-engineer',
    title: 'AWS Certified Data Engineer',
    subtitle: 'Associate',
    exam: 'DEA-C01',
    score: '730 / 1000',
    issued: 'May 9, 2026',
    expires: 'May 9, 2029',
    validation: '9eb6fbffe58f438eab839c60c0f7793c',
    image: '/aws-data-engineer.jpg',
    verifyUrl: 'https://aws.amazon.com/verification',
    color: '#FF9900',
  },
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Certified Cloud Practitioner',
    subtitle: '',
    exam: 'CLF-C02',
    score: '793 / 1000',
    issued: 'December 2, 2025',
    expires: 'December 2, 2028',
    validation: '21b229d0a1c141ad9071c93714dac7cc',
    image: '/aws-cloud-practitioner.jpg',
    verifyUrl: 'https://aws.amazon.com/verification',
    color: '#FF9900',
  },
];

// ─── Research Publications ────────────────────────────────────────────────────
export const RESEARCH = [
  {
    id: 'contextflowgnn-paper',
    title: 'ContextFlowGNN: A Novel Graph Neural Network for Dynamic Contextual Flow Analysis in NLP',
    venue: 'RAIST 2026 — International Conference on Recent Advances in Intelligent and Sustainable Technologies',
    publisher: 'Atlantis Press — Atlantis Highlights in Intelligent Systems',
    location: 'Surat, India',
    date: 'February 19–21, 2026',
    published: 'Available Online June 18, 2026',
    doi: 'https://doi.org/10.2991/978-94-6239-707-1_23',
    doiShort: '10.2991/978-94-6239-707-1_23',
    authors: [
      'Bikki Kumar (Corresponding)',
      'Amrendra Singh',
      'Aditya Kanaujiya',
      'Aanjneya Nayak',
      'Aryan Singh',
      'Aditya Singh Sikarwar',
    ],
    keywords: ['Contextual Flow', 'Discourse Coherence', 'Dynamic Graphs', 'Graph Neural Networks', 'Natural Language Processing'],
    abstract:
      'ContextFlowGNN introduces a novel GNN architecture designed for dynamic contextual flow analysis in natural language. The model captures multi-granular contextual dependencies between text units using dynamic graph construction, enabling applications in discourse coherence prediction and automated essay scoring.',
    proofImage: '/research-publication.png',
  },
];

// ─── Social / Profile Links ───────────────────────────────────────────────────
export const PROFILES = [
  { label: 'GitHub', url: 'https://github.com/Amrendra21', handle: 'Amrendra21' },
  { label: 'LeetCode', url: 'https://leetcode.com/_amrendra21', handle: '_amrendra21' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/amrendra21', handle: 'amrendra21' },
];

// ─── INDEX nav sections (right sidebar — matches ashutoshx7.me exactly) ───────
export const INDEX_SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

