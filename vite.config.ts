import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components',
      layouts: '/src/layouts',
      SCSS: '/src/SCSS',
      utils: '/src/utils',
      pages: '/src/pages',
      types: '/src/types',
    }
  }
})
