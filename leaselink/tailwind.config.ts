import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2A6CB3",
        secondary: "#F7F7F7",
        vrbo: {
          blue: "#2A6CB3",
          navy: "#1B365D",
          gray: "#717171",
          lightGray: "#F5F5F5",
          border: "#DDDDDD",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-poppins)"],
        poppins: ["var(--font-poppins)"],
      },
      boxShadow: {
        'vrbo': '0 2px 4px rgba(0,0,0,0.08)',
        'vrbo-hover': '0 4px 12px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}

export default config 