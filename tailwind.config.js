/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Kumbh Sans', 'sans-serif'],
    },
    fontSize: {
      xs: '11px',
      sm: '14px',
      base: '16px',
      lg: '20px',
      'xl': '24px',
      '2xl': '28px',
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    colors: {
      violet: "#5964E0",
      'light-violet': "#939BF4",
      'dark-blue': "#19202D",
      'midnight': '#121721',
      'white': "#ffffff",
      'light-grey': "#F4F6F8",
      'grey': "#9DAEC2",
      'dark-grey': "#6E8098"
    },

    spacing: {
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '6': '24px',
      '8': '32px',
      '9': '36px',
      '12': '48px',
      '16': '64px',
      '18': '72px',
      '20': "84px",
      '24': '96px',
      '32': '128px',
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.25em',
    },
    extend: {
      height: {
        '128': '32rem',
        '12': '48px',
        backgroundImage: {
          'header': "url('/assets/desktop/bg-pattern-header.svg')",
          'footer': "url('/assets/desktop/bg-pattern-detail-footer.svg')",
        }
      },
      lineHeight: {
        'loose': '2.5px',
        '12': '3rem',
      }
    },
  },
  plugins: [],
}
