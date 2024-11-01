import type { Config } from "tailwindcss";
const { addDynamicIconSelectors } = require('@iconify/tailwind')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        varela:['Varela Round','sans-serif'],
        sans:['Open Sans','sans-serif'],
       
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
export default config;
