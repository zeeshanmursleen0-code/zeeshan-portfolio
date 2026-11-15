# Zeeshan Mursleen — Portfolio

A mobile-first personal portfolio built with Next.js App Router, Tailwind CSS v4, Framer Motion, Lenis, and Lucide React.

## Requirements
- Node.js 20.9+ (Node.js 22 LTS recommended)
- npm

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```
On Windows PowerShell use `Copy-Item .env.example .env.local`. Open http://localhost:3000.

## Customize
- **Text, projects, skills, timeline, social URLs:** `data/content.js`. Add a project object with a unique slug; its case-study route is generated automatically.
- **Colors:** edit CSS custom properties in `app/globals.css` for dark and light themes.
- **Fonts:** edit `next/font/google` imports in `app/layout.js` and the corresponding CSS variables.
- **Project visuals:** replace SVGs in `public/projects/` with your own WebP/AVIF or optimized images and update paths in `data/content.js`.
- **Photo:** the About section already uses `public/zeeshan-portrait.webp` with `next/image`; replace that file to update the photo.
- **Resume:** put a verified resume at `public/resume.pdf`, then add a link in `components/Portfolio.jsx`.
- **Links:** blank GitHub, LinkedIn, and live URLs are intentionally hidden until you provide real URLs.

## Contact form
Create a free Web3Forms access key at https://web3forms.com/ and add it to `.env.local`:
```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_key_here
NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app
```
**Important:** Web3Forms uses a public client-side access key; do not put a secret API token in a `NEXT_PUBLIC_` variable. The form displays an explicit error until configured. Test email delivery before launch.

## Deploy on Vercel (free Hobby tier)
1. Create a GitHub repository, then from the project directory:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```
2. Sign into https://vercel.com with GitHub, select **Add New → Project**, and import your repository.
3. Vercel should detect Next.js. Keep the default build command (`next build`).
4. In Project Settings → Environment Variables add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` and `NEXT_PUBLIC_SITE_URL` for Production. Use your assigned Vercel URL for the latter, then redeploy so metadata and sitemap contain the real domain.
5. Click **Deploy**. Vercel provides a `*.vercel.app` URL.
6. Optional custom domain: Project Settings → Domains → add your domain and follow the DNS records Vercel shows. Domain registration may cost money; hosting on the Vercel subdomain does not.

## Final launch checklist
- [ ] Email, GitHub and LinkedIn are configured. Add verified project-specific URLs if available.
- [ ] Confirm experience and skill claims are accurate; add real professional experience if applicable.
- [ ] Add your photo and actual project screenshots.
- [ ] Configure and test Web3Forms, including error handling.
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the production origin and redeploy.
- [ ] Run `npm run lint` and `npm run build` locally.
- [ ] Test navigation, keyboard focus, and contact form at 360px, 768px, 1024px, and 1440px.
- [ ] Test light/dark preference persistence and reduced-motion mode.
- [ ] Run Lighthouse on deployed pages; aim for 90+ in all categories, but verify scores rather than assuming them.
- [ ] Check `/robots.txt`, `/sitemap.xml`, social preview, and case-study routes.

## Notes
No fabricated testimonials or professional experience are included. The Trend Setters project is accurately described as in progress. Smooth page transitions are intentionally limited to route-level content reveals and native navigation to avoid harming accessibility and performance.

## Verified profile information
The profile email, GitHub, LinkedIn, expected graduation year (2029), programming/web skills, and availability have been supplied by the portfolio owner. Crypto markets and fintech are presented as interests, not claimed professional competencies. Professional employment is not invented.

## Still needed before final public launch
- A verified resume PDF if you want a Download Resume button.
- Project-specific GitHub repositories, demos, and real screenshots (optional; empty links stay hidden).
- Any real professional positions, dates, and measurable outcomes you want displayed (optional).
- A Web3Forms access key to activate the contact form; configure in `.env.local` locally and Vercel environment variables.
- The production Vercel URL to replace the `NEXT_PUBLIC_SITE_URL` placeholder for SEO.
- A successful `npm.cmd run build`, accessibility checks, and Lighthouse audit.
