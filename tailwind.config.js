/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': '#FE9AAD',
        "secondary":"#9B66D0"
      },

      fontFamily: {
        'San': ["Open Sans", "sans-serif"],
        "lato" :["Lato","sans-serif"]
      },
      fontSize: {
        'xs': '0.75rem', 
        'sm': '0.875rem', 
        'base': '1rem',
        "md" : "1.5rem", 
        'lg' : "2rem"
      },
      fontWeight: {
        "extralight":'100',
        'light': "300",
        'normal': "400",
        'bold': "700",
        'extrabold': "900",
      },
      fontStyle: {
        italic: 'italic',
      },
    },
  },
  plugins: [],
}

