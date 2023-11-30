import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'blacky': '#1E1E1E',
      'whity': '#EEEEEE', 
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
    fontSize: {
      sm: '0.8rem',
      md: '0.875rem',
      b: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.125rem',
    },
    screens: {
      'mobile': '360px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
      'desktop-2': '1440px',
      'desktop-3': '1920px'
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
