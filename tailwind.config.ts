import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      colors: {
        black: '#1A1A1A',
        charcoal: '#2C2C2C',
        accent: '#B8956A',
        'accent-hover': '#A07D55',
        'off-white': '#F8F7F5',
        warm: '#F5F3F0',
      },
    },
  },
  plugins: [],
}
export default config
