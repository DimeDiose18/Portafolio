import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'black': '#1E1E1E',
      'white': '#EEEEEE', 
      'gray': '#9C9C9C',
      'sky': '#B6EAFF',
      'rosy': '#FD68C4',
      'lilac': '#BE87F9',
      'baby-blue': '#0DE2D8',
      'mint': '#22FD81',
      'yellow': '#F5FC72',
      'orange': '#FF9D5A',
      'pink': '#FC5A88'
    },
    extend: {
      backgroundImage: {
        'pattern': "url('/portafolio/public/assets/images/papel.jpg')"
      },
    },
  },
  plugins: [],
}
export default config
