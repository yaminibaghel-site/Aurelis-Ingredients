# Aurelis Ingredients — SEO/GEO/AEO Optimized Cloudflare Pages Site

## What is included
- Cloudflare Pages-ready Vite + React project
- Option B “Desk” design direction
- Buyer-focused “Write to Us” requirement form
- SEO meta title and description
- Canonical tag
- Open Graph and Twitter meta tags
- Organization structured data
- FAQPage structured data
- Semantic H1/H2/H3 structure
- FAQ section for AEO and AI answerability
- Ingredient section for search intent coverage
- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- `humans.txt`
- Web manifest

## Local setup
```bash
npm install
npm run dev
```

## Cloudflare Pages settings
- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`

## Form setup with Web3Forms
This site uses Web3Forms for the Write to Us form.

1. Go to https://web3forms.com/
2. Create a free access key using your email.
3. In Cloudflare Pages, go to Settings > Environment variables.
4. Add this variable:

```text
VITE_WEB3FORMS_ACCESS_KEY=your_key_here
```

5. Redeploy the site.

## Important domain step
Replace `https://aurelisingredients.com/` in these files after you confirm the actual domain:
- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`
- `public/llms.txt`

## Buyer form fields
The form captures:
- Name
- Work email
- Company
- Company website
- Country / market
- Ingredient
- Expected volume
- Certifications needed
- Form needed
- Sample requirement
- Requirement details

## Recommended next pages after launch
Once buyer conversations begin, add dedicated pages for:
- `/ashwagandha-sourcing-india`
- `/turmeric-extract-supplier-india`
- `/moringa-powder-exporter-india`
- `/botanical-extract-sourcing-india`

Those will help SEO/GEO/AEO much more than one homepage alone.
