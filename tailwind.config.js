/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', // App directory ke andar sari files
    './pages/**/*.{js,ts,jsx,tsx}', // Agar pages directory bhi ho
    './components/**/*.{js,ts,jsx,tsx}', // Components folder bhi include ho
    ],
  theme: {
    extend: {},
  },
  plugins: [],
}

