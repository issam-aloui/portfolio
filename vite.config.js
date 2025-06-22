import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // Use relative paths for assets
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false, // Disable sourcemaps in production
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
});
