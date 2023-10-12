import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import pluginRewriteAll from "vite-plugin-rewrite-all"; // para que acepte url con "."

const __dirname = dirname(fileURLToPath(import.meta.url));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pluginRewriteAll()],
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },

  server: {
    proxy: {
      "/api": {
        target: "http://localhost:4000/",
        changeOrigin: true,
      },
    },
    port: 8080,
    hot: true,
  },
});
