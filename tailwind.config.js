/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    './src/**/*.html', './node_modules/flowbite/**/*.js',
    './node_modules/flowbite/**/*.tsx'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
