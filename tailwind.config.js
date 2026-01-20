/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-800': '#1F2937',
        'gray-500': '#6B7280',
        'gray-200': '#E5E7EB',
        'orange-500': '#F97316',
        'orange-600': '#EA580C',
        'white': '#FFFFFF',
        'black': '#000000',
        brand: '#FF5722',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}