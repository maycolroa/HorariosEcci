// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/usuario/login': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
});
