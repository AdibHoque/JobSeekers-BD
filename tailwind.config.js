/** @type {import('tailwindcss').Config} */
import DaisyUI from 'daisyui'
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [DaisyUI],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#F5721B",
          "secondary": "#2D9CDB",
          "accent": "#111111",
          "neutral": "#111111",
          "base-100": "#ffffff",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "primary": "#F5721B",
          "secondary": "#2D9CDB",
          "accent": "#FADB14",
          "neutral": "#E5E5E5",
          "base-100": "#111111",
        },
      },
    ],
  },
}

