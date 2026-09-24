import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Base defaults to '/' (Vercel / custom domain / localhost).
// For GitHub Pages project sites, build with VITE_BASE=/portfolio/.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
})
