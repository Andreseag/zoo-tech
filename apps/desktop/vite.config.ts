import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@zoo-tech/ui": path.resolve(__dirname, "../../packages/ui/src"),
      "@zoo-tech/core": path.resolve(__dirname, "../../packages/core/src"),
      "@zoo-tech/api": path.resolve(__dirname, "../../packages/api/src"),
    },
  },
});
