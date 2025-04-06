import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from "path";
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
    server: {
      proxy: {
        '/api': 'http://localhost:5000',
      },
      hmr: true, // Ensure hot module replacement is enabled
      watch: {
        usePolling: false // Try changing this if you're on certain file systems
      }
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      }
    }
});
