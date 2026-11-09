import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://woonadviesgroep.vercel.app',
  redirects: {
    '/v3': '/',
    '/v3/volgt-na-opdracht': '/',
    '/v3/hypotheken': '/hypotheken',
    '/v3/pensioenen': '/pensioenen',
    '/v3/verzekeringen': '/verzekeringen',
    '/v3/financien': '/financien',
    '/v3/onze-dienstverlening': '/onze-dienstverlening',
    '/v3/over-ons': '/over-ons',
    '/v3/werkwijze-en-kosten': '/werkwijze-en-kosten',
    '/v3/contact': '/contact',
    '/v3/privacy-en-cookies': '/privacy-en-cookies',
  },
  integrations: [
    sitemap({
      filter: (page) => !/\/(groen|v1|fris)(\/|$)/.test(new URL(page).pathname),
    }),
  ],
});
