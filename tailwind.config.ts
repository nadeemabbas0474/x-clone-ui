import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textGray: "#71767b",
        textGrayLight: "#e7e9ea",
        broderGray: "#2f3336",
        inputGray: "#202327",
        iconBlue: "#1d9bf0",
        iconGreen: "#00ba7a",
        iconPink:"#f91880",
      },
      screens: {
        xsm: "500px",
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px',
      }
    },
  },
  plugins: [],
} satisfies Config;
