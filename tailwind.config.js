/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: "#F5E9BF",
          DEFAULT: "#D4AF37",
          dark: "#A58A29"
        },
        cream: "#F5F5F0",
        burgundy: {
          light: "#0c2316",
          DEFAULT: "#0c2316",
          dark: "#0c2316"
        },
        charcoal: "#333333",
        offwhite: "#F9F9F7"
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
        'texture': "url('https://images.pexels.com/photos/7794435/pexels-photo-7794435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
      },
    },
  },
  plugins: [],
};