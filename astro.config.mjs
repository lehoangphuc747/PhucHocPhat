// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lehoangphuc747.github.io/PhucHocPhat/',
  base: '/PhucHocPhat/',
  output: 'static',
  integrations: [mdx()],
  vite: { plugins: [tailwindcss()] },
});