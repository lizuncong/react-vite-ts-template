import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
const srcP = path.resolve(__dirname, './src');
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': srcP,
    },
  },
});
