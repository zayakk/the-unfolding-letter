/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#e11d48", // rose-600
          hover: "#be185d", // rose-700
        },
        secondary: "#64748b", // slate-500
      },
      spacing: {
        section: "2rem",
        container: "1rem",
      },
      borderRadius: {
        container: "0.75rem",
      },
      animation: {
        'float-heart': 'float-heart linear infinite',
        'fade-in': 'fade-in 0.8s ease-out',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
