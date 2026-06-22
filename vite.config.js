import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/ZeniaWebsite/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        hindi: resolve(__dirname, 'index-hi.html'),
        // kaftans: resolve(__dirname, 'kaftans.html'),
        // nightSuits: resolve(__dirname, 'night-suits.html'),
        // nighties: resolve(__dirname, 'nighties.html'),
        // coordSets: resolve(__dirname, 'coord-sets.html'),
        // fancy: resolve(__dirname, 'fancy.html'),
        contact: resolve(__dirname, 'contact.html'),
        contactHi: resolve(__dirname, 'contact-hi.html')
      }
    }
  }
});
