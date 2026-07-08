# Rivicon Medpack Solutions — Website Setup

## Prerequisites

Install Node.js (v18+) from https://nodejs.org/en/download

## Quick Start

```bash
cd rivicon-website
npm install
npm run dev
```

Open http://localhost:3000

## Adding Product Images

Place your product images at:
- `public/images/swab-product.jpg`   → Swab R / Alcohol Prep Pad
- `public/images/lancet-product.jpg` → Riviprick / Blood Lancet

Then uncomment the `<Image>` component in `app/products/page.tsx` and `components/home/ProductsTeaser.tsx`.

## Adding the Logo Image

Place your logo at `public/images/logo.png` (transparent background preferred).
Then replace the inline SVG in `components/ui/Navbar.tsx` with:
```tsx
import Image from "next/image";
<Image src="/images/logo.png" alt="Rivicon Medpack Solutions" width={160} height={40} priority />
```

## Updating Placeholders

Edit `lib/company.ts` to update:
- `tagline` — once finalised
- `drugLicense` — once available
- `cin` / `msme` — once registered

## Form Submission

The enquiry form in `components/contact/EnquiryForm.tsx` currently simulates a submission.
To make it live, replace the `await new Promise(...)` line with one of:
- **Formspree** (free): `fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: data })`
- **EmailJS**: install `@emailjs/browser` and call `emailjs.sendForm(...)`
- **Next.js API route**: create `app/api/enquiry/route.ts` and send via Nodemailer / SendGrid

## Deployment to GoDaddy / Vercel

For **Vercel** (recommended):
1. Push code to GitHub
2. Connect repo at vercel.com
3. Set your GoDaddy domain in Vercel → Domains

For **GoDaddy hosting** (cPanel/Node):
```bash
npm run build
```
Upload the `.next` folder and configure Node app in cPanel.

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS with custom Rivicon brand tokens
- Framer Motion (scroll animations, hero float, count-up)
- next-themes (dark / light mode)
- lucide-react (icons)
