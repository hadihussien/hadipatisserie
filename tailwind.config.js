/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          colors:{
      "main-color": "var(--main-color)",
      "hover-nav-color": "var(--hover-nav-color)",
      "paragraph-color": "var(--paragraph-color)",
      "social-nav-color": "var(--social-nav-color)",
      "hover-background-nav":"var(--hover-background-nav)",
      "great-vibes":"var(--great-vibes)"
    }
    }
  },
plugins: [],
}
