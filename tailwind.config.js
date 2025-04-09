/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
        "morph": "morph 8s ease-in-out infinite",
        "text": "text 5s ease infinite",
        "scroll-right": "scrollRight 30s linear infinite",
        "scroll-left": "scrollLeft 30s linear infinite"
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "scrollRight": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "scrollLeft": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" }
        },
        "morph": {
          '0%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%', borderColor: 'green' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%', borderColor: 'green' },
          '100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%', borderColor: 'green' },
        },
        "text": {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      utilities: {
        '.pause-animation': {
          'animation-play-state': 'paused',
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.hover\\:pause-animation:hover': {
          'animation-play-state': 'paused',
        },
      }
      addUtilities(newUtilities)
    },
  ],
};