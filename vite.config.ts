import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// The restaurant data stores local image files as /src/... strings.
// Rewrite those references so Vite bundles the images into dist.
const restaurantAssetRewriter = {
  name: 'restaurant-asset-rewriter',
  enforce: 'pre' as const,
  transform(code: string, id: string) {
    if (!id.endsWith('/src/data/restaurantData.ts')) return null;

    const rewritten = code.replace(
      /['\"]\/src\/assets\/images\/([^'\"]+)['\"]/g,
      (_match, file) => `new URL('../assets/images/${file}', import.meta.url).href`,
    );

    return rewritten === code ? null : { code: rewritten, map: null };
  },
};

export default defineConfig({
  // GitHub Pages project site base path.
  base: '/DEHO-CAFE-/',
  plugins: [restaurantAssetRewriter, react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});
