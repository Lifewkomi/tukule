import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

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
  // {
  //       host: true, // Open to local network and display URL
  //       open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env) // Open if it's not a CodeSandbox
  //   },
})
