/** @type {import('tailwindcss').Config} */


const plugin = require("tailwindcss/plugin");

const MyClass = plugin(function({addUtilities}){
  addUtilities({
    ".my-rotate-y-100":{
      transform:"rotateY(-100deg)",
    },
    ".perspective":{
      perspective:"800px",
    },
    ".preserve-3d":{
      transfromStyle:"preserve-3d",
    }
  });
});

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [MyClass],
}
