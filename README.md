# Alpha's Resume

<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Falphaolomi%2Fresume.alphaolomi.dev">
  <img src="https://vercel.com/button" alt="Deploy with Vercel" />
</a>

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

Personal, print-friendly CV website for **Alpha Olomi**, built with Next.js, TypeScript, and Tailwind CSS.

- Live site: `https://resume.alphaolomi.dev`
- Repository: `https://github.com/alphaolomi/resume.alphaolomi.dev`

## Quick Start

```bash
git clone https://github.com/alphaolomi/resume.alphaolomi.dev
cd resume.alphaolomi.dev
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Configuration

All resume content is managed in one file:

`src/data/resume-data.ts`

Update your profile details, contact links, work history, education, skills, and projects there.

## Scripts

```bash
pnpm dev          # start development server
pnpm build        # build for production
pnpm start        # start production server
pnpm lint         # run biome linting checks
pnpm lint:fix     # run biome linting with auto-fix
pnpm format       # check code formatting with biome
pnpm format:fix   # format code with biome
pnpm check        # run lint + format checks
pnpm check:fix    # run lint + format auto-fix
```

## Project Structure

```txt
src/
├── app/                # Next.js App Router pages/layout
│   └── components/     # page-level resume sections
├── components/         # shared UI and icon components
├── data/               # resume data source
└── lib/                # types and utilities
```

## Styling

- Tailwind theme/config: `tailwind.config.js`
- Global styles: `src/app/globals.css`

## Docker

```bash
docker compose build
docker compose up -d
docker compose down
```

## License

MIT

## Credits

- Original template and inspiration: [BartoszJarocki/cv](https://github.com/BartoszJarocki/cv.git)
