module.exports = {
  content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.tsx'],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        'primary-300': '#6901AD',
        'primary-800': '#320052',
        'primary-bg': '#fafafa',
        'merchant-bg': '#0d0015',
      },
      screens: {
        'light-mode': { raw: '(prefers-color-scheme: light)' },
        'dark-mode': { raw: '(prefers-color-scheme: dark)' },
        phone: { raw: '(max-width: 768px)' },
        desktop: { raw: '(min-width: 1024px)' },
        tablet: { raw: '(max-width: 1023px)' },
      },
    },
  },

  plugins: [],
}
