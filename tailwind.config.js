// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'slide-in-right': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'slide-in-right': 'slide-in-right 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
};
