import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://woonadviesgroep.vercel.app',
  integrations: [
    sitemap({
      filter: (page) => !/\/(fris|groen)\/?$/.test(page),
    }),
  ],
});
