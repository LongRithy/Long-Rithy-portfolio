// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3a86ff',
        secondary: '#8338ec',
        dark: '#212529',
        light: '#f8f9fa',
        success: '#28a745',
        warning: '#ffc107',
        danger: '#dc3545',
      },
      fontFamily: {
        khmer: ['Hanuman', 'serif'],
      },
    },
  },
  plugins: [],
}