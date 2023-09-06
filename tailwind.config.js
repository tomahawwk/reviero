/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */

module.exports = {
  content: [
    './public/**/*.html',
    './**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '500px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontSize: {
      xs: '10px',
      sm: '12px',
      md: '14px',
      lg: '16px',
      xl: '20px',
      title: '24px',
      h1: [
        '48px',
        {
          lineHeight: '120%',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        },
      ],
    },
    backgroundSize: {
      contain: 'contain',
      cover: 'cover',
    },
    extend: {
      spacing: {
        xs: '12px',
        sm: '16px',
        md: '24px',
        lg: '40px',
        xl: '64px',
      },
      colors: {
        primary: {
          light: '#DBF3F3',
          lightVariant: '#2AEEE4',
          main: '#15BEB6',
          mainHover: '#14ABA4',
          dark: '#02636C',
        },
        grey: {
          300: '#F6F4F4',
          400: '#EBF1F4',
          500: '#F6F8FA',
          600: '#DFE5EB',
          700: '#A8ACB7',
          800: '#404657',
        },
        overlay: 'rgba(0, 44, 48, .4)',
        black: '#363B49',
        totalBlack: '#000000',
        white: 'white',
        p: '#7E869B',
        beige: '#F2E2D0',
        beigeLight: '#F9F2EA',
        green: '#ECEFDF',
        greenDark: '#044144',
        greenTransparent: 'rgba(7, 72, 78, .6)',
        lightBlue: '#ECF8F7',
        lightGreen: '#BEE5E4',
        blue: '#34A7C2',
        darkBlue: '#043C40',
        marine: '#74A2A3',
        marineVariant: '#84C6C8',
        marineDark: '#296264',
        loading: '#8ADEDA',
      },
      fontFamily: {
        grotesque: ['BasisGrotesquePro', 'sans-serif'],
      },
      maxWidth: {
        '1/2': '50%',
        md: '400px',
        lg: '1000px',
      },
      transitionTimingFunction: {
        cubic: 'cubic-bezier(.77,0,.175,1)',
      },
      boxShadow: {
        card: '0px 1px 10px rgba(0, 0, 0, .09)',
        'card-hover': '0px 1px 15px rgba(0, 0, 0, .15)',
        swipeModal: '0px -2px 10px rgba(0, 0, 0, .07)',
      },
      borderRadius: {
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '24px',
      },
    },
  },
};
