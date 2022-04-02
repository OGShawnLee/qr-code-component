import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  theme: {
    colors: {
      slate: {
        300: 'hsl(212, 45%, 89%)',
        500: 'hsl(220, 15%, 55%)',
        700: 'hsl(218, 44%, 22%)',
      },
      white: '#FFFFFF',
    },
    fontFamily: {
      outfit: ['Outfit', 'sans-serif'],
    },
  },
});
