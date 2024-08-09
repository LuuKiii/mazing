import { defineConfig } from "vite";
import cleanPlugin from "vite-plugin-clean";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  base: '/mazing/',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: ({ name }) => {
          if (name.endsWith('.css')) {
            return 'styles/[name].css';
          }
          return 'assets/[name].[ext]';
        }
      }
    }
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          entry: '/src/main.ts',
          filename: 'index.html',
          template: 'index.html'
        },
        {
          filename: '/src/main.html',
          template: '/src/main.html'
        }
      ]
    }),
    cleanPlugin({
      targetFiles: ['dist']
    })
  ]
});
