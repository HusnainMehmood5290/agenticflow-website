import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Disable source maps in production
    sourcemap: false,
    // Use esbuild (built-in, faster than terser)
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-ui': ['@radix-ui/react-slot', 'class-variance-authority', 'clsx', 'tailwind-merge'],
          'vendor-icons': ['lucide-react'],
        },
      },
    },
    // Gzip/Brotli compression threshold
    chunkSizeWarningLimit: 500,
    // Asset inlining threshold (4kb)
    assetsInlineLimit: 4096,
    // CSS code splitting
    cssCodeSplit: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
});
