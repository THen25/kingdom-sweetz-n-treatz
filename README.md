# Kingdom Sweetz & Treatz LLC

A faith-inspired custom bakery website for Kingdom Sweetz & Treatz LLC — featuring an online menu, photo gallery, seasonal specials, and order/contact forms.

## About

Kingdom Sweetz & Treatz is a home bakery specializing in custom cakes, cupcakes, cheesecakes, dessert cups, and more. The site allows customers to browse the menu, view past creations in the gallery, check current specials, and place orders directly online.

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero section, our story, and call-to-action |
| `/menu` | Full menu of available items |
| `/gallery` | Photo gallery of past creations |
| `/specials` | Current seasonal specials and promotions |
| `/contact` | Tabbed form for general contact, quote requests, and order placement |

## Tech Stack

- **React 19** with React Router v7
- **Vite 8** — build tool and dev server
- **Netlify** — hosting and form handling (no backend required)
- **Google Calendar API** — real-time date availability check on the order form
- **Vitest** + Testing Library — unit and component tests

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build with `npm run preview`.

## Testing

```bash
npm test               # watch mode
npm run test:run       # single run
npm run test:coverage  # with coverage report
```

## Deployment

The project is configured for **Netlify**. Push to the connected branch and Netlify handles the rest using the included `netlify.toml`.

- All routes fall back to `index.html` (SPA redirect rule is already configured)
- Contact, quote, and order forms use **Netlify Forms** — no external email service needed
- Form submissions appear in the Netlify dashboard under **Forms**

## Forms

The `/contact` page has three tabs:

- **Contact Us** — general inquiries
- **Request a Quote** — event details for a custom pricing quote
- **Place an Order** — full order form with real-time date availability check via Google Calendar

A 50% deposit is required at booking; the remaining balance is due 14 days before the service date.

## Delivery

Delivery is available for a base fee of $10 (up to 5 miles), plus $3 for every additional 5 miles.

## Social

Follow us on [Instagram](https://www.instagram.com/kingdom_sweetz_n_treatz/) for the latest creations.
