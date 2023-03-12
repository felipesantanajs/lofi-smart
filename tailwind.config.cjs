/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-red-500': 'linear-gradient(153deg, rgba(240,66,212,1) 0%, rgba(250,250,250,1) 50%, rgba(189,0,0,0.9976365546218487) 100%);',
      },
    }
  },
  plugins: [],
}