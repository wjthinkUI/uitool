import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@hooks': '/src/hooks',
      '@assets': '/src/assets',
      '@store': '/src/store',
      '@atom': '/src/atom',
      '@molecule': '/src/molecule',
      '@organism': '/src/organism',
      '@template': '/src/template',
      '@pages': '/src/pages',
    },
  },
});
