module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: '#33bdbf',
      },
      spacing: {
        '58px': '58px',
        '84px': '84px',
        '150px': '150px',
        '250px': '250px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
