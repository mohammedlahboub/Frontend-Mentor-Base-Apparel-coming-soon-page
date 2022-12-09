/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        // transparent: 'transparent',
        // current: 'currentColor',
        'desaturated-red': 'hsl(0, 36%, 70%)',
        'soft-red': 'hsl(0, 93%, 68%)',
        'dark-grayish-red': 'hsl(0, 6%, 24%)',
  
      },
      fontFamily: {
        'josefin-sans': ['"Josefin Sans"', 'sans-serifcc'], //font-family: 'Josefin Sans', sans-serif;
      },
      backgroundImage: {
        'bg-pattern-desktop': "url('/public/images/bg-pattern-desktop.svg')",
      },
      boxShadow: {
        'this': '0 0.5rem 1rem 0.1rem hsl(0, 36%, 70%) ',
      },
    },
    screens: {
      'sm': '375px',
      // => @media (min-width: 375px) { ... }

      'md': '1000px',
      // => @media (min-width: 800px) { ... }

      'lg': '1440px',
       // => @media (min-width: 1440px) { ... }
    },
    
    

  },
  plugins: [],
}
