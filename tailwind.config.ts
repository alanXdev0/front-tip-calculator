import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
    },
    colors: {
      primary: "hsl(172, 67%, 45%)",
      'very-dark-cyan': "hsl(183, 100%, 15%)",
      'dark-grayish-cyan': "hsl(186, 14%, 43%)",
      'grayish-cyan': "hsl(184, 14%, 56%)",
      'light-grayish-cyan': "hsl(185, 41%, 84%)",
      'very-light-grayish-cyan': "hsl(189, 41%, 97%)",
      'white': "hsl(0, 0%, 100%)",
      'red': 'red'
    }
  },
  plugins: [],
};
export default config;
