# Real Estate — Property Management Dashboard

> A sleek, fast, and modern Next.js admin dashboard for managing properties, leases, tenants, payments, maintenance, and reports. Built with performance and developer experience in mind — perfect for demos, team show-and-tells, and shipping a production admin panel.

## Why this project rocks

- Clean, component-driven UI using Radix + Tailwind + reusable primitives
- Built on Next.js (app router) and React 19 for modern performance
- Includes pages for properties, tenants, leases, payments, maintenance, notifications, reports, and settings
- Production-ready build + fast dev iteration loop

## Features

- Dashboard and charts for quick insights
- CRUD flows for properties, tenants, and leases
- Payments and reporting views
- Role-aware UI scaffolding (users & settings)
- Responsive design with a polished sidebar and components
- Form validation with React Hook Form + Zod

## Tech stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Radix UI primitives
- Recharts for charts
- React Hook Form + Zod for forms/validation

## Project structure (high level)

```
src/
- app/                # Next.js app routes and pages (app router)
  - leases/
  - maintenance/
  - notification/
  - payments/
  - properties/
  - reports/
  - settings/
  - tenants/
  - users/
- components/         # shared UI components and custom primitives
- hooks/              # small custom hooks (e.g. use-mobile)
- lib/                # utilities
```

## Quick start

Requirements: Node.js 18+ (recommended), npm (or yarn/pnpm)

Install and run locally:

```bash
# install dependencies
npm install

# run development server
npm run dev

# build for production
npm run build

# start the production server
npm start

# run linter
npm run lint
```

These scripts map to the commands in the project's `package.json`:

- `dev` — starts Next.js in development mode
- `build` — builds the app for production
- `start` — runs the production server
- `lint` — runs ESLint

## Recommended editor setup

- VS Code
- Extensions: ESLint, Tailwind CSS IntelliSense, Prettier
- Use the workspace TypeScript version (TypeScript 5+)

## Tips for demos (impress your friends)

- Showcase the responsive sidebar and chart page (Reports) for a quick visual win
- Walk through a CRUD flow: create a property → add a lease → create a tenant → simulate a payment
- Enable dark mode (if theme switch exists) to show theme polish

## Contributing

> Want to contribute? Amazing — we love help. Keep changes small and focused. Open a PR with a descriptive title and link to any issue.

- Create an issue for larger features or breaking changes
- Follow the code style (run the linter before opening a PR)

## Deployment

This app is optimized for platforms that support Next.js (Vercel, Netlify, Cloudflare Pages, or your own Node server). For Vercel, simply connect the repository and set the framework to Next.js — Vercel will detect the build and start commands automatically.

## Screenshots / Showcase

Add screenshots or a short demo GIF here to make the README pop. Example suggestions:

- `public/screenshots/dashboard.png`
- `public/screenshots/properties-list.png`
- `public/screenshots/reports-chart.png`

Drop images into `public/` and reference them with Markdown for a beautiful README.

## License

This project doesn't include a license file yet — add one if you plan to open-source it. A good default is the MIT license.

## Contact & Credits

Maintainer: Your Name — put your email or social link here (optional).

Made with ❤️ and an unhealthy obsession for clean UIs.

---

If you want, I can also:

- Add example screenshots to `public/screenshots/` and wire them into this README
- Add a `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, or a `LICENSE` file
- Generate a nice GitHub Actions workflow for CI (lint + build)

Tell me which of the extras you'd like and I’ll add them.
