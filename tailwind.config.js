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
}

