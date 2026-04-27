import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/behold-api": {
        target: "https://feeds.behold.so",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/behold-api/, ""),
      },
    },
  },
});
