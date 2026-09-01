import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        ar: path.resolve(__dirname, "ar-condicionado.html"),
        geladeiras: path.resolve(__dirname, "conserto-de-geladeiras.html"),
        maquinas: path.resolve(__dirname, "conserto-maquina-lavar.html"),
        portao: path.resolve(__dirname, "portao-eletronico-e-cftv.html"),
      },
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          icons: ["lucide-react"],
        },
      },
    },
  },
});
