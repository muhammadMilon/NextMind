/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-outfit)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        background: "rgb(var(--background))", // Removed <alpha-value> for v4 compat safety with rgb space separated
        foreground: "rgb(var(--foreground))",
        primary: {
          50: "rgb(var(--primary-50))",
          100: "rgb(var(--primary-100))",
          200: "rgb(var(--primary-200))",
          300: "rgb(var(--primary-300))",
          400: "rgb(var(--primary-400))",
          500: "rgb(var(--primary-500))",
          600: "rgb(var(--primary-600))",
          700: "rgb(var(--primary-700))",
          800: "rgb(var(--primary-800))",
          900: "rgb(var(--primary-900))",
        },
        accent: {
          50: "rgb(var(--accent-50))",
          100: "rgb(var(--accent-100))",
          200: "rgb(var(--accent-200))",
          300: "rgb(var(--accent-300))",
          400: "rgb(var(--accent-400))",
          500: "rgb(var(--accent-500))",
          600: "rgb(var(--accent-600))",
          700: "rgb(var(--accent-700))",
          800: "rgb(var(--accent-800))",
          900: "rgb(var(--accent-900))",
        },
        dark: {
          50: "rgb(var(--dark-50))",
          100: "rgb(var(--dark-100))",
          200: "rgb(var(--dark-200))",
          300: "rgb(var(--dark-300))",
          400: "rgb(var(--dark-400))",
          500: "rgb(var(--dark-500))",
          600: "rgb(var(--dark-600))",
          700: "rgb(var(--dark-700))",
          800: "rgb(var(--dark-800))",
          900: "rgb(var(--dark-900))",
        },
      },
    },
  },
  plugins: [],
};
