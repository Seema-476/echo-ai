/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1180px",
        }
      },
      fontSize: {
      },
      lineHeight: {
        'custom-xl': "20.16px",
        'custom-2xl': "25.2px",
        'custom-3xl': "28.8px",
        'custom-4xl': "30px",
        'custom-5xl': "57.6px",
        'custom-6xl': "86.4px",
      },
      colors: {
        'z-black': "#01000b",
        'blue': "#3A3EF5",
        'light-blue': "#32C8F1",
      },
      boxShadow: {
      },
      backgroundImage: {
        'hero-bg': "url('/public/assets/images/png/hero-bg.png')",
      },
      fontFamily: {
        'outfit': "'outfit', sans-serif",
      }
    },
  },
  plugins: [],
}

