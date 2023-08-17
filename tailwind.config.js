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
        "mainRed":"#5C469C",
       ' darkRed':"#981815",
       "dark-cl":"#0C134F",
       "primary-clr":"#0C134F",
       "pink":"#D4ADFC",
       "dark-pink":"#5C469C",
       "blue-dark":"#1D267D"
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
      },
      boxShadow:{
        headerShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
        boxshadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      }
    },
  },
  plugins: [],
}
