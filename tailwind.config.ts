import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        midsection: '40% 20% 40%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        '7.5xl': '88px',
      },
      lineHeight: {
        78: '78px',
        60: '60px',
      },
      letterSpacing: {},
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
        'light-gray': '#f5f5f5',
      },
      backgroundColor: {
        unset: 'unset',
      },
      boxShadow: {
        card: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px',
        input: '0 0 0 1px #ddd',
      },
      zIndex: {
        minus: '-1',
      },
      opacity: {
        90: '0.90',
      },
      height: {
        500: '500px',
        600: '600px',
        816: '816px',
        450: '450px',
        230: '230px',
        400: '400px',
      },
      width: {
        '35rem': '35rem',
        257: '257px',
        400: '400px',
      },
      fontFamily: {
        poppins: ['var(--poppins)'],
        poppinsLight: ['var(--poppinsLight)'],
        inter: ['var(--inter)'],
      },
    },
    keyframes: {
      'infinite-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      },
    },
  },
  plugins: [],
};
export default config;
