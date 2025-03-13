/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    
    container: {
      center: true,
      padding: '1rem'
    },

    extend: {
      fontFamily: {
        poppins :  "'Poppins', serif",
      },
      colors: {
        satu: "#0B272A",
        dua: "#254748",
        tiga: "#50706B",
        empat: "#7C9B93",
        lima: "#DAD7C6",
      },
    },
  },
  plugins: [],
}

