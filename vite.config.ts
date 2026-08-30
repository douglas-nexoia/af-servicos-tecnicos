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
        geladeira: path.resolve(__dirname, "conserto-geladeira-e-maquinas.html"),
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
