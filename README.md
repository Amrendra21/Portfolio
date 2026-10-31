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

```text
Portfolio/
├── public/                  # Static assets, certificates & images
├── src/
│   ├── components/          # Reusable UI components
│   ├── context/             # Theme context and state management
│   ├── data/                # Portfolio content & GitHub contribution data
│   ├── sections/            # Main portfolio sections
│   ├── App.jsx              # Root application component
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
└── vite.config.js           # Vite configuration
```

---

## Connect

- **GitHub:** [Amrendra21](https://github.com/Amrendra21)
- **Portfolio:** [amrendra21.vercel.app](https://amrendra21.vercel.app/)
- **LinkedIn:** [amrendra21](https://linkedin.com/in/amrendra21)
- **LeetCode:** [_amrendra21](https://leetcode.com/_amrendra21)
- **Email:** [singhamrendra1299@gmail.com](mailto:singhamrendra1299@gmail.com)

---

I build software that thinks — driven by curiosity, code, and continuous learning.