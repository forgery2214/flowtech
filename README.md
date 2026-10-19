# Flowtech React website

Run `npm install`, then `npm run dev`. Create production files with `npm run build`.

## Add your photos

Put photos in `public/images/`. In `src/main.jsx`, update `images` at the top, for example:

```js
const images = {
  hero: '/images/company.jpg',
  pumps: '/images/pumps.jpg',
  automation: '/images/automation.jpg',
  treatment: '/images/water-treatment.jpg'
};
```

Empty or unavailable images show labeled placeholders. Wide landscape photos work best. The website includes a collapsible mobile menu, service and product sections, and telephone/email links. Contact links open the visitor's phone or email app; no email is sent by the website.

## Products and brands page

Open `/products.html`. Edit the product categories, brand names, and image paths in `src/catalog.js`. Both pages share the blue theme in `src/styles.css`.

## Company logo

The shared page header uses `public/images/flowtech-logo.png`, the 256 × 64 PNG preview embedded in your Flowtech.cdr file. For higher-resolution use, replace it with an exported SVG or larger PNG and update the image path if needed.

## GitHub Pages

Deployment URL: https://forgery2214.github.io/flowtech/

In GitHub repository Settings > Pages, select GitHub Actions as the source. The deploy workflow builds and publishes dist on each push to main, or when manually run from Actions. Vite uses /flowtech/ as its base; use the URL printed by npm run dev for local development. Local images and navigation use src/paths.js to preserve this base. Remote image URLs are unchanged.
