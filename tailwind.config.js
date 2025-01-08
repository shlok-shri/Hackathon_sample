/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        "nav-text": "#ffffff",
        "nav-color": "#ff6f61",
        "background": "#f7f9fc",
        "text": "#2b2d42",
        "card-background": "#ffffff",
        "card-text": "#333333",
        "heading": "#ff6f61",
        "content": "#4a4a4a",
        "card-hover": "#ffeadb"

      },
    },
  },
  plugins: [],
}

