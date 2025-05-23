const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        'clouds': "url('/cloudzz.png')",  
        'xp': "url('/xp.png')",
        'epic': "url('/epic-campus.jpg')",
        'plane': "url('/plane.svg')",
        'nightsky': "url('/nightsky3.png')",
        'dawn': "url('/dawn.png')",
        'sky': "url('/bluesky2.png')",
        'blend': "url('/blended22.png')",
        'mountains': "url('/mountains3.png')",
        'space': "url('/space3.png')",
        'spaceold': "url('/spaceold.png')",
        'land': "url('/land2.png')",
      },
      fontFamily: {
        'matrix': ['"Press Start 2P"', 'sans-serif'],
        'arcade': ['"Karmatic Arcade"', 'sans-serif'],
        'game': ["game", 'sans-serif'],

      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'spin-slower': 'spin 20s linear infinite',
        'spin-sm': 'spin .5s linear infinite',
        'reverse-spin': 'reverse-spin 10s linear infinite'
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          }
        }
      },
      plugins: [
        require('tailwind-scrollbar'),
      ],
    }
  }
}
