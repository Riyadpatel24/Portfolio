import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio/',   // capital P, matches your repo name exactly
  plugins: [react()],
})