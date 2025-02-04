import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import aurelia from '@aurelia/vite-plugin';
import babel from 'vite-plugin-babel';

export default defineConfig({
  build: {
    sourcemap: true, // Permite generar source maps en modo producción.
  },
  server: {
    open: !process.env.CI,
    port: 9000,
    sourcemapIgnoreList: (relativePath) => false, // Opcional para ignorar rutas.
  },
  esbuild: {
    target: 'es2022'
  },
  plugins: [
    aurelia({
      useDev: true,
    }),
    babel(),
    nodePolyfills(),
  ],
});
