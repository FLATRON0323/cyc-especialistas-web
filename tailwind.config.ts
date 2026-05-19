import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1E88E5",
          dark: "#121212",
          accent: "#FFD600",
          whatsapp: "#25D366",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 214, 0, 0.4)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 214, 0, 0.8), 0 0 30px rgba(255, 214, 0, 0.6)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
