# Aurelis Ingredients Cloudflare Pages Site

## Local setup
npm install
npm run dev

## Build command
npm run build

## Cloudflare Pages settings
Framework preset: Vite
Build command: npm run build
Build output directory: dist

## Form setup
This site uses Web3Forms for the Write to Us form.
1. Go to https://web3forms.com/
2. Create an access key with your email.
3. In Cloudflare Pages > Settings > Environment variables, add:
   VITE_WEB3FORMS_ACCESS_KEY = your key
4. Redeploy.

The form sends: name, email, company, country/market, ingredient, volume, form needed, sample need, and requirement details.
