# 🐾 De Vuelta a Casa

> Reunite with your furry companion as soon as possible.

**De Vuelta a Casa** (VC) is a web application designed to help people
report, search for, and reunite with lost pets in their area. It was born from a
simple idea: when a pet goes missing, every minute and every neighbor counts — so the
tool must be **free, immediate, and community-driven**.

## Principles

The application is built on four ideas that guide every screen and every decision:

- **Free for those who need it.** Reporting and searching for pets costs nothing.
  The project is sustained in part by revenue from the *Pet Store*, not by charging
  the people who are searching for their companion.
- **Community-driven.** A real-time interactive map turns every neighbor into
  part of the search network. A pet found by one person can be
  recognized by another.
- **Immediate and simple.** Reporting is a click on the map at the spot where the
  pet was last seen; searching is filtering by name or description.
- **Warm and welcoming.** A warm tone, an approachable visual identity ("home"
  orange palette, Poppins typography) to accompany a moment that is often
  stressful.

## Features

| Section | Description |
| --- | --- |
| **Home** (`/`) | Welcome page with the value proposition, success stories, and frequently asked questions. |
| **Pet Map** (`/mapa`) | Interactive Google Maps map to **report** a pet (right-click on the location) or **search** by name/description, with geolocation and detail modals. |
| **Pet Store** (`/store`) | A shop of pet products and accessories with a cart; part of the revenue sustains the project. |

## Technologies

- [Next.js 16](https://nextjs.org) (App Router) + [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) with a custom brand palette
- [Poppins](https://fonts.google.com/specimen/Poppins) font via `next/font`
- Google Maps JavaScript API (map, markers, and geolocation)

> The map and the store reuse legacy JavaScript scripts (`public/Scripts/`)
> integrated via `next/script`, so those pages use full-reload navigation
> (`<a>`) to keep their scripts isolated.

## Getting Started

The application code lives in [`next-app/`](./next-app).

```bash
cd next-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

```bash
npm run dev     # development server
npm run build   # production build
npm run start   # serve the production build
npm run lint    # linter (ESLint)
```

## Structure

```
next-app/
├── src/
│   ├── app/
│   │   ├── page.tsx        # Home (landing)
│   │   ├── mapa/page.tsx   # Lost pets map
│   │   ├── store/page.tsx  # Pet Store
│   │   ├── layout.tsx      # Root layout (metadata, font)
│   │   └── globals.css     # Global styles and brand palette
│   └── components/
│       ├── SiteNav.tsx     # Navigation
│       └── SiteFooter.tsx  # Footer
└── public/
    ├── images/ · img/      # Images and products
    └── Scripts/            # Map and store scripts
```

## Configuration

The map page requires a **Google Maps JavaScript API** key. It is currently
defined in `src/app/mapa/page.tsx`; before deploying to production it should
be moved to an environment variable and the key restricted by domain.

---

Made with love to help every good boy and girl find their way back home. 🐶🏡
