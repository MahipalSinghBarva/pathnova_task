/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': 'rgba(25, 114, 93, 1)',
        'secondry-gray': 'rgba(46, 46, 46, 0.8)',
        'background-color': 'rgba(241, 248, 246, 1)',
        'background-card': 'rgba(217, 217, 217, 0.47)',
        'customOrange': 'rgba(255,107,53,1)',
        'bg-ourplan': 'rgba(25, 114, 93, 1)',
        'footer-bg': 'rgba(43, 45, 57, 1)'
      },
    },
  },
  plugins: [],
}

