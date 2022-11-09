/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "orange": "hsl(26, 100%, 55%)",
      "paleOrange": "hsl(25, 100%, 94%)",
      "veryDarkBlue": "hsl(220, 13%, 13%)",
      "darkGrayishBlue": "hsl(219, 9%, 45%)",
      "grayishBlue": "hsl(220, 14%, 75%)",
      "lightGrayishBlue": "hsl(223, 64%, 98%)",
      "lightGray": "#ebebeb",
      "white": "hsl(0, 0%, 100%)",
      "black": "hsl(0, 0%, 0%)"
    },
    screens: {
      // Horizontal Media Breakpoints -------------------------------
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      // Vertical Media Breakpoints for Mobile Landscape ------------
      'vsm': { 'raw': '(max-height: 800px) and (min-width: 640px)' },
      // => @media (max-height: 800px) and (min-width: 640px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
