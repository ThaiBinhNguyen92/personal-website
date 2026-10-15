# Thai Binh Nguyen – Personal Website

A personal website about who I am, where I've been, and what I'm learning.
Built as a Range Lab intern project.

Live site: YOUR-VERCEL-LINK

## Tech stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Vercel (deployment)
- Coming soon: Supabase, Mapbox, external APIs

## Features
- [x] Home page with name and three sections
- [x] Interactive "About me" list: click a line to reveal details
- [x] Place tooltip: hover (desktop) or tap (mobile) a place name to see facts about it
- [x] Career line with a university tooltip (data-driven: added by editing `about.ts` only)
- [x] Info tooltips: hover (desktop) or tap (mobile) a highlighted word to see facts or an image
- [x] Hobbies line with images (Nintendo Switch, Guitar)
- [ ] Interactive travel map
- [ ] Projects from GitHub

## Project structure
```
src/
  app/          # Routes: pages and layout
  components/   # Reusable UI components (e.g. AboutList)
  content/      # Site content as typed data (e.g. about.ts)
```

## Run locally
```bash
npm install
npm run dev
```
Then open http://localhost:3000

## Environment variables
None yet. When added, see `.env.example` for the required names.
Secret keys are never committed to this repo.

## Learning notes
See AI-LEARNING.md