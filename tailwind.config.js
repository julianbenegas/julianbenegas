import { grayDark, gray, orangeDark, orange } from '@radix-ui/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-geist-sans)'],
    },
    colors: {
      white: '#fff',
      black: '#000',
      ...gray,
      ...orange,
      dark: {
        ...grayDark,
        ...orangeDark,
      },
    },
    extend: {},
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('@tailwindcss/typography')],
}
