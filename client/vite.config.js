import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import pluginRewriteAll from "vite-plugin-rewrite-all"; // para que acepte url con "."

import { createRequire } from "module";
import { viteStaticCopy } from "vite-plugin-static-copy";

const require = createRequire(import.meta.url);
const cMapsDir = path.join(
  path.dirname(require.resolve("pdfjs-dist/package.json")),
  "cmaps"
);

const __dirname = dirname(fileURLToPath(import.meta.url));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pluginRewriteAll(),
    viteStaticCopy({
      targets: [
        {
          src: cMapsDir,
          dest: "",
        },
      ],
    }),
  ],
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
