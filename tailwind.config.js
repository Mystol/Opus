/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    '/assets/**/*.{html,js}',
    'index.html'
  ],

  theme: {

    theme: {

      fontSize: {
        ss: '0.65em',
        sm: '0.75rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },

      minHeight: {
        '1/2': '50%',
        '9/10' : '90%'
      },

      screens: {
          'xs': '475px',

          'sm': '640px',
          // => @media (min-width: 640px) { ... }

          'md': '768px',
          // => @media (min-width: 768px) { ... }

          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }

          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }

          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
      }
    },
    
    colors: {
      white: '#fff',
      secondary: '#E21D7C',
      blue: '#1877F2',
      black: '#000000',
      grey: '#dadada',
      greyDark: '#636466'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

    

    extend: {
      backgroundImage: {
        'log-partern': "url('assets/img/bg-log.png')"
      }
    }
  },
  plugins: [],
}