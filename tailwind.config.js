/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A5F',
        secondary: '#6B7280',
        success: '#2E7D32',
        'success-light': '#E8F5E9',
        warning: '#F59E0B',
        'warning-light': '#FEF3C7',
      },
    },
  },
  plugins: [],
};
