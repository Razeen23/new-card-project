/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: ['Dancing Script', 'cursive'],
      secondary:['Roboto Slab', 'serif'],
      tertiary:['Nunito', 'sans-serif']  ,
      spiceal: ['Montserrat', 'sans-serif'],
      body: ['Nunito', 'sans-serif'], // Define body font here
    },
    fontSize: {
      'h1': '2.25rem', // 4xl equivalent
      'h2': '2rem', // 3xl equivalent
      'h3': '1.75rem',   // 2xl equivalent
      'h4': '1.25rem',  // xl equivalent
      'p': '1.25rem',      // base size

        sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        md: ['1rem', { lineHeight: '1.5rem' }],       // 16px
        lg: ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
        xl: ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],    // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
    },
    extend: {
      colors: {
        primary: '#e6e6ff',
        accent: '#05a851',
        text: '#191818',
        body: '#2B1B17',
        button : '#05acfa',
      },
      backgroundImage: {
        site: 'linear-gradient(90deg, rgba(181,132,88,0.9) 0%, rgba(13,19,25,1) 0%, rgba(15,22,91,1) 0%, rgba(22,22,32,1) 15%, rgba(0,0,0,1) 50%, rgba(22,22,32,1) 85%, rgba(15,22,91,1) 100%)',
        site2: 'linear-gradient(to right, #c9d6ff, #e2e2e2)',
        about: "url('/bg4.jpg')",
        body: '#c9d6ff'
      },
    },
  },
  plugins: [],
};