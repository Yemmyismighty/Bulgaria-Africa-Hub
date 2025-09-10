// tailwind.config.ts
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // default sans now points to Outfit
        sans: ["var(--font-outfit)", "sans-serif"],
        source: ["var(--font-source)", "sans-serif"],
      },
    },
  },
  plugins: [],
}
export default config
