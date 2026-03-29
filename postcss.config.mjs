/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {
      optimize: {
        minify: false,     // This disables problematic minification on Vercel
      },
    },
  },
};

export default config;