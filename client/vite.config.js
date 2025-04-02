import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    include: ['@react-three/drei'],
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  }
});
