
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// isomorphic dirname by antfu
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const _dirname = typeof __dirname !== 'undefined'
  ? __dirname
  : dirname(fileURLToPath(import.meta.url))



// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(_dirname, './src'),
    },
  },
  plugins: [react()],
})
