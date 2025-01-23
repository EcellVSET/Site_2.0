/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
        "morph": "morph 8s ease-in-out infinite",
        text: 'text 5s ease infinite'
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        morph: {
          '0%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%', borderColor: 'green' },
        '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%', borderColor: 'green' },
        '100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%', borderColor: 'green' },
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      }
    },
  },
  plugins: [],
};