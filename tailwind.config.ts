import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      bottom: {
        minus: '-20px',
      },
      colors: {
        'main-green': '#06A38B',
        trans: 'rgba(0, 0, 0, 0.25)',
        'main-gray': '#353945',
        'pill-bg-green': '#E6F5F3',
        'pill-border': '#06A38B',
        'dark-blue': '#050D24',
        'text-bg': '#E6F5F3',
      },
      backgroundColor: {
        unset: 'unset',
      },
      boxShadow: {
        card: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px',
      },
      zIndex: {
        minus: '-1',
      },
      opacity: {
        90: '0.90',
      },
      height: {
        500: '500px',
        816: '816px',
      },
      width: {
        '35rem': '35rem',
      },
      fontFamily: {
        poppins: ['var(--poppins)'],
        poppinsLight: ['var(--poppinsLight)'],
        inter: ['var(--inter)'],
      },
    },
  },
  plugins: [],
};
export default config;
