// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: set this to your live subdomain. Used for sitemap, RSS, and canonical URLs.
  site: 'https://blog.fiorversodesign.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
