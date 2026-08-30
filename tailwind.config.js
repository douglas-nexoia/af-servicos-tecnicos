/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./ar-condicionado.html",
    "./conserto-geladeira-e-maquinas.html",
    "./portao-eletronico-e-cftv.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        acc: {
          DEFAULT: "#FF7A00",
          hover: "#EA6C00",
          light: "#FFF4EB",
        },
        base: {
          DEFAULT: "#0A1128",
          2: "#141E38",
          3: "#1C2A4D",
        },
        light: {
          DEFAULT: "#F8FAFC",
          card: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#0F172A",
          muted: "#64748B",
        },
        whatsapp: {
          DEFAULT: "#22C55E",
          hover: "#16A34A",
          dark: "#15803D",
        },
      },
      fontFamily: {
        sans: ["Archivo", "Public Sans", "system-ui", "sans-serif"],
        body: ["Public Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(10, 17, 40, 0.06)",
        card: "0 10px 30px -4px rgba(10, 17, 40, 0.08)",
        glow: "0 0 25px rgba(255, 122, 0, 0.35)",
        whatsapp: "0 0 25px rgba(34, 197, 94, 0.4)",
      },
    },
  },
  plugins: [],
}
