/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        "coral-green": "#264653", // Your custom blue color
        "nav-text" : '#F9F6F0',


      },
    },
  },
  plugins: [],
}

