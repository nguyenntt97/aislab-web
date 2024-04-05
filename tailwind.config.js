/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_pages/*.md',
    './*.html',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}