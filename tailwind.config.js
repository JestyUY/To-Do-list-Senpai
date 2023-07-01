/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      josefin: ['Belanosima', 'sans-serif'],
    },
    colors:{},
    extend: { 
      backgroundImage: {
      'Mobile-Light': "url('./src/assets/bg-mobile-light.jpg')",
      'Mobile-Dark': "url('./src/assets/bg-mobile-dark.jpg')",
      'Desktop-Light': "url('./src/assets/bg-desktop-light.jpg')",
      'Desktop-Dark': "url('./src/assets/bg-desktop-dark.jpg')"
    }},
  },
  plugins: [],
  
}

