const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
 
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Inter', ...defaultTheme.fontFamily.sans],
        // 'lightfont': ["'Inter', sans-serif"]

         'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
         'inter': ['Inter']


        
      },

      'animation': {
        'text':'text 5s ease infinite',
    },
    'keyframes': {
        'text': {
            '0%, 100%': {
               'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
               'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
    }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}