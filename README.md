# WASSCE Prep Hub

WASSCE Prep Hub is a mobile-friendly educational web app for students practising selected WASSCE subjects. It includes timed and untimed quizzes, instant explanations, saved scores, study tips, and public information pages.

The project is built with:

- React
- TypeScript
- TanStack Start
- Tailwind CSS
- TanStack Router

## Features

- Core Mathematics, Integrated Science, English Language and Social Studies quizzes
- Timed and practice modes
- Immediate answer feedback and explanations
- Score review and missed-question review
- Light and dark themes
- Local, on-device saving of theme preferences and high scores
- Study strategy articles
- About, privacy and contact pages

## Prerequisites

- Node.js 18 or newer
- npm

## Development

Install dependencies:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

## Validation

Run the available checks before committing:

```sh
npm test
npm run lint
npm run build
```

## Deployment

The app can be deployed as a static or server-compatible build on Netlify or another HTTPS hosting provider. Follow the provider's build and publish settings for the current application configuration.

Before submitting the domain for monetisation:

1. Add and verify a custom domain you control.
2. Replace the `public/ads.txt` placeholder only with the exact `ads.txt` entry supplied by the advertising account.
3. Replace `YOUR-CUSTOM-DOMAIN.example` in `public/robots.txt` and `public/sitemap.xml` with the real domain.
4. Submit the domain and sitemap to Google Search Console.
5. Review and, where necessary, update the privacy, about and contact pages.

## Advertising and privacy

Advertising approval, cookie behaviour and content requirements depend on the services enabled and the policies of the relevant provider and jurisdiction. This project does not guarantee advertising approval, traffic or earnings.

## Educational notice

WASSCE Prep Hub is an independent study resource. It is not affiliated with or endorsed by WAEC. Quiz questions are study aids and may not be official examination questions. Always use current official syllabuses and approved study materials for final preparation.
