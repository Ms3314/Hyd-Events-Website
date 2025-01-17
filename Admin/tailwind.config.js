/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary:"#bae6fd",
         primary: "#0284c7",
       },
 
       fontfamily: {
         poppins: ["poppins","sans-serif"],
         averia: ["Averia Serif Libre","Serif"],
       },
 
       container:{
         center: true,
         padding:{
           default: "1rem",
           sm: "2rem",
           lg:"4rem",
           xl:"5rem",
           "2xl":"6rem",
         },
       },
 
     },
    },
  
  plugins: [],
}

