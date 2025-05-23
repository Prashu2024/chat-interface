/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        boxShadow: {
          'message': '0 2px 4px rgba(0,0,0,0.05)',
        }
      },
    },
    plugins: [],
  }