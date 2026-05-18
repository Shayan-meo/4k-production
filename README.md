# 4K Production — Luxury Wedding Film Studio

Editorial-grade single-page website for a premium cinematic wedding-film brand. Built with Next.js 14 (App Router), TypeScript (strict), and Tailwind CSS.

## Stack

- Next.js 14 (App Router)
- React 18 + TypeScript (strict)
- Tailwind CSS 3
- Zero runtime UI deps — custom lightbox, custom menu

## Run

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Structure

```
src/
  app/        layout.tsx · page.tsx · globals.css
  components/ Navbar · Hero · Services · Portfolio · Footer
  constants/  centralized content registry (index.ts)
  lib/        (reserved)
public/
  brand/ images/ videos/
```

## Design tokens

| Purpose            | Color     |
| ------------------ | --------- |
| Primary background | `#FFFFFF` |
| Secondary section  | `#F9F9F9` |
| Typography         | `#111111` |
| Luxury accent      | `#D4AF37` |

Headings: Playfair Display · Body: Inter
