/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // If using src directory
  ],
  theme: {
    extend: {
      colors: {
        dark: '#232A3C',
        medium: '#293245',
        transparent: 'transparent',
        blue50: '#eff6ff',
        blue100: '#dbeafe',
        blue200: '#bfdbfe',
        blue300: '#93c5fd',
        blue400: '#60a5fa',
        blue500: '#3b82f6',
        blue600: '#2563eb',
        blue700: '#1d4ed8',
        blue800: '#1e40af',
        blue900: '#1e3a8a',
        blue950: '#172554',
        amber400: '#fbbf24',
        amber500: '#f59e0b',
        sky300: '#7dd3fc',
        sky400: '#38bdf8',
      },
    },
  },
  plugins: [],
};
