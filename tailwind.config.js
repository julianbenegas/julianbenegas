import { grayDark, gray, redDark, red } from '@radix-ui/colors'

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
      ...red,
      dark: {
        ...grayDark,
        ...redDark,
      },
    },
    extend: {},
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('@tailwindcss/typography')],
}
