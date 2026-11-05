import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://woonadviesgroep.vercel.app',
  redirects: {
    '/fris': '/',
    '/v3/volgt-na-opdracht': '/v3',
  },
  integrations: [
    sitemap({
      filter: (page) => !/\/(groen|v1|v3)(\/|$)/.test(new URL(page).pathname),
    }),
  ],
});
