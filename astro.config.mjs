import { defineConfig } from 'astro/config';

// SITE en BASE komen uit de deploy-workflow (GitHub Pages). Lokaal: root.
export default defineConfig({
  site: process.env.SITE || 'http://localhost:4321',
  base: process.env.BASE || '/',
  devToolbar: { enabled: false },
  trailingSlash: 'always',
  build: { format: 'directory' },
});
