/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./src/**/*.html", "./src/**/*.ts"],
  theme: {
    extend: {
      fontFamily: {
        'display': ['PP Eiko', 'Arial', 'sans-serif'],
        'body': ['PP Neue Montreal', 'Arial', 'sans-serif'],
      },
      colors: {
        'cream': {
          100: '#fdfbf5',
          200: 'rgba(253, 251, 245, 0.7)',
        },
        'sage': {
          100: '#cbeee0',
          200: '#2e4c47',
        },
        'charcoal': {
          100: '#0e0e0e',
          200: 'rgba(14, 14, 14, 0.3)',
        }
      },
      fontSize: {
        'hero': ['141.913px', '149.009px'],
        'body-lg': ['23.0609px', '34.5913px'],
      },
      spacing: {
        '18': '4.5rem',
        '70': '17.5rem',
        '150': '37.5rem',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
