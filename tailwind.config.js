/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'link-text': '#9ca3af',
        'link-hover': '#0ea5e9',
        'section-text': '#FFFFFF',
        'section-bgr': '#091B43',
        'section-title':'#9CF3FA',
        'section-note':'#8A97B2',
        'section-register':'#7E9FFF',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        arial: ['Arial', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};






