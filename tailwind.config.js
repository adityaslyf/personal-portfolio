  const defaultTheme = require('tailwindcss/defaultTheme')

  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['"Kode Mono"', 'monospace', ...defaultTheme.fontFamily.sans]
        }
      },
    },
    plugins: [
      require('tailwindcss-animated'),
    ],
    darkMode: "class",
  }