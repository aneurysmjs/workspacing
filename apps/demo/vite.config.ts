import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const demo = fileURLToPath(new URL('./src', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: demo }],
  },
});
