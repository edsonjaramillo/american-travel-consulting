import type { Config } from 'tailwindcss';

const responsiveWidth = 68;
const halfResponsiveWidth = responsiveWidth / 2;

export default {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    borderRadius: { DEFAULT: '0.25rem', none: '0', full: '5rem' },
    colors: {
      transparent: 'transparent',
      primary: {
        DEFAULT: '#004b98',
        light: '#0066d2',
        dark: '#04254d',
      },
      secondary: {
        DEFAULT: '#d02c2e',
        light: '#e74c4e',
        dark: '#420d0e',
      },
      tertiary: {
        DEFAULT: '#9a9899',
        light: '#bdbcbd',
        dark: '#585758',
      },
      grayscale: {
        standard: '#171717',
        neutral: '#737373',
        inverse: '#fafafa',
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
        950: '#0a0a0a',
      },
      error: {
        DEFAULT: '#cc0000',
        light: '#fff0f0',
        dark: '#500000',
      },
      info: {
        DEFAULT: '#0f62be',
        light: '#edfaff',
        dark: '#0c2345',
      },
      success: {
        DEFAULT: '#06752c',
        light: '#edfff2',
        dark: '#003613',
      },
      warning: {
        DEFAULT: '#b2500b',
        light: '#fffbeb',
        dark: '#441904',
      },
    },
    fontFamily: { sans: ['var(--font-next)'] },
    fontSize: {
      cta: ['clamp(2rem,3.75vw,3rem)', { letterSpacing: '-.025em', lineHeight: '1.3' }],
      subheader: ['clamp(1rem,1.75vw,1.45rem)', { letterSpacing: '-.025em', lineHeight: '1.3' }],
      '5xl': ['3rem', { letterSpacing: '-.025em', lineHeight: '1.3' }],
      '4xl': ['2.5rem', { letterSpacing: '-.025em', lineHeight: '1.3' }],
      '3xl': ['2rem', { letterSpacing: '-.025em', lineHeight: '1.3' }],
      '2xl': ['1.725rem', { letterSpacing: '-.025em', lineHeight: '1.3' }],
      xl: ['1.45rem', { letterSpacing: '-.025em', lineHeight: '1.3' }],
      lg: ['1.2rem', { letterSpacing: '-.025em', lineHeight: '1.4' }],
      base: ['1rem', { lineHeight: '1.5' }],
      small: ['.875rem', { lineHeight: '1.5' }],
    },
    transitionDuration: { base: '350ms' },
    extend: {
      zIndex: {
        modal: '4',
        blur: '3',
        nav: '2',
      },
      width: {
        responsive: `min(90%,${responsiveWidth}rem)`,
        'half-responsive': `min(90%,${halfResponsiveWidth}rem)`,
        'split-form': 'min(90%,27rem)',
      },
      blur: { '4xl': '84px' },
      gridTemplateColumns: {
        destinations: 'repeat(auto-fill,minmax(17rem,1fr))',
        'featured-destinations': 'repeat(auto-fill,minmax(23rem,1fr))',
        'featured-testimonials': 'repeat(auto-fill,minmax(23rem,1fr))',
      },
    },
    plugins: [],
  },
} satisfies Config;
