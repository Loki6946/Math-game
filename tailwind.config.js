/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      'background': 'hsl(0, 0%, 100%)',
      'foreground': 'hsl(0, 0%, 20%)',
      'foreground-lt': 'hsl(0, 0%, 100%)',
      'foreground-dm': 'hsl(0, 0%, 60%)',
      
      'accent-1': 'hsl(241, 62%, 63%)',
      'accent-1-tr': 'hsla(241, 62%, 63%, 0.164)',
      'accent-2': 'hsl(356, 74%, 52%)',
      'accent-3': 'hsl(75, 6%, 87%)',
      'accent-3-dm': 'hsla(80, 6%, 90%)',

      'dark-background': 'hsl(0, 0%, 20%)',
      'dark-background-lt': 'hsl(0, 0%, 30%)',
      'dark-foreground': 'hsl(75, 6%, 95%)',
      'dark-foreground-lt': 'hsl(0, 0%, 100%)',
      'dark-accent-3-dm': 'hsl(75, 6%, 27%)',
    },
    fontFamily: {
      'primary': ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}