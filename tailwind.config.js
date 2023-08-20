/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "mainRed":"#0066AA",
       ' darkRed':"#981815",
       "dark-cl":"#DA251C",
       "primary-clr":"primary-clr",
       "pink":"#0293DF",
       "dark-pink":"#0066AA",
       "blue-dark":"#0066AA"
       },
       fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'Oswald':[ 'Oswald','sans-serif'],
        'Roboto':['Roboto',' sans-serif'],
        'exo':['Exo 2', 'sans-serif'],
        'heading':['Aclonica', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          "footerBg":"linear-gradient(90deg, rgba(119,7,7,1) 16%, rgba(131,0,1,1) 48%, rgba(149,21,7,1) 92%)"
      },
      boxShadow:{
        headerShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
        boxshadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      }
    },
  },
  plugins: [],
}
