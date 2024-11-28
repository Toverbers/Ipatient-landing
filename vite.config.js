import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vercel from 'vite-plugin-vercel';
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    port: process.env.PORT,
  },
  //plugins: [vercel()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
