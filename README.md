# Rashwin Industries — Industrial Computing & Networking

Modern, high-performance web platform for Rashwin Industries, built with **React**, **TanStack Start**, **Vite**, and **Tailwind CSS**.

## Features
- **Modern UI/UX**: Clean layout using vanilla CSS, modern typography (Inter/Outfit), micro-animations, and full responsive design.
- **Product Catalog**: Multi-level products structure with custom pages for specialized lineups (Edge Computing, Touch Panel PCs).
- **Fast Performance**: Static assets served via CDN and dynamic paths handled through SSR.

## Tech Stack
- **Framework**: TanStack Start (React)
- **Styling**: Tailwind CSS
- **Bundler**: Vite
- **Server Runtime**: Node.js Serverless Functions (configured for Vercel)

## Development

Install dependencies:
```bash
npm install
```

Start dev server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Vercel Deployment

This project is configured for deployment on Vercel.

1. Import this repository in Vercel.
2. In the **Build & Development Settings**:
   - Set **Build Command** to `npm run build`.
   - Set **Output Directory** to `dist/client`.
3. Deploy!
