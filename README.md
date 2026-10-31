# Amrendra Singh — Portfolio

A minimal, blueprint-inspired personal portfolio website built with React 19, Vite, and Tailwind CSS v4. The portfolio showcases full-stack applications, machine learning research, AWS cloud certifications, real-time GitHub activity, and technical achievements with a seamless dark and light mode experience.

---

## Tech Stack

- **Framework:** [Vite](https://vite.dev/)
- **Library:** [React 19](https://react.dev/)
- **Language:** [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/), [Lucide React](https://lucide.dev/)
- **Form Service:** [Web3Forms](https://web3forms.com/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## Features

- **Blueprint Grid Layout:** Fine dotted horizontal and vertical guidelines with intersection micro-nodes and responsive centered column constraints.
- **Theme Switcher:** Seamless dark and light mode toggle supporting native browser View Transitions and persistent local storage.
- **Index Navigation:** Fixed right-side table of contents with intersection observer tracking for active section highlighting and smooth scrolling.
- **Live GitHub Heatmap:** Dynamic contribution graph tracking public activity for `@Amrendra21` with hover tooltips and zero-latency cached fallback data.
- **Project Showcase:** Interactive multi-column cards displaying project highlights, status badges, tech stacks, and live/source links.
- **Research Publications:** Academic paper presentation including conference venue details, DOI link, and an interactive lightbox for publication verification.
- **Certifications Showcase:** AWS credential display featuring verification IDs, scores, and high-resolution zoomable certificate modals.
- **Contact Integration:** Working contact form connected to Web3Forms with real-time client-side validation, loading states, and submission feedback.
- **Scroll Progress:** Minimal top-mounted reading progress bar tracking viewport scroll depth.
- **Fully Responsive:** Fluid layout optimized across mobile, tablet, and desktop viewports.

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and npm installed on your machine.

```bash
node -v
npm -v
```

### Install Dependencies

Clone the repository and install the project dependencies:

```bash
git clone https://github.com/Amrendra21/Portfolio.git
cd Portfolio
npm install
```

### Run Development Server

Start the local Vite development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000` (or the next available port).

### Build for Production

Generate an optimized production build:

```bash
npm run build
```

Compiled assets will be output to the `dist/` directory.

### Start Production Server

Preview the production build locally:

```bash
npm run preview
```

### Lint

Check code syntax and format consistency across source files:

```bash
npx eslint .
```

---

## Project Structure

```bash
Portfolio/
├── public/                         # Static assets served directly
│   ├── avatar.png                  # Profile photograph
│   ├── aws-cloud-practitioner.jpg  # AWS certification credential asset
│   ├── aws-data-engineer.jpg       # AWS certification credential asset
│   ├── banner-dark.jpg             # Header banner for dark mode
│   ├── banner-light.jpg            # Header banner for light mode
│   ├── favicon.png                 # Browser tab favicon
│   └── research-publication.png    # Conference publication proof
├── src/
│   ├── components/                 # Reusable UI elements
│   │   ├── DottedLine.jsx          # Blueprint dotted lines and node markers
│   │   ├── GithubGraph.jsx         # Live GitHub contribution calendar
│   │   ├── IndexSidebar.jsx        # Right-docked section navigation
│   │   ├── Lightbox.jsx            # Modal viewer for certificates and proofs
│   │   ├── ProgressBar.jsx         # Top scroll progress indicator
│   │   ├── SectionWrapper.jsx      # Section container with blueprint borders
│   │   └── ThemeToggle.jsx         # Dark/light theme toggle button
│   ├── context/
│   │   └── ThemeContext.jsx        # Theme state provider and persistence
│   ├── data/
│   │   ├── github-contributions.json # Cached GitHub activity dataset
│   │   └── portfolio.js            # Structured data for projects, skills, education
│   ├── sections/                   # Main page layout sections
│   │   ├── CertificationsSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── EducationSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ResearchSection.jsx
│   │   └── SkillsSection.jsx
│   ├── App.jsx                     # Root application layout and composition
│   ├── index.css                   # Global styles and Tailwind v4 configuration
│   └── main.jsx                    # Application entry point
├── .gitignore                      # Git ignored files and directories
├── index.html                      # HTML document template
├── package.json                    # Project metadata and dependencies
└── vite.config.js                  # Vite configuration and plugins
```

---

## Deployment

The portfolio is deployed on [Vercel](https://vercel.com/) with automatic continuous deployment on push to the `main` branch.

To deploy your own fork:

1. Import the repository into your [Vercel Dashboard](https://vercel.com/new).
2. Set the framework preset to **Vite**.
3. Keep the default build command (`npm run build`) and output directory (`dist`).
4. Click **Deploy**.

---

## Connect

- **GitHub:** [Amrendra21](https://github.com/Amrendra21)
- **Portfolio:** [amrendra21.vercel.app](https://amrendra21.vercel.app/)
- **LinkedIn:** [amrendra21](https://linkedin.com/in/amrendra21)
- **LeetCode:** [_amrendra21](https://leetcode.com/_amrendra21)
- **Email:** [singhamrendra1299@gmail.com](mailto:singhamrendra1299@gmail.com)

---

I build software that thinks — driven by curiosity, code, and continuous learning.
