import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  define: {
    'process.env': process.env, // Ensures environment variables are accessible
  },
  plugins: [react()], // Correctly placed plugins
  assetsInclude: ['**/*.png'], // Ensures PNG files are included in build
});
