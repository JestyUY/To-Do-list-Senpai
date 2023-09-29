/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
            josefin: ['Belanosima', 'sans-serif'],
          },
    extend: {
      backgroundImage: {
              'Mobile-Light': "url('/bg-mobile-light.jpg')",
              'Mobile-Dark': "url('/bg-mobile-dark.jpg')",
              'Desktop-Light': "url('/bg-desktop-light.jpg')",
              'Desktop-Dark': "url('/bg-desktop-dark.jpg')"
            },
            colors: {

                //primary for hover
                brightBlue:'#3a7bfd',
                skyblueGrad:'#57ddff',
                pinkGrad:'#c058f3',
          
              // //   // light theme
                veryLightGray: '#fafafa',
                veryLightGrayish:'#e4e5f1',
                lightGrayishBlue:'#d2d3db',
                veryDarkGrayishBlue:'#484b6a',
          
                   // dark theme
                VeryDarkBlueDM: '#161722',
                VeryDarkDesaturatedBlueDM:'#25273c',
                LightGrayishBlueDM:	'#cacde8',
                LightGrayishBlueHoverDM:'#e4e5f1',
                DarkGrayishBlueDM:'#777a92',
                VeryDarkGrayishBlueDM:'	#4d5066',
                VeryDarkGrayishBlue2DM:'#393a4c'
               }
    },
  
  },
  plugins: [],
  darkMode:'class',
}

