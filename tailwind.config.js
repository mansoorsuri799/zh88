/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Derived from ZH88 app icon: deep forest + gold
        primary: '#061510',
        secondary: '#0A1F18',
        accent: '#F0D000',
      },
    },
  },
  plugins: [],
}
