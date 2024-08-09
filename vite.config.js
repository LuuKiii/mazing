import { defineConfig } from "vite";

export default defineConfig({
  base: '/mazing/',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: ({ name }) => {
          if (name.endsWith('.css')) {
            return 'css/[name].css';
          }
          return 'assets/[name].[ext]';
        }
      }
    }
  }
});
