import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// `base` is set for GitHub Pages project sites (https://<user>.github.io/<repo>/).
// Override at build time with VITE_BASE, e.g. VITE_BASE=/ for a custom domain or user site.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/portfolio/',
})
