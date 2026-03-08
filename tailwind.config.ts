import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0705',
        surface: '#12100E',
        gold: '#C9A84C',
        crimson: '#8B1A1A',
        text: '#F0E6D3',
        muted: '#8A7A6A',
        border: '#2A2018'
      },
      boxShadow: {
        candle: '0 0 24px #C9A84C40'
      },
      letterSpacing: {
        sacred: '0.18em'
      }
    }
  },
  plugins: []
};

export default config;
