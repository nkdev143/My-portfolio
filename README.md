# Full Stack & AI Agent Developer Portfolio

A premium, dark-themed, fully responsive developer portfolio built with React.js and Framer Motion. Features a live code-typing terminal animation, typewriter job titles, dark/light mode with persistence, a dedicated AI Agent Developer Experience section, animated project cards, and a working contact form layout.

## Tech Stack

- React.js 18 + Vite
- Framer Motion (animations)
- react-icons (icon set)
- Plain CSS with a token-based theme system (CSS variables, dark/light)

## Getting Started

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Project Structure

```
src/
  components/        # one component per file, paired .css files
  context/            # ThemeContext (dark/light persistence via localStorage)
  data/                # content data: nav links, skills, experience, projects, services
  hooks/               # useTypingEffect, useActiveSection
  styles/              # global.css design tokens
  App.jsx
  main.jsx
public/
  resume.pdf           # replace with your real CV
```

## Customize

- Update personal info, links, and copy in `src/data/*.js` and inside `Hero.jsx` / `About.jsx`.
- Replace the avatar URL in `Hero.jsx` / `About.jsx` with your own photo.
- Drop your real CV at `public/resume.pdf` (the Download CV button links to `/resume.pdf`).
- Wire the contact form in `Contact.jsx` to your backend or a service like Formspree/Resend.
- Theme colors live in `src/styles/global.css` under `:root` and `[data-theme='light']`.

## Notes

- Below-the-fold sections are code-split with `React.lazy` + `Suspense` for performance.
- Respects `prefers-reduced-motion`.
- Scroll-spy active nav link via `IntersectionObserver`.
