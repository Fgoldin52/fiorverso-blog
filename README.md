# Fiorverso Journal

An Astro 6 blog for blog.fiorversodesign.com — built for SEO + GEO (answer-engine
visibility). Static, zero-JS by default, deploys free to Cloudflare Pages.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

Requires Node 22+ (Astro 6 dropped 18/20).

## Writing a new post

Drop a `.md` file in `src/content/blog/`. Copy the frontmatter from
`restaurant-website-too-many-choices.md` — it's the template. The schema is
enforced at build time (`src/content.config.ts`), so a missing required field
fails the build instead of shipping broken.

Frontmatter fields that matter:

- `title` / `description` — these ARE your meta tags. Write the description as
  the search snippet you want under your Google result.
- `keyTakeaway` — the GEO workhorse. A short, self-contained, quotable answer.
  Renders as the "short answer" callout AND feeds FAQ structured data that LLMs
  lift directly. Make it a complete answer on its own.
- `faqQuestion` — the literal question this post answers. Pairs with
  `keyTakeaway` to generate FAQPage schema.
- `audience` — `buyer` (SEO/client-facing) or `designer` (brand-facing). Keeps
  your two content angles organized. Most posts here should be `buyer`.
- `industry` / `location` — your local-SEO targeting. "restaurants" + "Baltimore".

## The workflow this is built for

One concept -> three uses:
1. Social video (designer-facing hook) — drives reach
2. Blog post (buyer-facing problem, written here) — drives search + credibility
3. Cold-email asset — link the post written for the prospect's exact industry

## Deploy to Cloudflare Pages (free)

1. Push this repo to GitHub.
2. Cloudflare dashboard -> Workers & Pages -> Create -> Pages -> connect the repo.
3. Build command: `npm run build` · Build output directory: `dist`
4. Add a custom domain: `blog.fiorversodesign.com` (Cloudflare auto-creates the
   CNAME since you already manage the domain there).
5. The real URL is already set in `astro.config.mjs` -> `site`.

After first deploy, submit `https://blog.fiorversodesign.com/sitemap-index.xml`
in Google Search Console.

## TODO before launch

- Replace `public/favicon.svg` with the Fiorverso mark.
- Add an `/public/og-default.png` (1200x630) fallback social image.
- Optionally add per-post OG images and reference them via the `image` field.
