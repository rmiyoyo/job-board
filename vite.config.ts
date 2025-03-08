import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  optimizeDeps: {
    exclude: ['@sveltejs/kit'] // ✅ Exclude problematic dependencies
  },
  server: {
    fs: {
      strict: false // ✅ Allows access to files outside root, if needed
    }
  }
});
