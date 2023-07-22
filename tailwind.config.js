/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'myBgFirst': "url('./src/assets/towfiqu-barbhuiya-nApaSgkzaxg-unsplash.jpg')",
        'myBg': "url('./src/assets/shubham-dhage-pb5w9WU1goA-unsplash.jpg')",
      },
    },
  },
  plugins: [],
}

