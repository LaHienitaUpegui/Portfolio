<div align="center">

<img src="./public/favicon.svg" alt="Portfolio" height="64" />

# Juan Diego Moreno - Portfolio

A personal portfolio website built with Astro, React, and GSAP animations.

[Overview](#overview) • [Tech Stack](#tech-stack) • [Project Structure](#project-structure) • [Getting Started](#getting-started) • [Features](#features)

</div>

## Overview

A modern, interactive portfolio showcasing my work, experience, and skills as a developer. The project features smooth GSAP animations, a unique counter-based navigation system, and a dark purple theme with vibrant green accents.

## Tech Stack

- **Framework**: [Astro 5.17](https://astro.build) - Static site generator with islands architecture
- **UI Library**: [React 19](https://react.dev) - Component-based UI
- **Animations**: [GSAP 3.14](https://gsap.com) - High-performance animations
- **Styling**: CSS with custom properties (CSS variables)
- **Fonts**: Inter, Fira Code, Neue Comic

## Project Structure

```
src/
├── components/           # React components
│   ├── AboutMe.tsx       # About section
│   ├── Carousel.tsx      # Image carousel
│   ├── ExperienceCard.tsx
│   ├── MainContentComponent.tsx  # Main navigation & content
│   ├── MyExperience.tsx  # Work experience
│   ├── MyImageComponent.tsx
│   ├── MoreComingSoon.tsx
│   ├── ProjectCard.tsx   # Project display
│   └── Projects.tsx      # Projects section
├── layouts/
│   └── Layout.astro      # Base layout with header/footer
├── pages/
│   ├── index.astro       # Landing page
│   ├── portfolio-content.astro  # Main content
│   └── projects/[id].astro      # Dynamic project pages
├── styles/
│   ├── global.css        # Global styles & CSS variables
│   └── *.css             # Component-specific styles
└── utils/
    └── index.ts
public/
├── fonts/                # Custom fonts
└── imgs/                 # Images & assets
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Features

- **Interactive Landing Page**: Counter-based button with GSAP drawSVG animations and hover effects
- **Counter Navigation**: Unique "click +1" navigation system to browse content sections
- **Smooth Transitions**: View transitions between pages using Astro's ClientRouter
- **Responsive Design**: Mobile-first approach with fluid typography
- **Custom Design System**: CSS variables for consistent theming (dark purple `#211f22`, green `#c9d83f`)
- **GSAP Animations**: Page transitions, hover effects, and entrance animations

## Pages

| Route                | Description                                      |
| -------------------- | ------------------------------------------------ |
| `/`                  | Landing page with interactive button             |
| `/portfolio-content` | Main content with About Me, Experience, Projects |
| `/projects/[id]`     | Individual project details                       |

> [!TIP]
> Start at the landing page and click the button to enter the portfolio. Use the "+1" button to navigate between sections.

## Custom Fonts

The project uses three custom fonts:

- **Inter** - Primary sans-serif for body text
- **Fira Code** - Monospace font for code snippets
- **Neue Comic** - Decorative font for playful accents
