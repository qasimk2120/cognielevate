import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cognielevate.co',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/privacy'),
    }),
  ],
  output: 'static',
  trailingSlash: 'never',
});
