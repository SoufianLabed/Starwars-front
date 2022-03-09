module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     },
     backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#212129',
      'secondary': '#ff9457',
      'danger': '#e3342f',
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
