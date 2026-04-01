# Portfolio

Next.js portfolio site deployed on Vercel.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Vercel (deployment)

## Structure

```
├── app/                  # App router pages
│   ├── about/
│   ├── projects/
│   ├── contact/
│   └── layout.tsx
├── components/
│   ├── sections/        # Page sections (Hero, About, etc.)
│   └── ui/              # Reusable UI components
├── data/                # Static content
├── lib/                 # Utils and helpers
├── public/              # Static assets
└── styles/              # Additional styles
```

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Connected to Vercel. Push to main branch deploys automatically.

## Config

Copy `.env.example` to `.env.local` and fill in values.

## Notes

- Images go in `public/images/`
- Project data in `data/projects.ts`
- Update contact form endpoint in env vars