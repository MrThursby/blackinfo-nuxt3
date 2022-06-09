const formKitTailwind = require('@formkit/themes/tailwindcss');

module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './formkit.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    colors: {
      gray: {
        100: '#f9f9f9',
        200: '#999999',
        300: '#323232',
        400: '#262626',
        500: '#222222',
        600: '#1e1e1e',
      },
      primary: {
        DEFAULT: '#00bc8c',
        dark: '#008966',
      },
      black: '#000',
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#00bc8c',
              '&:hover': {
                color: '#00bc8c',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), formKitTailwind],
};
