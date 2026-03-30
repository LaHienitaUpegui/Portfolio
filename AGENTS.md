# Portfolio Project

An Astro-based personal portfolio website with React components and GSAP animations.

## Tech Stack

- **Framework**: Astro 5.17.1
- **UI**: React 19.2.4
- **Animations**: GSAP 3.14.2
- **Styling**: CSS with CSS variables

---

## Commands

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run astro`   | Run Astro CLI            |

This project does not have a test suite or linter configured.

---

## Project Structure

```
src/
├── pages/          # Astro pages (index, portfolio-content, test)
├── components/     # React components
├── layouts/        # Astro layouts
├── styles/         # CSS files
├── assets/         # Images and SVGs
public/
└── fonts/          # Font files
```

---

## Code Style Guidelines

### General Conventions

- **Indentation**: 4 spaces (no tabs)
- **Line endings**: LF (Unix-style)
- **Trailing commas**: Where appropriate for readability
- **Maximum line length**: 100 characters (soft limit)

### TypeScript

- Use strict TypeScript mode (`extends: astro/tsconfigs/strict`)
- Prefer `interface` over `type` for props and object shapes
- Name component props interfaces with `Props` suffix (e.g., `ProjectCardProps`)
- Use explicit return types for complex functions
- Enable `jsx: react-jsx` and `jsxImportSource: react`

### React Components

- Use functional components exclusively
- Name components in PascalCase (e.g., `ProjectCard`, `AboutMe`)
- Use default exports for components
- Always import React hooks from `react`
- Use `useGSAP` hook from `@gsap/react` for GSAP animations (wrap with `gsap.registerPlugin(useGSAP)`)

**Example component structure:**

```tsx
import "../styles/component.css";
import OtherComponent from "./OtherComponent";

interface ComponentProps {
    title: string;
    description?: string;
    items: string[];
}

function Component({ title, description = "", items }: ComponentProps) {
    return (
        <div className="component-container">
            <h2>{title}</h2>
            {description && <p>{description}</p>}
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Component;
```

### Astro Files

- Use the organized frontmatter structure:

```astro
---
// imports
import Layout from "../layouts/Layout.astro";

// types

// props

// logic, variables, functions, etc.
---
```

- Use `<script>` tags for client-side JavaScript
- Use `<style>` blocks for component-scoped CSS
- Use `ClientRouter` for view transitions

### CSS and Styling

- Use CSS custom properties (variables) from `global.css`
- Follow BEM-like naming with dashes: `.component-name`, `.component-name__element`
- Use nesting sparingly (Astro `<style>` supports nesting)
- Define variables in `global.css` following the pattern: `--category-property-name`

**Common variables:**

```css
--gap-8px, --gap-16px, --gap-24px, --gap-48px
--padding-0px, --padding-8px, --padding-16px, --padding-24px, --padding-64px
--radius-4px, --radius-8px
--fs-desktop-p-16px, --fs-desktop-h5-24px
--dark-purple, --white, --main-text-color, --intense-green
```

### Imports Order

1. CSS imports (e.g., `import "../styles/projects.css"`)
2. External library imports (e.g., `import gsap from "gsap"`)
3. React imports (e.g., `import { useState } from "react"`)
4. Component imports from same project

### Naming Conventions

| Type                  | Convention                | Example                                   |
| --------------------- | ------------------------- | ----------------------------------------- |
| Components            | PascalCase                | `ProjectCard`, `AboutMe`                  |
| Functions             | camelCase                 | `orderTechsByLength`                      |
| Variables             | camelCase                 | `counter`, `contentComponentsContainers`  |
| Props interfaces      | PascalCase + Props suffix | `ProjectCardProps`                        |
| CSS classes           | kebab-case                | `.project-card`, `.title-and-description` |
| CSS custom properties | kebab-case                | `--main-text-color`                       |
| Files (components)    | PascalCase.tsx            | `ProjectCard.tsx`                         |
| Files (utilities)     | camelCase.ts              | `utils.ts`                                |

### GSAP Animations

- Register plugins at component level or top of file
- Use `useGSAP` hook for React components
- Use `gsap.registerPlugin(useGSAP)` pattern
- Include `revertOnUpdate: true` in options when dependencies change
- Use descriptive easing: `"power2.out"`, `"back.out(1.7)"`, `"steps(1)"`

**Example GSAP usage in React:**

```tsx
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function MyComponent() {
    useGSAP(
        () => {
            gsap.from(".element", {
                opacity: 0,
                duration: 1,
                ease: "power2.out",
            });
        },
        { dependencies: [counter], revertOnUpdate: true },
    );
}
```

### Accessibility

- Always add `rel="noopener noreferrer"` to external links
- Use semantic HTML elements (`<section>`, `<header>`, `<main>`, `<footer>`)
- Include `alt` attributes for images (or empty string for decorative images)

### Error Handling

- Use optional chaining (`?.`) when accessing potentially null properties
- Provide default values for optional props
- Use null checks before accessing DOM elements in scripts

---

## Key Files

- `src/pages/index.astro` - Landing page with interactive button
- `src/pages/portfolio-content.astro` - Main portfolio content
- `src/layouts/Layout.astro` - Base layout with header/footer
- `src/components/MainContentComponent.tsx` - Main content with navigation
- `src/styles/global.css` - Global styles and CSS variables
