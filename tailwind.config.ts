import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "woa-white": {
          DEFAULT: "#FFF",
          100: "#FBFBFB",
          200: "#F3F3F3",
          300: "#F2F2F2",
          400: "#BDBDBD",
        },
        "woa-black": {
          DEFAULT: "#000",
          900: "#C8C8C8",
          800: "#2C2C2C",
          700: "#333333",
        },
      },
    },
  },
  plugins: [],
};
export default config;
