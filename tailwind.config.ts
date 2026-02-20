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
        marcellus: ['Marcellus', 'serif'],
        heroDisplay: ['"Playfair Display"', 'serif'],
        syne: ['Syne', 'sans-serif'],
        bigshoulders: ['"Big Shoulders Display"', 'cursive'],
      },
      colors: {
        dark: '#1E1E1E',
        accent: '#A886CD',
        light: '#f7f7f7',
      },
    },
  },
  plugins: [],
}
export default config
