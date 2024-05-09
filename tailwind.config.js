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
          "primary": "#F5721B",
          "secondary": "#2D9CDB",
          "accent": "#FADB14",
          "neutral": "#E5E5E5",
          "base-100": "#ffffff",
        },
      },
      "dark",
    ],
  },
}

