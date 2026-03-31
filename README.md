# Mala Constructions — Production Website

Premium Next.js 15 website for Mala Constructions, Chennai.  
Built with a luxury dark editorial aesthetic — Cormorant Garamond + DM Sans, gold accents, grain overlay, Framer Motion animations.

---

## Tech Stack

| Layer | Library |
|-------|---------|
| Framework | Next.js 15 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Animation | Framer Motion 11 |
| Forms | react-hook-form + zod |
| Gallery | yet-another-react-lightbox |
| Icons | Lucide React |
| Email | Nodemailer (SMTP) |
| Images | next/image (Picsum placeholders — swap for real photos) |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

```bash
cp .env.example .env.local
# Edit .env.local with your Gmail App Password
```

**Gmail App Password setup:**  
Google Account → Security → 2-Step Verification → App Passwords → Create one for "Mail"

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production

```bash
npm run build
npm start
```

---

## Replacing Placeholder Images

All images currently use `picsum.photos` seeds. Replace with real photos by:

1. Place images in `/public/images/`
2. Update `src` props in each component — e.g. `hero-bg.jpg`, `projects/gopi-residence.jpg`
3. Remove the `picsum.photos` entry from `next.config.ts` remotePatterns

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, About teaser, Services, All 12 Projects, Sapphire spotlight, At The Top, Vision |
| `/about` | Company story, timeline (1989–2024), services overview |
| `/projects` | All 12 projects with filter (type + status) |
| `/projects/[slug]` | Individual project detail. Sapphire has accordion specs, floor plans, map, sticky enquiry form |
| `/services` | All 5 services — alternating image/text layout |
| `/stay` | At The Top penthouse — amenities grid, gallery, booking CTA |
| `/contact` | Address card + enquiry form + Google Maps embed |

---

## Contact Form

`POST /api/enquiry` accepts `{ name, phone, email, message?, project? }`.  
Validated with Zod. Sends HTML email via Nodemailer.  
In dev (no SMTP creds), logs payload to console instead of sending.

---

## Design System

All design tokens are CSS custom properties in `src/styles/globals.css`:

```css
--color-obsidian: #0E0E0E   /* primary bg */
--color-ink:      #1A1818   /* card surfaces */
--color-gold:     #C9A870   /* primary accent */
--color-cream:    #F5F0E8   /* light sections */
--color-white:    #FAFAF8   /* text on dark */
```

---

## Deployment

Deploy on [Vercel](https://vercel.com) — zero config for Next.js.  
Add environment variables in Vercel Dashboard → Project Settings → Environment Variables.

```bash
vercel --prod
```

---

## Contact

**Mala Constructions**  
6, Shanthi Nagar, 1st Main Road, Kolathur, Chennai – 600 099  
📞 9840264993 / 9789931141  
✉️ malaconstructionschennai@gmail.com
