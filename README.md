# KKN Tematik Literasi UNS — Kelompok 321

Official website of the **KKN Tematik Literasi** (Thematic Community Service Literacy) project, Group 321, Universitas Sebelas Maret (UNS), carried out in collaboration with the Bentakan Village Government, Baki Subdistrict, Sukoharjo Regency, Central Java, Indonesia.

The website documents the team's literacy program journey, activities, and outcomes, and serves as a digital portfolio for the team and a reference for fellow students and the general public.

## Overview

### Problem
Reading culture in Indonesia remains low. Indonesia performed below average in the Programme for International Student Assessment (PISA), with reading scores dropping from 371 (2018) to 359 (2022). At the village level, access to quality reading materials is often limited, and children's reading and writing skills need consistent encouragement.

### Purpose
The KKN Tematik Literasi initiative aims to:

- Optimize the use of quality book collections at the Village Library.
- Increase the capacity of village libraries and community reading gardens (TBM).
- Strengthen sustainable partnerships among students, the village government, and library managers.
- Overcome geographic barriers and accessibility challenges for village children.
- Improve community literacy, especially among children, through enjoyable and sustainable activities.

### Target Users
- Students of Universitas Sebelas Maret (KKN Group 321 participants)
- Residents of Bentakan Village, especially school-age children
- Village library and TBM managers
- Fellow students and the public interested in village literacy programs

## Features
- **Home page** — Hero section, program background, objectives, team introduction, and an activity glorification grid.
- **Program Background (Latar Belakang)** — Context based on PISA data and actual village conditions.
- **Program Objectives (Tujuan Program)** — Five objective pillars presented interactively.
- **Our Team (Tim Kami)** — Field supervisor and member profiles presented with a Swiper carousel, flip-card profile images, and a typewriter animation for names and roles.
- **Activity Glorification (Glorifikasi Kegiatan)** — 13 documented activities loaded from static JSON, displayed as cards with hover effects and links to detail pages.
- **Activity Detail Page** — Dynamic route `/glorifikasi/[slug]` showing the description, activity information, a documentation photo gallery with previous/next navigation, and related activities.
- **Press Release (Berita)** — Activity report page with sharing via WhatsApp, X (Twitter), and Facebook, plus a copy-link feature with a toast notification.
- **Scroll Animations** — AOS (Animate On Scroll) for smooth entrance animations.
- **Responsive Design** — Built with Bootstrap 5 and Next.js `<Image>` for adaptive display across devices.
- **SEO Metadata** — Next.js metadata (title, description, favicon).

This is a frontend-only application. It does not provide a backend API, database, or authentication. All content is served as static assets and a local JSON file.

## Tech Stack
- [Next.js](https://nextjs.org/) 15.3.8 — React framework (App Router)
- [React](https://react.dev/) 18.3.1 — UI library
- [TypeScript](https://www.typescriptlang.org/) 5 — Static type checking
- [Bootstrap](https://getbootstrap.com/) 5.3.7 — UI components and responsive grid
- [AOS](https://michalsnik.github.io/aos/) 2.3.4 — Animate On Scroll
- [Swiper](https://swiperjs.com/) 11.2.10 — Touch slider for the team carousel
- [react-parallax-tilt](https://www.npmjs.com/package/react-parallax-tilt) 1.7.300 — Tilt hover effect
- [react-simple-typewriter](https://www.npmjs.com/package/react-simple-typewriter) 5.0.1 — Typewriter animation
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) — Nunito (Google Fonts)
- [Bootstrap Icons](https://icons.getbootstrap.com/) — Iconography (loaded via CDN)

Package manager: npm

## Project Structure
```
kkn/
├── public/                    # Static assets (images, logos)
│   ├── anggota/               # Team member photos
│   ├── static/                # Logos, hero images, background
│   └── <activity folders>/    # Activity documentation photos
├── src/
│   └── app/
│       ├── layout.tsx         # Root layout, metadata, fonts, AOS provider
│       ├── page.tsx           # Home page
│       ├── globals.css        # Custom styles
│       ├── glorifikasiProker.json   # Static activity data (13 activities)
│       ├── berita/
│       │   └── page.tsx       # Press release page
│       ├── glorifikasi/
│       │   └── [slug]/
│       │       └── page.tsx   # Activity detail page (dynamic route)
│       └── components/
│           ├── Navbar.tsx
│           ├── Footer.tsx
│           ├── Tim.tsx
│           ├── Tujuan.tsx
│           ├── LatarBelakang.tsx
│           ├── AOSProvider.tsx
│           └── DocumentationGallery.tsx
├── .env.example               # Environment variable template (none required)
├── .gitignore                 # Git ignore rules
├── eslint.config.mjs          # ESLint configuration
├── next.config.ts             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

### Install
```bash
# Clone the repository
git clone https://github.com/AdidyaAbimanyu/kkn.git
cd kkn

# Install dependencies
npm install
```

### Environment Variables
This project does not require any environment variables for local development. See `.env.example` for the available template (currently commented out, intended for future use). No API keys, passwords, tokens, or secrets are needed.

## Usage
```bash
# Start the development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start the production server
npm start

# Run ESLint
npm run lint

# Run TypeScript type checking
npx tsc --noEmit
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Testing
This repository does not currently include automated tests (for example, Jest or React Testing Library). The project is verified manually during development.

Available checks:
- Linting: `npm run lint`
- Type checking: `npx tsc --noEmit`

## Future Improvements
The following improvements are proposed and are **not yet implemented**:

- Replace static JSON content with a headless CMS or backend API for dynamic content management.
- Add unit and integration tests (Jest + React Testing Library).
- Add internationalization (English / Indonesian).
- Add authentication for administrative content updates.
- Add web analytics (for example, Google Analytics or Plausible).
- Add a dark mode toggle.
- Add Progressive Web App (PWA) support.

## Author
KKN Tematik Literasi Kelompok 321  
Universitas Sebelas Maret (UNS)  
Desa Bentakan, Kecamatan Baki, Kabupaten Sukoharjo

Repository: https://github.com/AdidyaAbimanyu/kkn